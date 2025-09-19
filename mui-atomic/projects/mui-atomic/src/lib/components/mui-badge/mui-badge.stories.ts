import { NgClass } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiBadgeComponent } from './mui-badge.component';

const meta: Meta<MuiBadgeComponent> = {
  title: 'Design System/Components/Badge',
  component: MuiBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass]
    })
  ],
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['red', 'yellow', 'green', 'blue']
    }
  }
};
export default meta;
type Story = StoryObj<MuiBadgeComponent>;

export const Default: Story = {
  tags: ['core'],
  args: {
    text: 'Заголовок',
    style: 'green'
  }
};
