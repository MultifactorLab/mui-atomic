import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CheckMuiIconComponent } from './check.mui-icon';

const meta: Meta<CheckMuiIconComponent> = {
  title: 'Design System/Icons/Check',
  component: CheckMuiIconComponent,
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
type Story = StoryObj<CheckMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
