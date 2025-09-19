import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NextMuiIconComponent } from './next.mui-icon';

const meta: Meta<NextMuiIconComponent> = {
  title: 'Design System/Icons/Next',
  component: NextMuiIconComponent,
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
type Story = StoryObj<NextMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
