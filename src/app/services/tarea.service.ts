import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  

  tareas: any[] = [];

  constructor() { 
    this.cargarTareas();
  }

  // Cargar las tareas desde el localStorage al iniciar el servicio
  private cargarTareas() {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  // Guardar una nueva tarea y actualizar el localStorage
  guardarTarea(tarea: any) {
    tarea.id = this.generarId();
    this.tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  // Eliminar una tarea por su ID
  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  // Obtener todas las tareas
  obtenerTareas(): any[] {
    return this.tareas;
  }

  // Generar un ID único para cada tarea
  private generarId(): number {
    return this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1;
  }
}
