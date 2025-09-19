import { FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SearchMuiIconComponent } from '../mui-icon/items/search.mui-icon';
import { MuiTextboxComponent } from '../mui-textbox/mui-textbox.component';
import { MuiSearchComponent } from './mui-search.component';

const meta: Meta<MuiSearchComponent> = {
  title: 'Design System/Components/Search',
  component: MuiSearchComponent,
  decorators: [
    moduleMetadata({
      imports: [MuiTextboxComponent, FormsModule, SearchMuiIconComponent]
    })
  ]
};
export default meta;
type Story = StoryObj<MuiSearchComponent>;

export const Default: Story = {
  tags: ['core']
};
