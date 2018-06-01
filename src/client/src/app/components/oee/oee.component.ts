import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import {TaskService } from '../../services/task.service';
import { Machine } from "../../Machine";

@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.css']
})
export class OeeComponent implements OnInit {
  tasks: Machine[];
  tdisp: string;
  model: string;
  cprod: string;

  constructor(public auth: AuthService, private taskService: TaskService) { 
    this.taskService.getMachine()
    .subscribe(tasks => {
      this.tasks = tasks
    })
   }

   selectchange(args){ 
    this.tdisp = args.target.value; 
  } 

  selectchange2(args){ 
    this.cprod = args.target.value; 
  } 

  ngOnInit() {
  }

}