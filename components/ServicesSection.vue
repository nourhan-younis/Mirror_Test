<template>
  <div id="services" class="bg-gray-100 py-10 px-4 lg:px-20 flex flex-col gap-10">
    <div class="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-6">

 
      <div  class="flex flex-wrap justify-center gap-6 w-full">
            <div class="text-center lg:text-left mb-5 sm:w-[90%] md:w-[80%] lg:w-[30%] xl:w-[28%] p-6 sm:p-8 lg:p-10 rounded-xl" >
        <h1 class="font-bold text-3xl mb-4">Our Services</h1>
        <p class="font-light">
          Far far away behind the word mountains far from the countries Vokalia and Consonantia
          there live the blind texts.
        </p>
      </div>  
        <CardIcon
          v-for="(service, index) in servicesRow1"
          :key="'row1-' + index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>

    
  </div>
</template>

<script setup>
const servicesRow1 = [
  {
    icon: "fa-solid fa-house",
    title: "BIM Services",
    description: `From visualization to execution.<br>
We digitize your design intent into intelligent, coordinated BIM models that drive accuracy and collaboration throughout the project lifecycle.<br><br>
 3D / 4D / 5D BIM Modeling<br>
 Clash Detection & Coordination<br>
 BIM for Structure, Architecture & MEP<br>
 Quantity Take-off & Cost Estimation<br>
 Scan to BIM & As-Built Modeling<br>
 BIM Execution Planning (BEP)<br>
 COBie & FM-Ready Deliverables`,
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Engineering Design",
    description: `Complete design solutions across all major disciplines.<br>
We offer fully integrated design services that align creativity with constructability — ensuring performance, compliance, and value from the ground up.<br><br>

 <strong>Structural Engineering</strong><br>
 Reinforced Concrete & Steel Design<br>
 Foundation & Slab Detailing<br>
 Precast & Post-Tension Design Support<br>
 Structural Load Analysis & Code Compliance<br>
 Retrofitting & Rehabilitation Solutions<br><br>

 <strong>Architectural Design</strong><br>
 Concept to IFC Documentation<br>
 BIM-Based Architecture & Detailing<br>
 Facade Systems & Finishing Schedules<br>
 Space Planning & Code Coordination<br>
 Design Development & Regulatory Compliance<br><br>

 <strong>MEP Engineering (Mechanical, Electrical & Plumbing)</strong><br>
 HVAC, Lighting, Power, Drainage & Water Systems<br>
 MEP BIM Modeling & Coordination<br>
 Equipment Sizing & Load Calculations<br>
 Energy Efficiency & System Optimization<br>
 Clash-Free Integrated Design<br><br>

 <strong>Interior Design (ID)</strong><br>
 Interior BIM & Detailed Joinery Modeling<br>
 Material Specs & Finishing Layouts<br>
 FF&E Integration<br>
 Lighting Coordination & RCPs<br>
 Buildable Shop Drawings`,
  },
   {
    icon: "fa-solid fa-shapes",
    title: "Project Support & Documentation",
    description: `Efficiency at every step.<br>
We ensure your project runs smoothly from tender to turnover.<br><br>
 CAD to BIM Conversion<br>
 IFC File Preparation & Coordination<br>
 Shop Drawings & Construction Documentation<br>
 BIM for Facility Management (FM)<br>
 Issue Tracking & Clash Resolution<br>
 Technical Support for Consultants & Contractors`,
  },
  {
    icon: "fa-solid fa-gear",
    title: "Digital Tools & Automation",
    description: `Faster workflows. Smarter modeling. Better outcomes.<br><br>
 Dynamo Scripting for BIM Automation<br>
 Parametric & Generative Design<br>
 Custom Revit Family Creation<br>
 AR/VR Integration for Design Reviews<br>
 Digital Twin & Smart Building Connectivity<br>
 AI-Enhanced Modeling Workflows`,
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Engineering Disciplines",
    description: `Design-Driven. Detail-Focused. Discipline-Smart.<br>
MIRROR delivers complete engineering solutions across all major design disciplines, ensuring every project is technically sound, beautifully planned, and built to perform.<br><br>

 Structural Engineering<br>
 Reinforced Concrete & Steel Design<br>
 Foundation & Slab Detailing<br>
 Precast & Post-Tension Design Support<br>
 Structural Load Analysis & Code Compliance<br>
 Retrofitting & Rehabilitation Solutions<br><br>

 Architectural Design<br>
 Concept to IFC Documentation<br>
 BIM-Based Architecture & Detailing<br>
 Facade Systems & Finishing Schedules<br>
 Space Planning & Code Coordination<br>
 Design Development & Regulatory Compliance<br><br>

 MEP Engineering (Mechanical, Electrical & Plumbing)<br>
 HVAC, Lighting, Power, Drainage & Water Systems<br>
 MEP BIM Modeling & Coordination<br>
 Equipment Sizing & Load Calculations<br>
 Energy Efficiency & System Optimization<br>
 Clash-Free Integrated Design<br><br>

 Interior Design (ID)<br>
 Interior BIM & Detailed Joinery Modeling<br>
 Material Specs & Finishing Layouts<br>
 FF&E Integration<br>
 Lighting Coordination & RCPs<br>
 Buildable Shop Drawings`,
  },
]




</script>
