import { NgClass } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiCheckboxComponent } from './mui-checkbox.component';

const meta: Meta<MuiCheckboxComponent> = {
  title: 'Design System/Inputs/Checkbox',
  component: MuiCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass]
    })
  ],
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    checked: {
      control: { type: 'boolean' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiCheckboxComponent>;

export const Default: Story = {
  tags: ['core', 'input'],
  args: {
    label: 'Заголовок',
    checked: false
  }
};
