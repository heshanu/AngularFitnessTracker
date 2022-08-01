import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { TrainingService } from '../traning.service';
import { Excerise } from '../exercise.model';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit {

  @Output() traingStart=new EventEmitter();
  constructor(private trainingservice:TrainingService) { }

  exerises:Excerise[]=[];
  ngOnInit(): void {
    this.exerises=this.trainingservice.getAvaliableExercise();
  }

  onStartTraning(){
    this.traingStart.emit();
  }

}
