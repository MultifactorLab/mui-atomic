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
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'search']
    },
    placeholder: {
      control: { type: 'text' }
    },
    placeholderOnTop: {
      control: { type: 'boolean' }
    },
    required: {
      control: { type: 'boolean' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiTextboxComponent>;

export const Default: Story = {
  tags: ['core', 'input'],
  args: {
    type: 'text',
    padding: 'normal',
    placeholder: 'Подсказка',
    placeholderOnTop: false,
    required: false
  }
};

export const AsFormInput: Story = {
  tags: ['core', 'input'],
  args: {
    type: 'text',
    padding: 'normal',
    placeholder: 'Имя',
    placeholderOnTop: true,
    required: true
  }
};
