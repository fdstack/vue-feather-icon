import { PluginObject } from 'vue';
import { Vue } from 'vue-property-decorator';

declare class VueFeatherIcon extends Vue {
  readonly svgClass: string;
  readonly name: string;
  readonly size: string;
  readonly fill: string;
  readonly stroke: string;
  readonly strokeLinecap: string;
  readonly strokeLinejoin: string;
  readonly strokeWidth: string;
  icon(): string;
}
declare const plugin: PluginObject<VueFeatherIcon>;
export { VueFeatherIcon };
export default plugin;
