(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dynamic-layout\n    [options]=\"layout\"\n    [contentRef]=\"contentRef\"></dynamic-layout>\n<ng-template #contentRef>\n    <router-outlet></router-outlet>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layouts_layouts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layouts.service */ "./src/app/layouts/layouts.service.ts");
/* harmony import */ var _pages_pages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.service */ "./src/app/pages/pages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(layoutsService, pagesService) {
        this.title = 'angular-dynamic';
        this.layout = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].app.layout;
        pagesService.update(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].app.pages);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_layouts_layouts_service__WEBPACK_IMPORTED_MODULE_2__["LayoutsService"],
            _pages_pages_service__WEBPACK_IMPORTED_MODULE_3__["PagesService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/layouts/components/index.ts ***!
  \*********************************************/
/*! exports provided: layoutComponents, SidenavLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutComponents", function() { return layoutComponents; });
/* harmony import */ var _sidenav_layout_sidenav_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-layout/sidenav-layout.component */ "./src/app/layouts/components/sidenav-layout/sidenav-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidenavLayoutComponent", function() { return _sidenav_layout_sidenav_layout_component__WEBPACK_IMPORTED_MODULE_0__["SidenavLayoutComponent"]; });



var layoutComponents = [
    _sidenav_layout_sidenav_layout_component__WEBPACK_IMPORTED_MODULE_0__["SidenavLayoutComponent"]
];


/***/ }),

/***/ "./src/app/layouts/components/sidenav-layout/sidenav-layout.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav-layout/sidenav-layout.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n    <nz-sider\n        nzCollapsible\n        [nzCollapsed]=\"mainNavIsCollapsed\"\n        [nzTrigger]=\"null\">\n        <div class=\"logo\"></div>\n        <ul\n            nz-menu\n            [nzTheme]=\"mainNavTheme$ | async\"\n            [nzMode]=\"'inline'\"\n            [nzInlineCollapsed]=\"mainNavIsCollapsed\"\n            *ngIf=\"mainNavItems$ | async as mainNavItems\">\n            <li\n                nz-submenu\n                *ngFor=\"let parent of mainNavItems\">\n                <span\n                    title\n                    (click)=\"mainNavUpdateSelectedItem(parent)\">\n                    <i\n                        [class]=\"parent?.icon\"\n                        *ngIf=\"parent?.icon\"></i>\n                    <span\n                        class=\"nav-text\"\n                        *ngIf=\"parent?.caption\">\n                        {{parent?.caption}}\n                    </span>\n                </span>\n                <ul *ngIf=\"parent?.children\">\n                    <li\n                        nz-menu-item\n                        *ngFor=\"let item of parent.children\"\n                        (click)=\"mainNavUpdateSelectedItem(item)\">\n                        <a\n                            *ngIf=\"item.routerLink\"\n                            [routerLink]=\"item.routerLink\">\n                            {{item.caption}}\n                        </a>\n                        <span *ngIf=\"!item.routerLink\">{{item.caption}}</span>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nz-sider>\n    <nz-layout>\n        <nz-header style=\"background: #fff; padding:0;\">\n            <i\n                class=\"anticon trigger\"\n                [class.anticon-menu-fold]=\"!mainNavIsCollapsed\"\n                [class.anticon-menu-unfold]=\"mainNavIsCollapsed\"\n                (click)=\"mainNavToggleIsCollapsed()\"></i>\n        </nz-header>\n        <nz-content style=\"margin:0 16px;\">\n            <nz-breadcrumb\n                style=\"margin:16px 0;\"\n                *ngIf=\"mainBreadcrumbStateItems$ | async as mainBreadcrumbStateItems\">\n                <nz-breadcrumb-item\n                    *ngFor=\"let item of mainBreadcrumbStateItems; let index = index\"\n                    (click)=\"mainBreadcrumbUpdateSelectedItem(item)\">\n                    <a\n                        *ngIf=\"item.routerLink && mainBreadcrumbStateItems.length>index+1\"\n                        [routerLink]=\"item.routerLink\">\n                        {{item.caption}}\n                    </a>\n                    <a *ngIf=\"!item.routerLink && mainBreadcrumbStateItems.length>index+1\">{{item.caption}}</a>\n                    <span *ngIf=\"mainBreadcrumbStateItems.length===index+1\">{{item.caption}}</span>\n                </nz-breadcrumb-item>\n            </nz-breadcrumb>\n            <div style=\"padding:24px; background: #fff; min-height: 360px;\">\n                <ng-container *ngTemplateOutlet=\"contentRef\"></ng-container>\n            </div>\n        </nz-content>\n        <nz-footer style=\"text-align: center;\">Ant Design ©2017 Implement By Angular</nz-footer>\n    </nz-layout>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/layouts/components/sidenav-layout/sidenav-layout.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav-layout/sidenav-layout.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  transition: color .3s; }\n\n:host ::ng-deep .trigger:hover {\n  color: #1890ff; }\n\n:host ::ng-deep .logo {\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px; }\n"

/***/ }),

