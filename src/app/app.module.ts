import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CvComponent} from './cv/cv.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsModule} from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    ProjectsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
