
<template>
  <header class="
  text-5xl
  md:text-5xl
  lg:text-7xl
  font-bold
  font-sans
  text-center
  text-slate-200
  hover:text-cyan-200
  italic
  py-10
  uppercase">
    <span class="transition ease-in-out duration-500 delay-150 hover:-translate-x-1.5 hover:scale-200 hover:text-red-200">
      somethin'
    </span>
    somethin' something
  </header>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {}
</script>
