import { Component, input } from '@angular/core';
import { MynavComponent } from "../mynav/mynav.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MynavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data:string="py-4";
  mm(){
    document.addEventListener('scroll',()=>{
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        this.data="py-2";    
       } else {
        this.data="py-4";    
             }
    })
  }
}