/***/ "./src/app/layouts/components/sidenav-layout/sidenav-layout.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav-layout/sidenav-layout.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SidenavLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavLayoutComponent", function() { return SidenavLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-auto-unsubscribe */ "./node_modules/ngx-auto-unsubscribe/dist/index.js");
/* harmony import */ var _layouts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts.service */ "./src/app/layouts/layouts.service.ts");
/* harmony import */ var _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../states/main-breadcrumb.state */ "./src/app/layouts/states/main-breadcrumb.state/index.ts");
/* harmony import */ var _states_main_nav_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../states/main-nav.state */ "./src/app/layouts/states/main-nav.state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidenavLayoutComponent = /** @class */ (function () {
    function SidenavLayoutComponent(mainNavUIQuery, mainNavService, mainBreadcrumbUIQuery, mainBreadcrumbService, layoutsService) {
        this.mainNavUIQuery = mainNavUIQuery;
        this.mainNavService = mainNavService;
        this.mainBreadcrumbUIQuery = mainBreadcrumbUIQuery;
        this.mainBreadcrumbService = mainBreadcrumbService;
        this.layoutsService = layoutsService;
    }
    SidenavLayoutComponent.getType = function () {
        return 'sidenav-layout';
    };
    SidenavLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainNavItems$ = this.mainNavUIQuery.select(function (state) { return state.items; });
        this.mainNavTheme$ = this.mainNavUIQuery.select(function (state) { return state.theme; });
        this.mainNavSelectedItem$ = this.mainNavUIQuery.select(function (state) { return state.selectedItem; });
        this.mainNavIsCollapsed$ = this.mainNavUIQuery.select(function (state) { return state.isCollapsed; });
        this.mainBreadcrumbStateItems$ = this.mainBreadcrumbUIQuery.select(function (state) { return state.items; });
        this.mainBreadcrumbSelectedItem$ = this.mainBreadcrumbUIQuery.select(function (state) { return state.selectedItem; });
        this.mainNavIsCollapsed$.subscribe(function (isCollapsed) { return _this.mainNavIsCollapsed = isCollapsed; });
        this.layoutsService.update(this.options);
        console.log(this);
    };
    SidenavLayoutComponent.prototype.ngOnDestroy = function () {
        // AutoUnsubscribe
    };
    SidenavLayoutComponent.prototype.mainNavToggleIsCollapsed = function () {
        var _this = this;
        this.mainNavUIQuery.selectOnce(function (state) { return state.isCollapsed; }).subscribe(function (value) {
            return _this.mainNavService.updateIsCollapsed(_this.options.resolvers, !value);
        });
    };
    SidenavLayoutComponent.prototype.mainNavUpdateSelectedItem = function (item) {
        this.mainNavService.updateSelectedItem(this.options.resolvers, item);
    };
    SidenavLayoutComponent.prototype.mainBreadcrumbUpdateSelectedItem = function (item) {
        this.mainBreadcrumbService.updateSelectedItem(this.options.resolvers, item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], SidenavLayoutComponent.prototype, "contentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidenavLayoutComponent.prototype, "options", void 0);
    SidenavLayoutComponent = __decorate([
        Object(ngx_auto_unsubscribe__WEBPACK_IMPORTED_MODULE_1__["AutoUnsubscribe"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-layout',
            template: __webpack_require__(/*! ./sidenav-layout.component.html */ "./src/app/layouts/components/sidenav-layout/sidenav-layout.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-layout.component.scss */ "./src/app/layouts/components/sidenav-layout/sidenav-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_states_main_nav_state__WEBPACK_IMPORTED_MODULE_4__["MainNavUIQuery"],
            _states_main_nav_state__WEBPACK_IMPORTED_MODULE_4__["MainNavService"],
            _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_3__["MainBreadcrumbUIQuery"],
            _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_3__["MainBreadcrumbService"],
            _layouts_service__WEBPACK_IMPORTED_MODULE_2__["LayoutsService"]])
    ], SidenavLayoutComponent);
    return SidenavLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/dynamic-layout/dynamic-layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/dynamic-layout/dynamic-layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"component$|async as component\">\n    <ng-container *ngxComponentOutlet=\"component\">\n        <ng-container *ngTemplateOutlet=\"contentRef\"></ng-container>\n    </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/layouts/dynamic-layout/dynamic-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/dynamic-layout/dynamic-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: DynamicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function() { return DynamicLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/app/layouts/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent() {
    }
    DynamicLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var component = _components__WEBPACK_IMPORTED_MODULE_2__["layoutComponents"].filter(function (layoutComponent) {
            return _this.options && layoutComponent.getType() === _this.options.type;
        })[0];
        if (component) {
            this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                observer.next(component);
                observer.complete();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DynamicLayoutComponent.prototype, "contentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicLayoutComponent.prototype, "options", void 0);
    DynamicLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-layout',
            template: __webpack_require__(/*! ./dynamic-layout.component.html */ "./src/app/layouts/dynamic-layout/dynamic-layout.component.html")
        })
    ], DynamicLayoutComponent);
    return DynamicLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxd_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxd/core */ "./node_modules/@ngxd/core/esm5/ngxd-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layouts/components/index.ts");
/* harmony import */ var _dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-layout/dynamic-layout.component */ "./src/app/layouts/dynamic-layout/dynamic-layout.component.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers */ "./src/app/layouts/resolvers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngxd_core__WEBPACK_IMPORTED_MODULE_3__["NgxdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"]
            ],
            declarations: _components__WEBPACK_IMPORTED_MODULE_5__["layoutComponents"].concat([
                _dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_6__["DynamicLayoutComponent"]
            ]),
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"]
            ].concat(_components__WEBPACK_IMPORTED_MODULE_5__["layoutComponents"], [
                _dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_6__["DynamicLayoutComponent"]
            ]),
            entryComponents: _components__WEBPACK_IMPORTED_MODULE_5__["layoutComponents"].concat([
                _dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_6__["DynamicLayoutComponent"]
            ]),
            providers: _resolvers__WEBPACK_IMPORTED_MODULE_7__["layoutResolversProviders"].slice()
        })
    ], LayoutsModule);
    return LayoutsModule;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.service.ts":
/*!********************************************!*\
  !*** ./src/app/layouts/layouts.service.ts ***!
  \********************************************/
/*! exports provided: LayoutsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsService", function() { return LayoutsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/main-breadcrumb.state */ "./src/app/layouts/states/main-breadcrumb.state/index.ts");
/* harmony import */ var _states_main_nav_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/main-nav.state */ "./src/app/layouts/states/main-nav.state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutsService = /** @class */ (function () {
    function LayoutsService(mainNavService, mainBreadcrumbService) {
        this.mainNavService = mainNavService;
        this.mainBreadcrumbService = mainBreadcrumbService;
    }
    LayoutsService.prototype.update = function (options) {
        this.mainBreadcrumbService.update(options.resolvers, options.states['main-breadcrumb']);
        this.mainNavService.update(options.resolvers, options.states['main-nav']);
    };
    LayoutsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_states_main_nav_state__WEBPACK_IMPORTED_MODULE_2__["MainNavService"],
            _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_1__["MainBreadcrumbService"]])
    ], LayoutsService);
    return LayoutsService;
}());



/***/ }),

/***/ "./src/app/layouts/resolvers/index.ts":
/*!********************************************!*\
  !*** ./src/app/layouts/resolvers/index.ts ***!
  \********************************************/
