import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "./../stories/**/*.stories.ts"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  staticDirs: ['./../stories/assets'],
  core: {
    

  }
};
export default config;
