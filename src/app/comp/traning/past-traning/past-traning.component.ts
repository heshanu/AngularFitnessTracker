import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Excerise } from '../exercise.model';
import { TrainingService } from '../traning.service';

@Component({
  selector: 'app-past-traning',
  templateUrl: './past-traning.component.html',
  styleUrls: ['./past-traning.component.css'],
})
export class PastTraningComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Excerise>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private trainingService: TrainingService) {}
  ngAfterViewInit(): void {
    this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompletedorCanceled();
  }
}
