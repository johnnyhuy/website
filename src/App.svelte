<script lang="typescript">
  import { onMount } from "svelte";
  import Tailwind from "./Tailwind.svelte";

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style lang="postcss">
  :global(body) {
    @apply bg-gray-900;
  }
</style>

<div class="bg-gray-500">
  <header>
    <p class="font-bold">Welcome!</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
  </header>
</div>