/*! exports provided: layoutResolversProviders, MainBreadcrumbCreateRouterLinkResolver, mainBreadcrumbCreateRouterLinkFactory, mainBreadcrumbCreateRouterLinkProviders, MainNavCreateRouterLinkResolver, mainNavCreateRouterLinkFactory, mainNavCreateRouterLinkProviders, MainNavSelectedItemToBreadcrumbResolver, mainNavSelectedItemToBreadcrumbFactory, mainNavSelectedItemToBreadcrumbProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutResolversProviders", function() { return layoutResolversProviders; });
/* harmony import */ var _main_breadcrumb_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-breadcrumb-create-router-link.resolver */ "./src/app/layouts/resolvers/main-breadcrumb-create-router-link.resolver.ts");
/* harmony import */ var _main_nav_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav-create-router-link.resolver */ "./src/app/layouts/resolvers/main-nav-create-router-link.resolver.ts");
/* harmony import */ var _main_nav_selected_item_to_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav-selected-item-to-breadcrumb.resolver */ "./src/app/layouts/resolvers/main-nav-selected-item-to-breadcrumb.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbCreateRouterLinkResolver", function() { return _main_breadcrumb_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_0__["MainBreadcrumbCreateRouterLinkResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainBreadcrumbCreateRouterLinkFactory", function() { return _main_breadcrumb_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_0__["mainBreadcrumbCreateRouterLinkFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainBreadcrumbCreateRouterLinkProviders", function() { return _main_breadcrumb_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_0__["mainBreadcrumbCreateRouterLinkProviders"]; });

/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavCreateRouterLinkResolver", function() { return _main_nav_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_1__["MainNavCreateRouterLinkResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainNavCreateRouterLinkFactory", function() { return _main_nav_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_1__["mainNavCreateRouterLinkFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainNavCreateRouterLinkProviders", function() { return _main_nav_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_1__["mainNavCreateRouterLinkProviders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavSelectedItemToBreadcrumbResolver", function() { return _main_nav_selected_item_to_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__["MainNavSelectedItemToBreadcrumbResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainNavSelectedItemToBreadcrumbFactory", function() { return _main_nav_selected_item_to_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__["mainNavSelectedItemToBreadcrumbFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mainNavSelectedItemToBreadcrumbProviders", function() { return _main_nav_selected_item_to_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__["mainNavSelectedItemToBreadcrumbProviders"]; });








var layoutResolversProviders = [
    _main_breadcrumb_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_0__["mainBreadcrumbCreateRouterLinkProviders"],
    _main_nav_create_router_link_resolver__WEBPACK_IMPORTED_MODULE_1__["mainNavCreateRouterLinkProviders"],
    _main_nav_selected_item_to_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__["mainNavSelectedItemToBreadcrumbProviders"]
];


/***/ }),

/***/ "./src/app/layouts/resolvers/main-breadcrumb-create-router-link.resolver.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/resolvers/main-breadcrumb-create-router-link.resolver.ts ***!
  \**********************************************************************************/
/*! exports provided: MainBreadcrumbCreateRouterLinkResolver, mainBreadcrumbCreateRouterLinkFactory, mainBreadcrumbCreateRouterLinkProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbCreateRouterLinkResolver", function() { return MainBreadcrumbCreateRouterLinkResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainBreadcrumbCreateRouterLinkFactory", function() { return mainBreadcrumbCreateRouterLinkFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainBreadcrumbCreateRouterLinkProviders", function() { return mainBreadcrumbCreateRouterLinkProviders; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/main-breadcrumb.state */ "./src/app/layouts/states/main-breadcrumb.state/index.ts");




var MainBreadcrumbCreateRouterLinkResolver = /** @class */ (function () {
    function MainBreadcrumbCreateRouterLinkResolver(router) {
        this.router = router;
        this.name = 'main-breadcrumb-create-router-link';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; })).
            subscribe(function (e) {
            console.log(e);
        });
    }
    MainBreadcrumbCreateRouterLinkResolver.prototype.items = function (allowedResolvers, options, items) {
        console.log(this, options);
        if (items) {
            items.forEach(function (item, index) {
                if (!item.parent) {
                    item.parent = items[index - 1];
                }
                /*if (!item.routerLink) {
                    item.routerLink = items.filter(
                        (filterItem, filterIndex) => filterIndex <= index
                    ).map(
                        mapItem => mapItem.key
                    );
                }*/
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
    };
    return MainBreadcrumbCreateRouterLinkResolver;
}());

function mainBreadcrumbCreateRouterLinkFactory(router) {
    return new MainBreadcrumbCreateRouterLinkResolver(router);
}
var mainBreadcrumbCreateRouterLinkProviders = [
    {
        provide: _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_3__["MAIN_BREADCRUMB_RESOLVERS"],
        useFactory: mainBreadcrumbCreateRouterLinkFactory,
        deps: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]],
        multi: true
    }
];


/***/ }),

/***/ "./src/app/layouts/resolvers/main-nav-create-router-link.resolver.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/resolvers/main-nav-create-router-link.resolver.ts ***!
  \***************************************************************************/
/*! exports provided: MainNavCreateRouterLinkResolver, mainNavCreateRouterLinkFactory, mainNavCreateRouterLinkProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavCreateRouterLinkResolver", function() { return MainNavCreateRouterLinkResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavCreateRouterLinkFactory", function() { return mainNavCreateRouterLinkFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavCreateRouterLinkProviders", function() { return mainNavCreateRouterLinkProviders; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _states_main_nav_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/main-nav.state */ "./src/app/layouts/states/main-nav.state/index.ts");


var MainNavCreateRouterLinkResolver = /** @class */ (function () {
    function MainNavCreateRouterLinkResolver() {
        this.name = 'main-nav-create-router-link';
    }
    MainNavCreateRouterLinkResolver.prototype.items = function (allowedResolvers, options, items) {
        console.log(this, options);
        if (items) {
            items.forEach(function (parent) {
                parent.routerLink = [parent.key];
                if (parent.children) {
                    parent.children.forEach(function (item) {
                        item.parent = parent;
                        if (!item.routerLink) {
                            item.routerLink = [parent.key, item.key];
                        }
                    });
                }
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(items);
    };
    return MainNavCreateRouterLinkResolver;
}());

function mainNavCreateRouterLinkFactory() {
    return new MainNavCreateRouterLinkResolver();
}
var mainNavCreateRouterLinkProviders = [
    {
        provide: _states_main_nav_state__WEBPACK_IMPORTED_MODULE_1__["MAIN_NAV_RESOLVERS"],
        useFactory: mainNavCreateRouterLinkFactory,
        multi: true
    }
];


/***/ }),

/***/ "./src/app/layouts/resolvers/main-nav-selected-item-to-breadcrumb.resolver.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/resolvers/main-nav-selected-item-to-breadcrumb.resolver.ts ***!
  \************************************************************************************/
/*! exports provided: MainNavSelectedItemToBreadcrumbResolver, mainNavSelectedItemToBreadcrumbFactory, mainNavSelectedItemToBreadcrumbProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavSelectedItemToBreadcrumbResolver", function() { return MainNavSelectedItemToBreadcrumbResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavSelectedItemToBreadcrumbFactory", function() { return mainNavSelectedItemToBreadcrumbFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainNavSelectedItemToBreadcrumbProviders", function() { return mainNavSelectedItemToBreadcrumbProviders; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/main-breadcrumb.state */ "./src/app/layouts/states/main-breadcrumb.state/index.ts");
/* harmony import */ var _states_main_nav_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/main-nav.state */ "./src/app/layouts/states/main-nav.state/index.ts");



var MainNavSelectedItemToBreadcrumbResolver = /** @class */ (function () {
    function MainNavSelectedItemToBreadcrumbResolver(mainBreadcrumbUIStore) {
        this.mainBreadcrumbUIStore = mainBreadcrumbUIStore;
        this.name = 'main-nav-selected-item-to-breadcrumb';
    }
    MainNavSelectedItemToBreadcrumbResolver.prototype.selectedItem = function (allowedResolvers, options, selectedItem) {
        console.log(this, options);
        if (selectedItem && selectedItem.parent) {
            var breadcrumb = [];
            breadcrumb.push({
                key: selectedItem.parent.key,
                caption: selectedItem.parent.caption,
            });
            breadcrumb.push({
                key: selectedItem.key,
                caption: selectedItem.caption,
            });
            this.mainBreadcrumbUIStore.update({ items: breadcrumb });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(selectedItem);
    };
    return MainNavSelectedItemToBreadcrumbResolver;
}());

function mainNavSelectedItemToBreadcrumbFactory(mainBreadcrumbUIStore) {
    return new MainNavSelectedItemToBreadcrumbResolver(mainBreadcrumbUIStore);
}
var mainNavSelectedItemToBreadcrumbProviders = [
    {
        provide: _states_main_nav_state__WEBPACK_IMPORTED_MODULE_2__["MAIN_NAV_RESOLVERS"],
        useFactory: mainNavSelectedItemToBreadcrumbFactory,
        deps: [_states_main_breadcrumb_state__WEBPACK_IMPORTED_MODULE_1__["MainBreadcrumbUIStore"]],
        multi: true
    }
];


/***/ }),

