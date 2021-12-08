import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from '../code.interface';
@Injectable({
  providedIn: 'root',
})
export class CodeService {
  constructor(private http: HttpClient) {}

  fetchCodes() {
    return this.http.get('http://localhost:3000/api/codes/');
  }

  createCode(code: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/codes/', {
      code: code,
    });
  }
}
