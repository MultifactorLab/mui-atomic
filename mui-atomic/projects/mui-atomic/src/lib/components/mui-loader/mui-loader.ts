import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core';
import { Size } from '../../core/options';

type LoaderSettings = {
  width: number;
  padding: number;
};

const DEFALUT_SIZE: LoaderSettings = { width: 24, padding: 4 };

export type LoaderSize = Extract<Size, 'S' | 'M' | 'L' | 'XL'>;
export const LoaderSizes = new Map<LoaderSize, LoaderSettings>([
  ['S', { width: 16, padding: 2 }],
  ['M', DEFALUT_SIZE],
  ['L', { width: 32, padding: 6 }],
  ['XL', { width: 40, padding: 8 }]
]);

@Component({
  selector: 'mui-loader',
  standalone: true,
  imports: [],
  templateUrl: './mui-loader.html',
  styleUrl: './mui-loader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiLoader {
  size = input<LoaderSize>('M');

  protected settings: Signal<LoaderSettings> = computed(() => LoaderSizes.get(this.size()) ?? DEFALUT_SIZE);
}
