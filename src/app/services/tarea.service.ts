import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  tareas: any =[]

  constructor() { }

  guardarTarea(tarea: any) {
    let tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
}
