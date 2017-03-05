import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkComponent } from './components/link/link.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { EditLinkComponent } from './components/edit-link/edit-link.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'links',
        component: LinksComponent
    },
    {
        path: 'edit/link',
        component: EditLinkComponent
    },
    {
        path: 'add/link',
        component: AddLinkComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);