import { Component } from "@angular/core";
import { ContentComponent } from "../content/content.component";

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrl: 'navbar.component.css',
    standalone: true,
    imports: [ContentComponent]
})

export class NavbarComponent {}