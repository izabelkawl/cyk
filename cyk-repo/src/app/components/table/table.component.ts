import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  imports: [TranslateModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  public data: Data[] = [
    {
      title: 'Name',
      lastEdited: new Date(),
      editable: true
    },
    {
      title: 'Name1',
      lastEdited: new Date(),
    },
    {
      title: 'Name2',
      lastEdited: new Date(),
    },
  ];

  public get columns(): (keyof Data)[] {
    return Object.keys(this.data[0]) as (keyof Data)[];
  }
}

export interface Data {
  title: string;
  lastEdited: string | Date;
  editable?: boolean;
}
