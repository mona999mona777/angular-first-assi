import { Component, Input} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mynav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './mynav.component.html',
  styleUrl: './mynav.component.css'
})
export class MynavComponent {
  @Input() dataparent!:string;
}
