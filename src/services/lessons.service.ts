import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { lesson } from '../models/lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }
  private apiUrl="http://localhost:3000/api/courses"
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}` // הוספת טוקן אם נדרש
    });
  }

  // Get all lessons by course ID
  getLessonsByCourseId(courseId: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/${courseId}/lessons`, { headers });
  }

  // שליפת שיעור לפי ID
  getLessonById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/lessons`, { headers: this.getAuthHeaders() });
  }

  // יצירת שיעור חדש
  createLesson(courseId: string, title: string, content: string): Observable<any> {
    const body = { title, content,courseId };
    return this.http.post(`${this.apiUrl}/${courseId}/lessons`, body, { headers: this.getAuthHeaders() });
  }

  // עדכון שיעור לפי ID
  updateLesson(id: number,courseId:string, updates: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${courseId}/lessons/${id}`, updates, { headers: this.getAuthHeaders() });
  }

  // מחיקת שיעור לפי ID
  deleteLesson(id: number,courseId:string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${courseId}/lessons/${id}`, { headers: this.getAuthHeaders() });
  }
}



