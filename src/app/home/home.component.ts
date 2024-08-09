import { Component } from '@angular/core';
import { MynavComponent } from "../mynav/mynav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MynavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:string="py-4";
  navfunc(){
    document.addEventListener('scroll',()=>{
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        this.data="py-2";    
       } 
       else {
        this.data="py-4";    
             }
    })
  }
}
