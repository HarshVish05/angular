import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


  @Input() task: Task = {

  }

  constructor(){
    
  }


  ngOnInit(): void {
    
  }

}
