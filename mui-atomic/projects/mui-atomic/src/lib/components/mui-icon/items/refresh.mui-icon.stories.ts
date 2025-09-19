import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { RefreshMuiIconComponent } from './refresh.mui-icon';

const meta: Meta<RefreshMuiIconComponent> = {
  title: 'Design System/Icons/Refresh',
  component: RefreshMuiIconComponent,
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
type Story = StoryObj<RefreshMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