/***/ "./src/app/layouts/states/main-breadcrumb.state/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/states/main-breadcrumb.state/index.ts ***!
  \***************************************************************/
/*! exports provided: MainBreadcrumbDataService, MainBreadcrumbUIQuery, createInitialMainBreadcrumbState, MainBreadcrumbUIStore, MainBreadcrumbService, MAIN_BREADCRUMB_RESOLVERS, MainBreadcrumbResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_breadcrumb_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-breadcrumb-data.service */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbDataService", function() { return _main_breadcrumb_data_service__WEBPACK_IMPORTED_MODULE_0__["MainBreadcrumbDataService"]; });

/* harmony import */ var _main_breadcrumb_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-breadcrumb.query */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbUIQuery", function() { return _main_breadcrumb_query__WEBPACK_IMPORTED_MODULE_1__["MainBreadcrumbUIQuery"]; });

/* harmony import */ var _main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-breadcrumb.store */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInitialMainBreadcrumbState", function() { return _main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_2__["createInitialMainBreadcrumbState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbUIStore", function() { return _main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_2__["MainBreadcrumbUIStore"]; });

/* harmony import */ var _main_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-breadcrumb.service */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbService", function() { return _main_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["MainBreadcrumbService"]; });

/* harmony import */ var _main_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-breadcrumb.resolver */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAIN_BREADCRUMB_RESOLVERS", function() { return _main_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__["MAIN_BREADCRUMB_RESOLVERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbResolver", function() { return _main_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_4__["MainBreadcrumbResolver"]; });








/***/ }),

/***/ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb-data.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb-data.service.ts ***!
  \**************************************************************************************/
/*! exports provided: MainBreadcrumbDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbDataService", function() { return MainBreadcrumbDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainBreadcrumbDataService = /** @class */ (function () {
    function MainBreadcrumbDataService(http) {
        this.http = http;
    }
    MainBreadcrumbDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MainBreadcrumbDataService);
    return MainBreadcrumbDataService;
}());



/***/ }),

/***/ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.query.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.query.ts ***!
  \*******************************************************************************/
/*! exports provided: MainBreadcrumbUIQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbUIQuery", function() { return MainBreadcrumbUIQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-breadcrumb.store */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainBreadcrumbUIQuery = /** @class */ (function (_super) {
    __extends(MainBreadcrumbUIQuery, _super);
    function MainBreadcrumbUIQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    MainBreadcrumbUIQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_2__["MainBreadcrumbUIStore"]])
    ], MainBreadcrumbUIQuery);
    return MainBreadcrumbUIQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]));



/***/ }),

/***/ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.resolver.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.resolver.ts ***!
  \**********************************************************************************/
/*! exports provided: MAIN_BREADCRUMB_RESOLVERS, MainBreadcrumbResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_BREADCRUMB_RESOLVERS", function() { return MAIN_BREADCRUMB_RESOLVERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbResolver", function() { return MainBreadcrumbResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MAIN_BREADCRUMB_RESOLVERS = 'MainBreadcrumbResolver';
var MainBreadcrumbResolver = /** @class */ (function () {
    function MainBreadcrumbResolver(resolvers) {
        this.resolvers = resolvers;
    }
    MainBreadcrumbResolver.prototype.items = function (allowedResolvers, items) {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
        if (this.resolvers) {
            Object.keys(allowedResolvers).forEach(function (key) {
                return _this.resolvers.filter(function (resolver) { return resolver.items && resolver.name === key; }).forEach(function (resolver) {
                    return source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (val) {
                        return resolver.items(allowedResolvers, allowedResolvers[key], val);
                    }));
                });
            });
        }
        return source;
    };
    MainBreadcrumbResolver.prototype.selectedItem = function (allowedResolvers, item) {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(item);
        if (this.resolvers) {
            Object.keys(allowedResolvers).forEach(function (key) {
                return _this.resolvers.filter(function (resolver) { return resolver.selectedItem && resolver.name === key; }).forEach(function (resolver) {
                    return source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (val) {
                        return resolver.selectedItem(allowedResolvers, allowedResolvers[key], val);
                    }));
                });
            });
        }
        return source;
    };
    MainBreadcrumbResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(MAIN_BREADCRUMB_RESOLVERS)),
        __metadata("design:paramtypes", [Array])
    ], MainBreadcrumbResolver);
    return MainBreadcrumbResolver;
}());



/***/ }),

/***/ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.service.ts ***!
  \*********************************************************************************/
/*! exports provided: MainBreadcrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbService", function() { return MainBreadcrumbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _main_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-breadcrumb.resolver */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.resolver.ts");
/* harmony import */ var _main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-breadcrumb.store */ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainBreadcrumbService = /** @class */ (function () {
    function MainBreadcrumbService(uiStore, resolver) {
        this.uiStore = uiStore;
        this.resolver = resolver;
    }
    MainBreadcrumbService.prototype.update = function (resolvers, state) {
        this.updateItems(resolvers, state.items);
        this.updateSelectedItem(resolvers, state.selectedItem);
    };
    MainBreadcrumbService.prototype.updateItems = function (resolvers, items) {
        var _this = this;
        this.resolver.items(resolvers, items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            return _this.uiStore.update({ items: data, selectedItem: undefined });
        });
    };
    MainBreadcrumbService.prototype.updateSelectedItem = function (resolvers, selectedItem) {
        var _this = this;
        this.resolver.selectedItem(resolvers, selectedItem).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            return _this.uiStore.update({ selectedItem: data });
        });
    };
    MainBreadcrumbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_breadcrumb_store__WEBPACK_IMPORTED_MODULE_3__["MainBreadcrumbUIStore"],
            _main_breadcrumb_resolver__WEBPACK_IMPORTED_MODULE_2__["MainBreadcrumbResolver"]])
    ], MainBreadcrumbService);
    return MainBreadcrumbService;
}());



/***/ }),

/***/ "./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.store.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/states/main-breadcrumb.state/main-breadcrumb.store.ts ***!
  \*******************************************************************************/
/*! exports provided: createInitialMainBreadcrumbState, MainBreadcrumbUIStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialMainBreadcrumbState", function() { return createInitialMainBreadcrumbState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBreadcrumbUIStore", function() { return MainBreadcrumbUIStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function createInitialMainBreadcrumbState() {
    return {
        items: []
    };
}
var MainBreadcrumbUIStore = /** @class */ (function (_super) {
    __extends(MainBreadcrumbUIStore, _super);
    function MainBreadcrumbUIStore() {
        return _super.call(this, createInitialMainBreadcrumbState()) || this;
    }
    MainBreadcrumbUIStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({
            name: 'main-breadcrumb'
        }),
        __metadata("design:paramtypes", [])
    ], MainBreadcrumbUIStore);
    return MainBreadcrumbUIStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Store"]));



