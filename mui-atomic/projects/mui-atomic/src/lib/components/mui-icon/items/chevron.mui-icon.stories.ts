import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ChevronMuiIconComponent } from './chevron.mui-icon';

const meta: Meta<ChevronMuiIconComponent> = {
  title: 'Design System/Icons/Chevron',
  component: ChevronMuiIconComponent,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ],
  argTypes: {
    iconSize: {
      control: { type: 'select' },
      options: ['S', 'M', 'L']
    }
  }
};
export default meta;
type Story = StoryObj<ChevronMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
