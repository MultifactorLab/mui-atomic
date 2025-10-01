import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiSelectableItem } from '../mui-select-option/mui-selectable-item';
import { MuiSearchSelect } from './mui-search-select';

const meta: Meta<MuiSearchSelect> = {
  title: 'Design System/Inputs/Search select',
  component: MuiSearchSelect,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ],
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    optionsTitle: {
      control: { type: 'text' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiSearchSelect>;

export const Default: Story = {
  tags: ['core'],
  args: {
    title: 'Заголовок',
    optionsTitle: 'Заказчики на странице'
  }
};

export const Loading: Story = {
  tags: ['core'],
  args: {
    title: 'Заголовок',
    searching: true,
    optionsTitle: 'Заказчики на странице'
  }
};

export const WithOptions: Story = {
  tags: ['core'],
  args: {
    title: 'Заголовок',
    optionsTitle: 'Заказчики на странице',
    options: [new MuiSelectableItem('Опция 1'), new MuiSelectableItem('Опция 2')]
  }
};

export const WithSearchOptions: Story = {
  tags: ['core'],
  args: {
    title: 'Заголовок',
    optionsTitle: 'Заказчики на странице',
    searchOptions: [new MuiSelectableItem('Опция 1'), new MuiSelectableItem('Опция 2')]
  }
};
