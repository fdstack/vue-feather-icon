<template>
  <svg
    :class="svgClass"
    :width="size"
    :height="size"
    :fill="fill"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    :stroke-linecap="strokeLinecap"
    :stroke-linejoin="strokeLinejoin">
    <use :xlink:href="icon"/>
  </svg>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    name: 'feather-icon',
  })
  export default class VueFeatherIcon extends Vue {
    @Prop({type: String, default: ''})
    svgClass!: string;
    @Prop({type: String, required: true})
    name!: string;
    @Prop({type: String, default: '24'})
    size!: string;
    @Prop({type: String, default: 'currentColor'})
    fill!: string;
    @Prop({type: String, default: 'currentColor'})
    stroke!: string;
    @Prop({type: String, default: 'round'})
    strokeLinecap!: string;
    @Prop({type: String, default: 'round'})
    strokeLinejoin!: string;
    @Prop({type: String, default: '2'})
    strokeWidth!: string;

    get icon(): string {
      return `#${this.name}`;
    }
  }
</script>
