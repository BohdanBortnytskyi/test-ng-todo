import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public taskItems = [];

  public newTaskTitle;
  public newTaskText;

  public addTask() {
    if (this.newTaskTitle != '') {
      let task = {
        title: this.newTaskTitle,
        text: this.newTaskText
      };

      this.taskItems.push(task);
      this.newTaskTitle = '';
      this.newTaskText = '';
    }
  }

  public deleteTask(index) {
    this.taskItems.splice(index, 1);
  }
}
