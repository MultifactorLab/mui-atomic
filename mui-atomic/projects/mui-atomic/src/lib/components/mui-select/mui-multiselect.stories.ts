import { NgClass } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiSelectOptionComponent } from '../mui-select-option/mui-select-option.component';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { MuiSelectComponent } from './mui-select.component';

const meta: Meta<MuiSelectComponent> = {
  title: 'Design System/Inputs/Select',
  component: MuiSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [MuiSelectOptionComponent, NgClass]
    })
  ],
  argTypes: {
    title: {
      control: { type: 'text' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiSelectComponent>;

export const Default: Story = {
  tags: ['core', 'input'],
  args: {
    title: 'Заголовок',
    options: [new MuiSelectableItem('Опция 1'), new MuiSelectableItem('Опция 2')]
  }
};
