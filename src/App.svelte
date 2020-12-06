<script lang="typescript">
  import { onMount } from "svelte";
  import "./Tailwind.svelte";
  import Icon from "./Icon.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import "./routes/stuff/Show.svelte";
  import "./routes/about/Show.svelte";

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

  .github {
    color: #4E5A68
  }

  .linkedin {
    color: #006699
  }

  .dark-cloud-pair {
    @apply relative;
    
    left: 50%;
    top: 60px;
  }

  .me {
    @apply w-48 rounded-full absolute shadow-lg;
  }

  .dark-cloud {
    @apply absolute;
    
    height: 290px;
  }

  .cloud {
    @apply absolute;

    right: 20px;
    bottom: 0;
    width: 250px;
    animation: shrink 1s infinite alternate;
    animation-delay: 1s;
  }

  .light-left-cloud {
    @apply absolute;

    left: 15%;
    bottom: 0;
    animation: shrink 1s infinite alternate;
  }

  .light-right-cloud {
    @apply absolute;

    right: 40px;
    top: 0;
    animation: shrink 1s infinite alternate;
    animation-delay: .5s;
  }

  .lighter-cloud {
    @apply absolute;

    left: 30%;
    top: 0;
    animation: shrink 1s infinite alternate;
    animation-delay: 1.5s;
  }
  
  .landing {
    height: 390px;
  }
  
  .special {
    @apply container mx-auto mt-24;
  }

  .green-underscore {
    @apply absolute;

    left: 60px;
    top: 64px;
    animation: underscore 1s steps(5, start) infinite;
  }

  .docker {
    @apply absolute;

    left: 228px;
    top: 135px;
    animation: docker 1s infinite alternate;
  }

  .docker-shadow {
    @apply absolute;

    left: 240px;
    top: 240px;
    animation: docker-shadow 1s infinite alternate;
  }

  @keyframes shrink {
    to {
      transform: scaleX(.9) scaleY(.9);
    }
  }

  @keyframes docker-shadow {
    to {
      transform: scaleX(.7);
    }
  }

  @keyframes underscore {
    to {
      visibility: hidden;
    }
  }

  @keyframes docker {
    to {
      transform: translateY(-10px);
    }
  }

</style>

<div>
  <header class="container mx-auto flex flex-row py-8">
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
        <a href="mailto:info@johnnyhuy.com," class="hover:text-gray-500 px-6">
          <Icon name="email-outline" class="align-middle w-4 h-4 mr-1" />
          <span class="align-middle">info@johnnyhuy.com</span>
        </a>
        <a target="_blank" href="https://ko-fi.com/johnnyhuy" class="text-amber-600 hover:text-amber-400 px-4">
          <Icon name="heart-outline" class="align-middle w-4 h-4 mr-1" />
          <span class="align-middle">Buy me a coffee</span>
        </a>
      </nav>
    </Router>
  </header>
  <div class="landing flex relative container mx-auto font-semibold">
    <div class="absolute w-full h-full">
      <div class="dark-cloud-pair">
        <img src="/images/dark-cloud.svg" alt="dark-cloud" class="dark-cloud">
        <div class="relative">
          <img src="/images/me.jpg" alt="johnny" class="me">
          <div style="background-color: #455577; left: 240px; top: -30px" class="absolute inline-block p-4 rounded-full shadow-lg">
            <img src="/images/logos/kubernetes.svg" alt="johnny" class="w-12 h-12">
          </div>
          <div style="background-color: #F3F7FB; left: 240px; top: 90px" class="absolute inline-block p-4 rounded-full shadow-lg">
            <img src="/images/logos/azure.svg" alt="johnny" class="w-12 h-12">
          </div>
          <div style="background-color: #F4FFFE; left: 200px; top: 200px" class="absolute inline-block p-4 rounded-full shadow-lg">
            <img src="/images/logos/figma.svg" alt="johnny" class="w-12 h-12">
          </div>
          <div style="background-color: #FFF4F4; left: 90px; top: 240px" class="absolute inline-block p-4 rounded-full shadow-lg">
            <img src="/images/logos/laravel.svg" alt="johnny" class="w-12 h-12">
          </div>
          <div style="background-color: #4B4841; left: -30px; top: 240px" class="absolute inline-block p-4 rounded-full shadow-lg">
            <img src="/images/logos/aws.svg" alt="johnny" class="w-12 h-12">
          </div>
        </div>
      </div>
      <img src="/images/cloud.svg" alt="cloud" class="cloud">
      <img src="/images/light-cloud.svg" alt="light-right-cloud" class="light-right-cloud">
      <img src="/images/light-cloud.svg" alt="light-left-cloud" class="light-left-cloud">
      <img src="/images/lighter-cloud.svg" alt="lighter-cloud" class="lighter-cloud">
    </div>
    <div class="relative z-50 mt-20">
      <p class="text-4xl">a <span class="inline-block px-3 py-2 rounded-xl bg-amber-600 text-white">Cloud</span> engineer</p>
      <p class="text-3xl py-4">from <span class="text-amber-600 align-middle font-bold mr-2">Melbourne, Australia</span><img src="/images/australia.png" alt="australia" class="inline align-middle w-8"></p>
      <a target="_blank" href="https://github.com/johnnyhuy" class="github text-xl mr-4"><Icon name="github-outline" class="w-6 h-6 align-middle mr-2" /><span class="align-middle">GitHub</span></a>
      <a target="_blank" href="https://www.linkedin.com/in/johnnyhuy/" class="linkedin text-xl"><Icon name="linkedin-outline" class="w-6 h-6 align-middle mr-2" /><span class="align-middle">LinkedIn</span></a>
    </div>
  </div>
  <div class="special">
    <div class="relative">
      <img src="/images/windows.svg" alt="windows" style="left: 0; top: 0" class="absolute">
      <img src="/images/green-underscore.svg" alt="underscore" class="green-underscore">
      <img src="/images/docker-shadow.svg" alt="shadow" class="docker-shadow">
      <img src="/images/docker.svg" alt="docker" class="docker">
    </div>
  </div>
</div>
