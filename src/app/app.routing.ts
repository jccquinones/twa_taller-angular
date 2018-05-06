import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {NewComponentComponent} from './component/new-component/new-component.component';
import {ErrorComponentComponent} from './component/error-component/error-component.component';

const appRoutes: Routes = [
  { path: '', component: NewComponentComponent},
  { path: 'home', component: NewComponentComponent},
  { path: '**', component: ErrorComponentComponent}

];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
