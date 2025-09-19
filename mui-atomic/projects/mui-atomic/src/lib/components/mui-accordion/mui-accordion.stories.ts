import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ChevronMuiIconComponent } from '../mui-icon';
import { MuiAccordionComponent } from './mui-accordion.component';

const meta: Meta<MuiAccordionComponent> = {
  title: 'Design System/Components/Accordion',
  component: MuiAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [ChevronMuiIconComponent]
    })
  ]
};
export default meta;
type Story = StoryObj<MuiAccordionComponent>;

export const Default: Story = {
  tags: ['core'],
  args: {
    title: 'Заголовок'
  },
  render: args => ({
    props: args,
    template: `
      <mui-accordion [title]="title">
        <p>Контент аккордеона</p>
      </mui-accordion>
    `
  })
};
