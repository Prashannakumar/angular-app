import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { DefaultpipesComponent } from './Pipes/defaultpipes/defaultpipes.component';
import { SummaryPipe } from './Pipes/summary.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { MydirectivesComponent } from './mydirectives/mydirectives.component';
import { HighlightDirective } from './mydirectives/highlight.directive';
import { InputformatDirective } from './mydirectives/inputformat.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TdformComponent } from './Forms/tdform/tdform.component';
import { ReformComponent } from './Forms/reform/reform.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    ListproductsComponent,
    DefaultpipesComponent,
    SummaryPipe,
    FilterPipe,
    MydirectivesComponent,
    HighlightDirective,
    InputformatDirective,
    LifecycleComponent,
    TdformComponent,
    ReformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
