import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ArticleMuiIconComponent } from './article.mui-icon';

const meta: Meta<ArticleMuiIconComponent> = {
  title: 'Design System/Icons/Article',
  component: ArticleMuiIconComponent,
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
type Story = StoryObj<ArticleMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
