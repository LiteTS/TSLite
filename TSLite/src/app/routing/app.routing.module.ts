import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { WorkflowComponent } from '../components/workflow/workflow.component';

const appRoutes: Routes = [

    {
        path: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: 'WorkFlow',
        component: WorkflowComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}