import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IntervalFill, MuiInterval } from './mui-interval';

@Component({
  selector: 'storybook-mui-interval-wrapper',
  standalone: true,
  imports: [ReactiveFormsModule, MuiInterval],
  template: `
    <style>
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    </style>
    <form>
      @for (value of values; track value.id) {
        <mui-interval
          [fill]="fill()"
          [id]="value.id"
          [label]="value.label"
          [size]="value.size"
          [formControl]="value.control"
        ></mui-interval>
      }
    </form>
  `
})
class StorybookMuiIntervalWrapper {
  fill = input<IntervalFill>('filled');

  protected values = [
    { id: 'id1', label: 'Размер S', size: 'S', control: new FormControl('10') },
    { id: 'id2', label: 'Размер M', size: 'M', control: new FormControl('40') },
    { id: 'id3', label: 'Размер L', size: 'L', control: new FormControl('50') }
  ];
}

const meta: Meta<StorybookMuiIntervalWrapper> = {
  title: 'Design System/Inputs/Interval',
  component: StorybookMuiIntervalWrapper,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule]
    })
  ],
  argTypes: {
    fill: {
      control: { type: 'select' },
      options: ['filled', 'outline']
    }
  }
};

export default meta;
type Story = StoryObj<StorybookMuiIntervalWrapper>;

export const Default: Story = {
  args: {
    fill: 'filled'
  }
};
