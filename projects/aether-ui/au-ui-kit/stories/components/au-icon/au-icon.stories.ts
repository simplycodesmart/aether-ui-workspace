import { AuIcon } from '@aether-ui/au-ui-kit/au-icon';
import { provideHttpClient } from '@angular/common/http';
import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

const meta: Meta<AuIcon> = {
  title: 'AetherUI/Au-icon',
  component: AuIcon,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideHttpClient()],
    }),
  ],
};

export default meta;
type Story = StoryObj<AuIcon>;

export const SvgIcon: Story = {
  args: {
    icon: 'accessibility.svg',
  },
};

export const FontIcon: Story = {
  args: {
    size: 48,
    color: 'accent',
    icon: 'home',
  },
};

export const FontIconPrimary: Story = {
  args: {
    size: 48,
    color: '#e61952',
    icon: 'favorite',
  },
};

export const FontClassCustom: Story = {
  args: {
    size: 48,
    color: '#e61952',
    icon: 'menu',
    className : 'material-icons'
  },
};

