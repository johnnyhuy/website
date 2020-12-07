<script lang="typescript">
  import router from 'page'
  import "./Tailwind.svelte"
  import Icon from "./Icon.svelte"
  import ProjectsIndex from "./pages/projects/Index.svelte"
  import HomeIndex from "./pages/home/Index.svelte"
  import StuffShow from "./pages/stuff/Show.svelte"
  import StuffIndex from "./pages/stuff/Index.svelte"
  import { onMount } from "svelte"

  let path = window.location.pathname
  
  onMount(() => {
    path = window.location.pathname
  })

  let page: any
  let params: any

  router('/', () => {
    page = HomeIndex
  })
  router('/projects', () => {
    page = ProjectsIndex
  })
  router('/stuff', () => {
    page = StuffIndex
  })
  router(
    '/stuff/:id',
    (ctx, next) => {
      params = ctx.params
      next()
    },
    () => {
      page = StuffShow
    }
  )

  router.start()
</script>

<style lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  :global(body) {
    @apply bg-white;
    font-family: "Inter", sans-serif;
  }
</style>

<div>
  <header class="container mx-auto flex flex-row py-8">
    <a href="/" class="flex-none">
      <img src="/images/logos/final-logo.svg" alt="logo" class="h-14" />
    </a>
    <nav
      class="flex-grow justify-end flex items-center text-heading font-semibold">
      <a
        href="/projects"
        class="hover:text-gray-500 px-6"
        class:text-amber-500={path === '/projects'}>
        <span class="align-middle">Projects</span>
      </a>
      <a
        href="/stuff"
        class="hover:text-gray-500 px-6"
        class:text-amber-500={path === '/stuff'}>
        <span class="align-middle">Stuff</span>
      </a>
      <a href="mailto:info@johnnyhuy.com," class="hover:text-gray-500 px-6">
        <Icon name="email-outline" class="align-middle w-4 h-4 mr-1" />
        <span class="align-middle">info@johnnyhuy.com</span>
      </a>
      <a
        target="_blank"
        href="https://ko-fi.com/johnnyhuy"
        class="text-amber-600 hover:text-amber-400 px-4">
        <Icon name="heart-outline" class="align-middle w-4 h-4 mr-1" />
        <span class="align-middle">Buy me a coffee</span>
      </a>
    </nav>
  </header>
  <svelte:component this={page} {...params} />
</div>
