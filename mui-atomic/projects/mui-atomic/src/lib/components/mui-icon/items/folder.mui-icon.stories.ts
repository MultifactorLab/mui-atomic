import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FolderMuiIconComponent } from './folder.mui-icon';

const meta: Meta<FolderMuiIconComponent> = {
  title: 'Design System/Icons/Folder',
  component: FolderMuiIconComponent,
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
type Story = StoryObj<FolderMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
