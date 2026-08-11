import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { profile } from "@/data/resume";

const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "548440ef-03ab-4c46-828f-a7c25e2cf274";

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: payload.name,
          email: payload.email,
          subject: payload.subject || `New portfolio contact from ${payload.name}`,
          message: payload.message,
          from_name: `${profile.name} Portfolio`,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        return rejectWithValue(data.message || "Something went wrong. Please try again.");
      }

      return { via: "web3forms" };
    } catch (err) {
      return rejectWithValue(err?.message || "Network error — please try again.");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    via: null,
  },
  reducers: {
    resetStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.via = action.payload.via;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;