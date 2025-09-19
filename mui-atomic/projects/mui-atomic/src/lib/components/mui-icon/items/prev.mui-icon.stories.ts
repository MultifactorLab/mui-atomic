import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { PrevMuiIconComponent } from './prev.mui-icon';

const meta: Meta<PrevMuiIconComponent> = {
  title: 'Design System/Icons/Prev',
  component: PrevMuiIconComponent,
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
type Story = StoryObj<PrevMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
