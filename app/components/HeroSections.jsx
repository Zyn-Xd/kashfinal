"use client";

import React from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');

  :root {
    --kash-blue:   #1A3BFF;
    --kash-purple: #7C3AFF;
    --kash-sky:    #E8EDFF;
    --kash-mid:    #C8D5FF;
    --kash-dark:   #0D1340;
    --kash-text:   #374151;
  }

  @keyframes floatUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(32px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes phoneIn {
    from { opacity: 0; transform: translateY(40px) scale(0.93); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes floatSlow {
    0%,100% { transform: translateY(0px) rotate(-1deg); }
    50%      { transform: translateY(-10px) rotate(1deg); }
  }
  @keyframes floatSlow2 {
    0%,100% { transform: translateY(0px) rotate(1.5deg); }
    50%      { transform: translateY(-14px) rotate(-1.5deg); }
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(26,59,255,0.25); }
    50%      { box-shadow: 0 0 0 10px rgba(26,59,255,0); }
  }

  .ks-root * { box-sizing: border-box; }
  .ks-root   { font-family: 'Plus Jakarta Sans', sans-serif; }
  .headline  { font-family: 'Syne', sans-serif; }

  .fa-up { animation: floatUp   .65s cubic-bezier(.22,1,.36,1) both; }
  .fa-l  { animation: slideLeft .65s cubic-bezier(.22,1,.36,1) both; }
  .ph-in { animation: phoneIn   .8s  cubic-bezier(.22,1,.36,1) both; }
  .fl1   { animation: floatSlow  6s ease-in-out infinite; }
  .fl2   { animation: floatSlow2 7s ease-in-out 1s infinite; }

  .store-btn-dark {
    display: inline-flex; align-items: center; gap: 10px;
    background: #0D1340; color: white;
    border: none; border-radius: 14px; padding: 11px 20px;
    cursor: pointer; font-size: 13px; font-family: inherit;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .store-btn-dark:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(26,59,255,.28);
  }

  .blob {
    position: absolute; border-radius: 50%;
    filter: blur(80px); pointer-events: none; z-index: 0;
  }

  .card-ui {
    transition: transform .3s ease, box-shadow .3s ease;
  }
  .card-ui:hover {
    transform: translateY(-6px) rotate(-1deg);
    box-shadow: 0 28px 60px rgba(26,59,255,.22) !important;
  }

  /* ── Section grids ── */
  .integ-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .cards-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  /* phone cluster */
  .phone-cluster {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
  }

  /* floating chips — visible on desktop */
  .float-chip { display: block; }

  /* ── TABLET (≤ 900px) ── */
  @media (max-width: 900px) {
    .integ-section { padding: 70px 24px !important; }
    .cards-section  { padding: 70px 24px !important; }

    .integ-grid {
      grid-template-columns: 1fr;
      gap: 48px;
      text-align: center;
    }
    .integ-text {
      display: flex; flex-direction: column; align-items: center;
    }
    .phone-cluster { order: -1; min-height: 420px; }
    .float-chip { display: none; }

    .cards-grid {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }
    .cards-text {
      display: flex; flex-direction: column; align-items: center;
    }
  }

  /* ── MOBILE (≤ 540px) ── */
  @media (max-width: 540px) {
    .integ-section { padding: 52px 16px !important; }
    .cards-section  { padding: 52px 16px !important; }

    .phone-cluster { min-height: 360px; }

    .store-btn-dark { padding: 10px 14px !important; font-size: 12px !important; }

    .card-ui { padding: 16px !important; }
  }
`;

/* ── Icons ── */
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

/* ── Phone A ── */
function PhoneA() {
  return (
    <div
      style={{
        width: 210,
        height: 430,
        background: "white",
        borderRadius: 32,
        boxShadow: "0 40px 80px rgba(26,59,255,.2), 0 8px 20px rgba(0,0,0,.08)",
        overflow: "hidden",
        border: "5px solid #e8edff",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          background: "#1A3BFF",
          padding: "14px 14px 10px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 9,
            opacity: 0.8,
            marginBottom: 8,
          }}
        >
          <span>9:41</span>
          <span>▐▌ ▊ ⬤</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "rgba(255,255,255,.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
            }}
          >
            👤
          </div>
          <div>
            <div style={{ fontSize: 8, opacity: 0.7 }}>Hello,</div>
            <div style={{ fontSize: 10, fontWeight: 700 }}>ADENIYI</div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              width: 22,
              height: 22,
              background: "rgba(255,255,255,.2)",
              borderRadius: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
            }}
          >
            🔔
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(135deg,#1A3BFF,#7C3AFF)",
          margin: "8px 10px 6px",
          borderRadius: 12,
          padding: "10px 12px",
          color: "white",
        }}
      >
        <div style={{ fontSize: 8, opacity: 0.75, marginBottom: 3 }}>
          Available Balance
        </div>
        <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
          $390,000.00
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 3,
            gap: 3,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(255,255,255,.4)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(255,255,255,.22)",
            }}
          />
        </div>
      </div>
      <div style={{ padding: "0 10px 6px" }}>
        <div
          style={{
            fontSize: 8,
            fontWeight: 700,
            color: "#374151",
            marginBottom: 5,
          }}
        >
          Quick Access
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 5,
          }}
        >
          {[
            ["↑", "Transfer", "#E8EDFF"],
            ["↔", "Convert", "#FFF3E0"],
            ["📱", "Airtime", "#F3E8FF"],
            ["📺", "Cable", "#E8FFF3"],
          ].map(([ic, lb, bg]) => (
            <div
              key={lb}
              style={{
                background: bg,
                borderRadius: 9,
                padding: "5px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <span style={{ fontSize: 12 }}>{ic}</span>
              <span style={{ fontSize: 6, fontWeight: 600, color: "#6B7280" }}>
                {lb}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "0 10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <span style={{ fontSize: 8, fontWeight: 700, color: "#374151" }}>
            Recent Transactions
          </span>
          <span style={{ fontSize: 7, color: "#1A3BFF" }}>view all</span>
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
          { label: "Netflix", sub: "28 March", amt: "-$15", color: "#DC2626" },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "4px 0",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#E8EDFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                marginRight: 6,
              }}
            >
              💳
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#111827" }}>
                {t.label}
              </div>
              <div style={{ fontSize: 7, color: "#9CA3AF" }}>{t.sub}</div>
            </div>
            <span style={{ fontSize: 8, fontWeight: 700, color: t.color }}>
              {t.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Phone B ── */
function PhoneB() {
  return (
    <div
      style={{
        width: 200,
        height: 400,
        background: "white",
        borderRadius: 30,
        boxShadow:
          "0 30px 60px rgba(26,59,255,.18), 0 6px 16px rgba(0,0,0,.07)",
        overflow: "hidden",
        border: "5px solid #e8edff",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          background: "#1A3BFF",
          padding: "12px 12px 8px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 8,
            opacity: 0.8,
            marginBottom: 6,
          }}
        >
          <span>9:41</span>
          <span>▐▌ ▊ ⬤</span>
        </div>
        <div style={{ fontSize: 10, fontWeight: 800 }}>CARDS</div>
      </div>
      <div
        style={{
          background: "linear-gradient(135deg,#1A3BFF,#7C3AFF)",
          margin: "10px",
          borderRadius: 14,
          padding: "14px",
          color: "white",
          height: 110,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,.06)",
            right: -30,
            top: -30,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,255,255,.06)",
            left: -20,
            bottom: -20,
          }}
        />
        <div style={{ fontSize: 8, opacity: 0.75, marginBottom: 8 }}>
          Credit Card
        </div>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          •••• •••• •••• 1555
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <div style={{ fontSize: 7, opacity: 0.7 }}>CARD HOLDER</div>
            <div style={{ fontSize: 9, fontWeight: 700 }}>ADENIYI OLUMIDE</div>
          </div>
          <div style={{ fontSize: 7, opacity: 0.7 }}>
            <div>Expiry</div>
            <div style={{ fontWeight: 700 }}>12/27</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(255,80,0,.7)",
                marginRight: -6,
              }}
            />
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "rgba(255,180,0,.7)",
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, margin: "0 10px 10px" }}>
        <button
          style={{
            flex: 1,
            background: "#fee2e2",
            color: "#DC2626",
            border: "none",
            borderRadius: 8,
            padding: "6px 0",
            fontSize: 8,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Remove Card ✕
        </button>
        <button
          style={{
            flex: 1,
            background: "#E8EDFF",
            color: "#1A3BFF",
            border: "none",
            borderRadius: 8,
            padding: "6px 0",
            fontSize: 8,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Add Card +
        </button>
      </div>
      <div style={{ padding: "0 10px" }}>
        <div
          style={{
            fontSize: 8,
            fontWeight: 700,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          Card Activity
        </div>
        {[
          {
            label: "Spent this month",
            val: "$1,240",
            bar: 0.6,
            color: "#DC2626",
          },
          {
            label: "Limit remaining",
            val: "$8,760",
            bar: 0.87,
            color: "#16A34A",
          },
        ].map((t) => (
          <div key={t.label} style={{ marginBottom: 8 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 3,
              }}
            >
              <span style={{ fontSize: 7, color: "#6B7280" }}>{t.label}</span>
              <span style={{ fontSize: 7, fontWeight: 700, color: t.color }}>
                {t.val}
              </span>
            </div>
            <div style={{ height: 4, background: "#F3F4F6", borderRadius: 99 }}>
              <div
                style={{
                  height: "100%",
                  width: `${t.bar * 100}%`,
                  background: t.color,
                  borderRadius: 99,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Integration Section ── */
function IntegrationSection() {
  return (
    <section
      className="integ-section"
      style={{
        background:
          "linear-gradient(135deg, #D6E4F7 0%, #C8D8F2 55%, #D2DCF0 100%)",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="blob"
        style={{
          width: 420,
          height: 420,
          background: "rgba(100,149,237,.10)",
          top: -120,
          right: -60,
        }}
      />
      <div
        className="blob"
        style={{
          width: 320,
          height: 320,
          background: "rgba(100,149,237,.08)",
          bottom: -80,
          left: -60,
        }}
      />

      <div className="integ-grid">
        {/* LEFT: text */}
        <div className="integ-text">
          <div
            className="fa-up"
            style={{
              animationDelay: ".1s",
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
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#1A3BFF",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#1A3BFF",
                letterSpacing: 0.3,
              }}
            >
              Technology · Design
            </span>
          </div>

          <h2
            className="headline fa-up"
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "var(--kash-blue)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
              margin: 0,
              marginBottom: 20,
              maxWidth: 420,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            The integration of technology and design
          </h2>

          <div
            className="fa-up"
            style={{
              animationDelay: ".28s",
              height: 4,
              background: "linear-gradient(90deg,#1A3BFF,#7C3AFF)",
              borderRadius: 99,
              marginBottom: 22,
              width: "6rem",
            }}
          />

          <p
            className="fa-up"
            style={{
              animationDelay: ".38s",
              color: "#5B6D8A",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 420,
              marginBottom: 36,
            }}
          >
            The latest technology makes it possible to design useful solutions.
            We keep up with current trends to deliver seamless experiences that
            feel both powerful and effortless.
          </p>

          <div
            className="fa-up"
            style={{
              animationDelay: ".5s",
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 28,
            }}
          >
            <button className="store-btn-dark">
              <GooglePlayIcon />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 9, opacity: 0.65, lineHeight: 1 }}>
                  GET IT ON
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>
                  Google Play
                </div>
              </div>
            </button>
            <button className="store-btn-dark">
              <AppleIcon />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 9, opacity: 0.65, lineHeight: 1 }}>
                  Download on the
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>
                  App Store
                </div>
              </div>
            </button>
          </div>

          <div
            className="fa-up"
            style={{
              animationDelay: ".62s",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#7C3AFF", "#1A3BFF", "#3B82F6", "#60A5FA"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid white",
                    marginLeft: i === 0 ? 0 : -8,
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: 13, color: "#5B6D8A" }}>
              <span style={{ fontWeight: 700, color: "#1A3BFF" }}>50,000+</span>{" "}
              users already loving it
            </div>
          </div>
        </div>

        {/* RIGHT: phones */}
        <div className="phone-cluster">
          <div
            style={{
              position: "absolute",
              width: 340,
              height: 340,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(100,149,237,.15) 0%,transparent 70%)",
              zIndex: 0,
            }}
          />

          <div
            className="ph-in fl2"
            style={{
              animationDelay: ".3s",
              position: "absolute",
              right: "calc(50% - 200px)",
              top: 20,
              zIndex: 2,
              transform: "rotate(4deg)",
            }}
          >
            <PhoneA />
          </div>
          <div
            className="ph-in fl1"
            style={{
              animationDelay: ".5s",
              position: "absolute",
              left: "calc(50% - 80px)",
              top: 50,
              zIndex: 3,
              transform: "rotate(-3deg)",
            }}
          >
            <PhoneB />
          </div>

          <div
            className="fa-l float-chip"
            style={{
              animationDelay: ".9s",
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 5,
              background: "white",
              borderRadius: 14,
              padding: "10px 14px",
              boxShadow: "0 12px 30px rgba(26,59,255,.18)",
              minWidth: 130,
            }}
          >
            <div style={{ fontSize: 8, color: "#9CA3AF", marginBottom: 2 }}>
              Active Users
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#1A3BFF" }}>
              50,000+
            </div>
            <div
              style={{
                fontSize: 9,
                color: "#16A34A",
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <span>↑</span>
              <span>12% this month</span>
            </div>
          </div>

          <div
            className="fa-up float-chip"
            style={{
              animationDelay: "1.1s",
              position: "absolute",
              bottom: 30,
              right: 10,
              zIndex: 5,
              background: "linear-gradient(135deg,#1A3BFF,#7C3AFF)",
              color: "white",
              borderRadius: 12,
              padding: "8px 12px",
              fontSize: 11,
              fontWeight: 700,
              transform: "rotate(-2deg)",
              boxShadow: "0 8px 24px rgba(26,59,255,.32)",
            }}
          >
            🔒 256-bit Encrypted
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Bank Cards Section ── */
function BankCardsSection() {
  return (
    <section
      className="cards-section"
      style={{
        background:
          "linear-gradient(160deg, #D6E4F7 0%, #C8D8F2 50%, #D2DCF0 100%)",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="blob"
        style={{
          width: 360,
          height: 360,
          background: "rgba(100,149,237,.08)",
          bottom: -100,
          right: -60,
        }}
      />
      <div
        className="blob"
        style={{
          width: 280,
          height: 280,
          background: "rgba(100,149,237,.07)",
          top: 0,
          left: "40%",
        }}
      />

      <div className="cards-grid">
        {/* LEFT: card panel */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="card-ui"
            style={{
              background: "white",
              borderRadius: 24,
              boxShadow:
                "0 20px 60px rgba(26,59,255,.14), 0 4px 16px rgba(0,0,0,.06)",
              padding: 24,
              width: "100%",
              maxWidth: 360,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#0D1340",
                  letterSpacing: 0.5,
                }}
              >
                CARDS
              </span>
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
                +
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg,#1A3BFF 0%,#7C3AFF 100%)",
                borderRadius: 18,
                padding: "22px 22px 18px",
                color: "white",
                marginBottom: 16,
                position: "relative",
                overflow: "hidden",
                height: 160,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.06)",
                  right: -40,
                  top: -40,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.06)",
                  left: -20,
                  bottom: -30,
                }}
              />
              <div
                style={{
                  fontSize: 11,
                  opacity: 0.75,
                  marginBottom: 16,
                  position: "relative",
                }}
              >
                Credit Card
              </div>
              <div
                style={{
                  fontSize: 16,
                  letterSpacing: 3,
                  fontWeight: 600,
                  marginBottom: 18,
                  position: "relative",
                }}
              >
                •••• •••• •••• 1555
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  position: "relative",
                }}
              >
                <div>
                  <div style={{ fontSize: 9, opacity: 0.7 }}>CARD HOLDER</div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>
                    ADENIYI OLUMIDE
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 9, opacity: 0.7 }}>Expiry</div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>12/27</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(255,80,0,.75)",
                      marginRight: -8,
                    }}
                  />
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(255,180,0,.75)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              <button
                style={{
                  flex: 1,
                  background: "#fee2e2",
                  color: "#DC2626",
                  border: "none",
                  borderRadius: 10,
                  padding: "9px 0",
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Remove Card ✕
              </button>
              <button
                style={{
                  flex: 1,
                  background: "#E8EDFF",
                  color: "#1A3BFF",
                  border: "none",
                  borderRadius: 10,
                  padding: "9px 0",
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Add Card +
              </button>
            </div>

            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#374151",
                marginBottom: 10,
              }}
            >
              Saved Cards
            </div>
            {[
              {
                name: "Zenith Bank",
                last: "4242",
                color: "#1A3BFF",
                bg: "#E8EDFF",
              },
              { name: "GTBank", last: "8391", color: "#F59E0B", bg: "#FFF3E0" },
              {
                name: "Access Bank",
                last: "1155",
                color: "#10B981",
                bg: "#ECFDF5",
              },
            ].map((c) => (
              <div
                key={c.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "9px 0",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: c.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  💳
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}
                  >
                    {c.name}
                  </div>
                  <div style={{ fontSize: 10, color: "#9CA3AF" }}>
                    •••• {c.last}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: c.color,
                    background: c.bg,
                    padding: "3px 8px",
                    borderRadius: 6,
                  }}
                >
                  Active
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="cards-text">
          <div
            className="fa-up"
            style={{
              animationDelay: ".1s",
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
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#1A3BFF",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#1A3BFF",
                letterSpacing: 0.3,
              }}
            >
              Multi-Bank · All in One
            </span>
          </div>

          <h2
            className="headline fa-up"
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
              fontWeight: 700,
              color: "var(--kash-blue)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
              margin: 0,
              marginBottom: 20,
              maxWidth: 420,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Add various Bank cards to your account
          </h2>

          <div
            className="fa-up"
            style={{
              animationDelay: ".28s",
              height: 4,
              background: "linear-gradient(90deg,#1A3BFF,#7C3AFF)",
              borderRadius: 99,
              marginBottom: 22,
              width: "6rem",
            }}
          />

          <p
            className="fa-up"
            style={{
              animationDelay: ".38s",
              color: "#5B6D8A",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 440,
              marginBottom: 36,
            }}
          >
            Set to add all of your bank cards to your wallet for easy
            transactions. Manage, switch, and control multiple accounts from one
            clean, powerful dashboard.
          </p>

          <div
            className="fa-up"
            style={{ animationDelay: ".44s", marginBottom: 36 }}
          >
            {[
              { icon: "🏦", text: "Supports all Nigerian banks" },
              { icon: "⚡", text: "Instant fund transfers, zero delays" },
              { icon: "🔒", text: "Bank-grade 256-bit encryption" },
            ].map((f) => (
              <div
                key={f.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#E8EDFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <span
                  style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}
                >
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          <div
            className="fa-up"
            style={{
              animationDelay: ".56s",
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <button className="store-btn-dark">
              <GooglePlayIcon />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 9, opacity: 0.65, lineHeight: 1 }}>
                  GET IT ON
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>
                  Google Play
                </div>
              </div>
            </button>
            <button className="store-btn-dark">
              <AppleIcon />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 9, opacity: 0.65, lineHeight: 1 }}>
                  Download on the
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>
                  App Store
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Export ── */
export default function HeroSection() {
  return (
    <>
      <style>{CSS}</style>
      <div className="ks-root">
        <IntegrationSection />
        <BankCardsSection />
      </div>
    </>
  );
}
