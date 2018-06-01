import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Machine } from '../Machine';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  domain: string = "https://acme-app-.herokuapp.com";

  constructor(private http: HttpClient) { }

  getMachine() {
   return this.http.get<Machine[]>(`${this.domain}/api/tasks`)
    .pipe(map(res => res));
    //.pipe(map((response: any) => response.json()));
  }

  addMachine(newMachine: Machine) {
    return this.http.post<Machine>(`${this.domain}/api/tasks`, newMachine)
    .pipe(map(res => res));
    //.pipe(map((response: any) => response.json()));

  }

  delMachine(id) {
    return this.http.delete<Machine>(`${this.domain}/api/tasks/${id}`)
    .pipe(map(res => res));
    //.pipe(map((response: any) => response.json()));

  }

  updMachine(newMachine) {
    return this.http.put(`${this.domain}/api/tasks/${newMachine._id}`, newMachine)
    .pipe(map(res => res));
    //.pipe(map((response: any) => response.json()));
  }
}
