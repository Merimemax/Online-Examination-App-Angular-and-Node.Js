import { Injectable, Renderer2 } from "@angular/core";

@Injectable()
export class pageLsitener{
constructor(private renderer:Renderer2){
    let lisn=renderer.listen('document','visibilitychange',()=>{
       console.log("time spent") 
    })
}
}