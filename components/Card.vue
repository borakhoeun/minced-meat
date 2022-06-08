<template>
  <div class="w-full flex space-x-3">
    <div class="w-1/2">
      <h1 class="text-2xl text-slate-200 uppercase font-mono font-semibold">
        Title
      </h1>
      <p class="text-slate-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum libero adipisci eius porro explicabo nulla recusandae quod architecto. Voluptatum dolorem tempora neque quisquam nemo quidem quaerat reiciendis nostrum in. Commodi esse neque aliquam dolor optio maxime impedit libero reprehenderit.
      </p>
    </div>
    <div class="w-1/2 flex items-center">
      <img class="aspect-video" src="../assets/images/image.jpg" alt="Granite mountain" title="Granite mountain" style="height: full">
    </div>
  </div>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {}
</script>
