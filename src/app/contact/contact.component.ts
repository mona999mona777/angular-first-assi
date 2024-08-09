import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MynavComponent } from "../mynav/mynav.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MynavComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
// apper input word
@ViewChild('prag1') prag1!:ElementRef
@ViewChild('input1') input1!:ElementRef;
inputfun1(){
  let alllength=0;
  let curentlength=this.input1.nativeElement.value.length;
  let mylength=alllength-curentlength;
if(mylength<0){
this.prag1.nativeElement.classList.add('opacity-100')
this.prag1.nativeElement.classList.add("translate-middle-y")

}
else{
  // this.prag1.nativeElement.classList.add('d-none')
  this.prag1.nativeElement.classList.remove('opacity-100')
this.prag1.nativeElement.classList.remove("translate-middle-y")
}
}

@ViewChild('prag2') prag2!:ElementRef
@ViewChild('input2') input2!:ElementRef;
inputfun2(){
  let alllength=0;
  let curentlength=this.input2.nativeElement.value.length;
  let mylength=alllength-curentlength;
if(mylength<0){
// this.prag2.nativeElement.classList.remove('d-none')
this.prag2.nativeElement.classList.add('opacity-100')
this.prag2.nativeElement.classList.add("translate-middle-y")
}
else{
  // this.prag2.nativeElement.classList.add('d-none')
  this.prag2.nativeElement.classList.remove('opacity-100')
this.prag2.nativeElement.classList.remove("translate-middle-y")
}
}

@ViewChild('prag3') prag3!:ElementRef
@ViewChild('input3') input3!:ElementRef;
inputfun3(){
  let alllength=0;
  let curentlength=this.input3.nativeElement.value.length;
  let mylength=alllength-curentlength;
if(mylength<0){
// this.prag3.nativeElement.classList.remove('d-none');
this.prag3.nativeElement.classList.add('opacity-100')
this.prag3.nativeElement.classList.add("translate-middle-y")
}
else{
  // this.prag3.nativeElement.classList.add('d-none')
  this.prag3.nativeElement.classList.remove('opacity-100')
this.prag3.nativeElement.classList.remove("translate-middle-y")
}
}

@ViewChild('prag4') prag4!:ElementRef
@ViewChild('input4') input4!:ElementRef;
inputfun4(){
  let alllength=0;
  let curentlength=this.input4.nativeElement.value.length;
  let mylength=alllength-curentlength;
if(mylength<0){
// this.prag4.nativeElement.classList.remove('d-none')
this.prag4.nativeElement.classList.add('opacity-100')
this.prag4.nativeElement.classList.add("translate-middle-y")
}
else{
  // this.prag4.nativeElement.classList.add('d-none')
  this.prag4.nativeElement.classList.remove('opacity-100')
this.prag4.nativeElement.classList.remove("translate-middle-y")
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
