import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';

@Pipe({
  name: 'statusFilter',
  standalone: false
})
export class StatusFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: String): Task[] {
    return tasks.filter(task =>
      task.status === status
    );
  }

}
