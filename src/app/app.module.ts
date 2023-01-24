import { PackageListComponent } from './packages/package-list/package-list.component'
import { PackagesComponent } from './packages/packages.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';
import { PackagesDetailsComponent } from './packages/packages-details/packages-details.component';
import { PackageItemComponent } from './packages/package-list/package-item/package-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageListComponent,
    FoodListComponent,
    FoodEditComponent,
    PackagesDetailsComponent,
    PackageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
