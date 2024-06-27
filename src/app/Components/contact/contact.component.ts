import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FooterComponent,RouterLink]
})
export class ContactComponent {

}
