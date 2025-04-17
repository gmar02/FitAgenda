import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  homeOutline,
  homeSharp,
  calendarNumberOutline,
  calendarNumberSharp,
  calendarClearOutline,
  calendarClearSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  personCircleOutline,
  personCircleSharp,
  schoolOutline,
  schoolSharp,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Agenda', url: '/agenda', icon: 'calendar-number' },
    { title: 'Reserva', url: '/reserva', icon: 'calendar-clear' },
    { title: 'Minhas Aulas', url: '/minhas-aulas', icon: 'school' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
  ];
  
  constructor() {
    addIcons({
      homeOutline,
      homeSharp,
      calendarNumberOutline,
      calendarNumberSharp,
      calendarClearOutline,
      calendarClearSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      personCircleOutline,
      personCircleSharp,
      schoolOutline,
      schoolSharp,
    });
  }
}
