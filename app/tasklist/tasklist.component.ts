import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  standalone: false,
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})

export class TasklistComponent {
  tasks = [
  {
    title: 'Design Homepage Layout',
    description: 'Create wireframes and a mockup for the new homepage layout.'
  },
  {
    title: 'Update User Profile Feature',
    description: 'Enhance the user profile page with new fields and validation.'
  },
  {
    title: 'Fix Bugs in Task Management Module',
    description: 'Resolve the bugs reported in the task management module.'
  },
  {
    title: 'Develop Notification System',
    description: 'Implement a notification system for task updates.'
  },
  {
    title: 'Code Review for Authentication Module',
    description: 'Conduct a code review for the recently developed authentication module.',
  },
 ];

 userInputTitle = '';
 userInputDescription = '';

 newTitle = new FormControl('',Validators.required);
 newDescription = new FormControl('',Validators.required);
 userInput = '';


 onSubmit() {
  const newTask = {
    title: this.userInputTitle,
    description: this.userInputDescription
  }
  this.tasks.push(newTask);
 }

 onSubmitForm() {
  if (this.newTitle.invalid || this.newDescription.invalid) {
    alert('Must fill out all empty inputs.')
  }
    const newTask = {
    title: this.newTitle.value ?? '',
    description: this.newDescription.value ?? ''
  }
  this.tasks.push(newTask);
  this.newTitle.reset('');
  this.newDescription.reset('');
 }

 getChild(e:Event) {
  console.log(e);
 }

 onSearch() {
  const arr = this.tasks.filter((task)=> {
    return task.title.toLocaleLowerCase().includes(this.userInput);
  })
  console.log(arr);
 }
}
