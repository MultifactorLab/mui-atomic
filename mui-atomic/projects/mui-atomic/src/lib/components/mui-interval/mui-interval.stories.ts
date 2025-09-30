import { Component, effect, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IntervalSize, MuiInterval } from './mui-interval';

@Component({
  selector: 'storybook-mui-interval-wrapper',
  standalone: true,
  imports: [ReactiveFormsModule, MuiInterval],
  template: `
    <style>
      .no-component-info {
        margin-block-start: 50px;
      }

      .value {
        font-weight: 600;
        color: red;
      }
    </style>
    <form>
      <mui-interval
        id="some-id"
        [label]="label()"
        [size]="size()"
        [valuePrefix]="valuePrefix()"
        [formControl]="control"
        [showMinMax]="showMinMax()"
        [showLabels]="showLabels()"
        [labels]="labels()"
        [step]="step()"
      ></mui-interval>
    </form>

    <div class="no-component-info">
      <span
        >Значение внутри инпута: <span class="value">{{ control.value }} {{ valuePrefix() }}</span></span
      >
    </div>
  `
})
class StorybookMuiIntervalWrapper {
  size = input<IntervalSize>('S');
  label = input<string>('');
  min = input<number>(0);
  max = input<number>(100);
  valuePrefix = input<string>('');
  disabled = input<boolean>(false);
  showLabels = input<boolean>(false);
  showMinMax = input<boolean>(false);
  labels = input<string[]>([]);
  step = input<number>(0);

  protected control = new FormControl(0);

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
    label: {
      control: { type: 'text' }
    },
    valuePrefix: {
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
    },
    showMinMax: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<StorybookMuiIntervalWrapper>;

export const Default: Story = {
  args: {
    label: 'Лейбл',
    min: 0,
    max: 100,
    disabled: false
  }
};

export const WithMinMaxShow: Story = {
  args: {
    label: 'Прогресс выполнения',
    valuePrefix: '%',
    showMinMax: true
  }
};

export const WithTickmarks = {
  args: {
    label: 'Прогресс выполнения',
    valuePrefix: '%',
    labels: [0, 20, 40, 60, 80, 100],
    step: 20,
    min: 0,
    max: 100,
    showLabels: true
  }
};
