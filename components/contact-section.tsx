export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-foreground">Get in Touch</h2>
        <p className="text-base sm:text-lg text-foreground/80 mb-12 md:mb-20 max-w-2xl leading-relaxed">
          Contact our advocates directly for legal consultation. We are committed to responding promptly and providing
          trusted guidance for your legal needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="p-6 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Lokesh Kumar Raghav</h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-6 md:mb-8 leading-relaxed">
              Senior Advocate with 12+ years of experience in civil, criminal, and matrimonial law.
            </p>
            <div className="space-y-3">
              <a
                href="tel:8059062613"
                className="block text-primary font-semibold hover:text-primary/80 transition-colors text-base underline"
              >
                Call: 8059062613
              </a>
              <a
                href="https://wa.me/918059062613"
                className="block text-primary font-semibold hover:text-primary/80 transition-colors text-base underline"
              >
                WhatsApp: 8059062613
              </a>
            </div>
          </div>

          <div className="p-6 md:p-8 border border-border">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Vikas Raghav</h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-6 md:mb-8 leading-relaxed">
              Dedicated advocate focused on professional ethics and effective legal assistance across diverse practice
              areas.
            </p>
            <div className="space-y-3">
              <a
                href="tel:8851820604"
                className="block text-primary font-semibold hover:text-primary/80 transition-colors text-base underline"
              >
                Call: 8851820604
              </a>
              <a
                href="https://wa.me/918851820604"
                className="block text-primary font-semibold hover:text-primary/80 transition-colors text-base underline"
              >
                WhatsApp: 8851820604
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
