'use client';

import { useState } from 'react';
import { Bot, Send, Terminal, Sparkles, User, X, MessageSquare } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export function StudentAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Greetings, Operative. I am your CyberMatrix AI Mentor. Need exploit payloads or sandbox hints?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    setTimeout(() => {
      let aiResponse = 'Inspect the request parameters and HTTP headers using Burp Suite.';
      if (userMsg.toLowerCase().includes('flag') || userMsg.toLowerCase().includes('root')) {
        aiResponse = 'Hint: Try running "cat flag.txt" in the sandbox terminal to extract credentials.';
      } else if (userMsg.toLowerCase().includes('sql')) {
        aiResponse = 'Test input fields with boolean payloads or run "sqlmap" to dump databases.';
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-2.5 px-4 py-3 rounded-full bg-cyan-500 text-zinc-950 font-mono font-bold text-xs shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4" />
            <span>CLOSE MENTOR</span>
          </>
        ) : (
          <>
            <Bot className="w-4 h-4" />
            <span>AI MENTOR</span>
            <span className="h-2 w-2 rounded-full bg-zinc-950 animate-pulse"></span>
          </>
        )}
      </button>

      {/* Compact Chat Window (Fixed Size Matching Target Area) */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[90vw] sm:w-[420px] h-[480px] rounded-2xl bg-zinc-950/95 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.25)] flex flex-col overflow-hidden font-mono text-xs">
          
          {/* Header */}
          <div className="px-4 py-3 bg-zinc-900/90 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                  CYBERMATRIX AI MENTOR
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </h4>
                <p className="text-[9px] text-cyan-400/80">ONLINE // 24/7 TACTICAL SUPPORT</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  msg.role === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg flex-shrink-0 ${
                    msg.role === 'user'
                      ? 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                      : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                  }`}
                >
                  {msg.role === 'user' ? <User className="w-3 h-3" /> : <Terminal className="w-3 h-3" />}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-xl leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-zinc-800 text-zinc-200 rounded-tr-none'
                      : 'bg-zinc-900 border border-cyan-500/20 text-zinc-300 rounded-tl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center space-x-2 text-cyan-400 text-[10px]">
                <div className="p-1 rounded bg-cyan-500/10 animate-pulse">
                  <Bot className="w-3 h-3" />
                </div>
                <span>Analyzing threat vector...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-zinc-900/80 border-t border-cyan-500/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask mentor..."
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
