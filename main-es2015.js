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
        }
        this.DisplayTheme();
    }
    DisplayTheme() {
        var elem1 = document.getElementById("Theme1");
        var elem2 = document.getElementById("Theme2");
        var elem3 = document.getElementById("Theme3");
        var elem4 = document.getElementById("Theme4");
        var elem5 = document.getElementById("Theme5");
        this.x = this.getCookie('theme');
        if (this.getCookie("theme") === "darkly") {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
        }
        else if (this.getCookie("theme") === "flatly") {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
        }
    }
    ThemeChange() {
        var elem1 = document.getElementById("Theme1");
        var elem2 = document.getElementById("Theme2");
        var elem3 = document.getElementById("Theme3");
        var elem4 = document.getElementById("Theme4");
        var elem5 = document.getElementById("Theme5");
        if (this.getCookie("theme") === "darkly") {
            this.setCookie("theme", 'flatly');
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
        }
        else if (this.getCookie("theme") === "flatly") {
            this.setCookie('theme', 'darkly');
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
        }
    }
    // export function setCookie(cname, cvalue, exdays) {
    //   var d = new Date();
    //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //   var expires = "expires="+ d.toUTCString();
    //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }
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
        // Set it expire in 7 days
        date.setTime(date.getTime() + (3600 * 1000 * 24 * 365 * 1));
        // Set it
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }
    ThemeOnLoad() {
        var user = this.getCookie("theme");
        var elem1 = document.getElementById("Theme1");
        var elem2 = document.getElementById("Theme2");
        var elem3 = document.getElementById("Theme3");
        var elem4 = document.getElementById("Theme4");
        var elem5 = document.getElementById("Theme5");
        if (user) { /* Runs Reset on page load */
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
        }
        else {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
        }
    }
    checkCookie() {
        var user = this.getCookie("theme");
        if (user === null) {
            this.setCookie("theme", user);
        }
        else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                this.setCookie("theme", user);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 0, consts: [["href", "/home"], ["id", "Theme1", 1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark"], ["routerLink", "/home", "routerLinkActive", "active", 1, "navbar-brand"], [1, "sr-only"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavId", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["id", "dropdownId", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "#e0e0e0"], ["id", "Theme2", "aria-labelledby", "dropdownId", 1, "dropdown-menu", "bg-dark"], ["id", "Theme3", "routerLink", "/curb65", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme4", "routerLink", "/covid19", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme4", "routerLink", "/cstat", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme4", "routerLink", "/bmi-bsa", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme4", "routerLink", "/glasgow-coma-scale", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], [1, "form-group"], ["type", "button", "id", "customSwitch1", 1, "btn", "btn-info", 3, "click"], ["id", "Theme5", 2, "display", "none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Calculators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cstat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BMI/BSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Glasgow Coma Scale (GCS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() { return ctx.ThemeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dark mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
BmiBsaComponent.ɵfac = function BmiBsaComponent_Factory(t) { return new (t || BmiBsaComponent)(); };
BmiBsaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BmiBsaComponent, selectors: [["app-bmi-bsa"]], decls: 144, vars: 3, consts: [["id", "Cstat"], [1, "container"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "form-group", 2, "display", "inline-flex"], ["for", "amount1", 1, "control-label"], [1, "form-group"], [1, "input-group", "mb-3"], ["type", "text", "id", "weight", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], ["id", "kgLbs"], ["fill", "#1bb193", "viewBox", "0 0 13 13", "data-reactid", "265", 2, "width", "13px", "vertical-align", "middle", "margin-left", "5px", "cursor", "pointer"], ["d", "M12,6H1C0.6,6,0.3,5.8,0.1,5.5s-0.2-0.7,0-1l2.3-4c0.3-0.5,1-0.6,1.4-0.4C4.3,0.4,4.5,1,4.2,1.5L2.7,4H12c0.6,0,1,0.4,1,1 S12.6,6,12,6z", "data-reactid", "266"], ["d", "M1,7h11c0.4,0,0.7,0.2,0.9,0.5s0.2,0.7,0,1l-2.3,4c-0.3,0.5-0.9,0.6-1.4,0.4c-0.5-0.3-0.6-0.9-0.4-1.4L10.3,9H1   C0.4,9,0,8.6,0,8S0.4,7,1,7z", "data-reactid", "267"], ["for", "amount2", 1, "control-label"], ["type", "text", "id", "height", "placeholder", "Norm: 152-213", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange"], ["id", "cmIn"], ["for", "amount3", 1, "control-label"], ["type", "text", "id", "targetBMI", "placeholder", "Norm: 20-25", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange"], [1, "input-group-text"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "txt_4_3", 2, "display", "block"], ["id", "txt_4_0", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "txt_4_1", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "txt_4_2", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["href", "http://www.nursingtimes.net/Journals/2014/10/10/n/p/l/141015Forty-years-on-updating-the-Glasgow-coma-scale.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", "", 1, "alert-link", 2, "white-space", "nowrap"]], template: function BmiBsaComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BmiBsaComponent_Template_input_ngModelChange_20_listener($event) { return ctx.weight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_22_listener() { return ctx.kgLbs(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Height: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BmiBsaComponent_Template_input_ngModelChange_33_listener($event) { return ctx.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_35_listener() { return ctx.cmIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Target BMI: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Optional, to determine weight required to achieve target BMI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BmiBsaComponent_Template_input_ngModelChange_48_listener($event) { return ctx.targetBMI = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "kg/m\u00B2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_53_listener() { return ctx.Calculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_58_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BmiBsaComponent_Template_button_click_60_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Please fill out required fields:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "The GCS score can be indicative of how critically ill a patient is.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Trauma patients presenting with GCS <15 warrant close attention and reassessment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "A declining GCS is concerning in any setting and should prompt assessment of the airway and possible intervention.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Conversely, a GCS of 15 should not be taken as an indication that a patient (trauma or medical) is not critically ill. Decisions about the aggressiveness of the management and treatment plans should be made based on clinical presentation and context and not in any way overridden by the GCS score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "If a trauma patient has a GCS \u22648 and there is clinical concern that they are unable to protect their airway or that they have an expected worsening clinical course based on exam or imaging findings, then intubation can be considered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "In any patient, a rapidly declining or waxing and waning GCS is concerning and intubation should be considered in the context of the patient's overall clinical picture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Critical Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Although it has been adopted widely and in a variety of settings, the GCS score is not intended for quantitative use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "From the creators of the GCS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u201CWe have never recommended using the GCS alone, either as a means of monitoring coma, or to assess the severity of brain damage or predict outcome.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Teasdale 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " is calculated by addition of the total points selected under each component (eye, verbal, motor) below, e.g. \"15 points\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " is comprised of the individual components, e.g. \"E(4) V(5) M (6)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.targetBMI);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["#Cstat[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n    clear: left;\n    width: 200px;\n    text-align: left;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    width: 200px;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm1pLWJzYS9ibWktYnNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDOztBQUV4QyxTQUFTLDZDQUE2QztJQUNsRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSx1QkFBdUIsNENBQTRDO0lBQy9ELHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxnRkFBZ0Y7SUFDaEYsZ0NBQWdDO0FBQ3BDOztBQUVBLGVBQWUsMkJBQTJCO0lBQ3RDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLFVBQVUsZ0NBQWdDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsVUFBVSx3QkFBd0I7SUFDOUIsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2JtaS1ic2EvYm1pLWJzYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsIENTUyBmb3VuZCBpbiAuLi8uLi9zdHlsZS5jc3MgKi9cblxuI0NzdGF0IHsgLyogQWxpZ25zIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2l0ZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogbGVmdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbnAgeyAvKiBDb21wYWN0cyB0ZXh0ICovXG4gICAgbWFyZ2luOiAwLjElO1xufVxuXG5oMSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG5oNSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG4jYnV0dG9uMSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbiNidXR0b24yIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuLnN3aXRjaC1maWVsZCBidXR0b24geyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQwMCksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmNhcmQtaGVhZGVyIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGhlYWRlciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogMSU7XG59XG5cbiNMZXZlbHMgeyAvKiBHaXZlcyBSZXN1bHRzIEJvbGQgcHJvcGVydHkgKi8gXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufVxuXG4jUmVzdWx0cyB7IC8qIENoYW5nZXMgUmVzdWx0cyBib2R5ICovXG4gICAgbWFyZ2luOiAtMSU7XG59XG5cbiNUaGVtZTUgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm94ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUwNyk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufVxuIl19 */"] });
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
Covid19Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Covid19Component, selectors: [["app-covid19"]], decls: 257, vars: 0, consts: [["id", "Covid19"], [1, "alert", "alert-dismissible", "alert-danger"], [2, "font-size", "x-large"], [1, "mb-0"], ["href", "https://www.mdcalc.com/covid-19", "target", "_blank", "rel", "noopener noreferrer", 1, "alert-link"], ["href", "https://www.mdcalc.com/covid-19/brescia-covid-respiratory-severity-scale-bcrss-interview", "target", "_blank", "rel", "noopener noreferrer", 1, "alert-link"], [1, "alert", "alert-dismissible", "alert-info"], [1, "alert", "alert-dismissible", "alert-light"], [1, "switch-field"], ["type", "radio", "id", "criteria_2_0-no", "name", "criteria_2_0", 1, "btn", "btn-outline-info", 3, "change"], ["for", "criteria_2_0-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_0-yes", "name", "criteria_2_0", 3, "change"], ["for", "criteria_2_0-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_2_1-no", "name", "criteria_2_1", 3, "change"], ["for", "criteria_2_1-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_1-yes", "name", "criteria_2_1", 3, "change"], ["for", "criteria_2_1-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_2_2-no", "name", "criteria_2_2", 3, "change"], ["for", "criteria_2_2-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_2-yes", "name", "criteria_2_2", 3, "change"], ["for", "criteria_2_2-yes", 1, "switch-field"], ["title", "Chest X-ray", 1, "tooltip1"], ["type", "radio", "id", "criteria_2_3-no", "name", "criteria_2_3", 3, "change"], ["for", "criteria_2_3-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_3-yes", "name", "criteria_2_3", 3, "change"], ["for", "criteria_2_3-yes", 1, "switch-field"], ["id", "criteria_2_4d", 2, "display", "none"], ["type", "radio", "id", "criteria_2_4-no", "name", "criteria_2_4", 3, "change"], ["for", "criteria_2_4-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_4-yes", "name", "criteria_2_4", 3, "change"], ["for", "criteria_2_4-yes", 1, "switch-field"], ["id", "criteria_2_5d", 2, "display", "none"], ["title", "Continuous mandatory ventilation", 1, "tooltip1"], ["type", "radio", "id", "criteria_2_5-no", "name", "criteria_2_5", 3, "change"], ["for", "criteria_2_5-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_5-yes", "name", "criteria_2_5", 3, "change"], ["for", "criteria_2_5-yes", 1, "switch-field"], ["id", "criteria_2_6d", 2, "display", "none"], ["href", "https://www.mdcalc.com/horowitz-index-lung-function-p-f-ratio"], ["type", "radio", "id", "criteria_2_6-no", "name", "criteria_2_6", 3, "change"], ["for", "criteria_2_6-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_6-yes", "name", "criteria_2_6", 3, "change"], ["for", "criteria_2_6-yes", 1, "switch-field"], ["id", "criteria_2_7d", 2, "display", "none"], ["type", "radio", "id", "criteria_2_7-no", "name", "criteria_2_7", 3, "change"], ["for", "criteria_2_7-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_7-yes", "name", "criteria_2_7", 3, "change"], ["for", "criteria_2_7-yes", 1, "switch-field"], ["id", "criteria_2_8d", 2, "display", "none"], ["type", "radio", "id", "criteria_2_8-no", "name", "criteria_2_8", 3, "change"], ["for", "criteria_2_8-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_8-yes", "name", "criteria_2_8", 3, "change"], ["for", "criteria_2_8-yes", 1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "Levels", 2, "font-size", "large"], ["id", "Management_2_1"], ["id", "Medications_2_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["href", "https://cdn-web-img.mdcalc.com/content/BRSS_A4.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", ""], [2, "text-align", "center", "display", "inline-block"], [2, "text-align", "lcenter", "display", "inline-block"], ["href", "https://www.eahp.eu/sites/default/files/linee_guida_sulla_gestione_terapeutica_e_di_supporto_per_pazienti_con_infezione_da_coronavirus_covid-19.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", ""], ["href", "https://www.mdcalc.com/brescia-covid-respiratory-severity-scale-bcrss-algorithm", "target", "_blank", "rel", "noopener noreferrer", "download", ""], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://cdn-web-img.mdcalc.com/content/BRSS_A4-1.png"], ["src", "https://cdn-web-img.mdcalc.com/content/BRSS_A4-1.png", "alt", "BRSS"]], template: function Covid19Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "COVID-19 Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IMPORTANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Launched during COVID-19 crisis. Not externally validated. Use with caution; this is being used in Italy for assessment, trending, and treatment recommendations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "COVID-19 Resource Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See MDCalc's interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " with Italian intensivist, Dr. Simone Piva, for an in-depth discussion of how the BCRSS is being used practically to simplify and communicate the respiratory status of patients.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "INSTRUCTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "This algorithm is a step-wise approach to managing patients with confirmed/presumed COVID-19 pneumonia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "If not intubated, follow management and then each 4 testing criteria should be repeated to assess for improvement or deterioration. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Repetition frequency based on clinical judgment to downgrade/upgrade score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Not only is the management important; the numerical score is used to easily compare and summarize patients to treating clinicians.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NIV concerning for aerosolization; included in score due to ventilator scarcity in Italy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "[Patient has COVID-19 pneumonia or COVID-19 symptoms for \u22657 days] AND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " [Patient is PCR+ OR high suspicion for COVID-19/PCR pending]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Patient wheezing OR unable to speak in full sentences while at rest/with minimal effort:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_49_listener() { return ctx.CheckResults0(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_52_listener() { return ctx.CheckResults0(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Respiratory rate >22:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_58_listener() { return ctx.CheckResults1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_61_listener() { return ctx.CheckResults1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "PaO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " <65 mmHg or SpO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " <90%: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_73_listener() { return ctx.CheckResults2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_76_listener() { return ctx.CheckResults2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Repeat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "CXR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " is significantly worsening:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_85_listener() { return ctx.CheckResults3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_88_listener() { return ctx.CheckResults3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " When >2 criteria are selected, algorithm recommends escalating to non-invasive ventilation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " (NIV/CPAP/BiPAP) or high-flow nasal cansula (HFNC), and then reassessing patient criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Does patient still have >2 criteria despite NIV/HFNC?:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_102_listener() { return ctx.CheckResults4no(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_105_listener() { return ctx.CheckResults4yes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Intubation recommended for worsening symptoms despite NIV/HFNC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " With the patient intubated:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Is the intubated patient on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CMV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_121_listener() { return ctx.CheckResults5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_124_listener() { return ctx.CheckResults5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "PaO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "/FiO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " <150 mmHg:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_139_listener() { return ctx.CheckResults6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_142_listener() { return ctx.CheckResults6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Patient on neuromuscular blockade (NMBA):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_149_listener() { return ctx.CheckResults7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_152_listener() { return ctx.CheckResults7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Patient prone or on ECMO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_159_listener() { return ctx.CheckResults8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Covid19Component_Template_input_change_162_listener() { return ctx.CheckResults8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_button_click_166_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Covid19Component_Template_button_click_168_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Results: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "svg", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "svg", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "*Inclusion criteria for tocilizumab:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " End of the initial phase of high viral load of COVID-19 (e.g. apyretic from >72h and/or elapsed \u22657 days after the onset of symptoms).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Worsening of respiratory exchanges, such as to require non-invasive or invasive support from ventilation (Level \u22653).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " High levels of IL-6 (>40 pg/mL); alternatively high levels of d-dimer, CRP, ferritin, and/or fibrinogen progressively increasing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Italy's latest SIMIT Guidelines.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Advice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Healthcare workers must be aware that COVID-19 information is rapidly changing; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " We will attempt to update this score as frequently as possible to keep up with the rapidly changing nature of this pandemic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "While this score certainly would indicate increasing levels of respiratory severity, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " one's local hospital recommendations or drug availability may provide different recommendations for treatment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Management:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "This score is meant to be dynamic and frequently reassessed and re-scored after interventions; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " frequency of reassessment is by clinical judgment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " A brand new patient in the ED may need to be reassessed every 15 minutes, for example, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "while a stable patient on the medical floor may only need reassessment every 6-12 hours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "If a patient is assigned a new score based on these criteria, the medical and respiratory management should then change as well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Evidence appraisal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " This score has not been externally validated and is being published on The-Journey as one way to easily assess and compare patients in a time of crisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "References:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "SIMIT Guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Brescia-COVID Treatment Algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "MDCalc's BCRSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#Covid19[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\na[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n    text-decoration: underline;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nul[_ngcontent-%COMP%] { \n    display: inline-block; \n}\n\nol[_ngcontent-%COMP%] { \n    display: inline-block; \n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \n    position: absolute !important;\n    clip: rect(0, 0, 0, 0);\n    height: 1px; \n    width: 1px;\n    border: 0;\n    overflow: hidden;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: #e0e0e0;\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.507), 0 1px rgba(255, 255, 255, 0);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover { \n    cursor: pointer;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] { \n    background-color: #20adffce;\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type { \n    border-radius: 4px 0 0 4px;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type { \n    border-radius: 0 4px 4px 0;\n}\n\n.alert[_ngcontent-%COMP%] { \n    display: inline-block;\n}\n\n.tooltip1[_ngcontent-%COMP%] {\n    color: rgb(33, 118, 175);\n    border-bottom: 1px dotted rgb(33, 118, 175);\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 50%;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQxOS9jb3ZpZDE5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDOztBQUV4QyxXQUFXLDZDQUE2QztJQUNwRCxrQkFBa0I7QUFDdEI7O0FBRUEsSUFBSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxJQUFJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUssMkJBQTJCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFFQSxLQUFLLDJCQUEyQjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsZUFBZSwyQkFBMkI7SUFDdEMsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQSxVQUFVLGdDQUFnQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVyx5QkFBeUI7SUFDaEMsV0FBVztBQUNmOztBQUVBLFVBQVUsd0JBQXdCO0lBQzlCLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUEsc0JBQXNCLDRDQUE0QztJQUM5RCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQSx1QkFBdUIsNENBQTRDO0lBQy9ELHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxnRkFBZ0Y7SUFDaEYsZ0NBQWdDO0FBQ3BDOztBQUVBLHNCQUFzQiw0Q0FBNEM7SUFDOUQseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUEsNEJBQTRCLDRDQUE0QztJQUNwRSxlQUFlO0FBQ25COztBQUVBLHNDQUFzQyw0Q0FBNEM7SUFDOUUsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUEsb0NBQW9DLDRDQUE0QztJQUM1RSwwQkFBMEI7QUFDOUI7O0FBRUEsbUNBQW1DLDRDQUE0QztJQUMzRSwwQkFBMEI7QUFDOUI7O0FBRUEsU0FBUyw2Q0FBNkM7SUFDbEQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3ZpZDE5L2NvdmlkMTkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBDU1MgZm91bmQgaW4gLi4vLi4vc3R5bGUuY3NzICovXG5cbiNDb3ZpZDE5IHsgLyogQWxpZ25zIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2l0ZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbnAgeyAvKiBDb21wYWN0cyB0ZXh0ICovXG4gICAgbWFyZ2luOiAwLjElO1xufVxuXG5hIHsgLyogQ2hhbmdlcyBsaW5rIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5oMSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG5oMyB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG5oNSB7IC8qIENoYW5nZXMgaGVhZGVyIGNvbG9yICovXG4gICAgY29sb3I6IHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG51bCB7IC8qIE1vdmVzIERvdHMgdG8gdGhlIGxpc3QgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxufVxuXG5vbCB7IC8qIE1vdmVzIERvdHMgdG8gdGhlIGxpc3QgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxufVxuXG4jYnV0dG9uMSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbiNidXR0b24yIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuLmNhcmQtaGVhZGVyIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGhlYWRlciAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4jTGV2ZWxzIHsgLyogR2l2ZXMgUmVzdWx0cyBCb2xkIHByb3BlcnR5ICovIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbn1cblxuI1Jlc3VsdHMgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm9keSAqL1xuICAgIG1hcmdpbjogLTElO1xufVxuXG4jVGhlbWU1IHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJveCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MDcpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbjogMC41JTtcbiAgICBjb2xvcjogI2UwZTBlMDtcbn1cblxuLnN3aXRjaC1maWVsZCBpbnB1dCB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgaGVpZ2h0OiAxcHg7IFxuICAgIHdpZHRoOiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2l0Y2gtZmllbGQgYnV0dG9uIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGY1YztcbiAgICBjb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyOSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40MDApLCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zd2l0Y2gtZmllbGQgbGFiZWwgeyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41MDcpLCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmhvdmVyIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGFkZmZjZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5zd2l0Y2gtZmllbGQgbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmxhc3Qtb2YtdHlwZSB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xufVxuXG4uYWxlcnQgeyAvKiBNYWtlcyBoaW50cyBzbWFsbGVyIGFuZCBpbmxpbmUgd2l0aCB0ZXh0ICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcDEge1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHJnYigzMywgMTE4LCAxNzUpO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG59XG4iXX0= */"] });
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
        this.ResultCstat = this.tidal / (this.Pplat - this.peep);
        document.getElementById("ResultCstat").innerHTML = this.ResultCstat.toFixed(2) + " mL/cm H₂O";
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
        document.getElementById("ResultCstat").innerHTML = "";
    }
}
CstatComponent.ɵfac = function CstatComponent_Factory(t) { return new (t || CstatComponent)(); };
CstatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CstatComponent, selectors: [["app-cstat"]], decls: 83, vars: 3, consts: [["id", "Cstat"], [1, "container"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "form-group", 2, "display", "inline-flex"], ["for", "amount1", 1, "control-label"], [1, "form-group"], [1, "input-group", "mb-3"], ["type", "text", "id", "tidal", "placeholder", "e.g. 700", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], [1, "input-group-text"], ["for", "amount2", 1, "control-label"], ["type", "text", "id", "Pplat", "placeholder", "e.g. 35", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange"], ["for", "amount3", 1, "control-label"], ["type", "text", "id", "peep", "placeholder", "e.g. 8", 1, "form-control", 2, "display", "inline-block", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "Levels1", 2, "font-weight", "bold", "font-size", "larger"], ["id", "ResultCstat"], ["id", "Management_2_1"], ["id", "Medications_2_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hamilton-medical.com%2Fen_US%2Fdam%2Fjcr%3A391aeeb9-d347-4795-8fd9-95259755acd6%2F97_Compliance_equation%2520static.png&f=1&nofb=1", "alt", "BRSS", 1, "center"]], template: function CstatComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CstatComponent_Template_input_ngModelChange_16_listener($event) { return ctx.tidal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "mL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Plateau pressure (P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "plat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CstatComponent_Template_input_ngModelChange_29_listener($event) { return ctx.Pplat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "cm H\u2082O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PEEP: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CstatComponent_Template_input_ngModelChange_39_listener($event) { return ctx.peep = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "cm H\u2082O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CstatComponent_Template_button_click_45_listener() { return ctx.Cstat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CstatComponent_Template_button_click_50_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CstatComponent_Template_button_click_52_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Static Lung Compliance (Cstat)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Interpretation: Normal static lung compliance is 50-100 mL/cm H\u2082O");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Static lung compliance (Cstat), mL/cm H2O = Corrected/delivered tidal volume (\u0394V), mL / (Plateau pressure (Pplat), cm H2O \u2013 PEEP, cm H2O)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tidal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Pplat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.peep);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["#Cstat[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n    clear: left;\n    width: 270px;\n    text-align: left;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    width: 130px;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3N0YXQvY3N0YXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7O0FBRXhDLFNBQVMsNkNBQTZDO0lBQ2xELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsSUFBSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBLHVCQUF1Qiw0Q0FBNEM7SUFDL0QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUEsZUFBZSwyQkFBMkI7SUFDdEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUEsVUFBVSxnQ0FBZ0M7SUFDdEMsaUJBQWlCO0FBQ3JCOztBQUVBLFdBQVcseUJBQXlCO0lBQ2hDLFdBQVc7QUFDZjs7QUFFQSxVQUFVLHdCQUF3QjtJQUM5Qiw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY3N0YXQvY3N0YXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBDU1MgZm91bmQgaW4gLi4vLi4vc3R5bGUuY3NzICovXG5cbiNDc3RhdCB7IC8qIEFsaWducyBjb250ZW50IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHNpdGUgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDEzMHB4O1xufVxuXG5wIHsgLyogQ29tcGFjdHMgdGV4dCAqL1xuICAgIG1hcmdpbjogMC4xJTtcbn1cblxuaDEgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaDUgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuI2J1dHRvbjEge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4jYnV0dG9uMiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi5zd2l0Y2gtZmllbGQgYnV0dG9uIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGY1YztcbiAgICBjb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyOSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40MDApLCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkLWhlYWRlciB7IC8qIENoYW5nZXMgUmVzdWx0cyBoZWFkZXIgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4jTGV2ZWxzIHsgLyogR2l2ZXMgUmVzdWx0cyBCb2xkIHByb3BlcnR5ICovIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbn1cblxuI1Jlc3VsdHMgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm9keSAqL1xuICAgIG1hcmdpbjogLTElO1xufVxuXG4jVGhlbWU1IHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJveCAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MDcpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbjogMC41JTtcbiAgICBjb2xvcjogI2UwZTBlMDtcbn1cblxuaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn1cbiJdfQ== */"] });
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
        this.Points = 0; /* Resets score to default*/
        this.CheckPneumonia();
    }
    CheckPneumonia() {
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
    Add() {
        this.Points++;
        this.CheckPneumonia();
    }
    Sub() {
        this.Points--;
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
Curb65Component.ɵfac = function Curb65Component_Factory(t) { return new (t || Curb65Component)(); };
Curb65Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Curb65Component, selectors: [["app-curb65"]], decls: 136, vars: 1, consts: [["id", "CURB65"], [1, "switch-field"], ["type", "radio", "id", "pneumonia-yes", "name", "pneumonia", "checked", "", 3, "change"], ["for", "pneumonia-yes", 1, "switch-field"], ["type", "radio", "id", "pneumonia-no", "name", "pneumonia", 3, "change"], ["for", "pneumonia-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_1-no", "name", "criteria_1_1", "checked", "", 3, "change"], ["for", "criteria_1_1-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_1-yes", "name", "criteria_1_1", 3, "change"], ["for", "criteria_1_1-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_2-no", "name", "criteria_1_2", "checked", "", 3, "change"], ["for", "criteria_1_2-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_2-yes", "name", "criteria_1_2", 3, "change"], ["for", "criteria_1_2-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_3-no", "name", "criteria_1_3", "checked", "", 3, "change"], ["for", "criteria_1_3-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_3-yes", "name", "criteria_1_3", 3, "change"], ["for", "criteria_1_3-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_4-no", "name", "criteria_1_4", "checked", "", 3, "change"], ["for", "criteria_1_4-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_4-yes", "name", "criteria_1_4", 3, "change"], ["for", "criteria_1_4-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_5-no", "name", "criteria_1_5", "checked", "", 3, "change"], ["for", "criteria_1_5-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_5-yes", "name", "criteria_1_5", 3, "change"], ["for", "criteria_1_5-yes", 1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "ResultsBox"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], [1, "card-body"], ["id", "Results"], ["id", "BoldResult"], ["id", "Point"], ["id", "Mortality_1_1"], ["id", "Treatment_1_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse"], ["id", "Pneumonia"], ["href", "https://en.wikipedia.org/wiki/CURB-65", "target", "_blank"], [2, "list-style-type", "none"], ["id", "AnyInfection"]], template: function Curb65Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CURB-65 Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Infection type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_6_listener() { return ctx.CheckPneumonia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pneumonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_9_listener() { return ctx.CheckPneumonia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Any infection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confusion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_15_listener() { return ctx.Sub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_18_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BUN > 19 mg/dL (> 7 mmol/L):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_24_listener() { return ctx.Sub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_27_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Respiratory Rate \u2265 30:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_33_listener() { return ctx.Sub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_36_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Systolic BP < 90 mmHg or Diastolic BP \u2264 60 mmHg:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_42_listener() { return ctx.Sub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_45_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Age \u2265 65:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_51_listener() { return ctx.Sub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Curb65Component_Template_input_change_54_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_button_click_58_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Curb65Component_Template_button_click_60_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Results: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Pneumonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "The risk of death at 30 days increases as the score increases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "Ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "0\u20140.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "1\u20142.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "2\u20146.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "3\u201414.0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "4\u201427.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "5\u201427.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " is used as a means of deciding the action that is needed to be taken for that patient.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "Ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "0-1: Treat as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "2: Consider a short stay in hospital or watch very closely as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "3-5: Requires hospitalization with consideration as to whether they need to be in the intensive care unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Any infection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Patients with any type of infection (half of the patients had pneumonia), the risk of death increases as the score increases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "Ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "0 to 1 < 5% mortality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "2 to 3 < 10% mortality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "4 to 5 15-30% mortality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " is used as a means of deciding the action that is needed to be taken for that patient.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "Ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "0-1: Treat as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "2-3: Consider a short stay in hospital or watch very closely as an outpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "4-5: Requires hospitalization with consideration as to whether they need to be in the intensive care unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Points, " ");
    } }, styles: ["#CURB65[_ngcontent-%COMP%] {  \n    text-align: center;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\na[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nul[_ngcontent-%COMP%] { \n    display: inline;\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    padding: 1%;\n}\n\n#BoldResult[_ngcontent-%COMP%] {  \n    font-weight: bold;\n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#ResultsBox[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute !important;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    width: 1px;\n    border: 0;\n    overflow: hidden;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    background-color: #434f5c;\n    color: #e0e0e0;\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.507), 0 1px rgba(255, 255, 255, 0);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n    background-color: #20adffce;\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type {\n    border-radius: 4px 0 0 4px;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type {\n    border-radius: 0 4px 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VyYjY1L2N1cmI2NS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEMsV0FBVyw2Q0FBNkM7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsSUFBSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSywyQkFBMkI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBLGNBQWMsZ0NBQWdDO0lBQzFDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsY0FBYyx3QkFBd0I7SUFDbEMsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2N1cmI2NS9jdXJiNjUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBDU1MgZm91bmQgaW4gLi4vLi4vc3R5bGUuY3NzICovXG5cbiNDVVJCNjUgeyAgLyogQWxpZ25zIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2l0ZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmEgeyAvKiBDaGFuZ2VzIGxpbmsgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgzIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbnVsIHsgLyogTW92ZXMgRG90cyB0byB0aGUgbGlzdCAqL1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2J1dHRvbjEge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4jYnV0dG9uMiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi5jYXJkLWhlYWRlciB7IC8qIENoYW5nZXMgUmVzdWx0cyBoZWFkZXIgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuI0JvbGRSZXN1bHQgeyAvKiBHaXZlcyBSZXN1bHRzIEJvbGQgcHJvcGVydHkgKi8gXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNSZXN1bHRzIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJvZHkgKi9cbiAgICBtYXJnaW46IC0xJTtcbn1cblxuI1Jlc3VsdHNCb3ggeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm94ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUwNyk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2l0Y2gtZmllbGQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQwMCksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGY1YztcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNTA3KSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYWRmZmNlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xufVxuIl19 */"] });
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
        window.location.reload(false);
        // this.eye = 0;
        // this.verbal = 0;
        // this.motor = 0;
        // this.points = 0;
        // this.pointstxt = 0;
        // (<HTMLInputElement>document.getElementById("option26")).checked = false;
    }
}
GlasgowComaScaleComponent.ɵfac = function GlasgowComaScaleComponent_Factory(t) { return new (t || GlasgowComaScaleComponent)(); };
GlasgowComaScaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlasgowComaScaleComponent, selectors: [["app-glasgow-coma-scale"]], decls: 182, vars: 4, consts: [["id", "Cstat"], [1, "container"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["for", "eye"], [2, "font-weight", "bold"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], ["id", "eye", 1, "btn-group-vertical"], [1, "btn", "btn-primary", "active"], ["type", "radio", "name", "options1", "id", "option11", 3, "click"], [1, "btn", "btn-primary"], ["type", "radio", "name", "options1", "id", "option12", 3, "click"], ["type", "radio", "name", "options1", "id", "option13", 3, "click"], ["type", "radio", "name", "options1", "id", "option14", 3, "click"], ["type", "radio", "name", "options1", "id", "option15", 3, "click"], ["for", "verbal"], ["type", "radio", "name", "options2", "id", "option21", 3, "click"], ["type", "radio", "name", "options2", "id", "option22", 3, "click"], ["type", "radio", "name", "options2", "id", "option23", 3, "click"], ["type", "radio", "name", "options2", "id", "option24", 3, "click"], ["type", "radio", "name", "options2", "id", "option25", 3, "click"], ["type", "radio", "name", "options2", "id", "option26", 3, "click"], ["for", "motor"], ["type", "radio", "name", "options3", "id", "option31", 3, "click"], ["type", "radio", "name", "options3", "id", "option32", 3, "click"], ["type", "radio", "name", "options3", "id", "option33", 3, "click"], ["type", "radio", "name", "options3", "id", "option34", 3, "click"], ["type", "radio", "name", "options3", "id", "option35", 3, "click"], ["type", "radio", "name", "options2", "id", "option36", 3, "click"], ["type", "radio", "name", "options2", "id", "option37", 3, "click"], [1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "txt_4_3"], ["id", "txt_4_0", 2, "font-weight", "bold", "font-size", "larger", "display", "none"], ["id", "txt_4_1", 2, "display", "none"], ["id", "txt_4_2", 2, "display", "none"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["href", "http://www.nursingtimes.net/Journals/2014/10/10/n/p/l/141015Forty-years-on-updating-the-Glasgow-coma-scale.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", "", 1, "alert-link", 2, "white-space", "nowrap"]], template: function GlasgowComaScaleComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Best eye response: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " If local injury, edema, or otherwise unable to be assessed, mark \"Not testable (NT)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_19_listener() { return ctx.eyeCount(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Spontaneously (+4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_22_listener() { return ctx.eyeCount(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " To verbal command (+3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_25_listener() { return ctx.eyeCount(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " To pain (+2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_28_listener() { return ctx.eyeCount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " No eye opening (+1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_31_listener() { return ctx.eyeCount(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Not testable (NT) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Best verbal response: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " If intubated or otherwise unable to be assessed, mark \"Not testable (NT)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_42_listener() { return ctx.verbalCount(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Oriented (+5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_45_listener() { return ctx.verbalCount(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Confused (+4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_48_listener() { return ctx.verbalCount(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Inappropriate words (+3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_51_listener() { return ctx.verbalCount(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Incomprehensible sounds (+2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_54_listener() { return ctx.verbalCount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " No verbal response (+1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_57_listener() { return ctx.verbalCount(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Not testable/intubated (NT) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Best motor response: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " If on sedation/paralysis or unable to be assessed, mark \"Not testable (NT)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_68_listener() { return ctx.motorCount(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Obeys commands (+6) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_71_listener() { return ctx.motorCount(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Localizes pain (+5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_74_listener() { return ctx.motorCount(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Withdrawal from pain (+4) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_77_listener() { return ctx.motorCount(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Flexion to pain (+3) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_80_listener() { return ctx.motorCount(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Extension to pain (+2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_83_listener() { return ctx.motorCount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " No motor response (+1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_input_click_86_listener() { return ctx.motorCount(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Not testable (NT) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_button_click_92_listener() { return ctx.Reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlasgowComaScaleComponent_Template_button_click_94_listener() { return ctx.Print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Please fill out required fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Glasgow Coma Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "The GCS score can be indicative of how critically ill a patient is.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Trauma patients presenting with GCS <15 warrant close attention and reassessment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "A declining GCS is concerning in any setting and should prompt assessment of the airway and possible intervention.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Conversely, a GCS of 15 should not be taken as an indication that a patient (trauma or medical) is not critically ill. Decisions about the aggressiveness of the management and treatment plans should be made based on clinical presentation and context and not in any way overridden by the GCS score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "If a trauma patient has a GCS \u22648 and there is clinical concern that they are unable to protect their airway or that they have an expected worsening clinical course based on exam or imaging findings, then intubation can be considered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "In any patient, a rapidly declining or waxing and waning GCS is concerning and intubation should be considered in the context of the patient's overall clinical picture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Critical Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Although it has been adopted widely and in a variety of settings, the GCS score is not intended for quantitative use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Clinical management decisions should not be based solely on the GCS score in the acute setting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "From the creators of the GCS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u201CWe have never recommended using the GCS alone, either as a means of monitoring coma, or to assess the severity of brain damage or predict outcome.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Teasdale 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " is calculated by addition of the total points selected under each component (eye, verbal, motor) below, e.g. \"15 points\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "The Glasgow Coma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " is comprised of the individual components, e.g. \"E(4) V(5) M (6)\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pointstxt, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("E(", ctx.eye, ") V(", ctx.verbal, ") M(", ctx.motor, ")");
    } }, styles: ["#Cstat[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #122131;\n    border-color: #243a53;\n}\n\n#eye[_ngcontent-%COMP%] {\n    width: 225px;\n}\n\n#verbal[_ngcontent-%COMP%] {\n    width: 225px;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n    display: none;\n}\n\n#motor[_ngcontent-%COMP%] {\n    width: 225px;\n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n    clear: left;\n    width: 270px;\n    text-align: left;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    width: 130px;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xhc2dvdy1jb21hLXNjYWxlL2dsYXNnb3ctY29tYS1zY2FsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEMsU0FBUyw2Q0FBNkM7SUFDbEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQSxJQUFJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsdUJBQXVCLDRDQUE0QztJQUMvRCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztBQUNwQzs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQSxVQUFVLGdDQUFnQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUEsV0FBVyx5QkFBeUI7SUFDaEMsV0FBVztBQUNmOztBQUVBLFVBQVUsd0JBQXdCO0lBQzlCLDRDQUE0QztJQUM1QyxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nbGFzZ293LWNvbWEtc2NhbGUvZ2xhc2dvdy1jb21hLXNjYWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgQ1NTIGZvdW5kIGluIC4uLy4uL3N0eWxlLmNzcyAqL1xuXG4jQ3N0YXQgeyAvKiBBbGlnbnMgY29udGVudCB0byB0aGUgY2VudGVyIG9mIHRoZSBzaXRlICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyMTMxO1xuICAgIGJvcmRlci1jb2xvcjogIzI0M2E1Mztcbn1cblxuI2V5ZSB7XG4gICAgd2lkdGg6IDIyNXB4O1xufVxuXG4jdmVyYmFsIHtcbiAgICB3aWR0aDogMjI1cHg7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jbW90b3Ige1xuICAgIHdpZHRoOiAyMjVweDtcbn1cblxubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBsZWZ0O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxMzBweDtcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmg1IHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbiNidXR0b24xIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuI2J1dHRvbjIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xufVxuXG4uc3dpdGNoLWZpZWxkIGJ1dHRvbiB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRmNWM7XG4gICAgY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNDAwKSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZC1oZWFkZXIgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgaGVhZGVyICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuI0xldmVscyB7IC8qIEdpdmVzIFJlc3VsdHMgQm9sZCBwcm9wZXJ0eSAqLyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG5cbiNSZXN1bHRzIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJvZHkgKi9cbiAgICBtYXJnaW46IC0xJTtcbn1cblxuI1RoZW1lNSB7IC8qIENoYW5nZXMgUmVzdWx0cyBib3ggKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTA3KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW46IDAuNSU7XG4gICAgY29sb3I6ICNlMGUwZTA7XG59XG5cbmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG59XG4iXX0= */"] });
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 0, consts: [["id", "Cstat"], [1, "container"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], ["id", "Theme3", "routerLink", "/curb65", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme3", "routerLink", "/covid19", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme3", "routerLink", "/cstat", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme3", "routerLink", "/bmi/bsa", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme3", "routerLink", "/glasgow-coma-scale", "routerLinkActive", "active", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to The- Journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Check out out calculators:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CURB-65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cstat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Body Mass Index (BMI) /Body Surface Area (BSA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Glasgow Coma Scale (GCS) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["#Cstat[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\nlabel[_ngcontent-%COMP%] {\n    display: block;\n    float: left;\n    clear: left;\n    width: 200px;\n    text-align: left;\n}\n\ninput[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n    width: 200px;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    font-size: large;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDOztBQUV4QyxTQUFTLDZDQUE2QztJQUNsRCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSx1QkFBdUIsNENBQTRDO0lBQy9ELHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxnRkFBZ0Y7SUFDaEYsZ0NBQWdDO0FBQ3BDOztBQUVBLGVBQWUsMkJBQTJCO0lBQ3RDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLFVBQVUsZ0NBQWdDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBDU1MgZm91bmQgaW4gLi4vLi4vc3R5bGUuY3NzICovXG5cbiNDc3RhdCB7IC8qIEFsaWducyBjb250ZW50IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHNpdGUgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG5wIHsgLyogQ29tcGFjdHMgdGV4dCAqL1xuICAgIG1hcmdpbjogMC4xJTtcbn1cblxuaDEgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaDUgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuI2J1dHRvbjEge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4jYnV0dG9uMiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi5zd2l0Y2gtZmllbGQgYnV0dG9uIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGY1YztcbiAgICBjb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyOSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40MDApLCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkLWhlYWRlciB7IC8qIENoYW5nZXMgUmVzdWx0cyBoZWFkZXIgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IDElO1xufVxuXG4jTGV2ZWxzIHsgLyogR2l2ZXMgUmVzdWx0cyBCb2xkIHByb3BlcnR5ICovIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbn1cblxuI1Jlc3VsdHMgeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm9keSAqL1xuICAgIG1hcmdpbjogLTElO1xufVxuXG5cbmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG59XG4iXX0= */"] });
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