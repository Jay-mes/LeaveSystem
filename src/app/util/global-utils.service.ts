import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalUtilsService {

  leavelist : User[] = [
    {
      firstName: "john",
      lastName : "smith",
      startDate : "06-04-2020",
      endDate : "09-04-2020",
      leaveType : "Annual",
      reason : "",
      totalDays : 4 
    },
    {
      firstName: "James",
      lastName : "Baloyi",
      startDate : "06-04-2020",
      endDate : "09-04-2020",
      leaveType : "Annual",
      reason : "",
      totalDays : 4 
    },
    {
      firstName: "Erik",
      lastName : "brits",
      startDate : "06-04-2020",
      endDate : "10-04-2020",
      leaveType : "Annual",
      reason : "",
      totalDays : 5 
    },
    {
      firstName: "Jacky",
      lastName : "Bothelezi",
      startDate : "06-04-2020",
      endDate : "08-04-2020",
      leaveType : "sick",
      reason : "",
      totalDays : 3 
    },
    {
      firstName: "Cathy",
      lastName : "Cona",
      startDate : "06-04-2020",
      endDate : "07-04-2020",
      leaveType : "Annual",
      reason : "",
      totalDays : 2 
    }
  ];

  constructor() { }
}