/***/ }),

/***/ "./src/app/layouts/states/main-nav.state/index.ts":
/*!********************************************************!*\
  !*** ./src/app/layouts/states/main-nav.state/index.ts ***!
  \********************************************************/
/*! exports provided: MainNavDataService, MainNavUIQuery, createInitialMainNavState, MainNavUIStore, MainNavService, MAIN_NAV_RESOLVERS, MainNavResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav-data.service */ "./src/app/layouts/states/main-nav.state/main-nav-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavDataService", function() { return _main_nav_data_service__WEBPACK_IMPORTED_MODULE_0__["MainNavDataService"]; });

/* harmony import */ var _main_nav_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav.query */ "./src/app/layouts/states/main-nav.state/main-nav.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavUIQuery", function() { return _main_nav_query__WEBPACK_IMPORTED_MODULE_1__["MainNavUIQuery"]; });

/* harmony import */ var _main_nav_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav.store */ "./src/app/layouts/states/main-nav.state/main-nav.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInitialMainNavState", function() { return _main_nav_store__WEBPACK_IMPORTED_MODULE_2__["createInitialMainNavState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavUIStore", function() { return _main_nav_store__WEBPACK_IMPORTED_MODULE_2__["MainNavUIStore"]; });

/* harmony import */ var _main_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-nav.service */ "./src/app/layouts/states/main-nav.state/main-nav.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavService", function() { return _main_nav_service__WEBPACK_IMPORTED_MODULE_3__["MainNavService"]; });

/* harmony import */ var _main_nav_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav.resolver */ "./src/app/layouts/states/main-nav.state/main-nav.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAIN_NAV_RESOLVERS", function() { return _main_nav_resolver__WEBPACK_IMPORTED_MODULE_4__["MAIN_NAV_RESOLVERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavResolver", function() { return _main_nav_resolver__WEBPACK_IMPORTED_MODULE_4__["MainNavResolver"]; });








/***/ }),

/***/ "./src/app/layouts/states/main-nav.state/main-nav-data.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/states/main-nav.state/main-nav-data.service.ts ***!
  \************************************************************************/
/*! exports provided: MainNavDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavDataService", function() { return MainNavDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainNavDataService = /** @class */ (function () {
    function MainNavDataService(http) {
        this.http = http;
    }
    MainNavDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MainNavDataService);
    return MainNavDataService;
}());



/***/ }),

/***/ "./src/app/layouts/states/main-nav.state/main-nav.query.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/states/main-nav.state/main-nav.query.ts ***!
  \*****************************************************************/
/*! exports provided: MainNavUIQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavUIQuery", function() { return MainNavUIQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _main_nav_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav.store */ "./src/app/layouts/states/main-nav.state/main-nav.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavUIQuery = /** @class */ (function (_super) {
    __extends(MainNavUIQuery, _super);
    function MainNavUIQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    MainNavUIQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_nav_store__WEBPACK_IMPORTED_MODULE_2__["MainNavUIStore"]])
    ], MainNavUIQuery);
    return MainNavUIQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]));



/***/ }),

/***/ "./src/app/layouts/states/main-nav.state/main-nav.resolver.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/states/main-nav.state/main-nav.resolver.ts ***!
  \********************************************************************/
/*! exports provided: MAIN_NAV_RESOLVERS, MainNavResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_NAV_RESOLVERS", function() { return MAIN_NAV_RESOLVERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavResolver", function() { return MainNavResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MAIN_NAV_RESOLVERS = 'MainNavResolver';
var MainNavResolver = /** @class */ (function () {
    function MainNavResolver(resolvers) {
        this.resolvers = resolvers;
    }
    MainNavResolver.prototype.items = function (allowedResolvers, items) {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
        if (this.resolvers) {
            Object.keys(allowedResolvers).forEach(function (key) {
                return _this.resolvers.filter(function (resolver) { return resolver.items && resolver.name === key; }).forEach(function (resolver) {
                    return source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (val) {
                        return resolver.items(allowedResolvers, allowedResolvers[key], val);
                    }));
                });
            });
        }
        return source;
    };
    MainNavResolver.prototype.selectedItem = function (allowedResolvers, item) {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(item);
        if (this.resolvers) {
            Object.keys(allowedResolvers).forEach(function (key) {
                return _this.resolvers.filter(function (resolver) { return resolver.selectedItem && resolver.name === key; }).forEach(function (resolver) {
                    return source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (val) {
                        return resolver.selectedItem(allowedResolvers, allowedResolvers[key], val);
                    }));
                });
            });
        }
        return source;
    };
    MainNavResolver.prototype.isCollapsed = function (allowedResolvers, value) {
        var _this = this;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(value);
        if (this.resolvers) {
            Object.keys(allowedResolvers).forEach(function (key) {
                return _this.resolvers.filter(function (resolver) { return resolver.isCollapsed && resolver.name === key; }).forEach(function (resolver) {
                    return source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (val) {
                        return resolver.isCollapsed(allowedResolvers, allowedResolvers[key], val);
                    }));
                });
            });
        }
        return source;
    };
    MainNavResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(MAIN_NAV_RESOLVERS)),
        __metadata("design:paramtypes", [Array])
    ], MainNavResolver);
    return MainNavResolver;
}());



/***/ }),

/***/ "./src/app/layouts/states/main-nav.state/main-nav.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/states/main-nav.state/main-nav.service.ts ***!
  \*******************************************************************/
/*! exports provided: MainNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavService", function() { return MainNavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _main_nav_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav.resolver */ "./src/app/layouts/states/main-nav.state/main-nav.resolver.ts");
/* harmony import */ var _main_nav_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-nav.store */ "./src/app/layouts/states/main-nav.state/main-nav.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainNavService = /** @class */ (function () {
    function MainNavService(uiStore, resolver) {
        this.uiStore = uiStore;
        this.resolver = resolver;
    }
    MainNavService.prototype.update = function (resolvers, state) {
        this.updateItems(resolvers, state.items);
        this.updateSelectedItem(resolvers, state.selectedItem);
        this.updateIsCollapsed(resolvers, state.isCollapsed);
    };
    MainNavService.prototype.updateItems = function (resolvers, items) {
        var _this = this;
        this.resolver.items(resolvers, items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            return _this.uiStore.update({ items: data, selectedItem: undefined });
        });
    };
    MainNavService.prototype.updateSelectedItem = function (resolvers, selectedItem) {
        var _this = this;
        this.resolver.selectedItem(resolvers, selectedItem).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            return _this.uiStore.update({ selectedItem: data });
        });
    };
    MainNavService.prototype.updateIsCollapsed = function (resolvers, value) {
        var _this = this;
        this.resolver.isCollapsed(resolvers, value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            return _this.uiStore.update({ isCollapsed: data });
        });
    };
    MainNavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_main_nav_store__WEBPACK_IMPORTED_MODULE_3__["MainNavUIStore"],
            _main_nav_resolver__WEBPACK_IMPORTED_MODULE_2__["MainNavResolver"]])
    ], MainNavService);
    return MainNavService;
}());



