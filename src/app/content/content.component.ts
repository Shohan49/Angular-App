import { Component } from '@angular/core';
import { FromComponent } from '../from/from.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GallaryComponent } from './gallary/gallary.component';

@Component({
  selector: 'app-content',
  imports: [FromComponent,UserlistComponent,GallaryComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
