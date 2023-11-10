<script>
  /**
   * @type {string}
   */
  export let sectionId;

  /**
   * @type {string}
   */
  export let backGroundColor = "bg-white";
</script>

<section id={sectionId} class={`md:p-24 p-10 ${backGroundColor}`}>
  <slot />
</section>
