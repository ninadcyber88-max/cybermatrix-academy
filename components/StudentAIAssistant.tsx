'use client';

import { useState } from 'react';
import { Bot, Send, Terminal, Sparkles, User, X } from 'lucide-react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

type Language = 'mr' | 'hi' | 'en';

const QUICK_PROMPTS: Record<Language, string[]> = {
  mr: [
    'डिजिटल फॉरेन्सिक्स (Digital Forensics)',
    'मेमरी फॉरेन्सिक्स (Volatility)',
    'क्लाउड सिक्युरिटी (AWS/S3)',
    'SSRF & Cloud Metadata',
    'Active Directory (Kerberoast)',
    'SOC & SIEM Logs',
    'रिव्हर्स इंजिनिअरिंग & Pwn',
    'एसक्यूएल इंजेक्शन पेलोड्स',
    'लिनक्स प्रिव्हिलेज एस्केलेशन',
  ],
  hi: [
    'डिजिटल फोरेंसिक्स (Digital Forensics)',
    'मेमोरी फोरेंसिक्स (Volatility)',
    'क्लाउड सिक्योरिटी (AWS IAM)',
    'SSRF & Cloud Metadata',
    'Active Directory (Kerberos)',
    'SOC व SIEM लॉग विश्लेषण',
    'रिवर्स इंजीनियरिंग (Buffer Overflow)',
    'एसक्यूएल इंजेक्शन पेलोड्स',
    'लिनक्स प्रिविलेज एस्केलेशन',
  ],
  en: [
    'Digital Forensics Artifacts',
    'Memory Forensics (Volatility)',
    'Cloud Security & S3 IAM',
    'SSRF & AWS Metadata',
    'Active Directory & Kerberoast',
    'SOC / SIEM Event IDs',
    'Buffer Overflow & Ghidra',
    'SQL Injection Payloads',
    'Linux Privilege Escalation',
  ],
};

