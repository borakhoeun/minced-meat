
<template>
  <div
    class="
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
    text-slate-200"
  >
    <NuxtLink to="project" :exact="true" class="hover:text-green-300">
      Project
    </NuxtLink>
    <NuxtLink to="photography" :exact="true" class="hover:text-green-300">
      Photography
    </NuxtLink>
    <NuxtLink to="hobby" :exact="true" class="hover:text-green-300">
      Hobby
    </NuxtLink>
    <NuxtLink to="about" :exact="true" class="hover:text-green-300">
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
