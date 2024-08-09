import { Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfooterComponent } from "./myfooter/myfooter.component";
import { HomeComponent } from "./home/home.component";
import { MynavComponent } from "./mynav/mynav.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyfooterComponent, HomeComponent, MynavComponent, AboutComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'firstAssi';
  
}
