import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/Cours';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private apiUrl = 'http://localhost:3000/api/courses'; 
  constructor(private http: HttpClient) {}
  
  getCourses(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }

  addCourse(title: string, description: string): Observable<any> 
  {
    const userId = sessionStorage.getItem('userId');
    const teacherId: number = userId ? +userId : 0; 
    console.log(teacherId);
    const body = { title, description,teacherId };
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });
    console.log(sessionStorage.getItem('token')); 
    return this.http.post<any>(this.apiUrl, body,{headers});
  }
  getCourseById(id: string): Observable<Course> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });

    return this.http.get<Course>(`${this.apiUrl}/${id}`, { headers });
  }
 // פונקציה לעדכון קורס לפי ID
 updateCourse(id: string, updates: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
  });
  return this.http.put(`${this.apiUrl}/${id}`, updates,{headers})
}

// פונקציה למחיקת קורס לפי ID
deleteCourse(id: string): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  });
  return this.http.delete(`${this.apiUrl}/${id}`, {headers});
}

  // הוספת סטודנט לקורס
  enrollStudent(courseId: string, userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });  
    return this.http.post(`${this.apiUrl}/${courseId}/enroll`,{userId},{headers});
  }


  // הסרת סטודנט מקורס
  unenrollStudent(courseId: string, userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });
    return this.http.delete(`${this.apiUrl}/${courseId}/unenroll`,{headers, 
      body: { userId }});
  }

  // שליפת כל הקורסים של סטודנט מסוים
  getStudentCourses(studentId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });
    return this.http.get<any>(`${this.apiUrl}/student/${studentId}`,{headers});
  }
}

