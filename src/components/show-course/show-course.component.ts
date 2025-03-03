import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/Cours';  // יש לוודא שאתה מייבא את המודל המתאים

@Component({
  selector: 'app-show-course',
  standalone: true,
  imports: [],
  templateUrl: './show-course.component.html',
  styleUrl: './show-course.component.css'
})
export class ShowCourseComponent implements OnInit {
  courseId: string = '';
  course!: Course;  // משתנה course שיכול להיות null או מסוג Course

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.courseId = params.get('id') || ''; 
      console.log( "this.courseId" );
      console.log(this.courseId);
      
      if (this.courseId) {
        this.getCourseDetails();  // קריאה לפונקציה אחרי שקיבלנו את ה-ID
      }
    });
    console.log(this.course);
    
  }

  getCourseDetails(): void {
    this.coursesService.getCourseById(this.courseId).subscribe({
      next: (data) => {
        this.course = data;
        console.log( this.course );
      },
      error: (error) => {
        console.error('Error fetching course:', error);
      }
    });
  }
}