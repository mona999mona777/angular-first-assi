import { Component, ElementRef, ViewChild, viewChild} from '@angular/core';
import { MynavComponent } from "../mynav/mynav.component";
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MynavComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  // lightercomp
ischeecked:boolean=false;
theCurentImg:string='';
open(currentImg:string){
   this.ischeecked=true;
   this.theCurentImg= './assets/images/'+currentImg;
}
close(){
  this.ischeecked=false;
}
@ViewChild('light') lightcomp!:ElementRef
ligthfunc(e:any){
  if(e.target==this.lightcomp.nativeElement){
  this.close()
  }
}
data:string="py-4";
navfun(){
  document.addEventListener('scroll',()=>{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      this.data="py-2";    
     } else {
      this.data="py-4";    
           }
  })
}
}


