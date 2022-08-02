import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService{
    loadingStateChanged=new Subject<boolean>();

    constructor(private snakebar:MatSnackBar){}

    //snakebar further user friendly
    showSnakeBar(message,action,duration){
this.snakebar.open(message,action,{
  duration:duration
})
    }
}
