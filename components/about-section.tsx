export function AboutSection() {
  const highlights = [
    "Client-focused approach",
    "Years of courtroom experience",
    "Comprehensive legal services",
    "Clear and transparent communication",
    "Professional ethics and integrity",
    "Attention to detail in every matter",
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-20 text-foreground">About the Firm</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-0">
              Raghav & Associates is a professional law firm committed to providing reliable and comprehensive legal
              services. The firm represents clients with integrity, discretion, and a strong understanding of legal
              procedures. With a client-focused approach and years of courtroom experience, every legal matter is
              handled with seriousness, responsibility, and attention to detail.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 md:mb-8">Why Choose Us</h3>
            <ul className="space-y-3 md:space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
