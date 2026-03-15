import Image from "next/image";

const clients = [
  { name: "Outdoor World",        logo: "/images/clients/outdoor-world.png" },
  { name: "Hermitage Bay Antigua",logo: "/images/clients/hermitage-bay.png" },
  { name: "Blue Waters Resort",   logo: "/images/clients/blue-waters.png" },
  { name: "Barefoot Antigua",     logo: "/images/clients/barefoot-antigua.png" },
];

export default function Customers() {
  return (
    <section id="customers" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-heading">Our Customers</h2>

        <div className="flex flex-col items-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="relative w-56 h-16">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
