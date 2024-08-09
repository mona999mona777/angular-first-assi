import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
/* document.addEventListener('scroll',function(){
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    // mm.style.padding = "30px 10px";
    console.log("matrooo")

   } else {
    console.log("matrooouuuuuuuuuuuuuuuuuuu")

    // mm.style.padding = "80px 10px";
   }
}) */