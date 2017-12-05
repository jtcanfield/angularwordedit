import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { indexComponent } from './routes/index/index.component';
import { typewordComponent } from './routes/typeword/typeword.component';

const appRoutes: Routes = [
  {path: '', component: indexComponent},
  {path: 'word', component: typewordComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    indexComponent,
    typewordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{
        enableTracing: false, })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
