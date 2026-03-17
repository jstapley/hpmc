export default function Purpose() {
  return (
    <section id="purpose" style={{ backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 40px" }}>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
          marginBottom: "40px",
          color: "#1a1a1a",
        }}>
          Our Purpose
        </h2>
      </div>

      {/* Full width dark blue block */}
      <div style={{ backgroundColor: "#2d4a7a", width: "100%" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "stretch",
        }}>
          {/* Left — text */}
          <div style={{
            padding: "60px 80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.3,
              marginBottom: "16px",
            }}>
              Protect your investment
            </h3>
            <p style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}>
              Experience the pride of ownership with Hull Pro Marine Care where
              your boat is treated like our own!
            </p>
          </div>

          {/* Right — video */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "12px 16px" }}>
              <span style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}>
                🔊 Hull Pro Marine Care
              </span>
            </div>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "black" }}>
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Hull Pro Marine Care"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <div style={{
              backgroundColor: "#243d6a",
              padding: "10px 16px",
              textAlign: "center",
            }}>
              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}>
                Hull Pro Marine Care — Daniel Athill
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}