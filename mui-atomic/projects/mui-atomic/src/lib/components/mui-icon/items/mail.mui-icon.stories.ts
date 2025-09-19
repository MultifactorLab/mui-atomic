import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MailMuiIconComponent } from './mail.mui-icon';

const meta: Meta<MailMuiIconComponent> = {
  title: 'Design System/Icons/Mail',
  component: MailMuiIconComponent,
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
type Story = StoryObj<MailMuiIconComponent>;

export const Default: Story = {
  tags: ['icon'],
  args: {
    iconSize: 'M'
  }
};
