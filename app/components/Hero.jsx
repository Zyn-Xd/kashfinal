"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ─── Inline keyframes injected once ─────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');

  :root {
    --kash-blue: #1A3BFF;
    --kash-purple: #7C3AFF;
    --kash-sky: #E8EDFF;
    --kash-mid: #C8D5FF;
    --kash-dark: #0D1340;
    --kash-text: #374151;
  }

  @keyframes floatUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-22px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes phoneIn {
    from { opacity: 0; transform: translateY(40px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes float {
    0%,100% { transform: translateY(0px) rotate(-1deg); }
    50%      { transform: translateY(-12px) rotate(1deg); }
  }
  @keyframes cardSlide {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(26,59,255,0.25); }
    50%      { box-shadow: 0 0 0 10px rgba(26,59,255,0); }
  }
  @keyframes underlineDraw {
    from { width: 0; }
    to   { width: 7rem; }
  }
  @keyframes badgePop {
    from { opacity:0; transform: scale(0.7) rotate(-6deg); }
    to   { opacity:1; transform: scale(1) rotate(-3deg); }
  }

  .hero-section * { box-sizing: border-box; }
  .hero-section { font-family: 'Plus Jakarta Sans', sans-serif; }

  .headline { font-family: 'Syne', sans-serif; }

  .tag-pill {
    animation: slideRight .55s cubic-bezier(.22,1,.36,1) .1s both;
  }
  .h1-anim { animation: floatUp .65s cubic-bezier(.22,1,.36,1) .25s both; }
  .underline-anim {
    animation: underlineDraw .5s cubic-bezier(.22,1,.36,1) .75s both;
  }
  .p-anim  { animation: floatUp .65s cubic-bezier(.22,1,.36,1) .45s both; }
  .btn-anim{ animation: floatUp .65s cubic-bezier(.22,1,.36,1) .6s both; }
  .phone-anim { animation: phoneIn .8s cubic-bezier(.22,1,.36,1) .35s both; }
  .float-phone { animation: float 6s ease-in-out infinite; }
  .badge-anim { animation: badgePop .5s cubic-bezier(.34,1.56,.64,1) 1.1s both; }
  .card1-anim { animation: cardSlide .55s cubic-bezier(.22,1,.36,1) 1.2s both; }
  .card2-anim { animation: cardSlide .55s cubic-bezier(.22,1,.36,1) 1.35s both; }

  .store-btn {
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .store-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(26,59,255,.25);
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Hero grid ── */
  .hero-grid {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 32px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  /* ── Transaction section grid ── */
  .tx-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  /* ── Features grid ── */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }

  /* ── Floating cards — visible on desktop ── */
  .hero-float-card { display: block; }

  /* ── TABLET (≤ 900px) ── */
  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
      padding: 60px 24px 48px;
      gap: 40px;
      text-align: center;
    }
    .hero-left {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-left h1,
    .hero-left p {
      max-width: 100% !important;
      text-align: center;
    }
    .hero-phone-wrap { order: -1; }
    .hero-float-card { display: none; }

    .tx-section { padding: 60px 24px !important; }
    .features-section { padding: 60px 24px !important; }

    .tx-grid {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }
    .tx-text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 36px;
    }
  }

  /* ── MOBILE (≤ 540px) ── */
  @media (max-width: 540px) {
    .hero-grid {
      padding: 48px 16px 40px;
    }
    .tx-section { padding: 48px 16px !important; }
    .features-section { padding: 48px 16px !important; }
    .features-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .store-btn {
      padding: 10px 14px !important;
      font-size: 12px !important;
    }
  }
`;

/* ─── Tiny SVG icons ──────────────────────────────────────── */
const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z"
      fill="white"
      opacity=".9"
    />
    <path d="M3 3.5L13.5 14 3 20.5V3.5z" fill="#00D2FF" opacity=".6" />
    <path d="M3 3.5l10.5 10.5L18 9.5 3 3.5z" fill="#FFD600" opacity=".8" />
    <path d="M3 20.5l10.5-6.5L18 18.5 3 20.5z" fill="#FF3D00" opacity=".8" />
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

/* ─── Mock phone UI ───────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div
      style={{
        width: 240,
        height: 480,
        background: "white",
        borderRadius: 36,
        boxShadow:
          "0 40px 80px rgba(26,59,255,.18), 0 8px 24px rgba(0,0,0,.10)",
        overflow: "hidden",
        position: "relative",
        border: "6px solid #e8edff",
      }}
    >
      {/* status bar */}
      <div
        style={{
          background: "#1A3BFF",
          padding: "12px 16px 8px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            opacity: 0.85,
            marginBottom: 10,
          }}
        >
          <span>9:41</span>
          <span>▐▌ ▊ ⬤</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "rgba(255,255,255,.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            👤
          </div>
          <div>
            <div style={{ fontSize: 9, opacity: 0.7 }}>Hello,</div>
            <div style={{ fontSize: 11, fontWeight: 700 }}>ADENIYI</div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              width: 24,
              height: 24,
              background: "rgba(255,255,255,.2)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            🔔
          </div>
        </div>
      </div>

      {/* balance card */}
      <div
        style={{
          background: "linear-gradient(135deg,#1A3BFF,#7C3AFF)",
          margin: "10px 10px 8px",
          borderRadius: 14,
          padding: "10px 14px",
          color: "white",
        }}
      >
        <div style={{ fontSize: 9, opacity: 0.75, marginBottom: 4 }}>
          Available Balance
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
          $390,000.00
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 4,
            gap: 4,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "rgba(255,255,255,.4)",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "rgba(255,255,255,.25)",
            }}
          />
        </div>
      </div>

      {/* quick access */}
      <div style={{ padding: "0 10px 6px" }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          Quick Access
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 6,
          }}
        >
          {[
            ["↑", "Transfer", "#E8EDFF"],
            ["↔", "Convert", "#FFF3E0"],
            ["📱", "Airtime", "#F3E8FF"],
            ["📺", "Cable TV", "#E8FFF3"],
          ].map(([ic, lb, bg]) => (
            <div
              key={lb}
              style={{
                background: bg,
                borderRadius: 10,
                padding: "6px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <span style={{ fontSize: 14 }}>{ic}</span>
              <span style={{ fontSize: 7, fontWeight: 600, color: "#6B7280" }}>
                {lb}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* transactions */}
      <div style={{ padding: "0 10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 700, color: "#374151" }}>
            Recent
          </span>
          <span style={{ fontSize: 8, color: "#1A3BFF" }}>view all</span>
        </div>
        {[
          {
            label: "Payday",
            sub: "21 March",
            amt: "+$3,000",
            color: "#16A34A",
          },
          {
            label: "Transfer out",
            sub: "30 March",
            amt: "-$260",
            color: "#DC2626",
          },
          {
            label: "Payday",
            sub: "21 March",
            amt: "+$3,500",
            color: "#16A34A",
          },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 0",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#E8EDFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                marginRight: 8,
              }}
            >
              💳
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#111827" }}>
                {t.label}
              </div>
              <div style={{ fontSize: 8, color: "#9CA3AF" }}>{t.sub}</div>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: t.color }}>
              {t.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Hero ───────────────────────────────────────────── */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <style>{CSS}</style>

      <section
        className="hero-section"
        style={{
          width: "100%",
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #EEF1FF 0%, #E4EAFF 50%, #F0EEFF 100%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* background blobs */}
        <div
          className="blob"
          style={{
            width: 500,
            height: 500,
            background: "rgba(124,58,255,.07)",
            top: -150,
            right: -100,
          }}
        />
        <div
          className="blob"
          style={{
            width: 400,
            height: 400,
            background: "rgba(26,59,255,.06)",
            bottom: -100,
            left: -80,
          }}
        />
        <div
          className="blob"
          style={{
            width: 300,
            height: 300,
            background: "rgba(26,59,255,.05)",
            top: "30%",
            left: "40%",
          }}
        />

        {/* ── HERO CONTENT ── */}
        <div className="hero-grid">
          {/* LEFT */}
          <div className="hero-left">
            <div
              className="tag-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(26,59,255,.1)",
                borderRadius: 999,
                padding: "6px 14px",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#1A3BFF",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1A3BFF",
                  letterSpacing: 0.3,
                }}
              >
                New · Smarter Finance
              </span>
            </div>
            <h1
              className="headline h1-anim"
              style={{
                fontSize: "clamp(2.4rem, 3.8vw, 3.4rem)",
                fontWeight: 700, // 🔥 sweet spot (not too bold, not too thin)
                color: "var(--kash-blue)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em", // subtle tightening, not stretched
                margin: 0,
                marginBottom: 16,
                maxWidth: 480,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              We know how to keep your finances in check
            </h1>

            <div
              className="underline-anim"
              style={{
                height: 4,
                background: "linear-gradient(90deg,#1A3BFF,#7C3AFF)",
                borderRadius: 99,
                marginBottom: 22,
                width: "7rem",
              }}
            />
            <p
              className="p-anim"
              style={{
                color: "#5B6D8A",
                fontSize: 15.5,
                lineHeight: 1.7,
                maxWidth: 400,
                marginBottom: 36,
              }}
            >
              Control your spending. We have a better solution for you. Meet
              your new mobile app that will make your finances easy and soft.
              Feel the technology and check our innovation.
            </p>
            <div
              className="btn-anim"
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <button
                className="store-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#0D1340",
                  color: "white",
                  border: "none",
                  borderRadius: 14,
                  padding: "12px 20px",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                <GooglePlayIcon />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 9, opacity: 0.65, lineHeight: 1 }}>
                    GET IT ON
                  </div>
                  <div
                    style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}
                  >
                    Google Play
                  </div>
                </div>
              </button>

              <button
                className="store-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#0D1340",
                  color: "white",
                  border: "none",
                  borderRadius: 14,
                  padding: "12px 20px",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                <AppleIcon />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 9, opacity: 0.65, lineHeight: 1 }}>
                    Download on the
                  </div>
                  <div
                    style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}
                  >
                    App Store
                  </div>
                </div>
              </button>
            </div>
            <div
              className="p-anim"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginTop: 28,
              }}
            >
              <div style={{ display: "flex" }}>
                {["#7C3AFF", "#1A3BFF", "#3B82F6", "#60A5FA"].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: c,
                      border: "2px solid white",
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: 13, color: "#5B6D8A" }}>
                <span style={{ fontWeight: 700, color: "#1A3BFF" }}>
                  50,000+
                </span>{" "}
                users already saving smarter
              </div>
            </div>
          </div>

          {/* RIGHT – phone + floating cards */}
          <div
            className="hero-phone-wrap"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(26,59,255,.12) 0%, transparent 70%)",
                zIndex: 0,
              }}
            />

            <div
              className="phone-anim float-phone"
              style={{ position: "relative", zIndex: 2 }}
            >
              <PhoneMockup />
            </div>

            <div
              className="card1-anim hero-float-card"
              style={{
                position: "absolute",
                top: 40,
                right: 10,
                background: "white",
                borderRadius: 14,
                padding: "10px 14px",
                boxShadow: "0 12px 30px rgba(26,59,255,.15)",
                zIndex: 3,
                minWidth: 140,
              }}
            >
              <div style={{ fontSize: 9, color: "#9CA3AF", marginBottom: 2 }}>
                Monthly Savings
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#16A34A" }}>
                +$12,400
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#16A34A",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <span>↑</span>
                <span>8.2% vs last month</span>
              </div>
            </div>

            <div
              className="card2-anim hero-float-card"
              style={{
                position: "absolute",
                bottom: 60,
                left: 10,
                background: "white",
                borderRadius: 14,
                padding: "10px 14px",
                boxShadow: "0 12px 30px rgba(26,59,255,.15)",
                zIndex: 3,
                minWidth: 130,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "#E8EDFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  🔒
                </div>
                <div>
                  <div style={{ fontSize: 9, color: "#9CA3AF" }}>Security</div>
                  <div
                    style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}
                  >
                    256-bit SSL
                  </div>
                </div>
              </div>
            </div>

            <div
              className="badge-anim hero-float-card"
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "linear-gradient(135deg,#1A3BFF,#7C3AFF)",
                color: "white",
                borderRadius: 12,
                padding: "8px 12px",
                fontSize: 11,
                fontWeight: 700,
                zIndex: 3,
                transform: "rotate(-3deg)",
                boxShadow: "0 8px 20px rgba(26,59,255,.3)",
              }}
            >
              #1 Finance App 🏆
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSACTION SECTION ── */}
      <section
        className="tx-section"
        style={{
          background:
            "linear-gradient(135deg, #EEF1FF 0%, #E4EAFF 60%, #F0EEFF 100%)",
          padding: "80px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="blob"
          style={{
            width: 400,
            height: 400,
            background: "rgba(26,59,255,.05)",
            top: -100,
            left: -80,
          }}
        />
        <div className="tx-grid">
          {/* LEFT – card image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 280,
            }}
          >
            <Image
              src="https://www.dropbox.com/scl/fi/i0uccxznt7oysn6pajjkz/card.png.png?rlkey=ntb5dxlxl812napgyjo4ows24&raw=1"
              alt="KASHflow card"
              width={420}
              height={520}
              unoptimized
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* RIGHT – text */}
          <div className="tx-text">
            <h2
              className="headline"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700, // balanced thickness
                color: "var(--kash-blue)",
                lineHeight: 1.18, // slightly more breathing room
                letterSpacing: "-0.01em", // subtle, not stretched
                margin: 0,
                marginBottom: 20,
                maxWidth: 420,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              One tool, one way to control transactions
            </h2>
            <p
              style={{
                color: "#5B6D8A",
                fontSize: 15,
                lineHeight: 1.75,
                maxWidth: 440,
                marginBottom: 32,
              }}
            >
              All your transactions, receipts and expenses in one smart app.
              Control your budget in real-time. Transfer funds to any account
              anywhere in the world. Convert funds to any currency in real-time.
            </p>
            <button
              className="store-btn"
              style={{
                background: "var(--kash-blue)",
                color: "white",
                border: "none",
                borderRadius: 10,
                padding: "13px 28px",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(26,59,255,.3)",
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="features-section" style={{ background: "white", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="features-grid">
            {[
              {
                icon: "↗",
                label: "Transfer",
                color: "#E8EDFF",
                iconColor: "#1A3BFF",
              },
              {
                icon: "↔",
                label: "Convert",
                color: "#FFF3E0",
                iconColor: "#F59E0B",
              },
              {
                icon: "⚡",
                label: "Electricity",
                color: "#ECFDF5",
                iconColor: "#10B981",
              },
              {
                icon: "📱",
                label: "Airtime",
                color: "#F3E8FF",
                iconColor: "#8B5CF6",
              },
              {
                icon: "📺",
                label: "Cable TV",
                color: "#FFF1F2",
                iconColor: "#F43F5E",
              },
              {
                icon: "📶",
                label: "Internet",
                color: "#ECFDF5",
                iconColor: "#10B981",
              },
            ].map(({ icon, label, color, iconColor }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {icon}
                </div>
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: iconColor }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5B6D8A",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Easily transfer funds from your account to any account/bank of
                  your choice
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
