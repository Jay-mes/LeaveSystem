import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { LogonComponent } from './logon/logon.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';



const routes: Routes = [
  
    {
      path : '',
      component : LogonComponent,
    },
    {
      path : 'requestLeave',
      component : RequestLeaveComponent,
    },
    {
      path : 'listLeave',
      component : LeaveListComponent,
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
