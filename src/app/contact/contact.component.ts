import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
      
  firstname:string;
  // firstname= "ramk";  // aise likhein equal se to "ramk" name hi automatic aayega likha hua.
  lastname: string;
  country: string;
  subject: string;    //  jab name,country etc ke neeche red line error ho to 'tsconfig.json' file main  "strictPropertyInitialization": false yeh use karein.
  constructor () { }

  ngOnInit(): void {
    
  }
  submitForm(){
    const msg = `My firstname is ${this.firstname} and my lastname is ${this.lastname}.my country is ${this.country} and my subject is ${this.subject}`;
    alert(msg);
    // alert("dddf");
  }
}

