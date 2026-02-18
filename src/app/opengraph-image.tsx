import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "4A Trades — Your Workforce. Delivered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #111111 50%, #1a1a1a 100%)",
          position: "relative",
        }}
      >
        {/* Top stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#FF6B00",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: "0.08em",
            marginBottom: 40,
          }}
        >
          <span style={{ color: "#ffffff" }}>4A</span>
          <span style={{ color: "#FF6B00" }}>TRADES</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}
          >
            YOUR WORKFORCE.
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#FF6B00",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}
          >
            DELIVERED.
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "#999999",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          UK Construction Labour Supply & Partnerships
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 60,
            marginTop: 48,
          }}
        >
          {[
            { value: "6", label: "REGIONS" },
            { value: "50+", label: "TRADES" },
            { value: "24HR", label: "TURNAROUND" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 900, color: "#FF6B00" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: 14, color: "#999999", letterSpacing: "0.12em" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#FF6B00",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
