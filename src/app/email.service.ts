import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl = 'http://localhost:8080/emails';

  constructor(private http: HttpClient) { }

  getAllEmails() {
    return this.http.get(`${this.baseUrl}/getAllEmails`);
  }

  sendEmail(email: any) {
    return this.http.post(`${this.baseUrl}/sendEmail`, email);
  }

}
