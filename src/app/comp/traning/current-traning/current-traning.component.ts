import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTraningCompoent } from './stop-traning.compoent';
@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css'],
})
export class CurrentTraningComponent implements OnInit {
  @Output() traningExit=new EventEmitter();
  progress = 0;
  timer!: any;

  constructor(private dialog:MatDialog ) {
    this.startOrResume();
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      console.log(this.progress);
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  startOrResume(){
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef=this.dialog.open(StopTraningCompoent,{data:{
      progress:this.progress
    }});

    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      if(result){
        this.traningExit.emit();
      }else{
        this.startOrResume();
      }
    });

  }
}
