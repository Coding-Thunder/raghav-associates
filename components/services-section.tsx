export function ServicesSection() {
  const services = [
    "Civil Matters",
    "Criminal Matters",
    "Matrimonial & Family Disputes",
    "Legal Advisory & Consultation",
    "Legal Documentation",
    "Court Representation & Litigation",
    "Other Legal Matters as Required",
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Legal Services</h2>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 md:mb-12 leading-relaxed">
          We provide professional legal assistance for all types of legal matters, including but not limited to:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                <span className="text-primary-foreground text-sm font-semibold">✓</span>
              </div>
              <p className="text-sm sm:text-base text-foreground font-medium">{service}</p>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          We handle a wide range of legal matters and provide complete legal support under one roof.
        </p>
      </div>
    </section>
  )
}
