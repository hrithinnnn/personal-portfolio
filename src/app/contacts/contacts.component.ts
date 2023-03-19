import { Component } from '@angular/core';
import { last } from 'rxjs';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  error = false;

  submit(company: string, fname: string, lname: string, email: string, comments: string) {

    console.log(company, fname, lname, email, comments);
    if (!fname) {
      window.alert('First name is required');
    } else if (fname.length < 2) {
      window.alert('First name must be at least 2 characters long');
      return;
    }
  
    // Validate last name
    if (!lname) {
      window.alert('Last name is required');
    } else if (lname.length < 2) {
      window.alert('Last name must be at least 2 characters long');
      return;
    }
  
    // Validate email
    if (!email) {
      window.alert('Email is required');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert('Invalid email address');
      return;
    }
  
    window.alert("submitted successfully! Thank you for your feedback!")
    const comp=document.getElementById('company');
    const firstname=document.getElementById('fname');
    const lastname=document.getElementById('lname');
    const mail=document.getElementById('email');
    const comment = document.getElementById('comment');
    comp!.innerHTML="";
    firstname!.innerHTML="";
    lastname!.innerHTML="";
    mail!.innerHTML="";
    comment!.innerHTML="";  
    
    
  }

    //submit
  


  
}