/***/ }),

/***/ "./src/app/layouts/states/main-nav.state/main-nav.store.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/states/main-nav.state/main-nav.store.ts ***!
  \*****************************************************************/
/*! exports provided: createInitialMainNavState, MainNavUIStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialMainNavState", function() { return createInitialMainNavState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavUIStore", function() { return MainNavUIStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function createInitialMainNavState() {
    return {
        theme: 'dark',
        isCollapsed: false,
        items: []
    };
}
var MainNavUIStore = /** @class */ (function (_super) {
    __extends(MainNavUIStore, _super);
    function MainNavUIStore() {
        return _super.call(this, createInitialMainNavState()) || this;
    }
    MainNavUIStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({
            name: 'main-nav'
        }),
        __metadata("design:paramtypes", [])
    ], MainNavUIStore);
    return MainNavUIStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Store"]));



/***/ }),

/***/ "./src/app/pages/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/components/index.ts ***!
  \*******************************************/
/*! exports provided: pageComponents, ListPageComponent, NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageComponents", function() { return pageComponents; });
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-page/list-page.component */ "./src/app/pages/components/list-page/list-page.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/pages/components/not-found-page/not-found-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_0__["ListPageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"]; });





var pageComponents = [
    _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_0__["ListPageComponent"],
    _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"]
];


/***/ }),

/***/ "./src/app/pages/components/list-page/list-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/list-page/list-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"componentsOptions$|async as componentsOptions\">\n    <ng-container *ngFor=\"let componentOptions of componentsOptions; let i = index\">\n        <dynamic-panel\n            [options]=\"componentOptions\"\n            [parent]=\"this\"\n            [index]=\"i\"></dynamic-panel>\n    </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/pages/components/list-page/list-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/list-page/list-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _panels_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../panels/components */ "./src/app/panels/components/index.ts");
/* harmony import */ var _panels_dynamic_panel_dynamic_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../panels/dynamic-panel/dynamic-panel.component */ "./src/app/panels/dynamic-panel/dynamic-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPageComponent = /** @class */ (function () {
    function ListPageComponent() {
    }
    ListPageComponent.getType = function () {
        return 'list-page';
    };
    ListPageComponent.prototype.ngOnInit = function () {
        console.log(this, this.options);
        var componentsOptions = [];
        if (this.options && this.options.states.panels) {
            this.options.states.panels.forEach(function (panel) {
                return _panels_components__WEBPACK_IMPORTED_MODULE_2__["panelComponents"].forEach(function (panelComponent) {
                    if (panel.type === panelComponent.getType()) {
                        componentsOptions.push(panel);
                    }
                });
            });
        }
        if (componentsOptions.length) {
            this.componentsOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                observer.next(componentsOptions);
                observer.complete();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_panels_dynamic_panel_dynamic_panel_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPanelComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ListPageComponent.prototype, "panels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListPageComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"])
    ], ListPageComponent.prototype, "activatedRouteSnapshot$", void 0);
    ListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "./src/app/pages/components/list-page/list-page.component.html")
        })
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/not-found-page/not-found-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/not-found-page/not-found-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/components/not-found-page/not-found-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/not-found-page/not-found-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.getType = function () {
        return 'not-found-page';
    };
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotFoundPageComponent.prototype, "options", void 0);
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/pages/components/not-found-page/not-found-page.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/dynamic-page/dynamic-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/dynamic-page/dynamic-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"component$|async as component\">\n    <ng-container *ngxComponentOutlet=\"component\"></ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/pages/dynamic-page/dynamic-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dynamic-page/dynamic-page.component.ts ***!
  \**************************************************************/
/*! exports provided: DynamicPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPageComponent", function() { return DynamicPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/app/pages/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicPageComponent = /** @class */ (function () {
    function DynamicPageComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.activatedRouteSnapshot$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        activatedRoute.queryParams.subscribe(function () {
            _this.activatedRouteSnapshot$.next(_this.activatedRoute.snapshot);
            _this.ngOnInit();
        });
        activatedRoute.params.subscribe(function () {
            _this.activatedRouteSnapshot$.next(_this.activatedRoute.snapshot);
            _this.ngOnInit();
        });
        activatedRoute.data.subscribe(function (data) {
            _this.options = data;
            _this.activatedRouteSnapshot$.next(_this.activatedRoute.snapshot);
            _this.ngOnInit();
        });
    }
    DynamicPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var component = _components__WEBPACK_IMPORTED_MODULE_3__["pageComponents"].filter(function (pageComponent) {
            return _this.options && pageComponent.getType() === _this.options.type;
        })[0];
        if (component) {
            this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                observer.next(component);
                observer.complete();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicPageComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicPageComponent.prototype, "activatedRouteSnapshot$", void 0);
    DynamicPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-page',
            template: __webpack_require__(/*! ./dynamic-page.component.html */ "./src/app/pages/dynamic-page/dynamic-page.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DynamicPageComponent);
    return DynamicPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxd_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxd/core */ "./node_modules/@ngxd/core/esm5/ngxd-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _panels_panels_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panels/panels.module */ "./src/app/panels/panels.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/pages/components/index.ts");
/* harmony import */ var _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-page/dynamic-page.component */ "./src/app/pages/dynamic-page/dynamic-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '**',
                        component: _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_7__["DynamicPageComponent"]
                    }
                ]),
                _ngxd_core__WEBPACK_IMPORTED_MODULE_3__["NgxdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _panels_panels_module__WEBPACK_IMPORTED_MODULE_5__["PanelsModule"]
            ],
            declarations: _components__WEBPACK_IMPORTED_MODULE_6__["pageComponents"].concat([
                _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_7__["DynamicPageComponent"]
            ]),
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"]
            ].concat(_components__WEBPACK_IMPORTED_MODULE_6__["pageComponents"], [
                _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_7__["DynamicPageComponent"]
            ]),
            entryComponents: _components__WEBPACK_IMPORTED_MODULE_6__["pageComponents"].concat([
                _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_7__["DynamicPageComponent"]
            ])
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.service.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.service.ts ***!
  \****************************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/pages/components/index.ts");
/* harmony import */ var _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-page/dynamic-page.component */ "./src/app/pages/dynamic-page/dynamic-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesService = /** @class */ (function () {
    function PagesService(router) {
        this.router = router;
    }
    PagesService.prototype.update = function (options) {
        var routes = [];
        options.forEach(function (pageOptions) {
            return pageOptions.states.routes.forEach(function (pageRoute) {
                return routes.push({ path: pageRoute, component: _dynamic_page_dynamic_page_component__WEBPACK_IMPORTED_MODULE_3__["DynamicPageComponent"], data: pageOptions });
            });
        });
        routes.push({ path: '**', component: _components__WEBPACK_IMPORTED_MODULE_2__["NotFoundPageComponent"] });
        this.router.resetConfig(routes);
    };
    PagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PagesService);
    return PagesService;
}());



