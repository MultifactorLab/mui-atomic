import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { InfoMuiIconComponent } from './info.mui-icon';

const meta: Meta<InfoMuiIconComponent> = {
  title: 'Design System/Icons/Info',
  component: InfoMuiIconComponent,
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
type Story = StoryObj<InfoMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
