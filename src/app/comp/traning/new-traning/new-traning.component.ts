import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit {

  @Output() traingStart=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onStartTraning(){
    this.traingStart.emit();
  }

}
