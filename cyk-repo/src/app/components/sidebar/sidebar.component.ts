import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [TranslateModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public config = [
    {
      icon: 'icons/dashboard.svg',
      name: 'sidebar.dashboard',
      link: '/',
    },
    {
      icon: 'icons/pages.svg',
      name: 'sidebar.pages',
      link: 'pages',
    },
    {
      icon: 'icons/widgets.svg',
      name: 'sidebar.components',
      link: 'components',
    },
    {
      icon: 'icons/media.svg',
      name: 'sidebar.media',
      link: 'media',
    },
    {
      icon: 'icons/settings.svg',
      name: 'sidebar.settings',
      link: 'settings',
    },
  ];
  
}
