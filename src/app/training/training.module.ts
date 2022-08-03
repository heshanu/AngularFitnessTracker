import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingsComponent } from "./past-trainings/past-trainings.component";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from "../../environments/environment";
import { AngularFireModule } from "angularfire2";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations:[
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports:[
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule
  ],
  exports:[]
})
export class TraningModule{}

