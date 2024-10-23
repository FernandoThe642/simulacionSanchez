import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'pages/home',
        pathMatch: 'full' //Coincidir ruta vacia
    },
    {
        path: 'pages/home',
        component: HomeComponent
    },
    {
        path: 'components/tareas',
        component: TareasComponent
    },
    {
        path: 'components/detalle-tarea',
        component: DetalleTareaComponent
    }
];
