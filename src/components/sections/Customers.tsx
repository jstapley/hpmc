import Image from "next/image";

const clients = [
  { name: "Outdoor World",         logo: "/images/clients/outdoor-world.png" },
  { name: "Hermitage Bay Antigua", logo: "/images/clients/hermitage-bay.png" },
  { name: "Blue Waters Resort",    logo: "/images/clients/blue-waters.png" },
  { name: "Barefoot Antigua",      logo: "/images/clients/barefoot-antigua.png" },
];

export default function Customers() {
  return (
    <section id="customers" style={{ padding: "80px 40px", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textAlign: "center",
          marginBottom: "60px",
          color: "#1a1a1a",
        }}>
          Our Customers
        </h2>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}>
          {clients.map((client) => (
            <div key={client.name} style={{
              position: "relative",
              flex: "1",
              minWidth: "160px",
              height: "80px",
            }}>
              <Image
                src={client.logo}
                alt={client.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}