import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-from',
  imports: [FormsModule],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {
  title: string = "Create user list";
  fullName : string="";
  age : number=0;
  number : number= 880;
  Nid : number=1234;
  BloodGroup : string="";
  email :string="@";

  onSubmit() {
    console.log(this.fullName, this.age, this.number, this.Nid, this.BloodGroup, this.email)
  }
  onRest() {
    this.fullName = "";
    this.age = 0;
    this.number=880;
    this.Nid=1234;
    this.BloodGroup="";
    this.email="@";
  }

}
