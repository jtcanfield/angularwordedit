import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { indexComponent } from './routes/index/index.component';
import { typewordComponent } from './routes/typeword/typeword.component';
import { colorwordComponent } from './routes/colorword/colorword.component';

const appRoutes: Routes = [
  {path: '', component: indexComponent},
  {path: 'word', component: typewordComponent},
  {path: 'color', component: colorwordComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    indexComponent,
    typewordComponent,
    colorwordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{
        enableTracing: false, })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
