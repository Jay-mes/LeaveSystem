import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { GlobalUtilsService } from '../util/global-utils.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {


  objNewData : User = new User;
  minDate : Date;
  
  /* ***************************************************** */
  
  filterWeekends = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  } 

  get firstname() {
    return this.leaveRequestForm.get('firstname');
  }
  get lastname() {
    return this.leaveRequestForm.get('lastname');
  }
  get startDate() {
    return this.leaveRequestForm.get('startDate');
  }
  get endDate() {
    return this.leaveRequestForm.get('endDate');
  }
  get leaveType() {
    return this.leaveRequestForm.get("leaveType");
  }
  get reason() {
    return this.leaveRequestForm.get('reason');
  }
  
  

  leaveRequestForm = this.formBuilder.group({
    firstname: ['', Validators.compose([Validators.required])],
    lastname: ['', Validators.compose([Validators.required])],
    startDate: ['', Validators.compose([Validators.required])],
    endDate: ['', Validators.compose([Validators.required])],
    leaveType: ['', Validators.compose([Validators.required])],
    reason: ['', Validators.compose([Validators.required])],
  });
  
  errMessage = {
    firstname: [{ type: 'required', message: 'firstname is required.' }],
    lastname: [{ type: 'required', message: 'lastname is required.' }],
    startDate: [{ type: 'required', message: 'Select start date' }],
    endDate: [{ type: 'required', message: 'Select end date' }],
    leaveType: [{ type: 'required', message: 'Select type of leave' }],
  };

  constructor(private formBuilder: FormBuilder, private router: Router, private util : GlobalUtilsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 0, 1);

  }



  onSubmit(){

    if (this.leaveRequestForm.valid){

      if (new Date(this.endDate.value) < new Date(this.startDate.value)){
        alert("end date cannot be less than start date");
      }else{

        let tmpNumbers = parseInt((Math.floor((this.startDate.value - this.endDate.value) / (1000 * 60 * 60 * 24)) - 1).toString().substr(1,1));   
        
        this.objNewData.firstName = this.firstname.value;
        this.objNewData.lastName = this.lastname.value;
        this.objNewData.startDate = formatDate(new Date(this.startDate.value), 'yyyy-MM-dd', 'en-US').toString();
        this.objNewData.endDate = formatDate(new Date(this.endDate.value), 'yyyy-MM-dd', 'en-US').toString();;
        this.objNewData.leaveType = this.leaveType.value;
        this.objNewData.reason = this.reason.value;
        this.objNewData.totalDays = tmpNumbers;
        

        let tmpNu//mbers = parseInt((Math.floor((this.startDate.value - this.endDate.value) / (1000 * 60 * 60 * 24)) - 1).toString().substr(1,1)); 
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '250px',
          data: {objData: this.objNewData}
        });
      }
    }else{
      alert("Please fill all required fields"); 
    }
  }

}
