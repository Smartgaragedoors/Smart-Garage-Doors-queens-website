import { useState, useEffect, useRef, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hey! 👋 What's going on with your garage door?",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen]             = useState(false);
  const [messages, setMessages]         = useState<Message[]>([]);
  const [input, setInput]               = useState('');
  const [isTyping, setIsTyping]         = useState(false);
  const [leadCollected, setLeadCollected] = useState(false);
  const [hasUnread, setHasUnread]       = useState(false);
  const bottomRef  = useRef<HTMLDivElement>(null);
  const inputRef   = useRef<HTMLInputElement>(null);

  // Show greeting once on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([GREETING]);
      setHasUnread(false);
    }
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Show unread dot after 8s if user hasn't opened yet
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => setHasUnread(true), 8000);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping || leadCollected) return;

    const userMsg: Message = { role: 'user', content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });

      if (!res.ok) throw new Error('api error');
      const data = await res.json() as { reply: string; leadCollected: boolean };

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      if (data.leadCollected) setLeadCollected(true);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Sorry, something went wrong on my end. Give us a call at (914) 557-6816 and we'll get you sorted!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping, leadCollected, messages]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Container: sits above mobile sticky bar (bottom-20) on mobile, normal on desktop */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 flex flex-col items-end gap-2">

        {/* ── Chat panel ── */}
        {isOpen && (
          <div className="w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
               style={{ maxHeight: 'min(70vh, 520px)' }}>

            {/* Header */}
            <div className="bg-blue-900 px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <i className="ri-customer-service-2-fill text-white text-base" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white leading-tight">Smartest Garage Doors</div>
                <div className="text-xs text-blue-200 leading-tight">
                  {isTyping ? 'Typing…' : 'Typically replies in seconds'}
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-200 hover:text-white transition-colors ml-1 flex-shrink-0"
                aria-label="Close chat"
              >
                <i className="ri-close-line text-xl" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                      ${msg.role === 'user'
                        ? 'bg-orange-500 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-sm border border-gray-100'
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {/* Lead collected confirmation */}
              {leadCollected && (
                <div className="text-center pt-1">
                  <span className="inline-block text-xs text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                    ✓ Info received — we'll be in touch soon
                  </span>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-200 flex-shrink-0">
              {leadCollected ? (
                <a
                  href="tel:+19145576816"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <i className="ri-phone-fill" aria-hidden="true" />
                  Call (914) 557-6816
                </a>
              ) : (
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message…"
                    disabled={isTyping}
                    className="flex-1 min-w-0 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-orange-400 disabled:opacity-50"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || isTyping}
                    className="w-9 h-9 flex-shrink-0 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white rounded-xl flex items-center justify-center transition-colors"
                    aria-label="Send message"
                  >
                    <i className="ri-send-plane-fill text-sm" aria-hidden="true" />
                  </button>
                </div>
              )}
              <p className="text-[10px] text-gray-400 text-center mt-1.5">
                Smartest Garage Doors · NY, NJ & CT
              </p>
            </div>
          </div>
        )}

        {/* ── FAB button ── */}
        <button
          onClick={() => setIsOpen(v => !v)}
          className="relative w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 shadow-lg flex items-center justify-center transition-all"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          <i
            className={`text-white text-2xl transition-all ${isOpen ? 'ri-close-line' : 'ri-chat-1-fill'}`}
            aria-hidden="true"
          />
          {!isOpen && hasUnread && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
          )}
        </button>
      </div>
    </>
  );
}
