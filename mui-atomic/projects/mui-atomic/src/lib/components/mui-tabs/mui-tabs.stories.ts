import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Meta, StoryObj } from '@storybook/angular';
import { MuiTabsComponent, TabItem } from './mui-tabs.component';

@Component({
  selector: 'storybook-tabs-wrapper',
  standalone: true,
  imports: [MuiTabsComponent],
  template: `
    <mui-tabs [tabs]="tabs"></mui-tabs>

    <ng-template #info>
      <p>Это контент вкладки "Инфо".</p>
    </ng-template>

    <ng-template #settings>
      <p>А это контент вкладки "Настройки".</p>
    </ng-template>

    <ng-template #blocked>
      <p>Заблокированная вкладка</p>
    </ng-template>

    <ng-template #other>
      <p>И тут что-то ещё.</p>
    </ng-template>
  `
})
class TabsWrapperComponent {
  @ViewChild('info', { static: true }) info!: TemplateRef<any>;
  @ViewChild('settings', { static: true }) settings!: TemplateRef<any>;
  @ViewChild('blocked', { static: true }) blocked!: TemplateRef<any>;
  @ViewChild('other', { static: true }) other!: TemplateRef<any>;

  tabs: TabItem[] = [];

  ngOnInit() {
    this.tabs = [
      { id: 'info', label: 'Инфо', disabled: false, template: this.info },
      { id: 'settings', label: 'Настройки', disabled: false, template: this.settings },
      { id: 'blocked', label: 'Сюда нельзя', disabled: true, template: this.blocked },
      { id: 'other', label: 'Другое', disabled: false, template: this.other }
    ];
  }
}

const meta: Meta<TabsWrapperComponent> = {
  title: 'Design System/Components/Tabs',
  component: TabsWrapperComponent,
  tags: ['core']
};

export default meta;
type Story = StoryObj<TabsWrapperComponent>;

export const Default: Story = {};
