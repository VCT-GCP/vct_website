import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Janga Rohitha",
    role: "GCP Data Engineering Student",
    text: "The training was practical and industry-focused, with clear explanations from basics to advanced levels. Real-time projects gave me hands-on experience with data pipelines, and the interview support and mock sessions boosted my confidence."
  },
  {
    name: "Sathwik Yarraganti",
    role: "GCP Data Engineering Student",
    text: "I had a great experience at Vaarahi Cloud Technologies. I learned Big Data, Hadoop, PySpark, Airflow, GCS, BigQuery, Dataproc, Dataflow, Cloud Composer, along with basics of AWS, Azure, GitHub, and Jira. The industry-focused training and experienced mentors helped me understand corporate work culture. I truly liked their tagline, “One Institute One Course.” Special thanks to Satish Sir for this amazing platform."
  },
  {
    name: "venkata padmasai Arava",
    role: "GCP Data Engineering Student",
    text: "I recently completed my course at Vaarahi Cloud Technology, and it was a great experience. Coming from a non-IT background, I was initially scared, but Satish sir’s guidance and motivation helped me gain confidence within three months. The supportive staff and encouraging teaching style made a big difference. I highly recommend Vaarahi, especially for non-IT students aiming to become GCP Data Engineers."
  },
  {
    name: "Vamshi Krishna",
    role: "GCP Data Engineering Student",
    text: "I had an amazing experience at Vaarahi Cloud Technologies. The GCP Data Engineer course was well-structured, and Satish Panthula sir explained end-to-end pipelines in a simple and clear way. The friendly staff, especially Ravi anna, were very supportive. This course helped me improve my skills and gain confidence—highly recommended for anyone looking to upskill and grow in their career."
  },
  {
    name: "Siva Sai",
    role: "GCP Data Engineering Student",
    text: "I recently completed my course at Vaarahi Cloud Technology and had a great experience. Coming from a non-IT background, I was initially unsure, but Satish sir’s guidance and motivation helped me gain confidence quickly. The supportive staff and encouraging teaching style made learning easier. I highly recommend Vaarahi for non-IT students aiming to build a career as GCP Data Engineers."
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0
  })
};

// Star rating helper
const StarRating = ({ rating, color }: { rating: number; color: string }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        viewBox="0 0 20 20"
        className="w-4 h-4"
        fill={star <= rating ? color : "#e5e7eb"}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=82ec823d9eac6353&sxsrf=ANbL-n689EBAy5zq8uVHXAl2aPQejnGO_Q:1773814227168&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUrnsPjLrfDe6dK6igbV0_zDCldK78Iv9Cj8Ai3hnBy6YjnQtNVfKvksxnKkwVdGGoulaYBATWcnvE-9uffURI3wxVjOIxYsyajkQNdsy1o5iSWKIqbLDHuDLXMy9yCFBcM91z-UPjJt7NQ5iNE2CXWgZtK8ooX1Fat6x34iCR7-1nK0Gw%3D%3D&q=Vaarahi+Cloud+Technologies+%E2%80%93+GCP+Data+Engineering+Training+Institute+Reviews&sa=X&ved=2ahUKEwiypKH35KiTAxVAXWwGHZOTE28Q0bkNegQIPhAH&biw=1536&bih=791&dpr=1.25";

// ⬇️  Replace with your real Trustpilot URL once you have one
const TRUSTPILOT_URL = "https://www.trustpilot.com/review/vaarahicloudtechnologies.com";

const TestimonialsSection = () => {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection
    ]);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  return (
    <section id="testimonials" className="py-8 sm:py-14 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 dark:bg-zinc-900/80 rounded-2xl shadow-xl border border-border p-4 sm:p-10">

            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
                What Our <span className="gradient-text">Students</span> Say
              </h2>
            </div>

            <div
              className="relative max-w-3xl mx-auto overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onTouchCancel={() => setIsPaused(false)}
            >
              <div className="glass-card p-5 sm:p-10 relative">

                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/20 absolute top-6 left-6" />

                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 120, damping: 20 },
                      opacity: { duration: 0.3 }
                    }}
                    className="text-center"
                  >
                    <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4 sm:mb-8 italic">
                      "{testimonials[current].text}"
                    </p>

                    <div>
                      <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {testimonials[current].name[0]}
                        </span>
                      </div>

                      <p className="font-bold text-foreground">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={() => paginate(-1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setCurrent([i, i > current ? 1 : -1])
                        }
                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === current
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                          }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => paginate(1)}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

              </div>
            </div>

            {/* ── Review Platform Badges ── */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

              {/* Google Reviews Badge */}
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 min-w-[220px]"
              >
                {/* Google "G" logo */}
                <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div>
                  <p className="text-xs text-muted-foreground font-medium leading-none mb-1">Google Reviews</p>
                  <StarRating rating={5} color="#FBBC05" />
                  <p className="text-[11px] text-muted-foreground mt-1 group-hover:text-primary transition-colors">
                    See all reviews →
                  </p>
                </div>
              </a>

              {/* Trustpilot Badge */}
              <a
                href={TRUSTPILOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 min-w-[220px]"
              >
                {/* Trustpilot star logo */}
                <svg viewBox="0 0 126 117" className="w-7 h-7 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="63,0 82,40 126,46 95,76 103,117 63,97 23,117 31,76 0,46 44,40" fill="#00B67A" />
                  <polygon points="63,0 82,40 126,46 95,76 103,117 63,97" fill="#005128" />
                </svg>
                <div>
                  <p className="text-xs text-muted-foreground font-medium leading-none mb-1">Trustpilot</p>
                  <StarRating rating={5} color="#00B67A" />
                  <p className="text-[11px] text-muted-foreground mt-1 group-hover:text-primary transition-colors">
                    See all reviews →
                  </p>
                </div>
              </a>

            </div>
            {/* ── end badges ── */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;