"use client"

export function HeroSection() {
  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleWhatsApp = (phone: string) => {
    window.location.href = `https://wa.me/${phone}`
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground px-4 py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 text-balance">
            Raghav & Associates
          </h1>
          <div className="h-1 w-20 bg-accent mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-tight mb-2 text-primary-foreground">
            Advocates & Legal Consultants
          </p>
          <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed mb-8 md:mb-12 max-w-xl">
            Professional legal representation with integrity and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleCall("8059062613")}
              className="px-6 sm:px-8 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
            >
              Call Now
            </button>
            <button
              onClick={() => handleWhatsApp("918059062613")}
              className="px-6 sm:px-8 py-3 border border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              WhatsApp
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <svg
            className="w-full max-w-md opacity-30"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
            <path
              d="M 200 100 L 250 150 L 250 300 L 150 300 L 150 150 Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <line x1="180" y1="200" x2="220" y2="200" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="180" x2="200" y2="220" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
