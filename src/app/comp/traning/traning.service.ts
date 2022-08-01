import { Excerise } from './exercise.model';
import { Subject } from 'rxjs';
export class TrainingService {
  exerciseChange=new Subject<Excerise>();
  private avaliableExercise: Excerise[] = [
    {
      id: 'crunches',
      name: 'crumches',
      duration: 30,
      calories: 10,
    },
    {
      id: 'touch toes',
      name: 'touch toes',
      duration: 15,
      calories: 5,
    },
    {
      id: 'side-lunges',
      name: 'side-lungs',
      duration: 30,
      calories: 10,
    },
    {
      id: 'burppes',
      name: 'burppes',
      duration: 45,
      calories: 10,
    },
  ];

  getAvaliableExercise() {
    return this.avaliableExercise.slice();
    //get copy and didnt effect to array usign slice
  }

 private runningExercise!: Excerise;


  startExercise(selectId: string) {
    this.runningExercise==this.avaliableExercise.find((ex) => ex.id === selectId);
    this.exerciseChange.next({...this.runningExercise});
  }

  getRunningExercise(){
    return {...this.runningExercise};
  }
}

