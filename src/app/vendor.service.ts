import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = 'http://localhost:8080/vendors';

  constructor(private http:HttpClient) { }

  getAllVendors() {
    return this.http.get(`${this.baseUrl}/getAllVendors`);
  }

  addVendor(vendor: any) {
    return this.http.post(`${this.baseUrl}/addVendor`, vendor);
  }
}
