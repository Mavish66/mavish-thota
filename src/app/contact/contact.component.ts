import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.name, this.email, this.message);
    this.submitted = true;
  
    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
  
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }
  
}
