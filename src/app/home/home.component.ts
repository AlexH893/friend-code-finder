/*
 * Author: Alex Haefner
 * Date: Dec 7, 2021
 * Descripton: TS file for Home
 *  https://stackblitz.com/run?file=src%2Fapp%2Fname-editor%2Fname-editor.component.html
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Code } from '../shared/models/code.interface';
import { Observable } from 'rxjs';
import { CodeService } from '../shared/models/services/code.service';
import { HttpClient } from '@angular/common/http';
import { TutDialogComponent } from '../tut-dialog/tut-dialog.component';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MomentModule } from 'ngx-moment';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;
  codeForm = new FormGroup({
    code: new FormControl(),
  });

  //form: FormGroup;
  errorMsg: string;
  //code = new FormControl('');
  @ViewChild(MatPaginator) paginator: MatPaginator;
  codes = new MatTableDataSource<Code>([]);

  displayedColumns: string[] = ['code'];
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private meta: Meta,
    private title: Title //public dialog: MatDialogModule
  ) {
    this.meta.addTags([
      { name: 'description', content: 'Home page of Pokemon Go Friend Codes' },
      { name: 'author', content: 'stillworld' },
      {
        name: 'keywords',
        content: 'Pokemon, Pokemon Go Friend Codes, Pogo friend codes',
      },
    ]);
    this.setTitle('Pokémon Go Friend Codes');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  /*
   * Method to retrieve codes with API call
   */
  fetchCodes(): void {
    this.http
      .get('http://localhost:3000/api/codes')
      .subscribe((res: Code[]) => {
        this.codes.data = res;
        console.log(this.codes.data);
      });
  }

  ngOnInit(): void {
    this.fetchCodes();
    this.codeForm = this.fb.group({
      code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^\\d{12}$'), //Allows for only 12 digits
        ]),
      ],
    });
  }

  ngAfterViewInit() {
    this.codes.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.codes.filter = filterValue.trim().toLowerCase();

    if (this.codes.paginator) {
      this.codes.paginator.firstPage();
    }
  }

  submitCode() {
    const codeInput = this.codeForm.value;

    this.http
      .post('http://localhost:3000/api/codes', {
        // this fixed heroku error, change back to /api/codes for prod
        code: codeInput.code,
      })
      .subscribe((res) => {
        alert('code success');
        window.location.reload(); // Will update to async pipe later
      });
  }

  showSnackbar(content, action, duration) {
    this.snackBar.open(content, action, {
      duration: 1000,
      verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
  /*
  openDialog(): void {
    const dialogRef = this.dialog.open(TutDialogComponent, {
      width: '250px',
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }*/
}
