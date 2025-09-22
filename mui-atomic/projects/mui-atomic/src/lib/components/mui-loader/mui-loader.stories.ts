import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiLoader } from './mui-loader';

const meta: Meta<MuiLoader> = {
  title: 'Design System/Components/Loader',
  component: MuiLoader,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L', 'XL']
    }
  }
};
export default meta;
type Story = StoryObj<MuiLoader>;

export const Default: Story = {
  tags: ['core'],
  args: {
    size: 'M'
  }
};
