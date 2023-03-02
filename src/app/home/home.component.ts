import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Code } from '../shared/models/code.interface';
import { Regions } from '../shared/models/region.interface';
import { Observable, Subscription } from 'rxjs';
import { CodeService } from '../shared/models/services/code.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MomentModule } from 'ngx-moment';
import { map, startWith } from 'rxjs/operators';
import { RegionsService } from '../../services/regions.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  options: Regions[] = [];
  filteredJSONDataOptions: Observable<any[]>;
  regionForm = new FormControl();

  name: string;
  codeForm = new FormGroup({
    code: new FormControl(),
  });

  //form: FormGroup;
  errorMsg: string;
  //code = new FormControl('');
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild('autoTrigger', { read: MatAutocompleteTrigger })
  // autoTrigger: MatAutocompleteTrigger;
  codes = new MatTableDataSource<Code>([]);

  displayedColumns: string[] = ['code'];
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private regionsSv: RegionsService
  ) {}

  // GET codes api
  fetchCodes(): void {
    this.http
      .get('http://localhost:3000/api/codes') //prod - '/api/codes'
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
          Validators.pattern('^\\d{4}\\s\\d{4}\\s\\d{4}$'), //Allows for only 12 digits
        ]),
      ],
    });

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

    this.filteredJSONDataOptions = this.regionForm.valueChanges.pipe(
      startWith(''),
      map((value) => this.json_data_filter(value))
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  // JSON Data Filter
  private json_data_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
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

  // Submitting the form
  submitCode() {
    const codeInput = this.codeForm.value;
    const regionInput = this.regionForm.value;
    alert(regionInput);
    this.http
      .post('http://localhost:3000/api/codes', {
        // this fixed heroku error, change back to /api/codes for prod
        code: codeInput.code,
        name: regionInput,
        //vivillion: regionInput.
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

  // selectionMade(event: Event, trigger: MatAutocompleteTrigger) {
  //   trigger.openPanel();
  // }
}
