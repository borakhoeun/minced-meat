
<template>
  <div class="
    md:space-x-10
    space-x-3
    flex
    justify-center
    px-5
    pb-10
    font-serif
    italic
    text-xl
    md:text-3xl
    md:px-10
    text-slate-200">
    <NuxtLink to="project" :exact=true class="transition ease-in-out duration-500 delay-150 hover:-translate-y-1.5 hover:scale-200 hover:text-cyan-200">
      Project
    </NuxtLink>
    <NuxtLink to="photography" :exact=true class="transition ease-in-out duration-500 delay-150 hover:-translate-y-1.5 hover:scale-200 hover:text-cyan-200">
      Photography
    </NuxtLink>
    <NuxtLink to="hobby" :exact=true class="transition ease-in-out duration-500 delay-150 hover:-translate-y-1.5 hover:scale-200 hover:text-cyan-200">
      Hobby
    </NuxtLink>
    <NuxtLink to="about" :exact=true class="transition ease-in-out duration-500 delay-150 hover:-translate-y-1.5 hover:scale-200 hover:text-cyan-200">
      About me
    </NuxtLink>
  </div>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Menu extends Vue {
}
</script>
