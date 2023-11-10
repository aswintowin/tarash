<script>
  /**
   * @type {string}
   */
  export let sectionId;

  /**
   * @type {string}
   */
  export let backGroundColor = "bg-white";
  export let padding = "md:p-24 p-10";
</script>

<section id={sectionId} class={`${padding} ${backGroundColor}`}>
  <slot />
</section>