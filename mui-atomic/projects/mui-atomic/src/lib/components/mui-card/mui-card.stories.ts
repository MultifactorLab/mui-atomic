import { NgClass } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiCardComponent } from './mui-card.component';

const meta: Meta<MuiCardComponent> = {
  title: 'Design System/Layout/Card',
  component: MuiCardComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass]
    })
  ],
  argTypes: {
    background: {
      control: { type: 'select' },
      options: ['dark', 'light', 'empty']
    },
    shadow: {
      control: { type: 'boolean' }
    }
  }
};
export default meta;
type Story = StoryObj<MuiCardComponent>;

export const Default: Story = {
  tags: ['layout', 'core'],
  args: {
    background: 'empty',
    shadow: false
  },
  render: args => ({
    props: args,
    template: `
      <mui-card [shadow]="shadow" [background]="background">
        <p>Контент карточки</p>
      </mui-card>
    `
  })
};
