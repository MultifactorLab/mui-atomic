import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiTableBodyComponent } from '../mui-table-body/mui-table-body.component';
import { MuiTableHeadComponent } from '../mui-table-head/mui-table-head.component';
import { MuiTableRowComponent } from '../mui-table-row/mui-table-row.component';
import { MuiTableComponent } from './mui-table.component';
import { MuiTableColumnDefinition } from './mui-table.config';

const meta: Meta<MuiTableComponent> = {
  title: 'Design System/Components/Table',
  component: MuiTableComponent,
  decorators: [
    moduleMetadata({
      imports: [MuiTableHeadComponent, MuiTableRowComponent, MuiTableBodyComponent]
    })
  ]
};
export default meta;
type Story = StoryObj<MuiTableComponent>;

export const WithoutData: Story = {
  tags: ['core']
};

export const WithData: Story = {
  tags: ['core'],
  args: {
    dataLength: 1
  },
  render: args => ({
    props: {
      ...args,
      columns: [new MuiTableColumnDefinition('1', 'Колонка 1'), new MuiTableColumnDefinition('2', 'Колонка 2')],
      rows: [
        ['', 'Первая строка 1 колонки', 'Второая строка 2 колонки'],
        ['', 'Вторая строка 1 колонки', 'Вторая строка 2 колонки']
      ]
    },
    template: `
      <mui-table [dataLength]="dataLength">
        <mui-table-head [columns]="columns"></mui-table-head>
        <mui-table-body>
          <mui-table-row [columnConfig]="columns" [source]="rows[0]"></mui-table-row>
          <mui-table-row [columnConfig]="columns" [source]="rows[1]"></mui-table-row>
        </mui-table-body>
      </mui-table>
    `
  })
};
