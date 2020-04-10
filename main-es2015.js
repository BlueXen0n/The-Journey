(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'The-Journey';
        this.x = this.getCookie('theme');
    }
    ngOnInit() {
        console.log(document.cookie);
        if (this.x == null) {
            this.setCookie("theme", "darkly");
            this.DisplayTheme();
        }
        this.DisplayTheme();
    }
    DisplayTheme() {
        var elem1 = document.getElementById("Theme1");
        var elem2 = document.getElementById("Theme2");
        var elem3 = document.getElementById("Theme3");
        var elem4 = document.getElementById("Theme4");
        var elem5 = document.getElementById("Theme5");
        var elem6 = document.getElementById("Theme6");
        var elem7 = document.getElementById("Theme7");
        var elem8 = document.getElementById("Theme8");
        this.x = this.getCookie('theme');
        if (this.getCookie("theme") === "darkly") {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            elem6.className = "dropdown-item bg-dark";
            elem7.className = "dropdown-item bg-dark";
            elem8.className = "dropdown-item bg-dark";
            // (<HTMLInputElement>document.getElementById('stylesheet')).setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
        }
        else if (this.getCookie("theme") === "flatly") {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            elem6.className = "dropdown-item bg-primary";
            elem7.className = "dropdown-item bg-primary";
            elem8.className = "dropdown-item bg-primary";
            // (<HTMLInputElement>document.getElementById('stylesheet')).setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
        }
    }
    ThemeChange() {
        var elem1 = document.getElementById("Theme1");
        var elem2 = document.getElementById("Theme2");
        var elem3 = document.getElementById("Theme3");
        var elem4 = document.getElementById("Theme4");
        var elem5 = document.getElementById("Theme5");
        var elem6 = document.getElementById("Theme6");
        var elem7 = document.getElementById("Theme7");
        var elem8 = document.getElementById("Theme8");
        if (this.getCookie("theme") === "darkly") {
            this.setCookie("theme", 'flatly');
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            elem6.className = "dropdown-item bg-primary";
            elem7.className = "dropdown-item bg-primary";
            elem8.className = "dropdown-item bg-primary";
            // (<HTMLInputElement>document.getElementById('stylesheet')).setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
        }
        else if (this.getCookie("theme") === "flatly") {
            this.setCookie('theme', 'darkly');
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            elem6.className = "dropdown-item bg-dark";
            elem7.className = "dropdown-item bg-dark";
            elem8.className = "dropdown-item bg-dark";
            // (<HTMLInputElement>document.getElementById('stylesheet')).setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
        }
    }
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }
    setCookie(name, val) {
        const date = new Date();
        const value = val;
        // Set it to expire in 1 year
        date.setTime(date.getTime() + (3600 * 1000 * 24 * 365 * 1));
        // Set it
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 0, consts: [["href", "/home"], ["id", "Theme1", 1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark"], ["routerLink", "/home", "routerLinkActive", "active", 1, "navbar-brand"], [1, "sr-only"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "dropdown"], ["id", "dropdownId", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "#e0e0e0"], ["id", "Theme2", "aria-labelledby", "dropdownId", 1, "dropdown-menu", "bg-dark"], ["id", "Theme3", "routerLink", "/curb65", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme4", "routerLink", "/covid19", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme6", "routerLink", "/cstat", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme7", "routerLink", "/bmi-bsa", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme8", "routerLink", "/glasgow-coma-scale", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], [1, "form-group"], ["type", "button", "id", "customSwitch1", 1, "btn", "btn-info", 3, "click"], ["id", "Theme5", 2, "display", "none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "base", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The-Journey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Calculators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cstat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BMI/BSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Glasgow Coma Scale (GCS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.ThemeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dark mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 18);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#collapsibleNavId[_ngcontent-%COMP%] { \n    height: 50px;\n}\n\n#Theme1[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDLG9CQUFvQixrQkFBa0I7SUFDbkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gI2NvbGxhcHNpYmxlTmF2SWQgeyAvKiBOYXZiYXIgaGVpZ2h0ICovXG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jVGhlbWUxIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _covid19_covid19_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./covid19/covid19.component */ "./src/app/covid19/covid19.component.ts");
/* harmony import */ var _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./curb65/curb65.component */ "./src/app/curb65/curb65.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cstat_cstat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cstat/cstat.component */ "./src/app/cstat/cstat.component.ts");
/* harmony import */ var _bmi_bsa_bmi_bsa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bmi-bsa/bmi-bsa.component */ "./src/app/bmi-bsa/bmi-bsa.component.ts");
/* harmony import */ var _glasgow_coma_scale_glasgow_coma_scale_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./glasgow-coma-scale/glasgow-coma-scale.component */ "./src/app/glasgow-coma-scale/glasgow-coma-scale.component.ts");














const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'covid19', component: _covid19_covid19_component__WEBPACK_IMPORTED_MODULE_6__["Covid19Component"] },
    { path: 'curb65', component: _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_7__["Curb65Component"] },
    { path: 'cstat', component: _cstat_cstat_component__WEBPACK_IMPORTED_MODULE_9__["CstatComponent"] },
    { path: 'bmi-bsa', component: _bmi_bsa_bmi_bsa_component__WEBPACK_IMPORTED_MODULE_10__["BmiBsaComponent"] },
    { path: 'glasgow-coma-scale', component: _glasgow_coma_scale_glasgow_coma_scale_component__WEBPACK_IMPORTED_MODULE_11__["GlasgowComaScaleComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _covid19_covid19_component__WEBPACK_IMPORTED_MODULE_6__["Covid19Component"],
        _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_7__["Curb65Component"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _cstat_cstat_component__WEBPACK_IMPORTED_MODULE_9__["CstatComponent"],
        _bmi_bsa_bmi_bsa_component__WEBPACK_IMPORTED_MODULE_10__["BmiBsaComponent"],
        _glasgow_coma_scale_glasgow_coma_scale_component__WEBPACK_IMPORTED_MODULE_11__["GlasgowComaScaleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                    )
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _covid19_covid19_component__WEBPACK_IMPORTED_MODULE_6__["Covid19Component"],
                    _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_7__["Curb65Component"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _cstat_cstat_component__WEBPACK_IMPORTED_MODULE_9__["CstatComponent"],
                    _bmi_bsa_bmi_bsa_component__WEBPACK_IMPORTED_MODULE_10__["BmiBsaComponent"],
                    _glasgow_coma_scale_glasgow_coma_scale_component__WEBPACK_IMPORTED_MODULE_11__["GlasgowComaScaleComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bmi-bsa/bmi-bsa.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bmi-bsa/bmi-bsa.component.ts ***!
  \**********************************************/
/*! exports provided: BmiBsaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiBsaComponent", function() { return BmiBsaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class BmiBsaComponent {
    ngOnInit() {
        // this.Reset(); /* Runs Reset on page load */
    }
    Calculate() {
        if (this.weight != null && this.height != null) {
            if (document.getElementById("cmIn").innerHTML === "in" && document.getElementById("kgLbs").innerHTML === "kg") {
                var value;
                value = this.height / 0.39370;
                console.log("CM =" + value);
                this.ResultsBSA = Math.sqrt(this.weight * value) / 60;
                this.ResultsBMI = this.weight / Math.pow(value / 100, 2);
                if (this.targetBMI != null && this.targetBMI != 0) {
                    this.targetBMIout = Math.pow(value / 100, 2) * this.targetBMI;
                    document.getElementById("txt_4_2").innerHTML = "Target weight for BMI " + this.targetBMI + " kg/m²: " + this.targetBMIout.toFixed(2) + " kg";
                    console.log("Target BMI=" + this.targetBMIout);
                }
            }
            else if (document.getElementById("kgLbs").innerHTML === "lbs" && document.getElementById("cmIn").innerHTML === "cm") {
                var value;
                value = this.weight / 2.2046;
                console.log("KG =" + value);
                this.ResultsBSA = Math.sqrt(value * this.height) / 60;
                this.ResultsBMI = value / Math.pow(this.height / 100, 2);
                if (this.targetBMI != null && this.targetBMI != 0) {
                    this.targetBMIout = Math.pow(this.height / 100, 2) * this.targetBMI;
                    document.getElementById("txt_4_2").innerHTML = "Target weight for BMI " + this.targetBMI + " kg/m²: " + this.targetBMIout.toFixed(2) + " kg";
                    console.log("Target BMI=" + this.targetBMIout);
                }
            }
            else if (document.getElementById("kgLbs").innerHTML === "lbs" && document.getElementById("cmIn").innerHTML === "in") {
                var weight1;
                var height2;
                height2 = this.height / 0.39370;
                console.log("CM =" + height2);
                weight1 = this.weight / 2.2046;
                console.log("KG =" + weight1);
                this.ResultsBSA = Math.sqrt(weight1 * height2) / 60;
                this.ResultsBMI = weight1 / Math.pow(height2 / 100, 2);
                if (this.ResultsBMI != null && this.targetBMI != 0) {
                    this.targetBMIout = Math.pow(height2 / 100, 2) * this.targetBMI;
                    document.getElementById("txt_4_2").innerHTML = "Target weight for BMI " + this.targetBMI + " kg/m²: " + this.targetBMIout.toFixed(2) + " kg";
                    console.log("Target BMI=" + this.targetBMIout);
                }
            }
            else if (document.getElementById("kgLbs").innerHTML === "kg" && document.getElementById("cmIn").innerHTML === "cm") {
                this.ResultsBSA = Math.sqrt(this.weight * this.height) / 60;
                this.ResultsBMI = this.weight / Math.pow(this.height / 100, 2);
                if (this.ResultsBMI != null && this.ResultsBMI != 0) {
                    this.targetBMIout = Math.pow(this.height / 100, 2) * this.targetBMI;
                    document.getElementById("txt_4_2").innerHTML = "Target weight for BMI " + this.targetBMI + " kg/m²: " + this.targetBMIout.toFixed(2) + " kg";
                    console.log("Target BMI=" + this.targetBMIout);
                }
            }
            document.getElementById("txt_4_0").style.display = "inline-block";
            document.getElementById("txt_4_1").style.display = "inline-block";
            document.getElementById("txt_4_2").style.display = "inline-block";
            if (this.ResultsBMI != null && this.ResultsBMI != 0) {
                document.getElementById("txt_4_0").innerHTML = "Body Mass Index: (" + this.judge() + ") " + this.ResultsBMI.toFixed(2) + " m²";
                console.log("BMI=" + this.ResultsBMI);
                document.getElementById("txt_4_3").style.display = "none";
            }
            if (this.ResultsBSA != null && this.ResultsBSA != 0) {
                document.getElementById("txt_4_1").innerHTML = "Body Surface Area: " + this.ResultsBSA.toFixed(2);
                console.log("BSA=" + this.ResultsBSA);
                document.getElementById("txt_4_3").style.display = "none";
            }
        }
        if (this.ResultsBMI === null || this.ResultsBMI === 0) {
            document.getElementById("txt_4_0").style.display = "inline-block";
        }
        else if (this.ResultsBSA === null || this.ResultsBSA === 0) {
            document.getElementById("txt_4_1").style.display = "inline-block";
        }
        this.invalidHeight();
        this.invalidweight();
        // if (this.ResultsBMI = 1) {
        //   document.getElementById("targetBMI").className = "form-control is-invalid"
        // }
    }
    invalidweight() {
        if (this.weight < 1) {
            document.getElementById("weight").className = "form-control is-invalid";
            document.getElementById("warning1").innerHTML = "Very low; double-check.";
        }
        else if (this.weight > 229) {
            document.getElementById("weight").className = "form-control is-invalid";
            document.getElementById("warning1").innerHTML = "Too high; please change to proceed.";
        }
        else if (this.weight === null) {
            document.getElementById("weight").className = "form-control";
            document.getElementById("warning1").innerHTML = "";
        }
    }
    // 0-12 Very low; double-check.
    // 204 -228 Very high; double-check.
    // 229 -> Too high; please change to proceed.
    invalidHeight() {
        if (this.height < 20) {
            document.getElementById("height").className = "form-control is-invalid";
            document.getElementById("warning2").innerHTML = "Very low; double-check.";
        }
        else if (this.height > 229) {
            document.getElementById("height").className = "form-control is-invalid";
            document.getElementById("warning2").innerHTML = "Too high; please change to proceed.";
        }
        else {
            document.getElementById("height").className = "form-control";
            document.getElementById("warning2").innerHTML = "";
        }
    }
    judge() {
        var judgement;
        if (this.ResultsBMI < 18.5) {
            judgement = "Underweight";
        }
        else if (this.ResultsBMI > 18.5 && this.ResultsBMI < 24.9) {
            judgement = "Normal weight";
        }
        else if (this.ResultsBMI > 25 && this.ResultsBMI < 29.9) {
            judgement = "Overweight";
        }
        else if (this.ResultsBMI > 30 && this.ResultsBMI < 34.9) {
            judgement = "Class 1 obesity";
        }
        else if (this.ResultsBMI > 35 && this.ResultsBMI < 39.9) {
            judgement = "Class 2 obesity";
        }
        else if (this.ResultsBMI > 35 && this.ResultsBMI >= 40) {
            judgement = "Class 3 obesity";
        }
        return (judgement);
    }
    convertWeight() {
        if (document.getElementById("kgLbs").innerHTML === "lbs") {
            document.getElementById("kgLbs").innerHTML = "kg";
            if (this.weight != null) {
                var value;
                value = this.weight / 2.2046;
                this.weightKG = value.toFixed(2);
                this.weight = this.weightKG;
            }
        }
        else {
            document.getElementById("kgLbs").innerHTML = "lbs";
            if (this.weight != null) {
                var value;
                value = this.weight * 2.2046;
                this.weightLbs = value.toFixed(2);
                this.weight = this.weightLbs;
            }
        }
    }
    convertHeight() {
        if (document.getElementById("cmIn").innerHTML === "in") {
            document.getElementById("cmIn").innerHTML = "cm";
            document.getElementById("height").placeholder = "Norm: 152-213";
            if (this.height != null) {
                var value;
                value = this.height / 0.39370;
                this.heightCM = value.toFixed(2);
                this.height = this.heightCM;
            }
        }
        else {
            document.getElementById("cmIn").innerHTML = "in";
            document.getElementById("height").placeholder = "Norm: 60-84";
            if (this.height != null) {
                var value;
                value = this.height * 0.39370;
                this.heightIn = value.toFixed(2);
                this.height = this.heightIn;
            }
        }
    }
    Print() {
        window.print();
    }
    Reset() {
        document.getElementById("txt_4_0").style.display = "none";
        document.getElementById("txt_4_1").style.display = "none";
        document.getElementById("txt_4_2").style.display = "none";
        document.getElementById("txt_4_3").style.display = "inline-block";
        this.weight = null;
        this.weightKG = null;
        this.weightLbs = null;
        this.height = null;
        this.heightCM = null;
        this.heightIn = null;
        this.targetBMI = null;
        this.targetBMIout = null;
        this.ResultsBSA = null;
        this.ResultsBMI = null;
    }
}
BmiBsaComponent.ɵfac = function BmiBsaComponent_Factory(t) { return new (t || BmiBsaComponent)(); };
BmiBsaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BmiBsaComponent, selectors: [["app-bmi-bsa"]], decls: 148, vars: 3, consts: [["id", "Cstat"], [1, "container"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-8"], [1, "form-group", 2, "display", "inline-flex"], ["for", "amount1", 1, "control-label"], [1, "form-group"], [1, "input-group", "mb-3"], ["type", "text", "id", "weight", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange", "input"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], ["id", "kgLbs"], ["fill", "#1bb193", "viewBox", "0 0 13 13", "data-reactid", "265", 2, "width", "13px", "vertical-align", "middle", "margin-left", "5px", "cursor", "pointer"], ["d", "M12,6H1C0.6,6,0.3,5.8,0.1,5.5s-0.2-0.7,0-1l2.3-4c0.3-0.5,1-0.6,1.4-0.4C4.3,0.4,4.5,1,4.2,1.5L2.7,4H12c0.6,0,1,0.4,1,1 S12.6,6,12,6z", "data-reactid", "266"], ["d", "M1,7h11c0.4,0,0.7,0.2,0.9,0.5s0.2,0.7,0,1l-2.3,4c-0.3,0.5-0.9,0.6-1.4,0.4c-0.5-0.3-0.6-0.9-0.4-1.4L10.3,9H1   C0.4,9,0,8.6,0,8S0.4,7,1,7z", "data-reactid", "267"], ["id", "warning1", 1, "invalid-feedback"], ["for", "amount2", 1, "control-label"], [1, "form-group", "has-danger"], ["type", "text", "id", "height", "placeholder", "Norm: 152-213", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange", "input"], ["id", "cmIn"], ["id", "warning2", 1, "invalid-feedback"], ["for", "amount3", 1, "control-label"], ["type", "text", "id", "targetBMI", "placeholder", "Norm: 20-25", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange", "input"], [1, "input-group-text"], ["id", "warning3", 1, "invalid-feedback"], ["role", "group", 1, "btn-group"], ["type", "button", "id", "ResetButton", 1, "btn", "btn-info", 3, "click"], ["type", "button", "id", "PrintButton", 1, "btn", "btn-info", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "txt_4_3", 2, "display", "block"], ["id", "txt_4_0", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "txt_4_1", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "txt_4_2", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "viewMore", "type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["href", "http://www.nursingtimes.net/Journals/2014/10/10/n/p/l/141015Forty-years-on-updating-the-Glasgow-coma-scale.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", "", 1, "alert-link", 2, "white-space", "nowrap"]], template: function BmiBsaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Body Mass Index (BMI) and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Body Surface Area (BSA) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Calculates body mass index and body surface area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Weight: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BmiBsaComponent_Template_input_ngModelChange_20_listener($event) { return ctx.weight = $event; })("input", function BmiBsaComponent_Template_input_input_20_listener() { return ctx.Calculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_22_listener() { return ctx.convertWeight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BmiBsaComponent_Template_input_ngModelChange_34_listener($event) { return ctx.height = $event; })("input", function BmiBsaComponent_Template_input_input_34_listener() { return ctx.Calculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_36_listener() { return ctx.convertHeight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Target BMI: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Optional, to determine weight required to achieve target BMI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BmiBsaComponent_Template_input_ngModelChange_50_listener($event) { return ctx.targetBMI = $event; })("input", function BmiBsaComponent_Template_input_input_50_listener() { return ctx.Calculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "kg/m\u00B2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_57_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_59_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Please fill out required fields:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "The GCS score can be indicative of how critically ill a patient is.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Trauma patients presenting with GCS <15 warrant close attention and reassessment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "A declining GCS is concerning in any setting and should prompt assessment of the airway and possible intervention.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Conversely, a GCS of 15 should not be taken as an indication that a patient (trauma or medical) is not critically ill. Decisions about the aggressiveness of the management and treatment plans should be made based on clinical presentation and context and not in any way overridden by the GCS score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "If a trauma patient has a GCS \u22648 and there is clinical concern that they are unable to protect their airway or that they have an expected worsening clinical course based on exam or imaging findings, then intubation can be considered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "In any patient, a rapidly declining or waxing and waning GCS is concerning and intubation should be considered in the context of the patient's overall clinical picture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Critical Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Although it has been adopted widely and in a variety of settings, the GCS score is not intended for quantitative use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "From the creators of the GCS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u201CWe have never recommended using the GCS alone, either as a means of monitoring coma, or to assess the severity of brain damage or predict outcome.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Teasdale 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " is calculated by addition of the total points selected under each component (eye, verbal, motor) below, e.g. \"15 points\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " is comprised of the individual components, e.g. \"E(4) V(5) M (6)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetBMI);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["#Cstat[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid, .form-control.is-invalid[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n    clear: left;\n    width: 200px;\n    text-align: left;\n}\n\n#warning1[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\n#warning2[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\n#warning3[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    width: 200px;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n#viewMore[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 200px;\n    z-index: 1;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n    position: -webkit-sticky;\n    position: sticky;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -2%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    max-height: 135px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 55px;\n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0%;\n    color: #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm1pLWJzYS9ibWktYnNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsNkNBQTZDO0lBQ2xELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUEsdUJBQXVCLDRDQUE0QztJQUMvRCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztBQUNwQzs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVUsZ0NBQWdDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsVUFBVSx3QkFBd0I7SUFDOUIsaUJBQWlCO0lBQ2pCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ibWktYnNhL2JtaS1ic2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI0NzdGF0IHsgLyogQWxpZ25zIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2l0ZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogbGVmdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3dhcm5pbmcxIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbiN3YXJuaW5nMiB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4jd2FybmluZzMge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbnAgeyAvKiBDb21wYWN0cyB0ZXh0ICovXG4gICAgbWFyZ2luOiAwLjElO1xufVxuXG5oMSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG5oMyB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG5oNSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG4jYnV0dG9uMSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbiNidXR0b24yIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuI3ZpZXdNb3JlIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMjAwcHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnN3aXRjaC1maWVsZCBidXR0b24geyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQwMCksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmNhcmQtaGVhZGVyIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGhlYWRlciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogMSU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuI0xldmVscyB7IC8qIEdpdmVzIFJlc3VsdHMgQm9sZCBwcm9wZXJ0eSAqLyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG5cbiNSZXN1bHRzIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJvZHkgKi9cbiAgICBtYXJnaW46IC0yJTtcbn1cblxuI1RoZW1lNSB7IC8qIENoYW5nZXMgUmVzdWx0cyBib3ggKi9cbiAgICBtYXgtaGVpZ2h0OiAxMzVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTA3KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW46IDAlO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BmiBsaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bmi-bsa',
                templateUrl: './bmi-bsa.component.html',
                styleUrls: ['./bmi-bsa.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/covid19/covid19.component.ts":
/*!**********************************************!*\
  !*** ./src/app/covid19/covid19.component.ts ***!
  \**********************************************/
/*! exports provided: Covid19Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19Component", function() { return Covid19Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Covid19Component {
    constructor() {
        this.totalBthArr = 0;
        this.LevelsArr2 = 0;
        this.Levels = 0;
    }
    ngOnInit() {
        this.Reset(); /* Runs Reset on page load */
    }
    Print() {
        window.print();
    }
    Reset() {
        document.getElementById("criteria_2_0-no").checked = true;
        document.getElementById("criteria_2_1-no").checked = true;
        document.getElementById("criteria_2_2-no").checked = true;
        document.getElementById("criteria_2_3-no").checked = true;
        document.getElementById("criteria_2_4-no").checked = false;
        document.getElementById("criteria_2_5-no").checked = false;
        document.getElementById("criteria_2_6-no").checked = false;
        document.getElementById("criteria_2_7-no").checked = false;
        document.getElementById("criteria_2_8-no").checked = false;
        document.getElementById("criteria_2_4-yes").checked = false;
        document.getElementById("criteria_2_5-yes").checked = false;
        document.getElementById("criteria_2_6-yes").checked = false;
        document.getElementById("criteria_2_7-yes").checked = false;
        document.getElementById("criteria_2_8-yes").checked = false;
        Covid19Component.arr1 = [0, 0, 0, 0,];
        Covid19Component.arr2 = [];
        this.totalBthArr = 0;
        this.ResultsAdder();
    }
    ResultsAdder() {
        var totalArr1 = 0;
        var totalArr2;
        for (var i in Covid19Component.arr1) {
            totalArr1 += Covid19Component.arr1[i];
        }
        for (var i in Covid19Component.arr2) {
            totalArr2 += Covid19Component.arr2[i];
        }
        this.totalBthArr = Covid19Component.test123(totalArr1);
        // console.log("TotalArr1=" + totalArr1)
        // console.log("TotalArr2=" + totalArr2)
        // console.log("TotalbthArr=" + this.totalBthArr)
        // console.log("Test123=" + Covid19Component.test123(totalArr1))
        // console.log("Level=" + this.Levels)
        // console.log("LevelArr2=" + this.LevelsArr2)
        console.log(Covid19Component.arr1);
        console.log(Covid19Component.arr2);
        this.Levels = this.LevelsArr2 + Covid19Component.test123(totalArr1);
        this.CheckTxtResults_2_1();
        if (Covid19Component.test123(totalArr1) > 2) {
            this.LevelsArr2 = 0;
            document.getElementById("criteria_2_4d").style.display = "block";
            if (Covid19Component.arr2[0] === 0) {
                this.totalBthArr = 4;
            }
            if (Covid19Component.arr2[0] === 1) {
                this.totalBthArr = 4;
            }
            if (Covid19Component.arr2[1] === 0) {
                this.totalBthArr = 5;
            }
            if (Covid19Component.arr2[2] === 0) {
                this.totalBthArr = 6;
            }
            if (Covid19Component.arr2[3] === 0) {
                this.totalBthArr = 7;
            }
            else if (Covid19Component.arr2[3] === 1) {
                this.totalBthArr = 8;
            }
        }
        else {
            this.LevelsArr2 = 0;
            Covid19Component.arr2 = [0, 0, 0, 0];
            document.getElementById("criteria_2_4d").style.display = "none";
            document.getElementById("criteria_2_5d").style.display = "none";
            document.getElementById("criteria_2_6d").style.display = "none";
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_4-no").checked = false;
            document.getElementById("criteria_2_5-no").checked = false;
            document.getElementById("criteria_2_6-no").checked = false;
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_4-yes").checked = false;
            document.getElementById("criteria_2_5-yes").checked = false;
            document.getElementById("criteria_2_6-yes").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
        }
    }
    static test123(Value) {
        var First4;
        if (Value === 0) {
            First4 = 0;
        }
        else if (Value === 1) {
            First4 = 1;
        }
        else if (Value === 2) {
            First4 = 2;
        }
        else if (Value > 2) {
            First4 = 3;
        }
        console.log("First4=" + First4);
        return First4;
    }
    CheckResults0() {
        if (document.getElementById("criteria_2_0-yes").checked === true) {
            Covid19Component.arr1[0] = 1;
            this.ResultsAdder();
        }
        else {
            Covid19Component.arr1[0] = 0;
            this.ResultsAdder();
        }
    }
    CheckResults1() {
        if (document.getElementById("criteria_2_1-yes").checked === true) {
            Covid19Component.arr1[1] = 1;
            this.ResultsAdder();
        }
        else {
            Covid19Component.arr1[1] = 0;
            this.ResultsAdder();
        }
    }
    CheckResults2() {
        if (document.getElementById("criteria_2_2-yes").checked === true) {
            Covid19Component.arr1[2] = 1;
            this.ResultsAdder();
        }
        else {
            Covid19Component.arr1[2] = 0;
            this.ResultsAdder();
        }
    }
    CheckResults3() {
        if (document.getElementById("criteria_2_3-yes").checked === true) {
            Covid19Component.arr1[3] = 1;
            this.ResultsAdder();
        }
        else {
            Covid19Component.arr1[3] = 0;
            this.ResultsAdder();
        }
    }
    CheckResults4no() {
        if (document.getElementById("criteria_2_4-no").checked === true) {
            Covid19Component.arr2 = [];
            document.getElementById("criteria_2_5d").style.display = "none";
            document.getElementById("criteria_2_6d").style.display = "none";
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_5-no").checked = false;
            document.getElementById("criteria_2_6-no").checked = false;
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_5-yes").checked = false;
            document.getElementById("criteria_2_6-yes").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 0;
            this.ResultsAdder();
            this.ResultsTxt_2_10();
        }
    }
    CheckResults4yes() {
        if (document.getElementById("criteria_2_4-yes").checked === true) {
            this.ResultsAdder();
            document.getElementById("criteria_2_5d").style.display = "block";
            this.ResultsTxt_2_9();
        }
    }
    CheckResults5() {
        if (document.getElementById("criteria_2_5-yes").checked === true) {
            Covid19Component.arr2[0] = 1;
            document.getElementById("criteria_2_6d").style.display = "block";
            this.ResultsAdder();
            this.ResultsTxt_2_9();
        }
        else if (document.getElementById("criteria_2_5-no").checked === true) {
            Covid19Component.arr2 = [];
            document.getElementById("criteria_2_6d").style.display = "none";
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_6-no").checked = false;
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_6-yes").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 1;
            this.ResultsAdder();
        }
    }
    CheckResults6() {
        if (document.getElementById("criteria_2_6-yes").checked === true) {
            Covid19Component.arr2[1] = 1;
            document.getElementById("criteria_2_7d").style.display = "block";
            this.ResultsAdder();
            this.ResultsTxt_2_9();
        }
        else if (document.getElementById("criteria_2_6-no").checked === true) {
            Covid19Component.arr2 = [1,];
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 2;
            this.ResultsAdder();
        }
    }
    CheckResults7() {
        if (document.getElementById("criteria_2_7-yes").checked === true) {
            Covid19Component.arr2[2] = 1;
            document.getElementById("criteria_2_8d").style.display = "block";
            this.ResultsAdder();
            this.ResultsTxt_2_9();
        }
        else if (document.getElementById("criteria_2_7-no").checked === true) {
            Covid19Component.arr2 = [1, 1,];
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 3;
            this.ResultsAdder();
        }
    }
    CheckResults8() {
        if (document.getElementById("criteria_2_8-yes").checked === true) {
            Covid19Component.arr2[3] = 1;
            this.LevelsArr2 = 5;
            this.ResultsAdder();
        }
        else {
            Covid19Component.arr2 = [1, 1, 1,];
            this.LevelsArr2 = 4;
            this.ResultsAdder();
        }
    }
    CheckTxtResults_2_1() {
        switch (this.Levels) {
            case 0:
                this.ResultsTxt_2_0();
                break;
            case 1:
                this.ResultsTxt_2_1();
                break;
            case 2:
                this.ResultsTxt_2_2();
                break;
            case 3:
                this.ResultsTxt_2_3();
                break;
            case 4:
                this.ResultsTxt_2_4();
                break;
            case 5:
                this.ResultsTxt_2_5();
                break;
            case 6:
                this.ResultsTxt_2_6();
                break;
            case 7:
                this.ResultsTxt_2_7();
                break;
            case 8:
                this.ResultsTxt_2_8();
                break;
            default:
                this.ResultsTxt_2_9();
                break;
        }
    }
    ResultsTxt_2_0() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Keep patient monitored with pulse oximetry and clinical evaluation.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS consider chloroquine or hydroxychloroquine.";
        document.getElementById("Levels").innerHTML = "Level 0";
    }
    ResultsTxt_2_1() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Provide supplemental O<sub>2</sub>. Keep patient monitored with pulse oximetry and clinical evaluation.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS chloroquine or hydroxychloroquine.";
        document.getElementById("Levels").innerHTML = "Level 1";
    }
    ResultsTxt_2_2() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Perform CXR and ABG. Provide supplemental O<sub>2</sub>. Keep patient monitored with pulse oximetry and clinical evaluation.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS consider chloroquine or hydroxychloroquine. Consider dexamethasone¹.<br><br> ¹Consider age/comorbidities, cognitive decline.";
        document.getElementById("Levels").innerHTML = "Level 2";
    }
    ResultsTxt_2_3() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Trial of non-invasive ventilation (CPAP/BiPAP) or high-flow nasal canula (HFNC) recommended. If above clinical criteria worsening or patient clinically worsening despite this trial, intubation recommended. Otherwise, perform CXR every 2 days and ABG twice a day.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS consider chloroquine or hydroxychloroquine. Consider dexamethasone¹ and consider starting tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline. <br>²Inclusion criteria.";
        document.getElementById("Levels").innerHTML = "Level 3";
    }
    ResultsTxt_2_4() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Follow ICU protocols; use local ventilator weaning protocol.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline. <br>²Inclusion criteria.";
        document.getElementById("Levels").innerHTML = "Level 4";
    }
    ResultsTxt_2_5() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Try to minimize sedation (RASS -1 to 0). Perform SBT daily.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
        document.getElementById("Levels").innerHTML = "Level 5";
    }
    ResultsTxt_2_6() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Try to minimize sedation (RASS -1 to 0).";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
        document.getElementById("Levels").innerHTML = "Level 6";
    }
    ResultsTxt_2_7() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Perform best <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.mdcalc.com/static-lung-compliance-cstat-calculation\">PEEP and Compliance calculation</a>. Try to suspend NMBA. Optimize volume status.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
        document.getElementById("Levels").innerHTML = "Level 7";
    }
    ResultsTxt_2_8() {
        document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Extreme level of medical complexity given failing other management options; defer to clinician expertise.";
        document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
        document.getElementById("Levels").innerHTML = "Level 8";
    }
    ResultsTxt_2_9() {
        document.getElementById("Management_2_1").innerHTML = "<b>Please fill out required fields.</b>";
        document.getElementById("Medications_2_1").innerHTML = "";
        document.getElementById("Levels").innerHTML = "";
    }
    ResultsTxt_2_10() {
        document.getElementById("Management_2_1").innerHTML = "<b>Re-select number of criteria present and follow management.</b>";
        document.getElementById("Medications_2_1").innerHTML = "";
        document.getElementById("Levels").innerHTML = "";
    }
}
Covid19Component.arr1 = new Array(4);
Covid19Component.arr2 = new Array(4);
Covid19Component.ɵfac = function Covid19Component_Factory(t) { return new (t || Covid19Component)(); };
Covid19Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Covid19Component, selectors: [["app-covid19"]], decls: 282, vars: 0, consts: [["id", "Covid19"], [1, "container"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-8"], [1, "alert", "alert-dismissible", "alert-danger"], [2, "font-size", "x-large"], [1, "mb-0"], ["href", "https://www.mdcalc.com/covid-19", "target", "_blank", "rel", "noopener noreferrer", 1, "alert-link"], ["href", "https://www.mdcalc.com/covid-19/brescia-covid-respiratory-severity-scale-bcrss-interview", "target", "_blank", "rel", "noopener noreferrer", 1, "alert-link"], [1, "alert", "alert-dismissible", "alert-info"], [1, "alert", "alert-dismissible", "alert-light"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-info", "active"], ["type", "radio", "name", "criteria_2_0", "id", "criteria_2_0-no", "autocomplete", "off", "checked", "", 3, "click"], [1, "btn", "btn-info"], ["type", "radio", "name", "criteria_2_0", "id", "criteria_2_0-yes", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_1", "id", "criteria_2_1-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_2_1", "id", "criteria_2_1-yes", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_2", "id", "criteria_2_2-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_2_2", "id", "criteria_2_2-yes", "autocomplete", "off", 3, "click"], ["title", "Chest X-ray", 1, "tooltip1"], ["type", "radio", "name", "criteria_2_3", "id", "criteria_2_3-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_2_3", "id", "criteria_2_3-yes", "autocomplete", "off", 3, "click"], ["id", "criteria_2_4d", 2, "display", "none"], ["type", "radio", "name", "criteria_2_4", "id", "criteria_2_4-no", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_4", "id", "criteria_2_4-yes", "autocomplete", "off", 3, "click"], ["id", "criteria_2_5d", 2, "display", "none"], ["title", "Continuous mandatory ventilation", 1, "tooltip1"], ["type", "radio", "name", "criteria_2_5", "id", "criteria_2_5-no", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_5", "id", "criteria_2_5-yes", "autocomplete", "off", 3, "click"], ["id", "criteria_2_6d", 2, "display", "none"], ["href", "https://www.mdcalc.com/horowitz-index-lung-function-p-f-ratio"], ["type", "radio", "name", "criteria_2_6", "id", "criteria_2_6-no", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_6", "id", "criteria_2_6-yes", "autocomplete", "off", 3, "click"], ["id", "criteria_2_7d", 2, "display", "none"], ["type", "radio", "name", "criteria_2_7", "id", "criteria_2_7-no", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_7", "id", "criteria_2_7-yes", "autocomplete", "off", 3, "click"], ["id", "criteria_2_8d", 2, "display", "none"], ["type", "radio", "name", "criteria_2_8", "id", "criteria_2_8-no", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_2_8", "id", "criteria_2_8-yes", "autocomplete", "off", 3, "click"], ["role", "group", 1, "btn-group"], ["type", "button", "id", "ResetButton", 1, "btn", "btn-info", 3, "click"], ["type", "button", "id", "PrintButton", 1, "btn", "btn-info", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "Levels", 2, "font-size", "large"], ["id", "Management_2_1"], ["id", "Medications_2_1"], ["id", "viewMore", "type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], [2, "text-align", "center", "display", "inline-block"], [2, "text-align", "lcenter", "display", "inline-block"], ["href", "https://cdn-web-img.mdcalc.com/content/BRSS_A4.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", ""], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://cdn-web-img.mdcalc.com/content/BRSS_A4-1.png"], ["src", "https://cdn-web-img.mdcalc.com/content/BRSS_A4-1.png", "alt", "BRSS"], ["href", "https://www.eahp.eu/sites/default/files/linee_guida_sulla_gestione_terapeutica_e_di_supporto_per_pazienti_con_infezione_da_coronavirus_covid-19.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", ""], ["href", "https://www.mdcalc.com/brescia-covid-respiratory-severity-scale-bcrss-algorithm", "target", "_blank", "rel", "noopener noreferrer", "download", ""]], template: function Covid19Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "COVID-19 Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "IMPORTANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Launched during COVID-19 crisis. Not externally validated. Use with caution; this is being used in Italy for assessment, trending, and treatment recommendations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "COVID-19 Resource Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "See MDCalc's interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " with Italian intensivist, Dr. Simone Piva, for an in-depth discussion of how the BCRSS is being used practically to simplify and communicate the respiratory status of patients.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "INSTRUCTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "This algorithm is a step-wise approach to managing patients with confirmed/presumed COVID-19 pneumonia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "If not intubated, follow management and then each 4 testing criteria should be repeated to assess for improvement or deterioration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Repetition frequency based on clinical judgment to downgrade/upgrade score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Not only is the management important; the numerical score is used to easily compare and summarize patients to treating clinicians.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "NIV concerning for aerosolization; included in score due to ventilator scarcity in Italy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "[Patient has COVID-19 pneumonia or COVID-19 symptoms for \u22657 days] AND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " [Patient is PCR+ OR high suspicion for COVID-19/PCR pending]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Patient wheezing OR unable to speak in full sentences while at rest/with minimal effort:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_56_listener() { return ctx.CheckResults0(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_59_listener() { return ctx.CheckResults0(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Respiratory rate >22:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_68_listener() { return ctx.CheckResults1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_71_listener() { return ctx.CheckResults1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PaO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " <65 mmHg or SpO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " <90%:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_86_listener() { return ctx.CheckResults2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_89_listener() { return ctx.CheckResults2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Repeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "CXR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " is significantly worsening:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_101_listener() { return ctx.CheckResults3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_104_listener() { return ctx.CheckResults3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " When >2 criteria are selected, algorithm recommends escalating to non-invasive ventilation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " (NIV/CPAP/BiPAP) or high-flow nasal cansula (HFNC), and then reassessing patient criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Does patient still have >2 criteria despite NIV/HFNC?:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_119_listener() { return ctx.CheckResults4no(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_122_listener() { return ctx.CheckResults4yes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Intubation recommended for worsening symptoms despite NIV/HFNC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " With the patient intubated:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Is the intubated patient on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "CMV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_139_listener() { return ctx.CheckResults5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_142_listener() { return ctx.CheckResults5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "PaO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "/FiO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " <150 mmHg:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_158_listener() { return ctx.CheckResults6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_161_listener() { return ctx.CheckResults6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Patient on neuromuscular blockade (NMBA):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_170_listener() { return ctx.CheckResults7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_173_listener() { return ctx.CheckResults7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Patient prone or on ECMO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_182_listener() { return ctx.CheckResults8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_input_click_185_listener() { return ctx.CheckResults8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_button_click_190_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_button_click_192_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Results: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "svg", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Advice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Healthcare workers must be aware that COVID-19 information is rapidly changing; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " We will attempt to update this score as frequently as possible to keep up with the rapidly changing nature of this pandemic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "While this score certainly would indicate increasing levels of respiratory severity, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " one's local hospital recommendations or drug availability may provide different recommendations for treatment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Management:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "This score is meant to be dynamic and frequently reassessed and re-scored after interventions; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " frequency of reassessment is by clinical judgment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " A brand new patient in the ED may need to be reassessed every 15 minutes, for example, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "while a stable patient on the medical floor may only need reassessment every 6-12 hours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "If a patient is assigned a new score based on these criteria, the medical and respiratory management should then change as well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Evidence appraisal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " This score has not been externally validated and is being published on The-Journey as one way to easily assess and compare patients in a time of crisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Formula:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Brescia-COVID Treatment Algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "*Inclusion criteria for tocilizumab:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " End of the initial phase of high viral load of COVID-19 (e.g. apyretic from >72h and/or elapsed \u22657 days after the onset of symptoms).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Worsening of respiratory exchanges, such as to require non-invasive or invasive support from ventilation (Level \u22653).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " High levels of IL-6 (>40 pg/mL); alternatively high levels of d-dimer, CRP, ferritin, and/or fibrinogen progressively increasing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Italy's latest SIMIT Guidelines.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "References:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "SIMIT Guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "MDCalc's BCRSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#Covid19[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #055286;\n    border-color: #014573;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\na[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n    text-decoration: underline;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nul[_ngcontent-%COMP%] {\n    text-align: left;\n    \n}\n\nol[_ngcontent-%COMP%] { \n    display: inline-block; \n}\n\n#PrintButton[_ngcontent-%COMP%]{\n    margin: 20% 0 20% 0;\n    display: block; \n    justify-content: center;\n}\n\n#ResetButton[_ngcontent-%COMP%] {\n    margin: 20% 0 20% 0;\n    \n    display: block; \n    justify-content: center;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#viewMore[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 5px;\n    z-index: 11;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 55px;\n    z-index: 12;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \n    position: absolute !important;\n    clip: rect(0, 0, 0, 0);\n    height: 1px; \n    width: 1px;\n    border: 0;\n    overflow: hidden;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: #e0e0e0;\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.507), 0 1px rgba(255, 255, 255, 0);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover { \n    cursor: pointer;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] { \n    background-color: #20adffce;\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type { \n    border-radius: 4px 0 0 4px;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type { \n    border-radius: 0 4px 4px 0;\n}\n\n.alert[_ngcontent-%COMP%] { \n    display: inline-block;\n}\n\n.tooltip1[_ngcontent-%COMP%] {\n    color: rgb(33, 118, 175);\n    border-bottom: 1px dotted rgb(33, 118, 175);\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQxOS9jb3ZpZDE5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFdBQVcsNkNBQTZDO0lBQ3BELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsSUFBSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUEsS0FBSywyQkFBMkI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUEsZUFBZSwyQkFBMkI7SUFDdEMsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQSxVQUFVLGdDQUFnQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVyx5QkFBeUI7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBLFVBQVUsd0JBQXdCO0lBQzlCLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUEsc0JBQXNCLDRDQUE0QztJQUM5RCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQSx1QkFBdUIsNENBQTRDO0lBQy9ELHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxnRkFBZ0Y7SUFDaEYsZ0NBQWdDO0FBQ3BDOztBQUVBLHNCQUFzQiw0Q0FBNEM7SUFDOUQseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUEsNEJBQTRCLDRDQUE0QztJQUNwRSxlQUFlO0FBQ25COztBQUVBLHNDQUFzQyw0Q0FBNEM7SUFDOUUsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUEsb0NBQW9DLDRDQUE0QztJQUM1RSwwQkFBMEI7QUFDOUI7O0FBRUEsbUNBQW1DLDRDQUE0QztJQUMzRSwwQkFBMEI7QUFDOUI7O0FBRUEsU0FBUyw2Q0FBNkM7SUFDbEQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb3ZpZDE5L2NvdmlkMTkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI0NvdmlkMTkgeyAvKiBBbGlnbnMgY29udGVudCB0byB0aGUgY2VudGVyIG9mIHRoZSBzaXRlICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Mjg2O1xuICAgIGJvcmRlci1jb2xvcjogIzAxNDU3Mztcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmEgeyAvKiBDaGFuZ2VzIGxpbmsgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgzIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmg1IHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbnVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICovXG59XG5cbm9sIHsgLyogTW92ZXMgRG90cyB0byB0aGUgbGlzdCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG59XG5cbiNQcmludEJ1dHRvbntcbiAgICBtYXJnaW46IDIwJSAwIDIwJSAwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI1Jlc2V0QnV0dG9uIHtcbiAgICBtYXJnaW46IDIwJSAwIDIwJSAwO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyNjAlOyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGhlYWRlciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4jTGV2ZWxzIHsgLyogR2l2ZXMgUmVzdWx0cyBCb2xkIHByb3BlcnR5ICovIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbn1cblxuI1Jlc3VsdHMgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm9keSAqL1xuICAgIG1hcmdpbjogLTElO1xufVxuXG4jdmlld01vcmUge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA1cHg7XG4gICAgei1pbmRleDogMTE7XG59XG5cbiNUaGVtZTUgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm94ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUwNyk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA1NXB4O1xuICAgIHotaW5kZXg6IDEyO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0IHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDFweDsgXG4gICAgd2lkdGg6IDFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXRjaC1maWVsZCBidXR0b24geyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQwMCksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbCB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRmNWM7XG4gICAgY29sb3I6ICNlMGUwZTA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUwNyksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zd2l0Y2gtZmllbGQgbGFiZWw6aG92ZXIgeyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2l0Y2gtZmllbGQgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYWRmZmNlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpmaXJzdC1vZi10eXBlIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi5zd2l0Y2gtZmllbGQgbGFiZWw6bGFzdC1vZi10eXBlIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi5hbGVydCB7IC8qIE1ha2VzIGhpbnRzIHNtYWxsZXIgYW5kIGlubGluZSB3aXRoIHRleHQgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwMSB7XG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Covid19Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-covid19',
                templateUrl: './covid19.component.html',
                styleUrls: ['./covid19.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cstat/cstat.component.ts":
/*!******************************************!*\
  !*** ./src/app/cstat/cstat.component.ts ***!
  \******************************************/
/*! exports provided: CstatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CstatComponent", function() { return CstatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class CstatComponent {
    Cstat() {
        var a = document.getElementById("tidal").value;
        var b = document.getElementById("Pplat").value;
        var c = document.getElementById("peep").value;
        if (this.tidal != null && this.Pplat != null && this.peep != null) {
            this.ResultCstat = this.tidal / (this.Pplat - this.peep);
            document.getElementById("ResultCstat").innerHTML = this.ResultCstat.toFixed(2) + " mL/cm H₂O";
        }
    }
    ngOnInit() {
        // this.Reset(); /* Runs Reset on page load */
    }
    Print() {
        window.print();
    }
    Reset() {
        this.ResultCstat = 0;
        document.getElementById("tidal").value = "";
        document.getElementById("Pplat").value = "";
        document.getElementById("peep").value = "";
        document.getElementById("ResultCstat").innerHTML = "Please fill out required fields.";
    }
}
CstatComponent.ɵfac = function CstatComponent_Factory(t) { return new (t || CstatComponent)(); };
CstatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CstatComponent, selectors: [["app-cstat"]], decls: 80, vars: 3, consts: [["id", "Cstat"], [1, "container"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-8"], [1, "form-group", 2, "display", "inline-flex"], ["for", "amount1", 1, "control-label"], [1, "form-group"], [1, "input-group", "mb-3"], ["type", "text", "id", "tidal", "placeholder", "e.g. 700", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange", "input"], [1, "input-group-append"], [1, "input-group-text"], ["for", "amount2", 1, "control-label"], ["type", "text", "id", "Pplat", "placeholder", "e.g. 35", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange", "input"], ["for", "amount3", 1, "control-label"], ["type", "text", "id", "peep", "placeholder", "e.g. 8", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange", "input"], ["role", "group", 1, "btn-group"], ["type", "button", "id", "ResetButton", 1, "btn", "btn-info", 3, "click"], ["type", "button", "id", "PrintButton", 1, "btn", "btn-info", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "Levels1", 2, "font-weight", "bold", "font-size", "larger"], ["id", "ResultCstat"], ["id", "Management_2_1"], ["id", "Medications_2_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hamilton-medical.com%2Fen_US%2Fdam%2Fjcr%3A391aeeb9-d347-4795-8fd9-95259755acd6%2F97_Compliance_equation%2520static.png&f=1&nofb=1", "alt", "BRSS", 1, "center"]], template: function CstatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Static Lung Compliance (Cstat) Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Calculates pressure needed to overcome elastic resistance to ventilation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Corrected/delivered tidal volume (\u0394V): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CstatComponent_Template_input_ngModelChange_16_listener($event) { return ctx.tidal = $event; })("input", function CstatComponent_Template_input_input_16_listener() { return ctx.Cstat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "mL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Plateau pressure (P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "plat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CstatComponent_Template_input_ngModelChange_28_listener($event) { return ctx.Pplat = $event; })("input", function CstatComponent_Template_input_input_28_listener() { return ctx.Cstat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "cm H\u2082O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PEEP: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CstatComponent_Template_input_ngModelChange_37_listener($event) { return ctx.peep = $event; })("input", function CstatComponent_Template_input_input_37_listener() { return ctx.Cstat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "cm H\u2082O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CstatComponent_Template_button_click_43_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CstatComponent_Template_button_click_45_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Please fill out required fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Static Lung Compliance (Cstat)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Interpretation: Normal static lung compliance is 50-100 mL/cm H\u2082O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Static lung compliance (Cstat), mL/cm H2O = Corrected/delivered tidal volume (\u0394V), mL / (Plateau pressure (Pplat), cm H2O \u2013 PEEP, cm H2O)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tidal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Pplat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peep);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["#Cstat[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n    clear: left;\n    width: 270px;\n    text-align: left;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    clear: right;\n    width: 130px;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#PrintButton[_ngcontent-%COMP%]{\n    margin: 20% 0 20% 0;\n    display: block; \n    justify-content: center;\n}\n\n#ResetButton[_ngcontent-%COMP%] {\n    margin: 20% 0 20% 0;\n    \n    display: block; \n    justify-content: center;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto; \n    width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3N0YXQvY3N0YXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyw2Q0FBNkM7SUFDbEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsSUFBSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBLGVBQWUsMkJBQTJCO0lBQ3RDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLFVBQVUsZ0NBQWdDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsVUFBVSx3QkFBd0I7SUFDOUIsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NzdGF0L2NzdGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNDc3RhdCB7IC8qIEFsaWducyBjb250ZW50IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHNpdGUgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY2xlYXI6IHJpZ2h0O1xuICAgIHdpZHRoOiAxMzBweDtcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgzIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmg1IHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbiNQcmludEJ1dHRvbntcbiAgICBtYXJnaW46IDIwJSAwIDIwJSAwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI1Jlc2V0QnV0dG9uIHtcbiAgICBtYXJnaW46IDIwJSAwIDIwJSAwO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyNjAlOyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGhlYWRlciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogMSU7XG59XG5cbiNMZXZlbHMgeyAvKiBHaXZlcyBSZXN1bHRzIEJvbGQgcHJvcGVydHkgKi8gXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufVxuXG4jUmVzdWx0cyB7IC8qIENoYW5nZXMgUmVzdWx0cyBib2R5ICovXG4gICAgbWFyZ2luOiAtMSU7XG59XG5cbiNUaGVtZTUgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm94ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUwNyk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgd2lkdGg6IDc1JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CstatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cstat',
                templateUrl: './cstat.component.html',
                styleUrls: ['./cstat.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/curb65/curb65.component.ts":
/*!********************************************!*\
  !*** ./src/app/curb65/curb65.component.ts ***!
  \********************************************/
/*! exports provided: Curb65Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curb65Component", function() { return Curb65Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Curb65Component {
    constructor() {
        this.Points = 0; /* Default Points */
    }
    ngOnInit() {
        this.Reset(); /* Runs Reset on page load */
    }
    Print() {
        window.print();
    }
    Reset() {
        document.getElementById("criteria_1_1-no").checked = true;
        document.getElementById("criteria_1_2-no").checked = true;
        document.getElementById("criteria_1_3-no").checked = true;
        document.getElementById("criteria_1_4-no").checked = true;
        document.getElementById("criteria_1_5-no").checked = true;
        /*(<HTMLInputElement>document.getElementById("pneumonia-yes")).checked = true;  Not sure if i want this ? */
        Curb65Component.arr1 = Array(5);
        console.log(Curb65Component.arr1);
        this.Points = 0; /* Resets score to default*/
        this.CheckPneumonia();
    }
    CheckPneumonia() {
        this.Points = 0;
        for (var i in Curb65Component.arr1) {
            this.Points += Curb65Component.arr1[i];
        }
        console.log(Curb65Component.arr1);
        if (document.getElementById("pneumonia-no").checked === true) {
            document.getElementById("Pneumonia").style.display = 'none';
            document.getElementById("AnyInfection").style.display = 'block';
            this.CheckTxtResult_1_2();
            this.CheckS_1_1();
        }
        else {
            document.getElementById("Pneumonia").style.display = 'block';
            document.getElementById("AnyInfection").style.display = 'none';
            this.CheckTxtResult_1_1();
            this.CheckS_1_1();
        }
    }
    Add(value) {
        Curb65Component.arr1[value] = 1;
        this.CheckPneumonia();
    }
    Sub(value) {
        Curb65Component.arr1[value] = 0;
        this.CheckPneumonia();
    }
    CheckTxtResult_1_1() {
        switch (this.Points) {
            case 0:
                this.ResultTxt_1_1_0();
                break;
            case 1:
                this.ResultTxt_1_1_1();
                break;
            case 2:
                this.ResultTxt_1_1_2();
                break;
            case 3:
                this.ResultTxt_1_1_3();
                break;
            case 4:
                this.ResultTxt_1_1_4();
                break;
            case 5:
                this.ResultTxt_1_1_4();
                break;
        }
    }
    CheckTxtResult_1_2() {
        switch (this.Points) {
            case 0:
                this.ResultTxt_1_2_0();
                break;
            case 1:
                this.ResultTxt_1_2_0();
                break;
            case 2:
                this.ResultTxt_1_2_1();
                break;
            case 3:
                this.ResultTxt_1_2_1();
                break;
            case 4:
                this.ResultTxt_1_2_2();
                break;
            case 5:
                this.ResultTxt_1_2_2();
                break;
        }
    }
    CheckS_1_1() {
        switch (this.Points) {
            case 1:
                document.getElementById("Point").innerHTML = "Point";
                break;
            default:
                document.getElementById("Point").innerHTML = "Points";
                break;
        }
    }
    ResultTxt_1_1_0() {
        document.getElementById("Mortality_1_1").innerHTML = "Low risk group: 0.6% 30-day mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider outpatient treatment.";
    }
    ResultTxt_1_1_1() {
        document.getElementById("Mortality_1_1").innerHTML = "Low risk group: 2.7% 30-day mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider outpatient treatment.";
    }
    ResultTxt_1_1_2() {
        document.getElementById("Mortality_1_1").innerHTML = "Moderate risk group: 6.8% 30-day mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment or outpatient with close followup.";
    }
    ResultTxt_1_1_3() {
        document.getElementById("Mortality_1_1").innerHTML = "Severe risk group: 14.0% 30-day mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
    }
    ResultTxt_1_1_4() {
        document.getElementById("Mortality_1_1").innerHTML = "Highest risk group: 27.8% 30-day mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
    }
    ResultTxt_1_2_0() {
        document.getElementById("Mortality_1_1").innerHTML = "Low risk group: < 5% mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider outpatient treatment.";
    }
    ResultTxt_1_2_1() {
        document.getElementById("Mortality_1_1").innerHTML = "Moderate risk group: < 10% mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment or outpatient with close followup.";
    }
    ResultTxt_1_2_2() {
        document.getElementById("Mortality_1_1").innerHTML = "Highest risk group: 15-30% mortality.";
        document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
    }
}
Curb65Component.arr1 = new Array(5);
Curb65Component.ɵfac = function Curb65Component_Factory(t) { return new (t || Curb65Component)(); };
Curb65Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Curb65Component, selectors: [["app-curb65"]], decls: 165, vars: 1, consts: [["id", "CURB65"], [1, "container"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-8"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-info", "active"], ["type", "radio", "name", "pneumonia", "id", "pneumonia-yes", "autocomplete", "off", "checked", "", 3, "click"], [1, "btn", "btn-info"], ["type", "radio", "name", "pneumonia", "id", "pneumonia-no", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_1_1", "id", "criteria_1_1-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_1_1", "id", "criteria_1_1-yes", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_1_2", "id", "criteria_1_2-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_1_2", "id", "criteria_1_2-yes", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_1_3", "id", "criteria_1_3-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_1_3", "id", "criteria_1_3-yes", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_1_4", "id", "criteria_1_4-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_1_4", "id", "criteria_1_4-yes", "autocomplete", "off", 3, "click"], ["type", "radio", "name", "criteria_1_5", "id", "criteria_1_5-no", "autocomplete", "off", "checked", "", 3, "click"], ["type", "radio", "name", "criteria_1_5", "id", "criteria_1_5-yes", "autocomplete", "off", 3, "click"], ["role", "group", 1, "btn-group"], ["type", "button", "id", "ResetButton", 1, "btn", "btn-info", 3, "click"], ["type", "button", "id", "PrintButton", 1, "btn", "btn-info", 3, "click"], ["id", "ResultsBox"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], [1, "card-body"], ["id", "Results"], ["id", "BoldResult"], ["id", "Point"], ["id", "Mortality_1_1"], ["id", "Treatment_1_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse"], ["id", "Pneumonia"], ["href", "https://en.wikipedia.org/wiki/CURB-65", "target", "_blank"], [2, "list-style-type", "none", "text-align", "left"], ["id", "AnyInfection"], [2, "list-style-type", "none"]], template: function Curb65Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CURB-65 Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Infection type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_13_listener() { return ctx.CheckPneumonia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pneumonia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_16_listener() { return ctx.CheckPneumonia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Any infection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confusion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_25_listener() { return ctx.Sub(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_28_listener() { return ctx.Add(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "BUN > 19 mg/dL (> 7 mmol/L):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_37_listener() { return ctx.Sub(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_40_listener() { return ctx.Add(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Respiratory Rate \u2265 30:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_49_listener() { return ctx.Sub(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_52_listener() { return ctx.Add(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Systolic BP < 90 mmHg or Diastolic BP \u2264 60 mmHg:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_61_listener() { return ctx.Sub(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_64_listener() { return ctx.Add(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Age \u2265 65:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_73_listener() { return ctx.Sub(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_input_click_76_listener() { return ctx.Add(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_button_click_81_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_button_click_83_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Results: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Pneumonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "The risk of death at 30 days increases as the score increases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "Ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "0\u20140.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "1\u20142.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2\u20146.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "3\u201414.0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "4\u201427.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "5\u201427.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " is used as a means of deciding the action that is needed to be taken for that patient.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "Ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "0-1: Treat as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "2: Consider a short stay in hospital or watch very closely as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "3-5: Requires hospitalization with consideration as to whether they need to be in the intensive care unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Any infection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Patients with any type of infection (half of the patients had pneumonia), the risk of death increases as the score increases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "Ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "0 to 1 < 5% mortality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "2 to 3 < 10% mortality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "4 to 5 15-30% mortality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " is used as a means of deciding the action that is needed to be taken for that patient.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "Ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "0-1: Treat as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "2-3: Consider a short stay in hospital or watch very closely as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "4-5: Requires hospitalization with consideration as to whether they need to be in the intensive care unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Points, " ");
    } }, styles: ["#CURB65[_ngcontent-%COMP%] {  \n    text-align: center;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\na[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nul[_ngcontent-%COMP%] { \n    display: inline;\n}\n\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #055286;\n    border-color: #014573;\n}\n\n#PrintButton[_ngcontent-%COMP%]{\n    margin: 20% 0 20% 0;\n    display: block; \n    justify-content: center;\n}\n\n#ResetButton[_ngcontent-%COMP%] {\n    margin: 20% 0 20% 0;\n    \n    display: block; \n    justify-content: center;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    padding: 1%;\n}\n\n#BoldResult[_ngcontent-%COMP%] {  \n    font-weight: bold;\n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#ResultsBox[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute !important;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    width: 1px;\n    border: 0;\n    overflow: hidden;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    background-color: #434f5c;\n    color: #e0e0e0;\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.507), 0 1px rgba(255, 255, 255, 0);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n    background-color: #20adffce;\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type {\n    border-radius: 4px 0 0 4px;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type {\n    border-radius: 0 4px 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VyYjY1L2N1cmI2NS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxXQUFXLDZDQUE2QztJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUEsSUFBSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxJQUFJLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLDJCQUEyQjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBLGNBQWMsZ0NBQWdDO0lBQzFDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsY0FBYyx3QkFBd0I7SUFDbEMsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jdXJiNjUvY3VyYjY1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNDVVJCNjUgeyAgLyogQWxpZ25zIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2l0ZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmEgeyAvKiBDaGFuZ2VzIGxpbmsgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgzIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbnVsIHsgLyogTW92ZXMgRG90cyB0byB0aGUgbGlzdCAqL1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Mjg2O1xuICAgIGJvcmRlci1jb2xvcjogIzAxNDU3Mztcbn1cblxuI1ByaW50QnV0dG9ue1xuICAgIG1hcmdpbjogMjAlIDAgMjAlIDA7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jUmVzZXRCdXR0b24ge1xuICAgIG1hcmdpbjogMjAlIDAgMjAlIDA7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDI2MCU7ICovXG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC1oZWFkZXIgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgaGVhZGVyICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMSU7XG59XG5cbiNCb2xkUmVzdWx0IHsgLyogR2l2ZXMgUmVzdWx0cyBCb2xkIHByb3BlcnR5ICovIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jUmVzdWx0cyB7IC8qIENoYW5nZXMgUmVzdWx0cyBib2R5ICovXG4gICAgbWFyZ2luOiAtMSU7XG59XG5cbiNSZXN1bHRzQm94IHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJveCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MDcpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbjogMC41JTtcbiAgICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLnN3aXRjaC1maWVsZCBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41MDcpLCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2l0Y2gtZmllbGQgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhZGZmY2U7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Curb65Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-curb65',
                templateUrl: './curb65.component.html',
                styleUrls: ['./curb65.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/glasgow-coma-scale/glasgow-coma-scale.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/glasgow-coma-scale/glasgow-coma-scale.component.ts ***!
  \********************************************************************/
/*! exports provided: GlasgowComaScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlasgowComaScaleComponent", function() { return GlasgowComaScaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GlasgowComaScaleComponent {
    ResultsTxt_4_0() {
        document.getElementById("txt_4_0").style.display = "inline-block";
        document.getElementById("txt_4_1").style.display = "inline-block";
        document.getElementById("txt_4_2").style.display = "inline-block";
        document.getElementById("txt_4_3").style.display = "none";
    }
    ResultsTxt_4_1() {
        document.getElementById("txt_4_0").style.display = "none";
        document.getElementById("txt_4_1").style.display = "none";
        document.getElementById("txt_4_2").style.display = "none";
        document.getElementById("txt_4_3").style.display = "inline-block";
    }
    Counter() {
        if (this.eye != null && this.verbal != null && this.motor != null) {
            this.points = this.eye + this.verbal + this.motor;
            this.ResultsTxt_4_0();
            if (this.points === 0 || this.points > 1) {
                this.pointstxt = this.points + " Points";
            }
            else {
                this.pointstxt = this.points + " Point";
            }
        }
    }
    ngOnInit() {
        document.getElementById("option11").style.backgroundColor = "red";
        document.getElementById("option11").checked = false;
        // this.Reset(); /* Runs Reset on page load */
    }
    eyeCount(value) {
        this.eye = value;
        console.log("Eye=" + value);
        this.Counter();
    }
    verbalCount(value) {
        this.verbal = value;
        console.log("Verbal=" + value);
        this.Counter();
    }
    motorCount(value) {
        this.motor = value;
        console.log("Motor=" + value);
        this.Counter();
    }
    Print() {
        window.print();
    }
    Reset() {
        //Refresh the current page.
        // window.location.reload(false);
        // this.eye = 0;
        // this.verbal = 0;
        // this.motor = 0;
        // this.points = 0;
        // this.pointstxt = 0;
        document.getElementById("option11").checked = false;
    }
}
GlasgowComaScaleComponent.ɵfac = function GlasgowComaScaleComponent_Factory(t) { return new (t || GlasgowComaScaleComponent)(); };
GlasgowComaScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlasgowComaScaleComponent, selectors: [["app-glasgow-coma-scale"]], decls: 180, vars: 4, consts: [["id", "GCS"], [1, "container"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-8"], ["for", "eye"], ["data-toggle", "buttons", "id", "eye", 1, "btn-group-vertical", "btn-group-toggle"], [1, "btn", "btn-info"], ["type", "radio", "name", "options1", "id", "option11", 3, "click"], ["type", "radio", "name", "options1", "id", "option12", 3, "click"], ["type", "radio", "name", "options1", "id", "option13", 3, "click"], ["type", "radio", "name", "options1", "id", "option14", 3, "click"], ["type", "radio", "name", "options1", "id", "option15", 3, "click"], ["for", "verbal"], ["data-toggle", "buttons", "id", "verbal", 1, "btn-group-vertical", "btn-group-toggle"], ["type", "radio", "name", "options2", "id", "option21", 3, "click"], ["type", "radio", "name", "options2", "id", "option22", 3, "click"], ["type", "radio", "name", "options2", "id", "option23", 3, "click"], ["type", "radio", "name", "options2", "id", "option24", 3, "click"], ["type", "radio", "name", "options2", "id", "option25", 3, "click"], ["for", "motor"], ["data-toggle", "buttons", "id", "motor", 1, "btn-group-vertical", "btn-group-toggle"], ["type", "radio", "name", "options3", "id", "option31", 3, "click"], ["type", "radio", "name", "options3", "id", "option32", 3, "click"], ["type", "radio", "name", "options3", "id", "option33", 3, "click"], ["type", "radio", "name", "options3", "id", "option34", 3, "click"], ["type", "radio", "name", "options3", "id", "option35", 3, "click"], ["type", "radio", "name", "options2", "id", "option36", 3, "click"], ["type", "radio", "name", "options2", "id", "option37", 3, "click"], ["role", "group", 1, "btn-group"], ["type", "button", "id", "ResetButton", 1, "btn", "btn-info", 3, "click"], ["type", "button", "id", "PrintButton", 1, "btn", "btn-info", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "txt_4_3"], ["id", "txt_4_0", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "txt_4_1", 2, "display", "none"], ["id", "txt_4_2", 2, "display", "none"], ["id", "viewMore", "type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["href", "http://www.nursingtimes.net/Journals/2014/10/10/n/p/l/141015Forty-years-on-updating-the-Glasgow-coma-scale.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", "", 1, "alert-link", 2, "white-space", "nowrap"]], template: function GlasgowComaScaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Glasgow Coma Scale/Score (GCS) Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Coma severity based on Eye (4), Verbal (5), and Motor (6) criteria.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Best eye response:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " If local injury, edema, or otherwise unable to be assessed, mark \"Not testable (NT)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_18_listener() { return ctx.eyeCount(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Spontaneously (+4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_21_listener() { return ctx.eyeCount(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " To verbal command (+3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_24_listener() { return ctx.eyeCount(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " To pain (+2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_27_listener() { return ctx.eyeCount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " No eye opening (+1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_30_listener() { return ctx.eyeCount(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Not testable (NT) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Best verbal response:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " If intubated or otherwise unable to be assessed, mark \"Not testable (NT)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_40_listener() { return ctx.verbalCount(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Oriented (+5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_43_listener() { return ctx.verbalCount(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Confused (+4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_46_listener() { return ctx.verbalCount(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Inappropriate words (+3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_49_listener() { return ctx.verbalCount(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Incomprehensible sounds (+2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_52_listener() { return ctx.verbalCount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " No verbal response (+1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_55_listener() { return ctx.verbalCount(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Not testable/intubated (NT) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Best motor response:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " If on sedation/paralysis or unable to be assessed, mark \"Not testable (NT)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_65_listener() { return ctx.motorCount(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Obeys commands (+6) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_68_listener() { return ctx.motorCount(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Localizes pain (+5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_71_listener() { return ctx.motorCount(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Withdrawal from pain (+4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_74_listener() { return ctx.motorCount(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Flexion to pain (+3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_77_listener() { return ctx.motorCount(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Extension to pain (+2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_80_listener() { return ctx.motorCount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " No motor response (+1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_83_listener() { return ctx.motorCount(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Not testable (NT) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_button_click_87_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_button_click_89_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Please fill out required fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Glasgow Coma Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "svg", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "The GCS score can be indicative of how critically ill a patient is.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Trauma patients presenting with GCS <15 warrant close attention and reassessment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "A declining GCS is concerning in any setting and should prompt assessment of the airway and possible intervention.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Conversely, a GCS of 15 should not be taken as an indication that a patient (trauma or medical) is not critically ill. Decisions about the aggressiveness of the management and treatment plans should be made based on clinical presentation and context and not in any way overridden by the GCS score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "If a trauma patient has a GCS \u22648 and there is clinical concern that they are unable to protect their airway or that they have an expected worsening clinical course based on exam or imaging findings, then intubation can be considered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "In any patient, a rapidly declining or waxing and waning GCS is concerning and intubation should be considered in the context of the patient's overall clinical picture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Critical Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Although it has been adopted widely and in a variety of settings, the GCS score is not intended for quantitative use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "From the creators of the GCS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u201CWe have never recommended using the GCS alone, either as a means of monitoring coma, or to assess the severity of brain damage or predict outcome.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Teasdale 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " is calculated by addition of the total points selected under each component (eye, verbal, motor) below, e.g. \"15 points\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " is comprised of the individual components, e.g. \"E(4) V(5) M (6)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pointstxt, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("E(", ctx.eye, ") V(", ctx.verbal, ") M(", ctx.motor, ")");
    } }, styles: ["#GCS[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\n#viewMore[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 225px;\n    z-index: 1;\n}\n\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #055286;\n    border-color: #014573;\n}\n\n#eye[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n#verbal[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n#motor[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #375a7f;\n    border-color: #375a7f;\n}\n\n#option11[_ngcontent-%COMP%] {\n    background-color: red;\n}\n\nlabel[_ngcontent-%COMP%] {\n    float: left;\n    clear: left;\n    width: 400px;\n    text-align: left;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#PrintButton[_ngcontent-%COMP%]{\n    margin: 20% 0 20% 0;\n    display: block; \n    justify-content: center;\n}\n\n#ResetButton[_ngcontent-%COMP%] {\n    margin: 20% 0 20% 0;\n    \n    display: block; \n    justify-content: center;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    position: -webkit-sticky;\n    position: sticky;\n    top: 55px;\n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xhc2dvdy1jb21hLXNjYWxlL2dsYXNnb3ctY29tYS1zY2FsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLDZDQUE2QztJQUNoRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQSxVQUFVLGdDQUFnQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVyx5QkFBeUI7SUFDaEMsV0FBVztBQUNmOztBQUVBLFVBQVUsd0JBQXdCO0lBQzlCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nbGFzZ293LWNvbWEtc2NhbGUvZ2xhc2dvdy1jb21hLXNjYWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNHQ1MgeyAvKiBBbGlnbnMgY29udGVudCB0byB0aGUgY2VudGVyIG9mIHRoZSBzaXRlICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuI3ZpZXdNb3JlIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMjI1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Mjg2O1xuICAgIGJvcmRlci1jb2xvcjogIzAxNDU3Mztcbn1cblxuI2V5ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jdmVyYmFsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNtb3RvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzVhN2Y7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzc1YTdmO1xufVxuXG4jb3B0aW9uMTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxubGFiZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBsZWZ0O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5wIHsgLyogQ29tcGFjdHMgdGV4dCAqL1xuICAgIG1hcmdpbjogMC4xJTtcbn1cblxuaDEgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaDMgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaDUgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuI1ByaW50QnV0dG9ue1xuICAgIG1hcmdpbjogMjAlIDAgMjAlIDA7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jUmVzZXRCdXR0b24ge1xuICAgIG1hcmdpbjogMjAlIDAgMjAlIDA7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDI2MCU7ICovXG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC1oZWFkZXIgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgaGVhZGVyICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuI0xldmVscyB7IC8qIEdpdmVzIFJlc3VsdHMgQm9sZCBwcm9wZXJ0eSAqLyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG5cbiNSZXN1bHRzIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJvZHkgKi9cbiAgICBtYXJnaW46IC0xJTtcbn1cblxuI1RoZW1lNSB7IC8qIENoYW5nZXMgUmVzdWx0cyBib3ggKi9cbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTA3KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW46IDAuNSU7XG4gICAgY29sb3I6ICNlMGUwZTA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlasgowComaScaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-glasgow-coma-scale',
                templateUrl: './glasgow-coma-scale.component.html',
                styleUrls: ['./glasgow-coma-scale.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    Calculate() {
        this.ResultsBSA = Math.sqrt(this.weight * this.height) / 60;
        if (document.getElementById("cmIn").innerHTML === "in") {
            var value;
            this.height = this.height * 2.54;
            console.log("CM =" + value);
            this.ResultsBMI = this.weight / Math.pow(value / 100, 2);
        }
        else {
            this.ResultsBMI = this.weight / Math.pow(this.height / 100, 2);
        }
        document.getElementById("txt_4_0").style.display = "inline-block";
        document.getElementById("txt_4_1").style.display = "inline-block";
        document.getElementById("txt_4_2").style.display = "inline-block";
        document.getElementById("txt_4_3").style.display = "none";
        document.getElementById("txt_4_0").innerHTML = "Body Mass Index: (" + this.judge() + ") " + this.ResultsBMI.toFixed(2) + " m²";
        document.getElementById("txt_4_1").innerHTML = "Body Surface Area: " + this.ResultsBSA.toFixed(2);
        console.log("BMI=" + this.ResultsBMI);
        console.log("BSA=" + this.ResultsBSA);
        if (this.targetBMI != null) {
            var targetBMIout = Math.pow(this.height / 100, 2) * this.targetBMI;
            document.getElementById("txt_4_2").innerHTML = "Target weight for BMI " + this.targetBMI + " kg/m²: " + this.ResultsBSA.toFixed(2) + " kg";
            console.log("BMIout=" + targetBMIout);
        }
    }
    judge() {
        var judgement;
        if (this.ResultsBMI < 18.5) {
            judgement = "Underweight";
        }
        else if (this.ResultsBMI > 18.5 && this.ResultsBMI < 24.9) {
            judgement = "Normal weight";
        }
        else if (this.ResultsBMI > 25 && this.ResultsBMI < 29.9) {
            judgement = "Overweight";
        }
        else if (this.ResultsBMI > 30 && this.ResultsBMI < 34.9) {
            judgement = "Class 1 obesity";
        }
        else if (this.ResultsBMI > 35 && this.ResultsBMI < 39.9) {
            judgement = "Class 2 obesity";
        }
        else if (this.ResultsBMI > 35 && this.ResultsBMI >= 40) {
            judgement = "Class 3 obesity";
        }
        return (judgement);
    }
    converterIn() {
        let live = "?";
    }
    converterLbs() {
    }
    cmIn() {
        if (document.getElementById("cmIn").innerHTML === "in") {
            document.getElementById("cmIn").innerHTML = "cm";
            document.getElementById("height").placeholder = "Norm: 152-213";
            // this.height = null;
        }
        else {
            document.getElementById("cmIn").innerHTML = "in";
            document.getElementById("height").placeholder = "Norm: 60-84 or 5'0\"-7'0\"";
            // this.height = null;
        }
    }
    kgLbs() {
        if (document.getElementById("kgLbs").innerHTML === "lbs") {
            document.getElementById("kgLbs").innerHTML = "kg";
            this.weight = null;
        }
        else {
            document.getElementById("kgLbs").innerHTML = "lbs";
            this.weight = null;
        }
    }
    ngOnInit() {
        // this.Reset(); /* Runs Reset on page load */
    }
    Print() {
        window.print();
    }
    Reset() {
        document.getElementById("txt_4_0").style.display = "none";
        this.weight = null;
        this.height = null;
        this.targetBMI = null;
        this.ResultsBSA = null;
        this.ResultsBMI = null;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 24, vars: 0, consts: [["id", "Home"], [1, "container"], [1, "row"], [1, "col-sm-2"], [1, "col-sm-8"], ["role", "group", 1, "btn-group-vertical"], ["type", "button", "routerLink", "/curb65", "routerLinkActive", "active", 1, "btn", "btn-info"], ["type", "button", "routerLink", "/covid19", "routerLinkActive", "active", 1, "btn", "btn-info"], ["type", "button", "routerLink", "/cstat", "routerLinkActive", "active", 1, "btn", "btn-info"], ["type", "button", "routerLink", "/bmi-bsa", "routerLinkActive", "active", 1, "btn", "btn-info"], ["type", "button", "routerLink", "/glasgow-coma-scale", "routerLinkActive", "active", 1, "btn", "btn-info"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to The- Journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This website is under production!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Check out our medical calculators:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cstat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Body Mass Index (BMI) /Body Surface Area (BSA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Glasgow Coma Scale (GCS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["#Home[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(255, 0, 43);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFFBQVEsNkNBQTZDO0lBQ2pELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHNCQUFzQjtBQUMxQjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI0hvbWUgeyAvKiBBbGlnbnMgY29udGVudCB0byB0aGUgY2VudGVyIG9mIHRoZSBzaXRlICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgzIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgNDMpO1xufVxuXG5oNSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bluexen0n/The-Journey/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map