<script lang="typescript">
  import { onMount } from "svelte";
  import "./Tailwind.svelte";
  import Icon from "./Icon.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./routes/Blog.svelte";
  import About from "./routes/About.svelte";
  import Blog from "./routes/Blog.svelte";

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  :global(body) {
    @apply bg-white;
    font-family: "Inter", sans-serif;
  }
</style>

<div>
  <header class="container mx-auto flex flex-row py-8 px-5">
    <Router>
      <Link to="/" class="flex-none">
        <img src="/images/logos/final-logo.svg" alt="logo" class="h-14" />
      </Link>
      <nav
        class="flex-grow justify-end flex items-center text-heading font-semibold">
        <Link to="about" class="hover:text-gray-500 px-6">
          <span class="align-middle">Projects</span>
        </Link>
        <Link to="blog" class="hover:text-gray-500 px-6">
          <span class="align-middle">Stuff</span>
        </Link>
        <a href="https://www.buymeacoffee.com/johnnyhuy" class="hover:text-gray-500 px-6">
          <Icon name="email-outline" class="align-middle mr-1" />
          <span class="align-middle">info@johnnyhuy.com</span>
        </a>
        <a target="_blank" href="https://www.buymeacoffee.com/johnnyhuy" class="text-amber-600 hover:text-amber-400 px-4">
          <Icon name="heart-outline" class="align-middle mr-1" />
          <span class="align-middle">Buy me a coffee</span>
        </a>
      </nav>
    </Router>
  </header>
  <div class="font-semibold">
    <p class="text-5xl">a <span class="px-3 py-2 rounded-xl bg-amber-600 text-white">Cloud</span> engineer</p>
    <p>from <span class="text-amber-600 font-bold">Melbourne, Australia</span></p>
  </div>
</div>
