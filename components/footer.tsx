export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h3 className="text-base md:text-lg font-bold mb-2">Raghav & Associates</h3>
          <p className="text-xs md:text-sm opacity-90">Professional Legal Services</p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8 text-center text-xs md:text-sm opacity-80">
          <p className="mb-3 md:mb-4">© Raghav & Associates. All Rights Reserved.</p>
          <p className="text-xs leading-relaxed">
            This website is for informational purposes only and does not constitute legal advice. Contacting the firm
            does not create a lawyer-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
