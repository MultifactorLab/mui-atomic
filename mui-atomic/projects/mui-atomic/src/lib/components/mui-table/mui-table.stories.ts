import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MuiTableBodyComponent } from '../mui-table-body/mui-table-body.component';
import { MuiSortTableCell } from '../mui-table-cell/mui-table-cell';
import { MuiTableHeadComponent } from '../mui-table-head/mui-table-head.component';
import { MuiTableRowComponent } from '../mui-table-row/mui-table-row.component';
import { MuiTableComponent } from './mui-table.component';
import { MuiTableColumnDefinition, MuiTableResolvableColumnDefinition } from './mui-table.config';

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
        ['', 'Первая строка 1 колонки', 'Первая строка 2 колонки'],
        ['', 'Вторая строка 1 колонки', 'Вторая строка 2 колонки'],
        ['', 'Третья строка 1 колонки', 'Третья строка 2 колонки'],
        ['', 'Первая вложенная строка 1 колонки', 'Первая вложенная строка 2 колонки'],
        ['', 'Вторая вложенная строка 1 колонки', 'Вторая вложенная строка 2 колонки'],
        ['', '2 уровень вложености', '2 уровень вложености']
      ]
    },
    template: `
      <mui-table [dataLength]="dataLength">
        <mui-table-head [hasAccordionInTable]="true" [columns]="columns"></mui-table-head>
        <mui-table-body>
          <mui-table-row [hasAccordionInTable]="true" [columnConfig]="columns" [source]="rows[0]"></mui-table-row>
          <mui-table-row [hasAccordionInTable]="true" [columnConfig]="columns" [source]="rows[1]"></mui-table-row>
          <mui-table-row [canExpand]="true" [columnConfig]="columns" [source]="rows[2]">
            <mui-table-row [hasAccordionInTable]="true" [columnConfig]="columns" [source]="rows[3]"></mui-table-row>
            <mui-table-row [canExpand]="true" [hasAccordionInTable]="true" [nestedLevel]="1" [columnConfig]="columns" [source]="rows[4]">
              <mui-table-row [hasAccordionInTable]="true" [nestedLevel]="2" [columnConfig]="columns" [source]="rows[5]"></mui-table-row>
            </mui-table-row>
          </mui-table-row>
        </mui-table-body>
      </mui-table>
    `
  })
};

export const SortHeader: Story = {
  tags: ['core'],
  args: {
    dataLength: 1
  },
  render: args => ({
    props: {
      ...args,
      columns: [
        new MuiTableResolvableColumnDefinition((value: string) => new MuiSortTableCell('ascending', value), 'qwe', 'Заголовок 1'),
        new MuiTableResolvableColumnDefinition((value: string) => new MuiSortTableCell('descending', value), 'qwe', 'Заголовок 2')
      ],
      rows: []
    },
    template: `
      <mui-table [dataLength]="dataLength">
        <mui-table-head [columns]="columns"></mui-table-head>
      </mui-table>
    `
  })
};
