import { Component, OnInit } from '@angular/core';

import {TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

import { Machine } from "../../Machine";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Machine[];
    model: string;
    tdisp: string;
    cprod: string;
    pfab: string;
    
  constructor(public auth: AuthService, private taskService: TaskService) {
    this.taskService.getMachine()
    .subscribe(tasks => {
      this.tasks = tasks
    })
   }

  ngOnInit() {
  }

  addMachine(event){
    event.preventDefault();
    const newMachine: Machine ={
      model: this.model,
      tdisp: this.tdisp,
      cprod: this.cprod,
      pfab: this.pfab,
      stat: false
    };
    this.taskService.addMachine(newMachine)
    .subscribe(machine => {
      this.tasks.push(machine);
      this.model = ''; 
      this.tdisp = '';
      this.cprod = '';
      this.pfab = '';
    });
  }

  delMachine(id){
    const resp = confirm('¿Está seguro de eliminar esta máquina?')
    if(resp){
      const tasks = this.tasks;
    this.taskService.delMachine(id)
    .subscribe(data => {
      if(data.n == 1){
        for(let i = 0; i < tasks.length; i++){
          if (tasks[i]._id == id) {
            tasks.splice(i, 1);
          }
        }
      }
    })
  
    }
    return;
    }

    updMachine(task: Machine){
      const newMachine = {
        _id: task._id,
        model: task.model,
        stat: !task.stat
      };
  
      this.taskService.updMachine(newMachine)
      .subscribe(res => {
        task.stat = !task.stat
      });
    }

}