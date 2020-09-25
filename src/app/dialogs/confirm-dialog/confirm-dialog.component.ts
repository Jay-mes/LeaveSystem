import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalUtilsService } from 'src/app/util/global-utils.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<ConfirmDialogComponent>, 
    @Inject (MAT_DIALOG_DATA) public data: any, private router: Router, 
    private util : GlobalUtilsService) { }

  ngOnInit(): void {
  }

  onYesClick(){

    this.util.leavelist.push(this.data.objData);
    this.router.navigate(["/listLeave"]);
    this.dialogRef.close();
  }

}
