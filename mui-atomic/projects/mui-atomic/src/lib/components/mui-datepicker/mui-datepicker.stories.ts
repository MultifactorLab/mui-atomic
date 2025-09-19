import { NgClass } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiDatepickerComponent } from './mui-datepicker.component';

const meta: Meta<MuiDatepickerComponent> = {
  title: 'Design System/Inputs/Datepicker',
  component: MuiDatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass]
    })
  ],
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    },
    format: {
      control: { type: 'select' },
      options: ['YYYY-MM-DD', 'DD.MM.YYYY']
    }
  }
};
export default meta;
type Story = StoryObj<MuiDatepickerComponent>;

export const Default: Story = {
  tags: ['core', 'input'],
  args: {
    placeholder: 'Заголовок',
    format: 'YYYY-MM-DD'
  }
};
