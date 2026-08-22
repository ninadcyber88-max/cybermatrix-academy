// apps/web/components/StudentAIAssistant.tsx
'use client';

import { useState } from 'react';
import { Bot, Send, Terminal, Sparkles, User } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export function StudentAIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Greetings, Operative. I am your CyberMatrix AI Guide. Ask me anything regarding VAPT methodologies, Burp Suite payloads, or lab troubleshooting.',
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
      let aiResponse = 'Analyze the HTTP request headers using Burp Suite Repeater. Check for security headers.';
      if (userMsg.toLowerCase().includes('sql')) {
        aiResponse = 'To test for SQL Injection safely, inspect input fields for parameterized query handling and boolean-based anomalies.';
      } else if (userMsg.toLowerCase().includes('privilege')) {
        aiResponse = 'For Linux privilege escalation, run automated enumeration scripts or check SUID binaries using: find / -perm -4000 2>/dev/null';
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-zinc-900/90 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_35px_rgba(6,182,212,0.2)] flex flex-col h-[550px] overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 bg-zinc-950/80 border-b border-cyan-500/20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wide text-zinc-100 flex items-center space-x-2">
              <span>CYBERMATRIX AI MENTOR</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </h3>
            <p className="text-[10px] font-mono text-cyan-400/80">ONLINE // SECURE TUNNEL ACTIVE</p>
          </div>
        </div>
        <div className="text-xs font-mono text-zinc-500">v16.0-MATRIX</div>
      </div>

      {/* Messages Stream */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-xs">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${
              msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div
              className={`p-2 rounded-lg flex-shrink-0 ${
                msg.role === 'user'
                  ? 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                  : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
              }`}
            >
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
            </div>
            <div
              className={`max-w-[75%] p-4 rounded-xl leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-zinc-800 text-zinc-200 rounded-tr-none'
                  : 'bg-zinc-950/90 border border-cyan-500/25 text-zinc-300 rounded-tl-none shadow-[0_0_15px_rgba(6,182,212,0.1)]'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center space-x-3 text-cyan-400 font-mono text-xs">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 animate-pulse">
              <Bot className="w-4 h-4" />
            </div>
            <span>Synthesizing tactical guidance...</span>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSendMessage} className="p-4 bg-zinc-950/90 border-t border-cyan-500/20 flex items-center space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your AI mentor about labs, payloads, or concepts..."
          className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-all font-mono"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Transmit</span>
        </button>
      </form>

    </div>
  );
}
