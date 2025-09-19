import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DownMuiIconComponent } from './down.mui-icon';

const meta: Meta<DownMuiIconComponent> = {
  title: 'Design System/Icons/Down',
  component: DownMuiIconComponent,
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
type Story = StoryObj<DownMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
