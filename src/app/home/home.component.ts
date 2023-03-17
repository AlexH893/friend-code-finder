import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Code } from '../shared/models/code.interface';
import { Regions } from '../shared/models/region.interface';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, startWith } from 'rxjs/operators';
import { RegionsService } from '../../services/regions.service';
const moment = require('moment');
import 'moment-timezone';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InvalidComponent } from '../invalid/invalid.component';

// https://pokemongohub.net/post/guide/vivillon-guide/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  errorMsg: string;
  data: any;
  error: any;
  status: string;
  private subs = new Subscription();
  options: Regions[] = [];
  filteredJSONDataOptions: Observable<any[]>;
  regionForm = new FormControl();
  filterForm = new FormControl();
  name: string;
  toggled: boolean = false;
  //timeFromNow: string;

  filterValue = '';

  codeForm = new FormGroup({
    code: new FormControl(),
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;
  codes = new MatTableDataSource<Code>([]);

  displayedColumns: string[] = ['code'];
  region: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private regionsSv: RegionsService,
    private dialog: MatDialog
  ) {}

  // GET codes api
  fetchCodes(): void {
    this.http
      .get('http://localhost:3000/api/codes') //prod - '/api/codes'
      .subscribe((res: Code[]) => {
        this.codes.data = res;
        console.log(this.codes.data);
        const userTimezone = moment.tz.guess();
        const serverTimezone = 'America/Denver'; // Replace with your server's timezone
        this.codes.data.forEach((code: Code) => {
          const createdAtMoment = moment(code.createdAt)
            .utcOffset(serverTimezone) // Apply the server timezone offset to the createdAtMoment
            .tz(userTimezone); // Apply the user timezone to the createdAtMoment
          const formattedCreatedAt = createdAtMoment.fromNow();
          code.createdAt = formattedCreatedAt;
          console.log(moment.tz.guess(true));
        });
      });
  }

  // Runs when component is first loaded/initialized
  ngOnInit(): void {
    this.fetchCodes();
    this.codeForm = this.fb.group({
      code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^\\d{4}\\s\\d{4}\\s\\d{4}$'), //Allows for only 12 digits
        ]),
      ],
    });

    this.filteredJSONDataOptions = this.regionForm.valueChanges.pipe(
      startWith(''),
      map((value) => this.json_data_filter(value))
    );

    this.subs.add(
      this.regionsSv.getRegions().subscribe(
        (data) => {
          this.options = data;
        },

        (err: HttpErrorResponse) => {
          console.log(err);
        }
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  // JSON Data Filter for Regions select
  private json_data_filter(value: string): string[] {
    let newList = [];
    this.options.forEach((element) => {
      if (element.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        newList.push({ name: element.name, vivillion: element.vivillion });
      }
    });
    return newList;
  }

  ngAfterViewInit() {
    this.codes.paginator = this.paginator;
  }

  // Displays the toast when a user copies a code
  showSnackbar(content, action, duration) {
    this.snackBar.open(content, action, {
      duration: 1000,
      verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.codes.filter = filterValue.trim().toLowerCase();
    console.log('Filter applied');
  }

  clearFilter() {
    console.log('clearing filter');
    this.codes.filter = '';
    this.filterValue = '';
    this.toggleQr((this.toggled = !this.toggled));
  }

  // Submitting the form
  submitCode() {
    const codeInput = this.codeForm.value;
    let regionInput = this.regionForm.value;
    this.data = undefined;
    this.error = undefined;
    var isValid = false;

    // Looping through each option
    for (var i = 0; i < this.options.length; i++) {
      //console.log(entries);
      // Checking if region input matches any option name, stop looping if true
      if (this.options[i].name === regionInput) {
        isValid = true;
        console.log('valid');
        break;
      }
    }

    // If true, submit form, else user receives error
    if (isValid) {
      this.http
        .post('http://localhost:3000/api/codes', {
          // this fixed heroku error, change back to /api/codes for prod
          code: codeInput.code,
          name: regionInput,
          //vivillion: regionInput.
        })
        .subscribe((response: any) => {
          alert('code success');
          console.log('SUCCESS');
          window.location.reload(); // Will update to async pipe later
        });
    } else {
      alert('Region input invalid');
    }
  }

  // QR Toggle
  toggleQr(toggled) {
    this.toggled = !this.toggled;
    if (this.toggled == true) {
      const elements = document.querySelectorAll<HTMLElement>('.qr');
      const codes = document.querySelectorAll<HTMLElement>('#code');
      const createdAtDates = document.querySelectorAll<HTMLElement>('#details');
      // Displaying Qr codes
      for (const e of elements) {
        e.style.cssText = 'display:inline;padding-bottom: 3em;'; // cssText allows multiple JS css styles
        for (const c of codes) {
          c.style.cssText = 'display:none;';
          for (const d of createdAtDates) {
            d.style.cssText = 'margin-bottom:2em;';
          }
        }
      }
      console.log('Displaying QR codes');
    } else if (this.toggled == false) {
      const elements = document.querySelectorAll<HTMLElement>('.qr');
      const codes = document.querySelectorAll<HTMLElement>('#code');
      const createdAtDates = document.querySelectorAll<HTMLElement>('#details');
      const details = document.querySelectorAll<HTMLElement>('#details');

      // Hiding Qr codes
      for (const e of elements) {
        e.style.display = 'none';
        for (const c of codes) {
          c.style.cssText =
            'font-size: 1.2em;float: left;margin-left: 1em;margin-top: 0.1em;';
          for (const d of createdAtDates) {
            d.style.cssText = 'display:inline;';
          }
          for (const r of details) {
            r.style.cssText = 'display: inline-block;';
          }
        }
      }
      console.log('Hiding QR codes');
    }
  }

  report(code: string, _id: Object) {
    const nonBreakingSpace = `\n`;

    const ref: MatDialogRef<InvalidComponent> = this.dialog.open(
      InvalidComponent,
      {
        data: {
          message: 'Codes flagged by multiple users will be removed',
          code: code,
          _id: _id,
        },
        panelClass: 'modalbox',
        //backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
    );
  }
}
