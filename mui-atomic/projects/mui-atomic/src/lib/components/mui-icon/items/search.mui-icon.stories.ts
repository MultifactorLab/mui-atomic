import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SearchMuiIconComponent } from './search.mui-icon';

const meta: Meta<SearchMuiIconComponent> = {
  title: 'Design System/Icons/Search',
  component: SearchMuiIconComponent,
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
type Story = StoryObj<SearchMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
