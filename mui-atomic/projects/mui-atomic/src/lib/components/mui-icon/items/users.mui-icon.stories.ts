import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { UsersMuiIconComponent } from './users.mui-icon';

const meta: Meta<UsersMuiIconComponent> = {
  title: 'Design System/Icons/Users',
  component: UsersMuiIconComponent,
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
type Story = StoryObj<UsersMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
