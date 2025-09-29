import { Component, effect, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IntervalFill, IntervalSize, MuiInterval } from './mui-interval';

@Component({
  selector: 'storybook-mui-interval-wrapper',
  standalone: true,
  imports: [ReactiveFormsModule, MuiInterval],
  template: `
    <form>
      <mui-interval id="some-id" [fill]="fill()" [label]="label()" [size]="size()" [formControl]="control"></mui-interval>
    </form>
  `
})
class StorybookMuiIntervalWrapper {
  size = input<IntervalSize>('S');
  fill = input<IntervalFill>('filled');
  label = input<string>('');
  min = input<number>(0);
  max = input<number>(100);
  disabled = input<boolean>(false);

  protected control = new FormControl(50);

  constructor() {
    effect(() => {
      if (this.disabled() && this.control.enabled) {
        this.control.disable();
      } else {
        if (this.control.disabled) {
          this.control.enable();
        }
      }
    });
  }
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
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L']
    },
    fill: {
      control: { type: 'select' },
      options: ['filled', 'outline']
    },
    label: {
      control: { type: 'text' }
    },
    min: {
      control: { type: 'number' }
    },
    max: {
      control: { type: 'number' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<StorybookMuiIntervalWrapper>;

export const Default: Story = {
  args: {
    size: 'S',
    fill: 'filled',
    label: 'Лейбл',
    min: 0,
    max: 100,
    disabled: false
  }
};
