import { NgClass } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiButtonComponent } from './mui-button.component';

const meta: Meta<MuiButtonComponent> = {
  title: 'Design System/Components/Button',
  component: MuiButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass]
    })
  ],
  argTypes: {
    buttonStyle: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'alert']
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full-width']
    },
    height: {
      control: { type: 'select' },
      options: ['normal', 'as-control']
    }
  }
};
export default meta;
type Story = StoryObj<MuiButtonComponent>;

export const Default: Story = {
  tags: ['core'],
  args: {
    buttonStyle: 'primary',
    size: 'xs',
    height: 'normal'
  },
  render: args => ({
    props: args,
    template: `
      <mui-button [buttonStyle]="buttonStyle" [size]="size" [height]="height">
        Кнопка
      </mui-button>
    `
  })
};
