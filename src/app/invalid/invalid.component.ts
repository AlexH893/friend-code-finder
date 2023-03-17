import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-invalid',
  templateUrl: './invalid.component.html',
  styleUrls: ['./invalid.component.scss'],
})
export class InvalidComponent implements OnInit {
  message = '';
  //http: any;
  codes: any;
  _id: any;
  code: any;

  constructor(
    private dialogRef: MatDialogRef<InvalidComponent>,
    private snackBar: MatSnackBar,

    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    data: { message: string; code: string; _id: Object }
  ) {
    this.message = data ? data.message : '';
    this.code = data ? data.code : '';
    this._id = data ? data._id : '';
    //console.log(this._id + " " + this.code);
  }
  ngOnInit(): void {}

  flagCode(code: string, _id: Object) {
    this.http
      .put(`http://localhost:3000/api/codes/${_id}`, { flagged: 1 })
      .subscribe(
        (response: any) => {
          response.flagged += 1;
          console.log('Code flagged +=1');
          this.showSnackbar('Code flagged', 'Dismiss', '1000')

        },
        (error: any) => {
          alert(`Failed to flag code: ${error.message}`);
          console.log('ERROR', error);
        }
      );
  }

    // Displays the toast when a user copies a code
    showSnackbar(content, action, duration) {
      this.snackBar.open(content, action, {
        duration: 1000,
        verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
        horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
      });
    }
}
