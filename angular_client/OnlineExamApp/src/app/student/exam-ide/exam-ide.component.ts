import { Component, OnInit,OnDestroy, HostListener } from '@angular/core';
import { DBService } from '../services/DB.Service';
import { WindowRef } from '../services/WindowRef';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-exam-ide',
  templateUrl: './exam-ide.component.html',
  styleUrls: ['./exam-ide.component.css']
})
export class ExamIDEComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  private timer: Observable<any>;
  model1;
  message:string;
  outOfTime:Boolean;
  questions;
  constructor(private db:DBService,private _window:WindowRef) { }

  ngOnInit() {
  this.db.getQuestion().subscribe(data=>{ this.questions=data});
  this.checkTime();
     
   }


   @HostListener('document:visibilitychange') onResize() {
    
  console.log("blurrrr")
  }
   //this._window.onblur = function() { console.log('blur'); }

   ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  callBackFunc(){
    console.log(this.model1)
  }
  blur() {
    console.log("rec");
    // let line = editor.getPosition();
    // console.log(line);
  }

   checkBrowser():Boolean{
    let isChrome = !!this._window.nativeWindow.chrome && !!this._window.nativeWindow.chrome.webstore;
    if(!isChrome){
      this.message = "You are not using Chrome,Please open the link in Chrome inorder to View the Questions";
      return false;
     
    }else{
    
      this.message = "You are using Chrome";
      return true;
    }

    
   }
   inits(editor){
    console.log("or");
//let line = editor.getPosition();
    console.log(editor);
   }
   checkTime(){
        this.timer= Observable.timer(1500000000); 
    this.subscription = this.timer.subscribe(() => {
               this.outOfTime = true;
    });

  }


  
 
   


}
