import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit{
  @Input() taskDetails!: Task; 
  @Output() editedDetails = new EventEmitter<Task>();

  selectedTask: boolean = false;

  editTaskForm = new FormGroup({
    'title': new FormControl(),
    'description': new FormControl(),
    'duedate': new FormControl(),
    'status': new FormControl(),
    'priority': new FormControl(),

  })

  onSelectTask() {
    this.selectedTask = !this.selectedTask;
  } 

  ngOnInit():void {
    if (this.taskDetails) {
      this.editTaskForm.patchValue({
        title: this.taskDetails.title,
        description: this.taskDetails.description,
        duedate: this.taskDetails.dueDate,
        status: this.taskDetails.status,
        priority: this.taskDetails.priority
      })
    }
  }


  onSave() {
    if (this.editTaskForm.valid) {
    // Create a new task object with updated values
      const updatedTask: Task = {
        ...this.taskDetails, // keep existing properties like id
        title: this.editTaskForm.value.title!,
        description: this.editTaskForm.value.description!,
        dueDate: this.editTaskForm.value.duedate!,
        status: this.editTaskForm.value.status!,
        priority: this.editTaskForm.value.priority!
    };

    // Emit updated task to parent
    this.editedDetails.emit(updatedTask);
    } 
  }
}
