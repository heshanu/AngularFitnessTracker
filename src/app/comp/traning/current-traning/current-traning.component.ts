import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TrainingService } from '../traning.service';
import { StopTraningCompoent } from './stop-traning.compoent';
@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css'],
})
export class CurrentTraningComponent implements OnInit {
  //@Output() traningExit = new EventEmitter();
  progress = 0;
  timer!: any;

  constructor(private router:Router,private dialog: MatDialog,private trainingservice:TrainingService) {
    this.startOrResume();
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      console.log(this.progress);
      if (this.progress >= 100) {
        clearInterval(this.timer);
        //this.progress=0;
      }
    }, 1000);
  }

  startOrResume() {
    const step=this.trainingservice.getRunningExercise().duration/100*1000;
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        this.trainingservice.completeExecrise();
        clearInterval(this.timer);
      }
      this.router.navigate(['/traning']);
    },step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTraningCompoent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.trainingservice.cancelExecrise(this.progress);
      } else {

        this.startOrResume();
      }
    });
  }
}
