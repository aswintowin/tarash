<script>
  import { Carousel } from "flowbite-svelte";
  import Section from "./Section.svelte";

  import StoreFront from "$lib/images/1.jpg";
  import Inside1 from "$lib/images/2.jpg";
  import Inside2 from "$lib/images/3.jpg";
  import Inside3 from "$lib/images/4.jpg";
  import Machines from "$lib/images/Inside1.jpg";
  import Inside2O from "$lib/images/home/Inside2.jpg";
  import Inside23 from "$lib/images/home/Inside3.jpg";
  import Machines2 from "$lib/images/home/Machine1.jpg";
  import StoreFront1 from "$lib/images/home/Storefront.jpeg";

  const images = [
    { alt: "Store front", src: StoreFront },
    { alt: "Inside1", src: Inside1 },
    { alt: "Machines", src: Inside2 },
    { alt: "Machines", src: Inside3 },
    { alt: "Machines", src: Machines },
    { alt: "Machines", src: Inside2O },
    { alt: "Machines", src: Inside23 },
    { alt: "Machines", src: Machines2 },
    { alt: "Machines", src: StoreFront1 },
  ];
</script>

<Section sectionId="home" backGroundColor="bg-slate-900">
  <div class="home bg-white p-10 md:rounded-2xl">
    <div class="flex flex-col justify-center text-center">
      <p class="font-semibold mb-4 text-2xl text-cyan-800 font-serif">
        Comprehensive Laundry Services Tailored to Your Convenience
      </p>

      <p class="font-bold mb-6 text-4xl text-cyan-500">Free pickup and Delivery</p>
    </div>
    <Carousel {images} let:Controls duration={3500}>
      <Controls />
    </Carousel>
  </div>
</Section>

<style>
  .home {
    max-width: 72rem;
    margin: 0 auto;
  }
</style>
