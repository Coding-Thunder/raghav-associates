export function WhyChooseSection() {
  const reasons = [
    "Professional and ethical legal practice",
    "Client-focused legal approach",
    "Transparent communication",
    "Strong courtroom representation",
    "Attention to detail in every legal matter",
    "Commitment to justice and client interest",
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-foreground">
          Why Choose Raghav & Associates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">✓</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
