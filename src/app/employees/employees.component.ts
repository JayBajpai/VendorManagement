import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'designation', 'ctc', 'email'];
  dataSource: any[] = [];
  newEmployee: any = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (data: any) => {
        this.dataSource = data;
      },
      error => {
        console.log('Error fetching employees:', error);
      }
    );
  }

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      (data: any) => {
        console.log('Employee added successfully:', data);

        this.loadEmployees();

        this.newEmployee = {};
      },
      error => {
        console.log('Error adding employee:', error);
      }
    );
  }
}