/***/ }),

/***/ "./src/app/panels/components/form-panel/form-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/panels/components/form-panel/form-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n    *ngIf=\"options\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onSubmit(this)\">\n    <formly-form\n        [form]=\"form\"\n        [fields]=\"fields\"\n        [options]=\"formOptions\"\n        [model]=\"model\">\n        <button\n            *ngFor=\"let button of buttons; let i = index\"\n            [type]=\"button.type\"\n            [ngClass]=\"button.class\"\n            (click)=\"button.type!=='submit' ? button.onClick(this, buttonRef) : null\"\n            #buttonRef>\n            {{button.caption}}\n        </button>\n    </formly-form>\n</form>\n"

/***/ }),

/***/ "./src/app/panels/components/form-panel/form-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/panels/components/form-panel/form-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPanelComponent", function() { return FormPanelComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormPanelComponent = /** @class */ (function () {
    function FormPanelComponent(httpClient) {
        this.httpClient = httpClient;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.model = {};
        this.fields = [];
        this.buttons = [];
    }
    FormPanelComponent.getType = function () {
        return 'form-panel';
    };
    FormPanelComponent.prototype.ngOnInit = function () {
        var states = this.options.states;
        this.model = states.model;
        this.fields = states.fields;
        this.formOptions = states.formOptions;
        this.buttons = states.buttons;
        this.submit = states.submit;
        if (this.options.resolvers.init) {
            this.options.resolvers.init(this);
        }
        console.log(states);
    };
    FormPanelComponent.prototype.onSubmit = function (panel, button) {
        if (this.submit) {
            this.submit.onClick(panel, button);
        }
        else {
            if (this.buttons && this.buttons[0]) {
                this.buttons[0].onClick(panel, button);
            }
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], FormPanelComponent.prototype, "parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], FormPanelComponent.prototype, "options", void 0);
    FormPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'form-panel',
            template: __webpack_require__(/*! ./form-panel.component.html */ "./src/app/panels/components/form-panel/form-panel.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], FormPanelComponent);
    return FormPanelComponent;
}());



/***/ }),

/***/ "./src/app/panels/components/grid-panel/grid-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/panels/components/grid-panel/grid-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular\n    style=\"width: 500px; height: 500px;\"\n    [ngClass]=\"theme\"\n    [gridOptions]=\"gridOptions\"\n    #gridRef></ag-grid-angular>\n"

/***/ }),

/***/ "./src/app/panels/components/grid-panel/grid-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/panels/components/grid-panel/grid-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: GridPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPanelComponent", function() { return GridPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridPanelComponent = /** @class */ (function () {
    function GridPanelComponent(httpClient) {
        this.httpClient = httpClient;
    }
    GridPanelComponent.getType = function () {
        return 'grid-panel';
    };
    GridPanelComponent.prototype.ngOnInit = function () {
        var states = this.options.states;
        this.style = states.style;
        this.theme = states.theme;
        this.gridOptions = states.gridOptions;
        if (this.options.resolvers.init) {
            this.options.resolvers.init(this);
        }
        console.log(this.gridRef, states);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gridRef'),
        __metadata("design:type", ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridNg2"])
    ], GridPanelComponent.prototype, "gridRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridPanelComponent.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GridPanelComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridPanelComponent.prototype, "parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridPanelComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridPanelComponent.prototype, "gridOptions", void 0);
    GridPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-panel',
            template: __webpack_require__(/*! ./grid-panel.component.html */ "./src/app/panels/components/grid-panel/grid-panel.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GridPanelComponent);
    return GridPanelComponent;
}());



/***/ }),

/***/ "./src/app/panels/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/panels/components/index.ts ***!
  \********************************************/
/*! exports provided: panelComponents, FormPanelComponent, GridPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelComponents", function() { return panelComponents; });
/* harmony import */ var _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-panel/form-panel.component */ "./src/app/panels/components/form-panel/form-panel.component.ts");
/* harmony import */ var _grid_panel_grid_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-panel/grid-panel.component */ "./src/app/panels/components/grid-panel/grid-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPanelComponent", function() { return _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_0__["FormPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridPanelComponent", function() { return _grid_panel_grid_panel_component__WEBPACK_IMPORTED_MODULE_1__["GridPanelComponent"]; });





var panelComponents = [
    _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_0__["FormPanelComponent"],
    _grid_panel_grid_panel_component__WEBPACK_IMPORTED_MODULE_1__["GridPanelComponent"]
];


/***/ }),

/***/ "./src/app/panels/dynamic-panel/dynamic-panel.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/panels/dynamic-panel/dynamic-panel.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"component$|async as component\">\n    <ng-container *ngxComponentOutlet=\"component\">\n        <ng-container *ngTemplateOutlet=\"contentRef\"></ng-container>\n    </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/panels/dynamic-panel/dynamic-panel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/panels/dynamic-panel/dynamic-panel.component.ts ***!
  \*****************************************************************/
/*! exports provided: DynamicPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPanelComponent", function() { return DynamicPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/app/panels/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicPanelComponent = /** @class */ (function () {
    function DynamicPanelComponent() {
    }
    DynamicPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var component = _components__WEBPACK_IMPORTED_MODULE_2__["panelComponents"].filter(function (panelComponent) {
            return _this.options && panelComponent.getType() === _this.options.type;
        })[0];
        if (component) {
            this.component$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                observer.next(component);
                observer.complete();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DynamicPanelComponent.prototype, "contentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicPanelComponent.prototype, "parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicPanelComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DynamicPanelComponent.prototype, "index", void 0);
    DynamicPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-panel',
            template: __webpack_require__(/*! ./dynamic-panel.component.html */ "./src/app/panels/dynamic-panel/dynamic-panel.component.html")
        })
    ], DynamicPanelComponent);
    return DynamicPanelComponent;
}());



/***/ }),

/***/ "./src/app/panels/panels.module.ts":
/*!*****************************************!*\
  !*** ./src/app/panels/panels.module.ts ***!
  \*****************************************/