export function StudentAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Language>('mr');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'नमस्कार Operative! CyberMatrix AI Mentor (V2.0) सक्रिय आहे. Digital Forensics, Cloud DevSecOps, Active Directory, Bug Bounty, Malware Analysis, किंवा CTF Labs बद्दल विचारा.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getAIResponse = (query: string, currentLang: Language): string => {
    const q = query.toLowerCase();

    // ---------------- MARATHI RESPONSES ----------------
    if (currentLang === 'mr') {
      if (q.includes('forensic') || q.includes('फॉरेन्सिक') || q.includes('autopsy') || q.includes('artifact')) {
        return `🔍 **डिजिटल फॉरेन्सिक्स (Digital Forensics) मार्गदर्शक:**
1. **Evidence Integrity:** Disk Image घेताना नेहमी Write-blocker वापरा आणि SHA-256 Hash पडताळून पहा.
2. **Windows Artifacts:**
   • **Prefetch (.pf):** प्रोग्राम कधी आणि किती वेळा रन झाला हे तपासण्यासाठी.
   • **Shimcache / Amcache:** मालवेअरची एक्सीक्यूशन हिस्ट्री ट्रॅक करणे.
   • **Shellbags & LNK Files:** युझरने कोणते फोल्डर्स/फाईल्स उघडले ते शोधणे.
   • **Registry:** USBSTOR की तपासून कोणती USB कनेक्ट केली होती ते ट्रॅक करणे.
3. **टूल्स:** Autopsy, FTK Imager, KAPE, Eric Zimmerman's Tools.`;
      }
      if (q.includes('volatility') || q.includes('मेमरी') || q.includes('memory') || q.includes('dump')) {
        return `🧠 **Memory Forensics (Volatility 3):**
1. **रनिंग प्रोसेस तपासा:** \`vol -f dump.raw windows.pslist\` किंवा \`windows.pstree\`
2. **Hidden/Injected Code शोधणे:** \`vol -f dump.raw windows.malfind\`
3. **नेटवर्क कनेक्शन्स (C2 Beacons):** \`vol -f dump.raw windows.netscan\`
4. **संशयास्पद प्रोसेस मेमरी डंप करणे:** \`vol -f dump.raw -o ./dump windows.dumpfiles --pid <PID>\``;
      }
      if (q.includes('cloud') || q.includes('aws') || q.includes('क्लाउड') || q.includes('s3') || q.includes('iam')) {
        return `☁️ **Cloud Security & DevSecOps:**
1. **S3 Bucket Enumeration:** \`aws s3 ls s3://target-bucket --no-sign-request\`
2. **AWS IAM PrivEsc:** \`iam:PassRole\`, \`iam:CreateAccessKey\`, \`sts:AssumeRole\` परवानग्यांचा गैरवापर तपासणे.
3. **CI/CD Security:** Git repos मधील Hardcoded API Keys आणि Tokens शोधण्यासाठी TruffleHog / GitGuardian वापरा.`;
      }
      if (q.includes('ssrf') || q.includes('metadata') || q.includes('169.254')) {
        return `🎯 **SSRF (Server-Side Request Forgery) & Cloud Metadata:**
• AWS IMDSv1 Endpoint: \`http://169.254.169.254/latest/meta-data/iam/security-credentials/\`
• GCP Metadata Header: \`http://metadata.google.internal/computeMetadata/v1/\` (Header: \`Metadata-Flavor: Google\`)
• SSRF द्वारे थेट Cloud IAM Secret Keys मिळवून AWS ॲक्सेस केला जाऊ शकतो.`;
      }
      if (q.includes('ad') || q.includes('active directory') || q.includes('kerberos') || q.includes('kerberoast')) {
        return `🏰 **Active Directory (AD) हॅकिंग:**
1. **Recon:** BloodHound + SharpHound वापरून डोमेन ॲडमिन पर्यंतचा शॉर्टेस्ट पाथ शोधा.
2. **Kerberoasting:** SPN अकाऊंट्सचे TGS तिकिट्स मिळवून ऑफलाइन क्रॅक करणे: \`GetUserSPNs.py domain/user:pass -request\`
3. **Lateral Movement:** Pass-the-Hash (PtH) साठी \`impacket-psexec\` किंवा \`wmiexec\` वापरा.`;
      }
      if (q.includes('siem') || q.includes('soc') || q.includes('log') || q.includes('लॉग')) {
        return `🛡️ **SOC / SIEM Event IDs (Windows Security):**
• **Event ID 4624:** यशस्वी लॉगिन (Logon Type 10 = RDP, Type 3 = Network)
• **Event ID 4688:** नवीन प्रोसेस सुरू होणे (Process Creation with Command Line)
• **Event ID 4720:** नवीन युझर अकाऊंट तयार होणे
• **Event ID 7045:** नवीन सर्व्हिस इन्स्टॉल होणे (Persistence Indicator).`;
      }
      if (q.includes('buffer overflow') || q.includes('pwn') || q.includes('ghidra') || q.includes('रिव्हर्स')) {
        return `⚙️ **Reverse Engineering & Buffer Overflow:**
1. **Fuzzing & EIP Overwrite:** युनिक पॅटर्न जनरेट करा (\`msf-pattern_create -l 1000\`)
2. **Bad Characters शोधणे:** \`\\x00\` आणि इतर ड्रॉप होणारे बाईट्स तपासणे.
3. **Decompilation:** Ghidra किंवा IDA Pro वापरून हार्डकोडेड पासवर्ड किंवा व्हल्नेरेबल \`strcpy/gets\` फंक्शन्स शोधणे.`;
      }
      if (q.includes('flag') || q.includes('फ्लॅग') || q.includes('root')) {
        return '🚩 **CTF Hint:** खालील CTF सँडबॉक्स टर्मिनलमध्ये "cat flag.txt" किंवा "sqlmap" रन करा आणि टोकन वर सबमिट करा!';
      }
      if (q.includes('sql') || q.includes('पेलोड')) {
        return '💉 **SQL Injection:** \n• Auth Bypass: \' OR 1=1 --\n• Union: \' UNION SELECT null, version() --\n• सँडबॉक्समध्ये स्वयंचलित चाचणीसाठी "sqlmap" वापरा.';
      }
      if (q.includes('privilege') || q.includes('एस्केलेशन')) {
        return '🐧 **Linux PrivEsc:** \n1. SUID: \`find / -perm -u=s -type f 2>/dev/null\`\n2. Sudo: \`sudo -l\`\n3. GTFOBins चा संदर्भ घ्या.';
      }
      return `मी तुमचे विश्लेषण केले आहे: "${query}". Digital Forensics, VAPT, AD, किंवा Cloud बद्दल अधिक विचारण्यासाठी वरील चिप्स वापरा.`;
    }

    // ---------------- HINDI RESPONSES ----------------
    if (currentLang === 'hi') {
      if (q.includes('forensic') || q.includes('फोरेंसिक') || q.includes('autopsy')) {
        return `🔍 **डिजिटल फोरेंसिक्स (Digital Forensics):**
1. **एविडेंस सुरक्षा:** डिस्क इमेजिंग के दौरान Write-blocker का इस्तेमाल करें और SHA-256 हैश मैच करें।
2. **विंडोज आर्टिफैक्ट्स:**
   • **Prefetch (.pf):** रन हुए प्रोग्राम्स की टाइमलाइन।
   • **Shimcache / Amcache:** मालवेयर एग्जीक्यूशन हिस्ट्री।
   • **Registry (USBSTOR):** कनेक्टेड USB डिवाइसेस की जानकारी।
3. **टूल्स:** Autopsy, FTK Imager, KAPE, Volatility.`;
      }
      if (q.includes('volatility') || q.includes('मेमोरी') || q.includes('memory')) {
        return `🧠 **मेमोरी फोरेंसिक्स (Volatility 3):**
1. प्रोसेस लिस्टिंग: \`vol -f mem.raw windows.pslist\`
2. इन्जेक्टेड मालवेयर कोड: \`vol -f mem.raw windows.malfind\`
3. एक्टिव नेटवर्क पोर्ट्स: \`vol -f mem.raw windows.netscan\``;
      }
      if (q.includes('cloud') || q.includes('aws') || q.includes('s3') || q.includes('ssrf')) {
        return `☁️ **Cloud Security & SSRF:**
• AWS Metadata: \`http://169.254.169.254/latest/meta-data/iam/security-credentials/\`
• S3 Misconfig: \`aws s3 ls s3://bucket-name --no-sign-request\`
• लीक्ड सीक्रेट्स खोजने के लिए TruffleHog चलाएं।`;
      }
      if (q.includes('ad') || q.includes('active directory') || q.includes('kerberos')) {
        return `🏰 **Active Directory Attacks:**
1. BloodHound से Domain Admin का रूट खोजें।
2. Kerberoasting: Impacket GetUserSPNs.py से सर्विस टिकट डंप करके हैशकैट से क्रैक करें।
3. Pass-the-Hash (PtH) के लिए psexec का उपयोग करें।`;
      }
      if (q.includes('soc') || q.includes('siem') || q.includes('log')) {
        return `🛡️ **SOC Event IDs:**
• 4624: सफल लॉगिन (Type 10 = RDP)
• 4688: नई प्रोसेस तैयार होना (Malware execution)
• 7045: नई सर्विस इन्स्टॉल होना।`;
      }
      return `विश्लेषण पूरा हुआ: "${query}". डिजिटल फोरेंसिक्स, क्लाउड, AD या CTF पर अधिक जानकारी के लिए त्वरित चिप्स का उपयोग करें।`;
    }

    // ---------------- ENGLISH RESPONSES ----------------
    if (q.includes('forensic') || q.includes('artifact') || q.includes('autopsy')) {
      return `🔍 **Digital Forensics & Incident Response (DFIR):**
1. **Chain of Custody & Preservation:** Physical write-blockers + SHA-256 hash verification.
2. **Key Windows Artifacts:**
   • **Prefetch (.pf):** Application execution timestamp & run count.
   • **Amcache.hve / Shimcache:** Evidence of binary execution & paths.
   • **Shellbags & JumpLists:** User directory traversal proof.
   • **NTUSER.DAT (UserAssist / RunMRU):** GUI executions and recently accessed files.
3. **Essential Tools:** FTK Imager, Autopsy, KAPE, Eric Zimmerman Suite.`;
    }
    if (q.includes('volatility') || q.includes('memory') || q.includes('dump')) {
      return `🧠 **Memory Forensics (Volatility 3):**
• Process Tree: \`vol -f mem.raw windows.pstree\`
• Code Injection: \`vol -f mem.raw windows.malfind\`
• Network Connections: \`vol -f mem.raw windows.netscan\`
• Extract Malware: \`vol -f mem.raw windows.dumpfiles --pid <PID>\``;
    }
    if (q.includes('cloud') || q.includes('aws') || q.includes('s3') || q.includes('ssrf')) {
      return `☁️ **Cloud Security & DevSecOps:**
• **SSRF to AWS IMDS:** \`curl http://169.254.169.254/latest/meta-data/iam/security-credentials/<Role>\`
• **S3 Bucket Probe:** \`aws s3 sync s3://target-bucket ./dump --no-sign-request\`
• **Secrets Audit:** TruffleHog / Gitleaks in CI/CD pipelines.`;
    }
    if (q.includes('ad') || q.includes('active directory') || q.includes('kerberos')) {
      return `🏰 **Active Directory Security:**
1. **BloodHound/SharpHound:** Graph analysis for ACL misconfigurations.
2. **Kerberoasting:** Extract & crack Service Principal Name (SPN) tickets offline.
3. **Lateral Movement:** Pass-the-Hash (PtH) & WMIexec.`;
    }
    if (q.includes('siem') || q.includes('soc') || q.includes('event id')) {
      return `🛡️ **SOC & Threat Hunting Event IDs:**
• **Event ID 4624:** Successful Logon (Type 3: Network, Type 10: RDP)
• **Event ID 4688:** Process Creation with Command Line logging
• **Event ID 4720:** User Account Created
• **Event ID 7045:** New Service Installed (Persistence).`;
    }
    if (q.includes('buffer overflow') || q.includes('pwn') || q.includes('ghidra')) {
      return `⚙️ **Binary Exploitation & Reverse Engineering:**
• Fuzz input to determine offset (\`msf-pattern_create / msf-pattern_offset\`)
• Overwrite EIP/RIP -> Find JMP ESP -> Generate bad-char clean shellcode
• Decompile binaries using Ghidra / IDA Pro.`;
    }
    if (q.includes('flag') || q.includes('root')) {
      return '🚩 **CTF Tactical Hint:** Run "cat flag.txt" or "sqlmap" in the sandbox terminal below to claim +500 PTS.';
    }
    if (q.includes('sql')) {
      return '💉 **SQL Injection:** \n• Auth Bypass: \' OR 1=1 --\n• Union Extraction: \' UNION SELECT null, table_name FROM information_schema.tables --';
    }
    return `Security analysis completed for: "${query}". Select the tactical chips above to explore Forensics, Cloud, AD, or CTF labs.`;
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
    }, 600);
  };

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    let welcomeMsg = 'Greetings, Operative! Digital Forensics, Cloud & VAPT modules loaded.';
    if (newLang === 'mr') welcomeMsg = 'नमस्कार Operative! भाषा मराठीवर सेट केली आहे. Digital Forensics व इतर विषयांबद्दल विचारा.';
    if (newLang === 'hi') welcomeMsg = 'नमस्ते Operative! डिजिटल फोरेंसिक्स, क्लाउड एवं VAPT मॉड्यूल्स सक्रिय हैं।';

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
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[94vw] sm:w-[460px] h-[550px] rounded-2xl bg-zinc-950/95 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.3)] flex flex-col overflow-hidden font-mono text-xs">
          
          {/* Header */}
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
                <p className="text-[9px] text-cyan-400/80">TACTICAL & FORENSICS GUIDE</p>
              </div>
            </div>

            {/* Language Switcher */}
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

          {/* Quick Prompts Scrollable Chips */}
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
                  className={`max-w-[84%] p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
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
                <span>Analyzing forensics & security artifacts...</span>
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
                  ? 'फॉरेन्सिक्स, क्लाउड, किंवा टूल्सबद्दल विचारा...'
                  : lang === 'hi'
                  ? 'फोरेंसिक्स, क्लाउड या टूल्स के बारे में पूछें...'
                  : 'Ask about Forensics, Memory, Cloud, AD...'
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
