import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiSelectOptionComponent } from '../mui-select-option/mui-select-option.component';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { MuiMultiselectComponent } from './mui-multiselect.component';

const meta: Meta<MuiMultiselectComponent> = {
  title: 'Design System/Inputs/Multiselect',
  component: MuiMultiselectComponent,
  decorators: [
    moduleMetadata({
      imports: [MuiSelectOptionComponent]
    })
  ],
  argTypes: {
    title: {
      control: { type: 'text' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiMultiselectComponent>;

export const Default: Story = {
  tags: ['core', 'input'],
  args: {
    title: 'Заголовок',
    options: [new MuiSelectableItem('Опция 1'), new MuiSelectableItem('Опция 2')]
  }
};