/*! exports provided: PanelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsModule", function() { return PanelsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngxd_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxd/core */ "./node_modules/@ngxd/core/esm5/ngxd-core.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/app/panels/components/index.ts");
/* harmony import */ var _dynamic_panel_dynamic_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-panel/dynamic-panel.component */ "./src/app/panels/dynamic-panel/dynamic-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PanelsModule = /** @class */ (function () {
    function PanelsModule() {
    }
    PanelsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ngxd_core__WEBPACK_IMPORTED_MODULE_5__["NgxdModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["FormlyModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormlyBootstrapModule"]
            ],
            declarations: _components__WEBPACK_IMPORTED_MODULE_8__["panelComponents"].concat([
                _dynamic_panel_dynamic_panel_component__WEBPACK_IMPORTED_MODULE_9__["DynamicPanelComponent"]
            ]),
            exports: [
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"]
            ].concat(_components__WEBPACK_IMPORTED_MODULE_8__["panelComponents"], [
                _dynamic_panel_dynamic_panel_component__WEBPACK_IMPORTED_MODULE_9__["DynamicPanelComponent"]
            ]),
            entryComponents: _components__WEBPACK_IMPORTED_MODULE_8__["panelComponents"].concat([
                _dynamic_panel_dynamic_panel_component__WEBPACK_IMPORTED_MODULE_9__["DynamicPanelComponent"]
            ])
        })
    ], PanelsModule);
    return PanelsModule;
}());



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    app: {
        layout: {
            type: 'sidenav-layout',
            resolvers: {
                'main-nav-create-router-link': { a: 1 },
                'main-breadcrumb-create-router-link': { a: 2 },
                'main-nav-selected-item-to-breadcrumb': { a: 3 }
            },
            states: {
                'main-breadcrumb': {
                    items: []
                },
                'main-nav': {
                    items: [
                        {
                            key: '',
                            icon: 'anticon anticon-table',
                            caption: 'Entities',
                            children: [
                                {
                                    key: 'groups',
                                    caption: 'Groups'
                                },
                                {
                                    key: 'users',
                                    caption: 'Users'
                                }
                            ]
                        }, {
                            key: 'auth',
                            icon: 'anticon anticon-user',
                            caption: 'Auth',
                            children: [
                                {
                                    key: 'login',
                                    caption: 'Login'
                                },
                                {
                                    key: 'logout',
                                    caption: 'Logout'
                                }
                            ]
                        }
                    ]
                }
            }
        },
        pages: [
            {
                type: 'list-page',
                resolvers: {
                    'resolver': 'resolver-options'
                },
                states: {
                    'routes': [
                        'auth',
                        'auth/:name'
                    ],
                    'panels': [
                        {
                            type: 'form-panel',
                            resolvers: {
                                'init': function (panel) {
                                    var parent = panel.parent;
                                    parent.activatedRouteSnapshot$.subscribe(function (activatedRouteSnapshot) {
                                        var name = activatedRouteSnapshot.params['name'];
                                        if (name === 'logout') {
                                            panel.model = {};
                                            panel.fields = [];
                                            panel.buttons[0].caption = 'Logout';
                                        }
                                        else {
                                            panel.model = { username: '', password: '' };
                                            panel.fields = panel.options.states.fields;
                                            panel.buttons[0].caption = 'Login';
                                        }
                                        console.log(panel, activatedRouteSnapshot);
                                    });
                                }
                            },
                            states: {
                                model: { username: '' },
                                fields: [{
                                        key: 'username',
                                        type: 'input',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Username',
                                            placeholder: 'Enter username',
                                            required: true,
                                        }
                                    }, {
                                        key: 'password',
                                        type: 'input',
                                        templateOptions: {
                                            type: 'password',
                                            label: 'Password',
                                            placeholder: 'Enter password',
                                            required: true,
                                        }
                                    }],
                                buttons: [
                                    {
                                        caption: 'Submit',
                                        type: 'submit',
                                        onClick: function (panel, button) {
                                            if (panel.buttons[0].caption === 'Logout') {
                                                alert('Bye-Bye!');
                                            }
                                            else {
                                                if (panel.form.valid) {
                                                    alert(JSON.stringify(panel.model));
                                                }
                                                else {
                                                    alert('Data in form is not valid!');
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                type: 'list-page',
                resolvers: {
                    'resolver': 'resolver-options'
                },
                states: {
                    'routes': [
                        'groups',
                        'groups/:name'
                    ],
                    'panels': [
                        {
                            type: 'form-panel',
                            resolvers: {
                                'init': function (panel) {
                                    var parent = panel.parent;
                                    parent.activatedRouteSnapshot$.subscribe(function (activatedRouteSnapshot) {
                                        var name = activatedRouteSnapshot.params['name'];
                                        panel.model = { name: name };
                                        if (name) {
                                            panel.buttons[0].caption = 'Save';
                                        }
                                        else {
                                            panel.buttons[0].caption = 'Create';
                                        }
                                        console.log(panel);
                                    });
                                }
                            },
                            states: {
                                model: { name: '' },
                                fields: [{
                                        key: 'name',
                                        type: 'input',
                                        templateOptions: {
                                            type: 'text',
                                            label: 'Name',
                                            placeholder: 'Enter name',
                                            required: true,
                                        }
                                    }],
                                buttons: [
                                    {
                                        caption: 'Save',
                                        type: 'submit',
                                        onClick: function (panel, button) {
                                            var parent = panel.parent;
                                            var grid = parent.options.resolvers.grid;
                                            console.log(panel);
                                            if (panel.form.valid) {
                                                if (panel.buttons[0].caption === 'Create') {
                                                    grid.api.addItems([
                                                        panel.model
                                                    ]);
                                                    panel.model = {};
                                                }
                                            }
                                            else {
                                                alert('Data in form is not valid!');
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            type: 'grid-panel',
                            resolvers: {
                                'init': function (panel) {
                                    var parent = panel.parent;
                                    parent.options.resolvers.grid = panel.gridRef;
                                    parent.activatedRouteSnapshot$.subscribe(function (activatedRouteSnapshot) {
                                        console.log(panel, activatedRouteSnapshot.params);
                                    });
                                    panel.httpClient.get('http://598726293223df0011bbead7.mockapi.io/api/groups').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) { return data['groups']; })).subscribe(function (data) {
                                        panel.gridRef.api.setRowData(data);
                                        console.log(panel);
                                    });
                                }
                            },
                            states: {
                                theme: 'ag-theme-balham',
                                style: 'width: 500px; height: 500px;',
                                gridOptions: {
                                    columnDefs: [
                                        { headerName: 'Name', field: 'name' }
                                    ],
                                    rowData: []
                                }
                            }
                        }
                    ]
                }
            }, {
                type: 'list-page',
                resolvers: {
                    'resolver': 'resolver-options'
                },
                states: {
                    'routes': [
                        'users',
                        'users/:username'
                    ],
                    'panels': [
                        {
                            type: 'grid-panel',
                            resolvers: {
                                'init': function (panel) {
                                    var parent = panel.parent;
                                    parent.activatedRouteSnapshot$.subscribe(function (activatedRouteSnapshot) {
                                        console.log(panel, activatedRouteSnapshot.params);
                                    });
                                    panel.httpClient.get('http://598726293223df0011bbead7.mockapi.io/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) { return data['users']; })).subscribe(function (data) {
                                        panel.gridRef.api.setRowData(data);
                                        console.log(panel);
                                    });
                                }
                            },
                            states: {
                                theme: 'ag-theme-balham',
                                style: 'width: 500px; height: 500px;',
                                gridOptions: {
                                    columnDefs: [
                                        { headerName: 'Username', field: 'username' },
                                        { headerName: 'Email', field: 'email' }
                                    ],
                                    rowData: []
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\open-sources\angular-dynamic-seed\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map