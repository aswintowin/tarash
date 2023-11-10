<script>
  import { readable } from "svelte/store";
  import Section from "./Section.svelte";
  import Laundry from "$lib/images/services/laundry.jpg";
  import WDF from "$lib/images/services/washfolddry.jpg";
  import PAD from "$lib/images/services/pickup.jfif";
  import Header from "./Header.svelte";

  const services = readable(
    Object.freeze([
      {
        name: "COIN & COINLESS MACHINES",
        pic: Laundry,
        description:
          "Our environmentally friendly Wascomat machines use less water and dry faster so you are done fast! You can pay with coins, Visa, or MasterCard. "
      },
      {
        name: "WASH, DRY & FOLD SERVICE",
        pic: WDF,
        description:
          "Don’t waste valuable time doing your own laundry. Let us handle it for you! Offered 7 days a week, same day or next day available."
      },
      {
        name: "FREE PICKUP & DELIVERY",
        pic: PAD,
        description:
          "Hassle-free pickup and delivery laundry service! With our convenient service, you can enjoy clean, fresh clothes without ever leaving your home."
      }
    ])
  );
</script>

<Section sectionId="services" backGroundColor="bg-zinc-100">
  <div class="flex flex-col items-center">
    <Header title="Our Services" />

    <div class="grid gap-10 grid-cols-1 md:grid-cols-3">
      {#each $services as service}
        <div class=" flex max-w-sm rounded-3xl flex-col items-center">
          <img class="mb-4 w-xs h-80 rounded-lg" alt={service.name} src={service.pic} />
          <h5 class="m-4 text-xl font-bold text-slate-900 font-serif">
            {service.name}
          </h5>
          <p class="m-4 text-xl">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</Section>
