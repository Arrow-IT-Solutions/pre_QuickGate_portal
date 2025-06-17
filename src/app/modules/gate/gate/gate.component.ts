import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/layout.service';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent {
constructor(public layoutService : LayoutService,@Inject(DOCUMENT) private document: Document){
  
}

 async ngOnInit() {
    // this.checkCurrentLang();
  }

  changeLang(lang : string)
  {
     console.log("current Lang : ",lang);

    if(lang == 'en')
    {
      
      this.layoutService.config = 
      {
        dir : 'ltr',
        lang : 'en'
      }

    }
    else if( lang == 'ar')
    {
      this.layoutService.config = 
      {
        dir : 'rtl',
        lang : 'ar'
      }
    }

    localStorage.setItem('lang', this.layoutService.config.lang);
    localStorage.setItem('dir', this.layoutService.config.dir);
    this.document.documentElement.lang = this.layoutService.config.lang;

     window.location.reload();
  }
  //  checkCurrentLang() {
  //   if(this.layoutService.config.lang == 'en')
  //     {
  //       this.currentlang = "English"
       
  
  //     }
  //     else if( this.layoutService.config.lang == 'ar')
  //     {
  //       this.currentlang = "عربي"
       
  //     }
  // }
}
