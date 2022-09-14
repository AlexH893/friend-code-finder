import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][code-mask]'
})
export class CodeFormatDirective {

  public newVal: string;

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event);
  }

  onInputChange(event) {
    this.checkInputType(event);
    this.checkInputContent();
    this.format(event);
    this.returnFormated();
  }

  returnFormated() {
    this.ngControl.valueAccessor.writeValue(this.newVal);
  }

  checkInputType(event) {
    this.newVal = event.replace(/\W/g, '');
  }

  checkInputContent() {
    /**
    * We ensure the first 15 characters are only numerals
    */
    if (this.newVal.length < 12) {
      this.newVal = this.newVal.replace(/\D/g, '');
    }
  }


  format(event) {
    /**
    * We apply the wanted mask
    */

    if (this.newVal.length <= 4) {
      this.newVal = this.newVal.replace(/^(\d{0,4})/, '$1');
    } else if (this.newVal.length <= 5) {
      this.newVal = this.newVal.replace(/^(\d{0,4})(\d{0,4})/, '$1 $2');
    } else if (this.newVal.length <= 8) {
      this.newVal = this.newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2');
    } else if (this.newVal.length <= 12) {
      this.newVal = this.newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2 $3');
    } else {
      this.newVal = this.newVal.substring(0, 12);
      this.newVal = this.newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2 $3');
    }
  }












}
