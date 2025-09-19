import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CloseMuiIconComponent } from './close.mui-icon';

const meta: Meta<CloseMuiIconComponent> = {
  title: 'Design System/Icons/Close',
  component: CloseMuiIconComponent,
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
type Story = StoryObj<CloseMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
