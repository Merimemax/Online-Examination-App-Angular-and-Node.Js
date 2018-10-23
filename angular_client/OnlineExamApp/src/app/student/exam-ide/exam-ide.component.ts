import { Component, OnInit,OnDestroy, HostListener, Injectable, Renderer2, ElementRef } from '@angular/core';
import { DBService } from '../services/DB.Service';
import { WindowRef } from '../services/WindowRef';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx'
import { ActionsService } from 'src/app/store-module/actions.service';


@Injectable()
export class pageLsitener{
    lisn;
    start:number;
    timeoffBrowser:number=0;

constructor(private renderer:Renderer2,private elemntRef:ElementRef,public actionService:ActionsService){
     this.lisn=this.renderer.listen('document','visibilitychange',(e)=>{
        if(e.target.visibilityState=='hidden')
      this.start=e.timeStamp;
      if(e.target.visibilityState=='visible'){
      this.timeoffBrowser+=e.timeStamp-this.start;
      this.actionService.addTimeSpentAction({questionNo:4,timeSpent:Math.floor(this.timeoffBrowser/1000)});}
       })

   
}

unsub(){this.lisn()}
}

@Component({
  selector: 'app-exam-ide',
  templateUrl: './exam-ide.component.html',
  styleUrls: ['./exam-ide.component.css'],
  providers:[pageLsitener]
})
export class ExamIDEComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  private timer: Observable<any>;
  model1:String;model2:String;model3:String;
  message:string;
  outOfTime:Boolean;
  questions;
  constructor(private db:DBService,private _window:WindowRef,private pagelsitener:pageLsitener) { }

  ngOnInit() {
  this.db.getQuestion().subscribe(data=>{ this.questions=data});
  this.checkTime();
     
   }


     ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
    this.pagelsitener.unsub();
  }

  callBackFunc1(){
    setTimeout(()=>{
      console.log(this.model1);
     this.pagelsitener.actionService.addProgress({questionNo:1,data: this.model1 })
    },3000);
  }
  callBackFunc2(){

    setTimeout(()=>{
      this.pagelsitener.actionService.addProgress({questionNo:2,data: this.model2 })
    },3000);
  }
  callBackFunc3(){
 
    setTimeout(()=>{
      this.pagelsitener.actionService.addProgress({questionNo:3,data: this.model3})
    },3000);
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
  
   checkTime(){
        this.timer= Observable.timer(1500000000); 
    this.subscription = this.timer.subscribe(() => {
               this.outOfTime = true;
    });

  }


  
 
   


}
