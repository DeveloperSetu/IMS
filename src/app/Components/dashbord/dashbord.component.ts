import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-dashbord',
    standalone: true,
    templateUrl: './dashbord.component.html',
    styleUrl: './dashbord.component.css',
    imports: [HeaderComponent, SideBarComponent, FooterComponent,RouterLink,]
})
export class DashbordComponent {

}
