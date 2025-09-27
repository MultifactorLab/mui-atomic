import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NextMuiIconComponent } from '../mui-icon/items/next.mui-icon';
import { PrevMuiIconComponent } from '../mui-icon/items/prev.mui-icon';
import { MuiSelectComponent } from '../mui-select/mui-select.component';
import { MuiPaginationComponent } from './mui-pagination.component';

const meta: Meta<MuiPaginationComponent> = {
  title: 'Design System/Components/Pagination',
  component: MuiPaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [PrevMuiIconComponent, NextMuiIconComponent, MuiSelectComponent]
    })
  ],
  argTypes: {
    totalPages: {
      control: { type: 'number' }
    },
    pageSize: {
      control: { type: 'select' },
      options: [5, 10, 25, 50, 100]
    }
  }
};
export default meta;
type Story = StoryObj<MuiPaginationComponent>;

export const Default: Story = {
  tags: ['core'],
  args: {
    totalPages: 2,
    pageSize: 5
  }
};
