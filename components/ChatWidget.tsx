"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const STORAGE_PREFIX = "aiadelaide-chat:";
const MAX_VISIBLE_MESSAGES = 10;

function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

const starterMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hey — I’m the AI Adelaide chat assistant. I can help with AI receptionists, chatbots, websites, local SEO, and automation for Adelaide businesses. What sort of business are you running?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingSessionId = window.localStorage.getItem(`${STORAGE_PREFIX}sessionId`);
    const nextSessionId = existingSessionId || createSessionId();
    setSessionId(nextSessionId);
    if (!existingSessionId) {
      window.localStorage.setItem(`${STORAGE_PREFIX}sessionId`, nextSessionId);
    }

    const storedMessages = window.localStorage.getItem(`${STORAGE_PREFIX}${nextSessionId}`);
    if (storedMessages) {
      try {
        const parsed = JSON.parse(storedMessages) as ChatMessage[];
        if (parsed.length) {
          setMessages(parsed);
        }
      } catch {
        // ignore broken local cache
      }
    }
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    window.localStorage.setItem(`${STORAGE_PREFIX}${sessionId}`, JSON.stringify(messages));
  }, [messages, sessionId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const visibleMessages = useMemo(() => messages.slice(-MAX_VISIBLE_MESSAGES), [messages]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed } as ChatMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, messages: nextMessages }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Something broke while sending the message.");
      }

      setMessages((current) => [...current, { role: "assistant", content: payload.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn’t send message.");
      setMessages((current) => current.slice(0, -1));
      setInput(trimmed);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[90] sm:bottom-6 sm:right-6">
        {open && (
          <div className="mb-3 h-[450px] w-[min(92vw,320px)] overflow-hidden rounded-[24px] border border-white/10 bg-slate-950 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-300">
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
              <div>
                <p className="text-sm font-semibold">AI Adelaide</p>
                <p className="text-xs text-slate-300">Ask about AI for your business</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div ref={scrollRef} className="flex h-[calc(100%-132px)] flex-col gap-3 overflow-y-auto px-4 py-4">
              {visibleMessages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "self-start bg-slate-800 text-slate-100"
                      : "self-end bg-[#00D4AA] text-slate-950"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {loading && (
                <div className="self-start rounded-2xl bg-slate-800 px-4 py-3 text-sm text-slate-200">
                  AI Adelaide is typing...
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 bg-slate-900/95 px-3 py-3">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Tell me what you want to automate..."
                  rows={2}
                  className="min-h-[52px] flex-1 resize-none rounded-2xl border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#00D4AA]"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="rounded-2xl bg-[#00D4AA] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-slate-400">Powered by AI Adelaide</p>
            </form>
          </div>
        )}

        <div className="flex flex-col items-end gap-2">
          {!open && (
            <div className="rounded-full bg-slate-950/90 px-3 py-1 text-xs font-medium text-white shadow-lg">
              Chat with us
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex min-w-[72px] items-center justify-center rounded-full bg-[#00D4AA] px-5 py-4 text-base font-bold text-slate-950 shadow-[0_16px_40px_rgba(0,212,170,0.45)] transition hover:scale-[1.03]"
            aria-label={open ? "Close AI Adelaide chat" : "Open AI Adelaide chat"}
          >
            {open ? "×" : "Chat"}
          </button>
        </div>
      </div>
    </>
  );
}
