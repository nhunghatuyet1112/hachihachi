import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IntlModule } from '@progress/kendo-angular-intl';
import "@progress/kendo-angular-intl/locales/vi/calendar";
import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from '@progress/kendo-angular-popup';
import { AddNewDrawerComponent } from './add-new-drawer/add-new-drawer.component';
import { FilterModule } from '@progress/kendo-angular-filter';
import { DialogsModule } from '@progress/kendo-angular-dialog';











@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    MainContentComponent,
    AddNewDrawerComponent,
  ],
  imports: [
    IntlModule,
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    NavigationModule,
    ButtonsModule,
    IconsModule,
    LabelModule,
    InputsModule,
    DateInputsModule,
    FormsModule,
    DropDownsModule,
    GridModule,
    PopupModule,
    HttpClientModule,
    FilterModule,
    DialogsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "vi-VI" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
