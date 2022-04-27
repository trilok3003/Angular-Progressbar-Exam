import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  width : any=0;
  

  constructor(){
    this.runProgressBar();
  }

  runProgressBar(){
    Observable.timer(0,100)
    .takeWhile(()=>
       this.isWidthWithinLimit()
       )
    .subscribe(()=>{
      this.width=this.width+1;
      // console.log(this.width);
    })
    
  }

  isWidthWithinLimit(){
    if(this.width===100){
      return false;
    }else{
      return true;
    }
  }
}
