'use client';

import { useMemo } from 'react';

export function CyberSmokeHeader() {
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

      {/* Floating Particles */}
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

      {/* Flex Centered Row Content */}
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

      <div className="smoke-bottom-glow" />

      <style jsx>{`
        .cyber-smoke-header {
          position: relative;
          width: 100%;
          min-height: 120px;
          overflow: hidden;
          background: rgba(2, 6, 23, 0.6);
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
          height: 100%;
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
          gap: 1.5rem 2.5rem;
          text-align: center;
        }

        .cyber-main-title {
          font-family: inherit;
          font-weight: 800;
          font-size: clamp(1.25rem, 2.5vw, 1.875rem);
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
          padding: 8px 18px;
          border-radius: 10px;
          background: linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.35));
          border: 1px solid rgba(34, 211, 238, 0.15);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -2px 4px rgba(0,0,0,0.7), 0 0 15px rgba(34,211,238,0.08);
        }

        .embossed-small {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: rgba(165, 243, 252, 0.7);
          text-shadow: 0 -1px 0 rgba(0,0,0,0.9);
        }

        .embossed-main {
          font-size: clamp(14px, 1.8vw, 18px);
          font-weight: 900;
          letter-spacing: 0.14em;
          color: #d8f9ff;
          text-shadow: 0 -1px 0 rgba(255,255,255,0.7), 0 2px 0 #000, 0 0 4px rgba(34,211,238,0.8);
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
