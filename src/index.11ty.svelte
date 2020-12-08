<script lang="typescript" context="module">
  export const data = () => {
    return {
      layout: 'base.njk',
      title: 'Johnny',
    }
  }
</script>

<script lang="typescript">
  import Nav from './components/Nav.svelte'
</script>
<link rel="stylesheet" href="/_dist_/styles/home.css" />
<Nav />
<div class="landing flex relative container mx-auto font-semibold">
  <div class="absolute w-full h-full">
    <div class="dark-cloud-pair">
      <img src="/_dist_/images/dark-cloud.svg" alt="dark-cloud" class="dark-cloud"/>
      <div class="relative">
        <img src="/_dist_/images/me.jpg" alt="johnny" class="me"/>
        <div style="background-color: #455577; left: 240px; top: -30px" class="absolute inline-block p-4 rounded-full shadow-lg">
          <img src="/_dist_/images/logos/kubernetes.svg" alt="johnny" class="w-12 h-12"/>
        </div>
        <div style="background-color: #F3F7FB; left: 240px; top: 90px" class="absolute inline-block p-4 rounded-full shadow-lg">
          <img src="/_dist_/images/logos/azure.svg" alt="johnny" class="w-12 h-12"/>
        </div>
        <div style="background-color: #F4FFFE; left: 200px; top: 200px" class="absolute inline-block p-4 rounded-full shadow-lg">
          <img src="/_dist_/images/logos/figma.svg" alt="johnny" class="w-12 h-12"/>
        </div>
        <div style="background-color: #FFF4F4; left: 90px; top: 240px" class="absolute inline-block p-4 rounded-full shadow-lg">
          <img src="/_dist_/images/logos/laravel.svg" alt="johnny" class="w-12 h-12"/>
        </div>
        <div style="background-color: #4B4841; left: -30px; top: 240px" class="absolute inline-block p-4 rounded-full shadow-lg">
          <img src="/_dist_/images/logos/aws.svg" alt="johnny" class="w-12 h-12"/>
        </div>
      </div>
    </div>
    <img src="/_dist_/images/cloud.svg" alt="cloud" class="cloud"/>
    <img src="/_dist_/images/light-cloud.svg" alt="light-right-cloud" class="light-right-cloud"/>
    <img src="/_dist_/images/light-cloud.svg" alt="light-left-cloud" class="light-left-cloud"/>
    <img src="/_dist_/images/lighter-cloud.svg" alt="lighter-cloud" class="lighter-cloud"/>
  </div>
  <div class="relative z-50 mt-20">
    <p class="text-4xl">
      a
      <span class="inline-block px-3 py-2 rounded-xl bg-amber-600 text-white">Cloud</span>
      engineer
    </p>
    <p class="text-3xl py-4">
      from
      <span class="text-amber-600 align-middle font-bold mr-2">Melbourne, Australia</span><img src="/_dist_/images/australia.png" alt="australia" class="inline align-middle w-8"/>
    </p>
    <a target="_blank" href="https://github.com/johnnyhuy" class="github text-xl mr-4"><icon name="github-outline" class="w-6 h-6 align-middle mr-2"/>
      <span class="align-middle">GitHub</span></a>
    <a target="_blank" href="https://www.linkedin.com/in/johnnyhuy/" class="linkedin text-xl"><icon name="linkedin-outline" class="w-6 h-6 align-middle mr-2"/>
      <span class="align-middle">LinkedIn</span></a>
  </div>
</div>
<div class="special">
  <div class="relative">
    <img src="/_dist_/images/windows.svg" alt="windows" style="left: 0; top: 0" class="absolute"/>
    <img src="/_dist_/images/green-underscore.svg" alt="underscore" class="green-underscore"/>
    <img src="/_dist_/images/docker-shadow.svg" alt="shadow" class="docker-shadow"/>
    <img src="/_dist_/images/docker.svg" alt="docker" class="docker"/>
  </div>
</div>
