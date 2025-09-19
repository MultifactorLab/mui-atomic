import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FilterMuiIconComponent } from './filter.mui-icon';

const meta: Meta<FilterMuiIconComponent> = {
  title: 'Design System/Icons/Filter',
  component: FilterMuiIconComponent,
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
type Story = StoryObj<FilterMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
