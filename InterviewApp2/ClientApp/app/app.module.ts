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
import { CourseFormComponent } from './components/course-form/course-form.component';
import { PriceValidator } from './common/price-validator';
import { AuthService } from './services/auth.service';
import { NoAccessComponent } from './components/general/no-access/no-access.component';
import { AdminGuard } from './common/auth-guard.service';
import { EnrolmentService } from './services/enrolment.service';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      HomeComponent,
      MyCoursesComponent,
      SummaryPipe,
      CourseComponent,
      CourseFormComponent,
      PriceValidator,
      NoAccessComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'MyCourses', component: MyCoursesComponent },
          { path: 'course/new', component: CourseFormComponent, canActivate: [AdminGuard] },
          { path: 'course/edit/:id', component: CourseFormComponent, canActivate: [AdminGuard] },
          { path: 'course/:id', component: CourseComponent},
          { path: 'no-access', component: NoAccessComponent }
      ])
    ],
    providers: [CoursesService, AuthService, AdminGuard, EnrolmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
