import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/resume";

// EmailJS lets a static React site deliver contact-form submissions
// straight to a real inbox with no backend server. Create a free account
// at emailjs.com, connect your Gmail, and drop the three IDs below into
// a .env file (see .env.example) — full walkthrough in README.md.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export const sendMessage = createAsyncThunk(
  "contact/sendMessage",
  async (payload, { rejectWithValue }) => {
    if (isConfigured) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: payload.name,
            from_email: payload.email,
            subject: payload.subject || "New portfolio contact",
            message: payload.message,
            to_email: profile.email,
          },
          { publicKey: PUBLIC_KEY }
        );
        return { via: "emailjs" };
      } catch (err) {
        return rejectWithValue(err?.text || err?.message || "Could not send message");
      }
    }

    // Fallback when EmailJS isn't configured yet: open a pre-filled
    // mailto so the message still reaches the inbox, no setup required.
    const subject = encodeURIComponent(payload.subject || `Portfolio contact from ${payload.name}`);
    const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} (${payload.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return { via: "mailto" };
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
