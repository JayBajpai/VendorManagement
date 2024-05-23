import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get(`${this.baseUrl}/getAllEmployee`);
  }

  addEmployee(employee: any) {
    return this.http.post(`${this.baseUrl}/addEmployee`, employee);
  }
}
