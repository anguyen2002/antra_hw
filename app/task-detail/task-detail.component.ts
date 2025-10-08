import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit{
  @Input() details : any;
  @Output() changedDetails= new EventEmitter<any>();
  newTitle = '';
  newDescription = '';
  clicked: boolean = false;

  onClick(){
    this.clicked = true;
  }
  ngOnInit(): void {
    this.newTitle = this.details.title;
    this.newDescription = this.details.description;
  }

  onSubmit() {
    // this.details.title = this.newTitle;
    // this.details.description = this.newDescription;
    const task = {
      Title: this.newTitle,
      Description: this.newDescription,
    }

    this.changedDetails.emit(task);


  }

}
