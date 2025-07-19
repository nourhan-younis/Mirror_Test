<template>
  <section id="portfolio" class="py-20 px-4 md:px-20 bg-gray-100">
    <div class="flex justify-between mb-6">
         <button
        @click="goBack"
        class="inline-block px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded hover:bg-gray-400 transition-all mr-4 cursor-pointer"
      >
        Back
      </button>
  <a
    href="/pdfs/MIRROR ENGINEERING.pdf"
    download
    class="inline-block px-6 py-3 bg-[#BC9565] text-white font-medium rounded hover:bg-[#a67844] transition-all"
  >
    Download Portfolio PDF
  </a>
</div>
    <div class="text-center mb-12">
      <h1 class="uppercase text-3xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
      <p class="max-w-2xl mx-auto font-light">
        Explore our completed projects and ongoing works across the Middle East.
      </p>
    </div>
    <div class="mb-16">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Completed Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          v-for="(project, index) in completedProjects"
          :key="'completed-' + index"
          :title="project.title"
          :location="project.location"
          :client="project.client"
          :scope="project.scope"
          :lod="project.lod"
          :services="project.services"
          :images="project.images"
        />
      </div>
    </div>
    <div>
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Ongoing Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          v-for="(project, index) in ongoingProjects"
          :key="'ongoing-' + index"
          :title="project.title"
          :subtitle="project.subtitle"
          :location="project.location"
          :client="project.client"
          :scope="project.scope"
          :lod="project.lod"
          :services="project.services"
          :images="project.images"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const goBack = () => {
  window.history.back();
};
const completedProjects = [
  {
    title: "Luxury Residential Villa",
    location: "Sobha Heart Land II, Dubai, UAE",
    client: "PNC Architects, Sobha Developments",
    scope: "Full BIM Architectural, Structural, MEP Modeling",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural, Structural, MEP & ID Modeling",
      "Family creation (parametric & custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
  {
    title: "Radiant Square Towers",
    location: "Reem Island, Abu Dhabi, UAE",
    client: "Radiant Developments",
    scope: "Full BIM Architectural, Structural, MEP Modeling",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural, Structural, MEP Modeling",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
  {
    title: "Guggenheim Museum Abu Dhabi",
    location: "Saadiyat Island, Abu Dhabi, UAE",
    client: "FIBREX Construction Group",
    scope: "Full BIM Architectural Façade Modeling –Revit",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural Facade",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
  {
    title: "CENTRE OFCURIOSITY",
    location: "Saadiyat Island, Abu Dhabi, UAE",
    client: "FIBREX Construction Group",
    scope: "Full BIM Architectural Façade Modeling –Revit",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural Facade",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
    {
    title: "FACTORY WITH COLD STORES FOR DATES WITH CAPACITY OF 32000 TON",
    location: "East Ewainat, New Valley, Egypt",
    client: "RAVEDO Engineering Consultants",
    scope: " Full BIM Architectural, Structural, MEP Modeling.",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural Facade",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  }
];
const ongoingProjects = [
    {
    title: "TRIPLE BAY MARINA VILLAGE",
    subtitle: "Village Boutique Hotel",
    location: "Red Sea, KSA.",
    client: "DOHA Extraco",
    scope: " Full BIM External Masonry Finishes & GFRC Façade Works.",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural Facade & ID Modeling.",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
      {
    title: "TRIPLE BAY MARINA VILLAGE",
    subtitle:"Marina Lifestyle Hotel",
    location: " Red Sea, KSA.",
    client: "DOHA Extraco",
    scope: " Full BIM External Masonry Finishes & GFRC Façade Works.",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural  Façade & ID Modeling",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
      {
    title: "SHURAH ISLAND EAST HOTELS.",
    subtitle:"Residential Villas Compound ",
    location: "Red Sea, KSA.",
    client: "DEPA Interiors",
    scope: "Full BIM Architectural interior Modeling – Revit",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural & ID Modeling.",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
      {
    title: "EXIT 10 Development",
    location: "Reyadah, KSA.",
    client: "Saudi Entertainment Venture ",
    scope: " Full BIM External Masonry Finishes & GFRG Façade Works.",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural Façade Modeling.",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
  },
        {
    title: "KING SALMAN PARK",
    location: " Riyadh, KSA.",
    client: "Saudi Entertainment Venture ",
    scope: " Full BIM UHPC Panel with GRP Base Formwork",
    lod: "400-500",
    services: [
      "BIM modeling for Architectural Façade Modeling.",
      "Family creation (parametric and custom)",
      "Clash detection & coordination",
      "Scan to BIM (Point Cloud conversion)",
      "Construction documentation (CDs)",
      "Revit template customization",
      "BIM implementation support",
    ],
    images:[

    ]
  }
]
</script>