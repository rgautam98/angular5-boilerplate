import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes
//     ,{ enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [
    // All your services come here.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
