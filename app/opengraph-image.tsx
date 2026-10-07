import { ImageResponse } from "next/og";

export const alt = "Elie Banga-Bothy, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1220",
          color: "#E2E8F0",
        }}
      >
        <div style={{ fontSize: 30, color: "#38BDF8" }}>hello, I&apos;m</div>
        <div style={{ fontSize: 84, fontWeight: 600, marginTop: 12 }}>
          Elie Banga-Bothy
        </div>
        <div style={{ fontSize: 36, color: "#94A3B8", marginTop: 20 }}>
          Backend-leaning full-stack developer
        </div>
      </div>
    ),
    size
  );
}