import { Component } from '@angular/core';
import { MynavComponent } from "../mynav/mynav.component";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [MynavComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  data:string="py-4";
  navfunc(){
    document.addEventListener('scroll',()=>{
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        this.data="py-2";    
       } else {
        this.data="py-4";    
             }
    })
  }
}
