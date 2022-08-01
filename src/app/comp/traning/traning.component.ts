import { Component, OnInit } from '@angular/core';
import { TrainingService } from './traning.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.css'],
})
export class TraningComponent implements OnInit {
  constructor(private trainingService: TrainingService) {}
  onGoingTraning = false;

  excersiseSubscription!: Subscription;
  ngOnInit() {
    this.excersiseSubscription = this.trainingService.exerciseChange.subscribe(
      (ex) => {
        if (ex) {
          this.onGoingTraning = true;
        } else {
          this.onGoingTraning = false;
        }
      }
    );
  }

  /*reset-button*/
}
