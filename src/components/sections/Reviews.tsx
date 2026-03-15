const reviews = [
  {
    name: "Daphnee Surpris",
    text: "Daniel is the most professional, reliable, thorough and knowledgeable person. We did not recognize the boat when he was done with it. And he is an absolute joy to work with.",
  },
  {
    name: "William Mary",
    text: "Daniel is a true professional. Very knowledgeable and thorough. Fastidious and engaged. He noticed miracles we didn't know were possible, interior and exterior of our boat.",
  },
  {
    name: "Jeffrey D'Ornellas",
    text: "Great service! Professional work and attitude. Very knowledgeable. Would highly recommend Antigua.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-heading">Our Reviews</h2>

        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="border border-gray-200 rounded-sm p-6"
            >
              <p className="font-bold text-[var(--text-dark)] text-sm mb-2">
                {review.name}
              </p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
