// Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

// Services
import { TemplateService } from './services/template.service';
import { HttpService } from './services/http.service';

// Components
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormComponent } from './components/form/form.component';
import { HttpComponent } from './components/http/http.component';
import { RoutingComponent } from './components/routing/routing.component';
import { TableComponent } from './components/table/table.component';
import { StoryComponent } from './components/story/story.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'http', component: HttpComponent },
  { path: 'route', component: RoutingComponent },
  { path: 'table', component: TableComponent },
  { path: 'story/:title', component: StoryComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PagenotfoundComponent,
    FormComponent,
    HttpComponent,
    RoutingComponent,
    TableComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    LazyLoadImagesModule
  ],
  providers: [
    // All your services come here.
    TemplateService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
