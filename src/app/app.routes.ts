import { Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { SettingsComponent } from './views/settings/settings.component';

export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'settings', component: SettingsComponent },
];
