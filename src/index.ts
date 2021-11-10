import {Options, transform} from '@swc/core'
import {Plugin} from 'rollup'
import {createFilter, FilterPattern} from '@rollup/pluginutils';

type SWCPluginOptions<O = Options> = Pick<O, Exclude<keyof O, 'filename'>>;

type RollUpOptions = {
  include: FilterPattern;
  exclude: FilterPattern;
};

type PluginOptions = SWCPluginOptions & {rollup?: RollUpOptions};

type RollupPluginSWC = (options?: PluginOptions) => Plugin;

const swc: RollupPluginSWC = (pluginOptions = {}) => {
  const {rollup, ...options} = pluginOptions;

  const filter = createFilter(rollup?.include, rollup?.exclude);

  return {
    name: 'swc',
    transform(code, filename) {
      if (!filter(filename)) {
        return null;
      }

      (options as SWCPluginOptions & {filename: string}).filename = filename;
      return transform(code, options);
    },
  };
};

export default swc
