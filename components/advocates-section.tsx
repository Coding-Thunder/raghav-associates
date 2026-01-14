import Image from "next/image"
import lokesh from "@/public/lokesh.webp"
import vikas from "@/public/vikas.webp"

export function AdvocatesSection() {
  const advocates = [
    {
      name: "Lokesh Kumar Raghav",
      designation: "Advocate",
      barNumber: "P/1721",
      experience: "More than 12 years",
      phone: "8059062613",
      description:
        "An experienced legal professional with extensive exposure to handling civil, criminal, matrimonial, and other legal matters. Known for a disciplined approach, practical legal insight, and dedicated client representation.",
      image: lokesh.src,
    },
    {
      name: "Vikas Raghav",
      designation: "Advocate",
      barNumber: "Ph/6136",
      // experience: "More than 1 year",
      experience: "",
      phone: "8851820604",
      description:
        "A committed legal professional involved in handling civil, criminal, matrimonial, and other legal matters. Focused on professional ethics, legal research, and effective client assistance.",
      // description:
      //   "",
      image: vikas.src,
    },
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-20 text-foreground">Our Advocates</h2>

        <div className="space-y-12 md:space-y-16">
          {advocates.map((advocate, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="w-full aspect-square bg-muted overflow-hidden">
                  <Image
                    src={advocate.image || "/placeholder.svg?height=256&width=256&query=advocate portrait"}
                    alt={advocate.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text on right, left-aligned */}
              <div className="flex flex-col justify-start w-full md:w-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{advocate.name}</h3>
                <p className="text-base sm:text-lg text-primary font-semibold mb-3">{advocate.designation}</p>

                <div className="text-xs sm:text-sm text-foreground/70 mb-4 space-y-1">
                  <p>Bar Number: {advocate.barNumber}</p>
                  <p>Experience: {advocate.experience}</p>
                </div>

                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl mb-6 md:mb-8">
                  {advocate.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm">
                  <a
                    href={`tel:${advocate.phone}`}
                    className="font-semibold text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Call: {advocate.phone}
                  </a>
                  <a
                    href={`https://wa.me/91${advocate.phone}`}
                    className="font-semibold text-primary hover:text-primary/80 transition-colors underline"
                  >
                    WhatsApp: {advocate.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
