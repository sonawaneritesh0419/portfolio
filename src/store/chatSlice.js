import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const MAX_CHARS = 500;
const HISTORY_LIMIT = 8;

const WELCOME = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I'm Ritesh's AI assistant. Ask me about his projects, skills, or whether he fits your role.",
};

// Same pattern as contactSlice: thunk -> pending / fulfilled / rejected.
export const askAssistant = createAsyncThunk(
  "chat/ask",
  async (_question, { getState, rejectWithValue, signal }) => {
    // The user's message was already added to state by the `pending` case below.
    const history = getState()
      .chat.messages.filter((m) => m.id !== "welcome" && !m.error)
      .slice(-HISTORY_LIMIT)
      .map(({ role, content }) => ({ role, content }));

    // Gemini needs the conversation to start with the user.
    while (history.length && history[0].role !== "user") history.shift();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        return rejectWithValue({ status: res.status, message: data.error });
      }
      return data; // { answer, projectIds }
    } catch (err) {
      if (err?.name === "AbortError") return rejectWithValue({ aborted: true });
      return rejectWithValue({ status: 0, message: "Network error — please check your connection." });
    }
  },
  {
    // Ignore empty input and double-submits while a request is in flight.
    condition: (question, { getState }) =>
      typeof question === "string" &&
      question.trim().length > 0 &&
      getState().chat.status !== "loading",
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isOpen: false,
    status: "idle", // idle | loading
    messages: [WELCOME],
  },
  reducers: {
    openChat(state) {
      state.isOpen = true;
    },
    closeChat(state) {
      state.isOpen = false;
    },
    toggleChat(state) {
      state.isOpen = !state.isOpen;
    },
    clearChat(state) {
      state.messages = [WELCOME];
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(askAssistant.pending, (state, action) => {
        state.status = "loading";
        state.messages.push({
          id: action.meta.requestId,
          role: "user",
          content: action.meta.arg.trim().slice(0, MAX_CHARS),
        });
      })
      .addCase(askAssistant.fulfilled, (state, action) => {
        state.status = "idle";
        state.messages.push({
          id: `${action.meta.requestId}-a`,
          role: "assistant",
          content: action.payload.answer,
          projectIds: action.payload.projectIds ?? [],
        });
      })
      .addCase(askAssistant.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload?.aborted) return;
        state.messages.push({
          id: `${action.meta.requestId}-e`,
          role: "assistant",
          error: true,
          content:
            // action.payload?.status === 429
            [429, 503].includes(action.payload?.status)
              ? action.payload.message
              : "The assistant is unavailable right now. You can browse the Projects page or use the Contact page.",
        });
      });
  },
});

export const { openChat, closeChat, toggleChat, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
