(self["webpackChunkgofriendcodes"] = self["webpackChunkgofriendcodes"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 7205);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-layout/base-layout.component */ 3826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__.BaseLayoutComponent,
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabledBlocking'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'Pokémon Go Friend Codes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 7205);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-layout/base-layout.component */ 3826);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-moment */ 9692);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _tut_dialog_tut_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tut-dialog/tut-dialog.component */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
            ngx_moment__WEBPACK_IMPORTED_MODULE_16__.MomentModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_3__.BaseLayoutComponent,
        _tut_dialog_tut_dialog_component__WEBPACK_IMPORTED_MODULE_4__.TutDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_16__.MomentModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule] }); })();


/***/ }),

/***/ 3826:
/*!******************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLayoutComponent": () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class BaseLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) { return new (t || BaseLayoutComponent)(); };
BaseLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseLayoutComponent, selectors: [["app-base-layout"]], decls: 7, vars: 0, consts: [["fxLayout", "column"], ["fxFlex", ""], [1, "navbar-container"], ["fxFlex", "100%;", 1, "main-content"]], template: function BaseLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.mat-toolbar-row[_ngcontent-%COMP%] {\r\n  padding: 0 16 px;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #6b705c;\r\n}\r\n\r\n\r\n\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n  background-color: #eaf4f4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG5cclxuLm1hdC10b29sYmFyLXJvdyB7XHJcbiAgcGFkZGluZzogMCAxNiBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjcwNWM7XHJcbn1cclxuXHJcbi8qIE5hdmJhciBzdHlsaW5nICovXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjRmNDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7205:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);















function HomeComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recently submitted friend codes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function HomeComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_23_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.showSnackbar("Friend code copied to clipboard", "Dismiss", "1000");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", code_r4)("cdkCopyToClipboard", code_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", code_r4.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](code_r4.createdAt);
  }
}

function HomeComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
  }
}

function HomeComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
  }
}

const _c0 = function () {
  return [10, 20, 50, 100];
};

class HomeComponent {
  constructor(http, fb, snackBar, meta, title //public dialog: MatDialogModule
  ) {
    this.http = http;
    this.fb = fb;
    this.snackBar = snackBar;
    this.meta = meta;
    this.title = title;
    this.codeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl()
    });
    this.codes = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
    this.displayedColumns = ['code'];
    this.meta.addTags([{
      name: 'description',
      content: 'Home page of Pokemon Go Friend Codes'
    }, {
      name: 'author',
      content: 'stillworld'
    }, {
      name: 'keywords',
      content: 'Pokemon, Pokemon Go Friend Codes, Pogo friend codes'
    }]);
    this.setTitle('Pokémon Go Friend Codes');
  }

  setTitle(newTitle) {
    this.title.setTitle(newTitle);
  }
  /*
   * Method to retrieve codes with API call
   */


  fetchCodes() {
    this.http.get('http://localhost:3000/api/codes').subscribe(res => {
      this.codes.data = res;
      console.log(this.codes.data);
    });
  }

  ngOnInit() {
    this.fetchCodes();
    this.codeForm = this.fb.group({
      code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^\\d{12}$') //Allows for only 12 digits
      ])]
    });
  }

  ngAfterViewInit() {
    this.codes.paginator = this.paginator;
  }

  applyFilter(event) {
    const filterValue = event.target.value;
    this.codes.filter = filterValue.trim().toLowerCase();

    if (this.codes.paginator) {
      this.codes.paginator.firstPage();
    }
  }

  submitCode() {
    const codeInput = this.codeForm.value;
    this.http.post('http://localhost:3000/api/codes', {
      // this fixed heroku error, change back to /api/codes for prod
      code: codeInput.code
    }).subscribe(res => {
      alert('code success');
      window.location.reload(); // Will update to async pipe later
    });
  }

  showSnackbar(content, action, duration) {
    this.snackBar.open(content, action, {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center' // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'

    });
  }

}

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 27,
  vars: 8,
  consts: [["name", "description", "content", "Pokemon Go Friend Code finder that lets users submit their own code and add friends by viewing other submitted codes."], [1, "card"], ["routerLink", "/", "mat-button", "", 1, "navbar-link"], [1, "center"], [1, "blurb"], [3, "formGroup"], [1, "input"], ["matInput", "", "type", "text", "autofocus", "", "autocomplete", "off", "id", "codeInput", 1, "input__field", 3, "formControl"], [1, "input__label"], ["id", "submitBtn", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z8", "center2", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", "class", "th", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "code", "style", "cursor: pointer", 3, "value", "cdkCopyToClipboard", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 2, "width", "25vw", "margin", "0 auto", 3, "pageSizeOptions"], ["mat-header-cell", "", 1, "th"], ["mat-cell", "", 1, "code", 2, "cursor", "pointer", 3, "value", "cdkCopyToClipboard", "click"], [1, "date"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usage Guide");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pok\u00E9mon Go Friend Codes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome, here you can enter you Pok\u00E9mon Go Friend Code so people can add you from all over the world! Simply submit your code and copy codes to add in Pok\u00E9mon Go. Codes can be bumped every 24hrs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Your friend code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() {
        return ctx.submitCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_th_22_Template, 2, 0, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_td_23_Template, 4, 4, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_tr_24_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_tr_25_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.codeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.codeForm.controls["code"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.codeForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.codes);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__.CdkCopyToClipboard, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow],
  styles: ["[_ngcontent-%COMP%]:root {\n  --color-light: white;\n  --color-dark: #212121;\n  --color-signal: #fab700;\n  --color-background: var(--color-light);\n  --color-text: var(--color-dark);\n  --color-accent: var(--color-signal);\n  --size-bezel: 0.5rem;\n  --size-radius: 4px;\n  line-height: 1.4;\n  font-family: \"Inter\", sans-serif;\n  font-size: calc(0.6rem + 0.4vw);\n  color: var(--color-text);\n  background: var(--color-background);\n  font-weight: 300;\n  padding: 0 calc(var(--size-bezel) * 3);\n}\n\nhtml[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.center2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n  width: 25%;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 30%;\n  background: white;\n  padding: 2rem;\n  margin-top: 2rem;\n  border-radius: 4px;\n  border: 3px solid black;\n  box-shadow: 0.5rem 0.5rem 0 black;\n}\n\n@media (max-width: 428px) {\n  .card[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n}\n\n@media all and (max-width: 30em) {\n  a.copyBtn[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0.4em auto;\n  }\n}\n\n\n\na.date[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  margin-left: 20px;\n}\n\n.input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input__label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);\n  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);\n  background: white;\n  white-space: nowrap;\n  transform: translate(0, 0);\n  transform-origin: 0 0;\n  background: var(--color-background);\n  transition: transform 120ms ease-in;\n  font-weight: bold;\n  line-height: 1.2;\n  font-size: 0.8rem;\n}\n\n.input__field[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 3px solid currentColor;\n  padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);\n  color: currentColor;\n  background: transparent;\n  border-radius: var(--size-radius);\n}\n\n.input__field[_ngcontent-%COMP%]:focus    + .input__label[_ngcontent-%COMP%], .input__field[_ngcontent-%COMP%]:not(:placeholder-shown)    + .input__label[_ngcontent-%COMP%] {\n  transform: translate(0.25rem, -65%) scale(0.8);\n  color: var(--color-accent);\n}\n\np.blurb[_ngcontent-%COMP%] {\n  width: 30vw;\n  margin: 0 auto;\n}\n\n@media (max-width: 428px) {\n  p.blurb[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n}\n\n#submitBtn[_ngcontent-%COMP%] {\n  margin-left: 3em;\n  cursor: pointer;\n  color: currentColor;\n  padding: var(--size-bezel) calc(var(--size-bezel) * 2);\n  background: var(--color-accent);\n  border: 3px solid currentColor;\n  border-radius: var(--size-radius);\n  font-weight: 900;\n  margin-top: calc(var(--size-bezel) * 2.5);\n}\n\n#submitBtn[_ngcontent-%COMP%]:hover {\n  background: #fab700;\n}\n\n#submitBtn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n\n.th[_ngcontent-%COMP%], .code[_ngcontent-%COMP%] {\n  display: contents;\n  white-space: nowrap;\n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.navbar-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: currentColor;\n  background: var(--color-accent);\n  border: 3px solid currentColor;\n  border-radius: var(--size-radius);\n  font-weight: 900;\n}\n\n.navbar-link[_ngcontent-%COMP%]:hover {\n  background: #fab700;\n  cursor: help;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7QUFGRjs7QUFJRTtFQVZGO0lBV0ksV0FBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0Y7O0FBSUE7O0NBQUE7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHFFQUFBO0VBQ0EsMEVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFJRTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHdEQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FBRko7O0FBTU07RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0FBSlI7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVFFO0VBSEY7SUFJSSxXQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBTEY7O0FBTUU7RUFDRSxtQkFBQTtBQUpKOztBQU1FO0VBQ0UsbUJBQUE7QUFKSjs7QUFPQTs7RUFFRSxpQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1jb2xvci1saWdodDogd2hpdGU7XHJcbiAgLS1jb2xvci1kYXJrOiAjMjEyMTIxO1xyXG4gIC0tY29sb3Itc2lnbmFsOiAjZmFiNzAwO1xyXG5cclxuICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0KTtcclxuICAtLWNvbG9yLXRleHQ6IHZhcigtLWNvbG9yLWRhcmspO1xyXG4gIC0tY29sb3ItYWNjZW50OiB2YXIoLS1jb2xvci1zaWduYWwpO1xyXG5cclxuICAtLXNpemUtYmV6ZWw6IDAuNXJlbTtcclxuICAtLXNpemUtcmFkaXVzOiA0cHg7XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiBjYWxjKDAuNnJlbSArIDAuNHZ3KTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAzKTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jZW50ZXIyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDMwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMCBibGFjaztcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyOHB4KSB7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDMwZW0pIHtcclxuICBhLmNvcHlCdG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAuNGVtIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4qIFN0eWxpbmcgZm9yIGRhdGVcclxuKi9cclxuYS5kYXRlIHtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAwLjc1KSBjYWxjKHZhcigtLXNpemUtYmV6ZWwpICogMC41KTtcclxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDAuNzUgKyAzcHgpIGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAwLjUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBlYXNlLWluO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gICZfX2ZpZWxkIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDEuNSkgdmFyKC0tc2l6ZS1iZXplbCk7XHJcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLXJhZGl1cyk7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gICAgICAmICsgLmlucHV0X19sYWJlbCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4yNXJlbSwgLTY1JSkgc2NhbGUoMC44KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxucC5ibHVyYiB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyOHB4KSB7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICB9XHJcbn1cclxuXHJcbiNzdWJtaXRCdG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1iZXplbCkgY2FsYyh2YXIoLS1zaXplLWJlemVsKSAqIDIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWFjY2VudCk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtcmFkaXVzKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc2l6ZS1iZXplbCkgKiAyLjUpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhYjcwMDtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG4udGgsXHJcbi5jb2RlIHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG5cclxuLm5hdmJhci1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLXJhZGl1cyk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmYWI3MDA7XHJcbiAgICBjdXJzb3I6IGhlbHA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 9894:
/*!****************************************************!*\
  !*** ./src/app/tut-dialog/tut-dialog.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutDialogComponent": () => (/* binding */ TutDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TutDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
TutDialogComponent.ɵfac = function TutDialogComponent_Factory(t) { return new (t || TutDialogComponent)(); };
TutDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutDialogComponent, selectors: [["app-tut-dialog"]], decls: 2, vars: 0, template: function TutDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tut-dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apiBaseUrl: 'http://localhost:3000/api',
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 8999,
	"./hy-am.js": 8999,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map