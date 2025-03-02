import { Routes } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { CoursesComponent } from '../components/courses/courses.component';

export const routes: Routes = [
{path:'',component:AuthComponent},
{path:"courses",component:CoursesComponent},
];
