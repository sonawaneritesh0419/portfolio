import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sparkles, X, Send, Trash2 } from "lucide-react";
import { askAssistant, closeChat, toggleChat, clearChat } from "@/store/chatSlice";
import { ChatMessage } from "@/components/ai/ChatMessage";

const SUGGESTED_QUESTIONS = [
  "What are your best React projects?",
  "Which technologies does this developer know?",
  "Is this developer suitable for a frontend role?",
  "Explain the architecture of the HRMS & ERP platform.",
];

export function AssistantWidget() {
  const dispatch = useDispatch();
  const { isOpen, status, messages } = useSelector((s) => s.chat);
  const loading = status === "loading";

  const [input, setInput] = useState("");
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // Keep the newest message in view.
  useEffect(() => {
    if (isOpen) endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, isOpen]);

  // Focus input on open; close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && dispatch(closeChat());
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, dispatch]);

  const ask = (text) => {
    dispatch(askAssistant(text));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    ask(input);
    setInput("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => dispatch(toggleChat())}
        aria-label="Open AI assistant"
        className="fixed bottom-4 right-4 z-50 flex h-14 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-ink shadow-lg shadow-primary/30 transition-transform hover:scale-105 cursor-pointer"
      >
        <Sparkles className="h-5 w-5" />
        <span className="hidden xs:inline">Ask AI</span>
      </button>
    );
  }

  return (
    <section
      role="dialog"
      aria-label="AI portfolio assistant"
      className="fixed bottom-4 right-4 z-50 flex h-[min(34rem,calc(100dvh-2rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
    >
      <header className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-4 w-4 text-primary" />
        </span>
        <div className="mr-auto">
          <p className="font-display text-sm font-semibold text-ink">Portfolio Assistant</p>
          <p className="text-[11px] text-ink-faint">AI · answers from Ritesh's portfolio data</p>
        </div>
        <button
          onClick={() => dispatch(clearChat())}
          aria-label="Clear conversation"
          className="rounded-full p-2 text-ink-faint transition-colors hover:bg-surface-2 hover:text-ink cursor-pointer"
        >
          <Trash2 className="h-4 w-4" />
        </button>
        <button
          onClick={() => dispatch(closeChat())}
          aria-label="Close assistant"
          className="rounded-full p-2 text-ink-faint transition-colors hover:bg-surface-2 hover:text-ink cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} />
        ))}

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => ask(q)}
                className="rounded-full border border-border px-3 py-1.5 text-left text-xs text-ink-muted transition-colors hover:border-primary hover:text-primary cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-1.5 text-xs text-ink-faint" role="status">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
            <span className="ml-1">Thinking…</span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border p-3">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          disabled={loading}
          placeholder="Ask about my work…"
          aria-label="Your question"
          className="h-10 flex-1 rounded-full border border-border bg-bg px-4 text-sm text-ink placeholder:text-ink-faint focus:border-primary focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send question"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-ink transition-opacity disabled:opacity-40 cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
