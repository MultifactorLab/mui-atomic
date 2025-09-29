import { Size } from '../../core/options';

export type IconSize = Extract<Size, 'S' | 'M' | 'L'>;

export const IconSizes = new Map<IconSize, number>([
  ['S', 16],
  ['M', 24],
  ['L', 32]
]);
