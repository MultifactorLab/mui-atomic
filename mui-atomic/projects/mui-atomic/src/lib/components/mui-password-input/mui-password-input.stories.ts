import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiPasswordInputComponent } from './mui-password-input.component';

const meta: Meta<MuiPasswordInputComponent> = {
  title: 'Design System/Inputs/Password Input',
  component: MuiPasswordInputComponent,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ]
};
export default meta;
type Story = StoryObj<MuiPasswordInputComponent>;

export const Default: Story = {
  tags: ['core', 'input']
};
