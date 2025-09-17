import {ArticleMuiIconComponent} from './items/article.mui-icon';
import {MuiSvgIconComponent} from '../mui-svg-icon-component/mui-svg-icon-component.component';
import {UsersMuiIconComponent} from './items/users.mui-icon';

export const _iconRepo = new Map<string, MuiSvgIconComponent>(
    [
      ['users', UsersMuiIconComponent],
      ['article', ArticleMuiIconComponent],
    ]
  );
