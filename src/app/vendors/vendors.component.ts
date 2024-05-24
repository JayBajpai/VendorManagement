import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  displayedColumns: string[] = ['email', 'name', 'upi'];
  vendors: any[] = [];
  newVendor = { email: '', name: '', upi: '' };
  isLoading = false;
error: string = '';

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors() {
    this.isLoading = true;
    this.vendorService.getAllVendors().subscribe(
      (data: any) => {
        this.vendors = data;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.error = error.message
       // console.log('Error fetching vendors:', error);
      }
    );
  }

  addVendor() {
    this.vendorService.addVendor(this.newVendor).subscribe(
      (data: any) => {
        console.log('Vendor added successfully:', data);

        this.loadVendors();

        this.newVendor = { email: '', name: '', upi: '' };
      },
      error => {
        console.log('Error adding vendor:', error);
      }
    );
  }
}{

}
