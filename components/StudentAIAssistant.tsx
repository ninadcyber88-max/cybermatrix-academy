'use client';

import { useState } from 'react';
import { Bot, Send, Terminal, Sparkles, User, Globe, ShieldAlert, Cpu, Lock, X } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

type Language = 'en' | 'mr' | 'hi';

const QUICK_PROMPTS: Record<Language, string[]> = {
  en: ['SQL Injection Payloads', 'Privilege Escalation Steps', 'Bypass 403 Forbidden', 'Burp Suite Setup'],
  mr: ['एसक्यूएल इंजेक्शन पेलोड्स', 'लिनक्स प्रिव्हिलेज एस्केलेशन', '403 फॉरबिडन बायपास', 'बर्प सूट कसा वापरावा?'],
  hi: ['एसक्यूएल इंजेक्शन पेलोड्स', 'लिनक्स प्रिविलेज एस्केलेशन', '403 फॉरबिडन बायपास', 'बर्प सूट कैसे सेटअप करें?'],
};

export function StudentAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Language>('mr');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'नमस्कार Operative! मी तुमचा CyberMatrix AI Mentor आहे. VAPT, CTF फ्लॅग्स, पेलोड्स किंवा टूल्सबद्दल काहीही विचारा.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getAIResponse = (query: string, currentLang: Language): string => {
    const q = query.toLowerCase();

    // Responses based on selected language
    if (currentLang === 'mr') {
      if (q.includes('flag') || q.includes('फ्लॅग') || q.includes('root')) {
        return 'टिप (CTF Hint): खालील CTF सँडबॉक्स टर्मिनलमध्ये "cat flag.txt" किंवा "sqlmap" रन करा. मिळालेला फ्लॅग वर सबमिट करून ५०० पॉइंट्स मिळवा!';
      }
      if (q.includes('sql') || q.includes('injection') || q.includes('पेलोड')) {
        return 'SQL Injection: \n1. Auth Bypass: \' OR 1=1 --\n2. Union Extraction: \' UNION SELECT null, username, password FROM users--\n3. ऑटोमेशनसाठी सँडबॉक्समध्ये "sqlmap" कमांड चालवा.';
      }
      if (q.includes('privilege') || q.includes('एस्केलेशन') || q.includes('suid') || q.includes('linux')) {
        return 'Linux PrivEsc चेकलिस्ट:\n1. SUID फाईल्स शोधा: find / -perm -u=s -type f 2>/dev/null\n2. Sudo परवानग्या तपासा: sudo -l\n3. Cron jobs तपासा: cat /etc/crontab\n4. GTFOBins चा वापर करा.';
      }
      if (q.includes('403') || q.includes('bypass') || q.includes('फॉरबिडन')) {
        return '403 Forbidden बायपास ट्रिक्स:\n1. Headers वापरा: X-Forwarded-For: 127.0.0.1 किंवा X-Custom-IP-Authorization: 127.0.0.1\n2. Path rewriting: /admin -> /admin/ किंवा /admin/.\n3. HTTP Methods बदला: GET वरून POST किंवा HEAD करा.';
      }
      if (q.includes('nmap') || q.includes('स्कॅन')) {
        return 'Nmap कमांड्स:\n• संपूर्ण पोर्ट स्कॅन: nmap -p- -sV -sC 10.10.14.88\n• वल्नेरेबिलिटी स्कॅन: nmap --script vuln 10.10.14.88\n• जलद स्कॅन: nmap -T4 -F 10.10.14.88';
      }
      if (q.includes('burp') || q.includes('बर्प')) {
        return 'Burp Suite मार्गदर्शक:\n1. Proxy -> Intercept चालू करा.\n2. ब्राउझरमध्ये 127.0.0.1:8080 सेट करा आणि Burp CA Certificate इन्स्टॉल करा.\n3. Requests मॉडिफाय करण्यासाठी Repeater (Ctrl+R) वापरा.';
      }
      return `मी तुमचे विश्लेषण केले आहे: "${query}". हा एक महत्त्वाचा सायबर सिक्युरिटी विषय आहे. OWASP मार्गदर्शक तत्त्वे किंवा नेटवर्क लॉग तपासा. सँडबॉक्समध्ये सराव करण्यासाठी "help" टाईप करा.`;
    }

    if (currentLang === 'hi') {
      if (q.includes('flag') || q.includes('फ्लैग') || q.includes('root')) {
        return 'सलाह (CTF Hint): नीचे टर्मिनल में "cat flag.txt" या "sqlmap" चलाएं और मिला हुआ टोकन ऊपर सबमिट करें!';
      }
      if (q.includes('sql') || q.includes('पेलोड')) {
        return 'SQL Injection तकनीकें:\n1. Auth Bypass: \' OR 1=1 --\n2. टेबल डंपिंग के लिए टर्मिनल में "sqlmap" का उपयोग करें।';
      }
      if (q.includes('privilege') || q.includes('एस्केलेशन')) {
        return 'Linux PrivEsc चेकलिस्ट:\n1. SUID बाइनरी खोजें: find / -perm -u=s -type f 2>/dev/null\n2. Sudo राइट्स देखें: sudo -l\n3. GTFOBins का संदर्भ लें।';
      }
      if (q.includes('403') || q.includes('bypass')) {
        return '403 Forbidden बायपास:\n1. Request Header: X-Forwarded-For: 127.0.0.1\n2. URL Fuzzing: /admin/./ या /ADMIN/';
      }
      return `आपके सवाल "${query}" का विश्लेषण किया गया है। सही टूल्स (Nmap/Burp) का उपयोग करें और लैब का अभ्यास करें।`;
    }

    // Default English
    if (q.includes('flag') || q.includes('root')) {
      return 'CTF Tactical Hint: Execute "cat flag.txt" or "sqlmap" in the sandbox terminal below to claim +500 PTS.';
    }
    if (q.includes('sql') || q.includes('payload')) {
      return 'SQL Injection Vectors:\n• Auth Bypass: \' OR \'1\'=\'1\' --\n• Error Based: \' AND 1=CONVERT(int, (SELECT @@version))--\n• Automation: Run "sqlmap" in sandbox.';
    }
    if (q.includes('privilege') || q.includes('privesc') || q.includes('linux')) {
      return 'Linux Privilege Escalation:\n1. Check SUID: find / -perm -4000 2>/dev/null\n2. Check sudo: sudo -l\n3. Search writable /etc/passwd or cronjobs.';
    }
    if (q.includes('403') || q.includes('bypass')) {
      return '403 Forbidden Bypass Headers:\n• X-Forwarded-For: 127.0.0.1\n• X-Original-URL: /admin\n• X-Rewrite-URL: /admin';
    }
    if (q.includes('nmap') || q.includes('scan')) {
      return 'Nmap Probes:\n• Service Detection: nmap -sV -sC -Pn target\n• Fast Recon: nmap -T4 -F target';
    }
    return `Analysis complete for: "${query}". Follow OWASP testing guidelines or use the interactive CTF terminal below.`;
  };

  const handleSendMessage = (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const query = customQuery || input.trim();
    if (!query || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: query }]);
    setLoading(true);

    setTimeout(() => {
      const reply = getAIResponse(query, lang);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setLoading(false);
    }, 700);
  };

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    let welcomeMsg = 'Greetings, Operative! Ready to assist with offensive and defensive operations.';
    if (newLang === 'mr') welcomeMsg = 'नमस्कार Operative! भाषा मराठीवर सेट केली आहे. VAPT व CTF बद्दल विचारा.';
    if (newLang === 'hi') welcomeMsg = 'नमस्ते Operative! भाषा हिंदी पर सेट कर दी गई है। साइबर सुरक्षा सवाल पूछें।';

    setMessages((prev) => [...prev, { role: 'assistant', content: welcomeMsg }]);
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

      {/* Cyber AI Modal Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[94vw] sm:w-[440px] h-[520px] rounded-2xl bg-zinc-950/95 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] flex flex-col overflow-hidden font-mono text-xs">
          
          {/* Header with Language Selector */}
          <div className="px-4 py-3 bg-zinc-900/90 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-100 flex items-center gap-1">
                  CYBER AI MENTOR
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </h4>
                <p className="text-[9px] text-cyan-400/80">TACTICAL ADVISOR // MULTILINGUAL</p>
              </div>
            </div>

            {/* Language Switcher Buttons */}
            <div className="flex items-center space-x-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => changeLanguage('mr')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                  lang === 'mr' ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-400 hover:text-cyan-300'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => changeLanguage('hi')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                  lang === 'hi' ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-400 hover:text-cyan-300'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                  lang === 'en' ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-400 hover:text-cyan-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 bg-zinc-900/40 border-b border-zinc-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS[lang].map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(undefined, p)}
                className="whitespace-nowrap px-2.5 py-1 rounded-md bg-zinc-900 border border-cyan-500/20 text-[10px] text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/50 transition cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
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
                  className={`max-w-[82%] p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-zinc-800 text-zinc-200 rounded-tr-none'
                      : 'bg-zinc-900 border border-cyan-500/20 text-zinc-300 rounded-tl-none shadow-[0_0_10px_rgba(0,0,0,0.4)]'
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
                <span>Analyzing threat vectors...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={(e) => handleSendMessage(e)} className="p-3 bg-zinc-900/90 border-t border-cyan-500/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                lang === 'mr'
                  ? 'सायबर सिक्युरिटीबद्दल विचारा...'
                  : lang === 'hi'
                  ? 'साइबर सुरक्षा के बारे में पूछें...'
                  : 'Ask about exploits, labs, payloads...'
              }
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
