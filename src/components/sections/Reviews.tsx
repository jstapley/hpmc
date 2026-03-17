"use client";

import { useEffect, useState } from "react";

interface Review {
  rating: number;
  relativePublishTimeDescription: string;
  text?: { text: string; languageCode: string };
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
}

interface PlacesData {
  rating: number;
  userRatingCount: number;
  reviews: Review[];
}

const GOOGLE_LOGO = (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="18" height="18" viewBox="0 0 24 24"
          fill={star <= rating ? "#f59e0b" : "none"}
          stroke={star <= rating ? "#f59e0b" : "#6b7280"}
          strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [data, setData] = useState<PlacesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((r) => r.json())
      .then((d) => { if (!d.error) setData(d); })
      .finally(() => setLoading(false));
  }, []);

  const textReviews = data?.reviews?.filter((r) => r.text?.text && r.rating === 5) ?? [];

  return (
    <section id="reviews" style={{ padding: "80px 40px", backgroundColor: "#f7f8fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header row */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "48px",
        }}>
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2d4a7a",
              marginBottom: "8px",
            }}>
              What Our Customers Say
            </p>
            <h2 style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.2,
            }}>
              Our Reviews
            </h2>
          </div>

          {data && (
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ-66dyWSXEowRXGMYbt-Ag-c"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "white",
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                padding: "16px 24px",
                textAlign: "center",
                textDecoration: "none",
                display: "block",
                minWidth: "160px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "8px" }}>
                {GOOGLE_LOGO}
                <span style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a1a" }}>
                  {data.rating.toFixed(1)}
                </span>
              </div>
              <StarRating rating={Math.round(data.rating)} />
              <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
                {data.userRatingCount} reviews
              </p>
              <p style={{ fontSize: "12px", color: "#2d4a7a", marginTop: "4px", fontWeight: 600 }}>
                Leave a review →
              </p>
            </a>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ display: "flex", gap: "20px" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                flex: 1, height: "200px",
                backgroundColor: "#e8eaed",
                borderRadius: "12px",
              }} />
            ))}
          </div>
        )}

        {/* Cards */}
        {!loading && textReviews.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}>
            {textReviews.map((review, i) => (
              <div key={i} style={{
                backgroundColor: "white",
                border: "1px solid #e8eaed",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    backgroundColor: "white", border: "1px solid #e0e0e0",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {GOOGLE_LOGO}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>
                      {review.authorAttribution.displayName}
                    </p>
                    <p style={{ fontSize: "12px", color: "#888" }}>
                      {review.relativePublishTimeDescription}
                    </p>
                  </div>
                </div>

                <StarRating rating={review.rating} />

                <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.7, flex: 1 }}>
                  &ldquo;{review.text?.text}&rdquo;
                </p>

                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  paddingTop: "12px", borderTop: "1px solid #f0f0f0",
                }}>
                  {GOOGLE_LOGO}
                  <span style={{ fontSize: "11px", color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Posted on Google
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && textReviews.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", fontSize: "14px" }}>
            No reviews available at this time.
          </p>
        )}
      </div>
    </section>
  );
}
