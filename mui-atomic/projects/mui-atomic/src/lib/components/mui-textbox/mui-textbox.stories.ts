import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiTextboxComponent } from './mui-textbox.component';

const meta: Meta<MuiTextboxComponent> = {
  title: 'Design System/Inputs/Textbox',
  component: MuiTextboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, NgClass]
    })
  ],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['normal', 'with-icon']
    },
    placeholder: {
      control: { type: 'text' }
    },
    placeholderOnTop: {
      control: { type: 'boolean' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiTextboxComponent>;

export const Default: Story = {
  tags: ['core', 'input'],
  args: {
    placeholder: 'Подсказка',
    placeholderOnTop: false
  }
};
