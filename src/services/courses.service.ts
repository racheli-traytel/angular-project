import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const body = { title, description };
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // הוספת טוקן אם נדרש
    });
    console.log(sessionStorage.getItem('token')); 
    return this.http.post<{ message: string; courseId: number }>(this.apiUrl, body,{headers});
  }

}

