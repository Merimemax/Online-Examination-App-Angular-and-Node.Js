import { Directive, Input, ElementRef,HostListener, Output ,EventEmitter} from '@angular/core';
import { ActionsService } from 'src/app/store-module/actions.service';



@Directive({
  selector: '[appTimeSpent]'
})
export class TimeSpentDirective {
  timer1; timer2;timer3;
  timeSpent1=0;timeSpent2=0;timeSpent3=0;;


  @Input() colorvalue; 

 // @Output() outputcolor=new EventEmitter();

  constructor( private e:ElementRef,private actionService:ActionsService) {   }

  @HostListener('focusout')fout(){
    if(this.e.nativeElement.id=="editor1"){
    this.timeSpent1+=Date.now()-this.timer1;
  this.actionService.addTimeSpentAction({questionNo:1,timeSpent:Math.floor(this.timeSpent1/1000)});
console.log(this.actionService.getState());
  }
    if(this.e.nativeElement.id=="editor2"){
      this.timeSpent2+=Date.now()-this.timer2;
      this.actionService.addTimeSpentAction({questionNo:2,timeSpent:Math.floor(this.timeSpent2/1000)});
    }

    if(this.e.nativeElement.id=="editor3"){
      this.timeSpent3+=Date.now()-this.timer3;
      this.actionService.addTimeSpentAction({questionNo:3,timeSpent:Math.floor(this.timeSpent3/1000)});
    }
  
   }

  @HostListener('focusin')fin(){
 
   if(this.e.nativeElement.id=="editor1")
   this.timer1=Date.now();
   if(this.e.nativeElement.id=="editor2")
   this.timer2=Date.now();
   if(this.e.nativeElement.id=="editor3")
   this.timer3=Date.now();

  }

  
  

}
