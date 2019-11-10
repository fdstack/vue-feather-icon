<template>
  <div class="home">
    <img alt="Jordan logo" src="@/assets/logo-small.png">
    <vue-feather-icon name="plus" size="64" svgClass="text-green"></vue-feather-icon>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'home-view',
  })
  export default class HomeView extends Vue {

  }
</script>
