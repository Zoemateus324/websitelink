import { Component } from '@angular/core';
import { LinksComponent } from "../links/links.component";

@Component({
  selector: 'app-home',
  imports: [LinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
