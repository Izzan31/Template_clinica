import { clinicConfig } from "@/config/clinic.config";

export function StructuredData() {
  const heroImage = clinicConfig.hero.imageSrc.startsWith("http")
    ? clinicConfig.hero.imageSrc
    : `${clinicConfig.websiteUrl}${clinicConfig.hero.imageSrc}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicConfig.name,
    url: clinicConfig.websiteUrl,
    image: heroImage,
    telephone: clinicConfig.phoneDisplay,
    email: clinicConfig.email,
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicConfig.address,
      addressLocality: clinicConfig.city,
      addressRegion: clinicConfig.state,
      addressCountry: "BR"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00"
      }
    ],
    sameAs: [clinicConfig.instagram],
    employee: {
      "@type": "Person",
      name: clinicConfig.responsible,
      identifier: clinicConfig.cro
    }
  };

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c")
      }}
      type="application/ld+json"
    />
  );
}
