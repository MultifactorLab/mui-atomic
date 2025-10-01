import { Component, effect, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IntervalSize, MuiSlider } from './mui-slider';

@Component({
  selector: 'storybook-mui-slider-wrapper',
  standalone: true,
  imports: [ReactiveFormsModule, MuiSlider],
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
      <mui-slider
        id="some-id"
        [label]="label()"
        [size]="size()"
        [valuePrefix]="valuePrefix()"
        [formControl]="control"
        [showMinMax]="showMinMax()"
        [showLabels]="showLabels()"
        [labels]="labels()"
        [step]="step()"
        [min]="min()"
        [max]="max()"
      ></mui-slider>
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
  title: 'Design System/Inputs/Slider',
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

export const WithPercentTickmarks = {
  args: {
    label: 'Прогресс выполнения',
    valuePrefix: '%',
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    step: 10,
    min: 0,
    max: 100,
    showLabels: true
  }
};

export const WithPxTickmarks = {
  args: {
    valuePrefix: 'px',
    labels: [8, 16, 24, 32],
    step: 8,
    min: 8,
    max: 32,
    showLabels: true
  }
};
