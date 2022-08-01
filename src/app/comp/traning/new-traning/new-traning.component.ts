import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../traning.service';
import { Excerise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit {


  constructor(private trainingservice:TrainingService) { }

  exerises:Excerise[]=[];
  ngOnInit(): void {
    this.exerises=this.trainingservice.getAvaliableExercise();
  }

  onStartTraning(ngform:NgForm){
   // this.traingStart.emit();
   this.trainingservice.startExercise(ngform.value.exersice);
  }

}
