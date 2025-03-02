import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/Cours';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
constructor(private courseService:CoursesService){}
courses:Course[]=[]
ngOnInit(): void {
  const title = 'Angular Basics';
  const description = 'Introduction to Angular 17';

  // this.courseService.addCourse(title, description).subscribe({
  //   next: (response) => {
  //     console.log(response.message);
  //     alert('Course added successfully!');
  //   },
  //   error: (err) => {
  //     console.error('Error adding course', err);
  //     alert('Failed to add course');
  //   }
  // });

  
  this.courseService.getCourses().subscribe({
    next: (data) => {
      this.courses = data;
      console.log(this.courses);
      
    },
    error: (error) => {
      console.error('Error fetching courses:', error);
    }
  });



}

}
