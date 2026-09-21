export const siteUrl = "https://www.calabrese.dev";
export const siteTitle = "Peter Calabrese | Full-Stack Software Engineer";
export const siteDescription =
  "New York full-stack software engineer specializing in React, TypeScript, Java, and Azure. Explore my resume and projects, or discuss a role or freelance work.";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Peter Calabrese",
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: "Full-Stack Software Engineer",
      homeLocation: { "@type": "City", name: "New York" },
      sameAs: [
        "https://github.com/peter-calabrese",
        "https://www.linkedin.com/in/peter-calabrese/",
        "https://x.com/Calabreez",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Peter Calabrese",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
  ],
};
