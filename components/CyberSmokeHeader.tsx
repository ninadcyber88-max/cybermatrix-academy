'use client';

import { useMemo, useState, useEffect } from 'react';
import { Shield, Clock, Calendar } from 'lucide-react';

export function CyberSmokeHeader() {
  const [imgError, setImgError] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format: DD/MM/YYYY
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setDateStr(`${day}/${month}/${year}`);

      // Format: HH:MM:SS (24-Hour Military Format)
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${15 + Math.random() * 70}%`,
        size: `${2 + Math.random() * 6}px`,
        duration: `${7 + Math.random() * 8}s`,
        delay: `${Math.random() * -12}s`,
        drift: `${-100 + Math.random() * 200}px`,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <section className="cyber-smoke-header">
      {/* Smoke Glows */}
      <div className="smoke-cloud smoke-cloud-one" />
      <div className="smoke-cloud smoke-cloud-two" />
      <div className="smoke-cloud smoke-cloud-three" />

      {/* Floating Smoke Particles */}
      <div className="smoke-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="smoke-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              '--particle-drift': particle.drift,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* 1. Left Glowing Shield Logo */}
      <div className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-20 flex items-center">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-2 rounded-2xl bg-cyan-400/40 blur-lg group-hover:bg-cyan-400/65 transition duration-500 animate-pulse" />
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.55)] bg-zinc-950 flex items-center justify-center">
            {!imgError ? (
              <img
                src="/Ninadcyber.jpg"
                alt="Cyber Shield"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            ) : (
              <div className="p-3 bg-cyan-500/10 text-cyan-400">
                <Shield className="w-8 h-8 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Center Content: Title + Embossed Name */}
      <div className="smoke-header-content">
        <div className="header-flex-wrapper">
          <h1 className="cyber-main-title">
            CYBERMATRIX ACADEMY <span className="text-cyan-400/60">//</span> ONLINE
          </h1>
          
          <div className="embossed-name">
            <span className="embossed-small">BY</span>
            <span className="embossed-main">NINAD PAWAR</span>
          </div>
        </div>
      </div>

      {/* 3. Right Glowing Live Time & Date HUD Widget */}
      <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-end">
        <div className="hud-clock-card">
          <div className="flex items-center space-x-2 text-[11px] font-bold text-cyan-400 tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-cyan-300" />
            <span>{dateStr || 'DD/MM/YYYY'}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm font-black text-zinc-100 tracking-widest mt-0.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-200">{timeStr || '00:00:00'}</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">IST</span>
          </div>
        </div>
      </div>

      <div className="smoke-bottom-glow" />

      <style jsx>{`
        .cyber-smoke-header {
          position: relative;
          width: 100%;
          min-height: 120px;
          overflow: hidden;
          background: rgba(2, 6, 23, 0.65);
          border-bottom: 1px solid rgba(34, 211, 238, 0.15);
          isolation: isolate;
        }

        .smoke-cloud {
          position: absolute;
          width: 450px;
          height: 120px;
          border-radius: 50%;
          filter: blur(45px);
          pointer-events: none;
          opacity: 0.35;
          animation: smokeFlow 12s ease-in-out infinite alternate;
        }

        .smoke-cloud-one { left: 8%; top: 10%; background: radial-gradient(ellipse, rgba(125, 211, 252, 0.45), transparent 70%); }
        .smoke-cloud-two { left: 35%; top: 5%; width: 550px; background: radial-gradient(ellipse, rgba(34, 211, 238, 0.45), transparent 70%); animation-delay: -6s; }
        .smoke-cloud-three { right: 5%; top: 15%; background: radial-gradient(ellipse, rgba(96, 165, 250, 0.35), transparent 70%); animation-delay: -9s; }

        @keyframes smokeFlow {
          0% { transform: translateX(-60px) scale(0.9); opacity: 0.2; }
          50% { transform: translateX(60px) scale(1.1); opacity: 0.4; }
          100% { transform: translateX(120px) scale(0.95); opacity: 0.2; }
        }

        .smoke-particles { position: absolute; inset: 0; pointer-events: none; }
        .smoke-particle {
          position: absolute; border-radius: 999px;
          background: radial-gradient(circle, #ffffff 0%, rgba(125, 211, 252, 0.9) 25%, rgba(34, 211, 238, 0.5) 55%, transparent 100%);
          box-shadow: 0 0 6px rgba(125, 211, 252, 0.8), 0 0 12px rgba(34, 211, 238, 0.4);
          animation: particleFlow linear infinite;
        }

        @keyframes particleFlow {
          0% { transform: translate3d(calc(var(--particle-drift) * -1), 25px, 0) scale(0.4); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.5; }
          100% { transform: translate3d(var(--particle-drift), -30px, 0) scale(0.2); opacity: 0; }
        }

        .smoke-header-content {
          position: relative;
          z-index: 10;
          width: 100%;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.5rem;
        }

        .header-flex-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem 2rem;
          text-align: center;
        }

        .cyber-main-title {
          font-weight: 800;
          font-size: clamp(1.1rem, 2.2vw, 1.65rem);
          letter-spacing: 0.12em;
          color: #22d3ee;
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.45);
          margin: 0;
        }

        .embossed-name {
          display: inline-flex;
          align-items: baseline;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 10px;
          background: linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.35));
          border: 1px solid rgba(34, 211, 238, 0.15);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -2px 4px rgba(0,0,0,0.7), 0 0 15px rgba(34,211,238,0.08);
        }

        .embossed-small {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: rgba(165, 243, 252, 0.7);
        }

        .embossed-main {
          font-size: clamp(13px, 1.5vw, 16px);
          font-weight: 900;
          letter-spacing: 0.14em;
          color: #d8f9ff;
          text-shadow: 0 -1px 0 rgba(255,255,255,0.7), 0 2px 0 #000, 0 0 4px rgba(34,211,238,0.8);
        }

        /* Clock HUD Box */
        .hud-clock-card {
          padding: 6px 14px;
          border-radius: 12px;
          background: rgba(2, 6, 23, 0.85);
          border: 1px solid rgba(34, 211, 238, 0.35);
          box-shadow: inset 0 0 12px rgba(34, 211, 238, 0.15), 0 0 18px rgba(6, 182, 212, 0.25);
          backdrop-blur: 8px;
        }

        .smoke-bottom-glow {
          position: absolute;
          left: 50%;
          bottom: -35px;
          transform: translateX(-50%);
          width: 60%;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(34,211,238,0.25), transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
