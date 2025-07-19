<template>
  <div id="howWeWork" class="my-14 px-4 lg:px-20">
    <div class="text-center max-w-4xl mx-auto mb-12">
      <h1 class="uppercase font-medium text-2xl mb-4 md:text-4xl">How We Work</h1>
      <p class="text-base md:text-lg font-light">
        Smart Process. Strong Partnerships. Seamless Delivery.
        At MIRROR, we believe that great outcomes come from great processes. Our workflow is designed to deliver clarity, coordination, and confidence — from concept to construction. <br />
        At MIRROR, we don’t just deliver services — we build trust through performance. Let’s create smarter, faster, and more sustainable buildings — together.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      <Num
        v-for="(num, index) in nums"
        :key="index"
        :number="num.number"
        :title="num.title"
        :description="num.description"
      />
    </div>
  </div>
</template>

<script setup>
const nums = [
  {
    number: "01",
    title: "Discover & Understand",
    description: `We start with your goals.
    Every project begins with a deep dive into your requirements, timeline, and vision. Whether you're a developer, consultant, or contractor, we listen, analyze, and align with your project objectives.<br>
     Needs assessment<br>
     Site/context understanding<br>
     Scope definition<br>
     Kick-off meetings with stakeholders`,
  },
  {
    number: "02",
    title: "Design & Collaborate",
    description: `Engineering intelligence meets creative collaboration.
    Our expert teams across Structural, Architectural, MEP, and Interior Design disciplines begin developing coordinated design solutions using the latest BIM platforms and engineering tools.<br>
     Conceptual & detailed design<br>
     BIM modeling (LOD 100–500)<br>
     Multidisciplinary coordination<br>
     Regular design reviews & client feedback`,
  },
  {
    number: "03",
    title: "Model & Optimize (BIM)",
    description: `We digitize your design into a smart, buildable model.
    With precision modeling and clash detection, we ensure constructability and integration across all systems — reducing errors, delays, and surprises on site.<br>
     Clash-free BIM models<br>
     Quantity take-offs & cost estimates<br>
     4D scheduling & 5D cost simulation<br>
     Coordination with consultants & contractors`,
  },
  {
    number: "04",
    title: "Document & Deliver",
    description: `Clear drawings. Accurate data. Construction-ready deliverables.
    We provide high-quality documentation, shop drawings, and IFC files tailored to site execution and local authority approvals.<br>
     IFC, tender & construction documentation<br>
     BIM Execution Plans (BEP)<br>
     Shop drawings & detailing packages<br>
     COBie & as-built models for handover`,
  },
  {
    number: "05",
    title: "Support & Evolve",
    description: `We stay with you beyond delivery.
    Our team continues to support your project during construction and into facility management — adapting designs, solving problems, and ensuring ongoing success.<br>
     On-demand technical support<br>
     Site coordination & RFIs<br>
     Model updates during construction<br>
     BIM for FM & digital twin integration`,
  },
];
</script>
