import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { TranslateModule } from '@ngx-translate/core';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-pages',
  imports: [ButtonComponent, TranslateModule, TableComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
