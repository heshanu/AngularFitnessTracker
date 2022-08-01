import { Excerise } from './exercise.model';
export class TrainingService{

 private avaliableExercise:Excerise[]=[
      {
        id:'crunches',name:'crumches',duration:30,calories:10
      },
      {
        id:'touch toes',name:'touch toes',duration:15,calories:5
      },
      {
        id:'side-lunges',name:'side-lungs',duration:30,calories:10
      },
      {
        id:'burppes',name:'burppes',duration:45,calories:10
      }
  ];

  getAvaliableExercise(){
    return this.avaliableExercise.slice();
  }


}
