import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";
import { ContentComponent } from "../content/content.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, ContentComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
