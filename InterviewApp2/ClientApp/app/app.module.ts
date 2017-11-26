import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { CoursesService } from './services/courses.service';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      HomeComponent,
      MyCoursesComponent,
      SummaryPipe,
      CourseComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'MyCourses', component: MyCoursesComponent },
          { path: 'course/:id', component: CourseComponent }
      ])
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
