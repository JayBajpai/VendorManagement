import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

  displayedColumns: string[] = ['recipient', 'subject', 'body'];
  dataSource: any[] = [];
  newEmail: any = {};

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.loadEmails();
  }

  loadEmails() {
    this.emailService.getAllEmails().subscribe(
      (data: any) => {
        this.dataSource = data;
      },
      error => {
        console.log('Error fetching emails:', error);
      }
    );
  }

  sendEmail() {
    this.emailService.sendEmail(this.newEmail).subscribe(
      (data: any) => {
        console.log('Email sent successfully:', data);

        this.loadEmails();

        this.newEmail = {};
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }
}{

}
