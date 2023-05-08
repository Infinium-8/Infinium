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

/***/ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputDisableSelectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDisableSelectionDirective", function() { return InputDisableSelectionDirective; });
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

var InputDisableSelectionDirective = /** @class */ (function () {
    function InputDisableSelectionDirective() {
    }
    InputDisableSelectionDirective.prototype.handleInput = function (event) {
        if (event.target.readOnly) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputDisableSelectionDirective.prototype, "handleInput", null);
    InputDisableSelectionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input'
        }),
        __metadata("design:paramtypes", [])
    ], InputDisableSelectionDirective);
    return InputDisableSelectionDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/input-validate/input-validate.directive.ts ***!
  \********************************************************************************/
/*! exports provided: InputValidateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidateDirective", function() { return InputValidateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputValidateDirective = /** @class */ (function () {
    function InputValidateDirective(el, variablesService) {
        this.el = el;
        this.variablesService = variablesService;
    }
    Object.defineProperty(InputValidateDirective.prototype, "defineInputType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    InputValidateDirective.prototype.handleInput = function (event) {
        if (this.type === 'money') {
            this.moneyValidation(event);
        }
        else if (this.type === 'integer') {
            this.integerValidation(event);
        }
    };
    InputValidateDirective.prototype.moneyValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d\.]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(',', '.').replace(OnlyD, '');
        }
        var _double_separator = currentValue.match(/\./g);
        if (_double_separator && _double_separator.length > 1) {
            currentValue = currentValue.substr(0, currentValue.lastIndexOf('.'));
        }
        if (currentValue.indexOf('.') === 0) {
            currentValue = '0' + currentValue;
        }
        var _zero_fill = currentValue.split('.');
        if (_zero_fill[0].length > 7) {
            _zero_fill[0] = _zero_fill[0].substr(0, 7);
        }
        if (1 in _zero_fill && _zero_fill[1].length) {
            _zero_fill[1] = _zero_fill[1].substr(0, this.variablesService.digits);
        }
        currentValue = _zero_fill.join('.');
        if (currentValue !== originalValue) {
            event.target.value = currentValue;
            var cursorPosition = event.target.selectionEnd;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
            event.target.dispatchEvent(new Event('input'));
        }
    };
    InputValidateDirective.prototype.integerValidation = function (event) {
        var currentValue = event.target.value;
        var originalValue = currentValue;
        var OnlyD = /[^\d]/g;
        var _has_error = currentValue.match(OnlyD);
        if (_has_error && _has_error.length) {
            currentValue = currentValue.replace(OnlyD, '');
        }
        if (currentValue !== originalValue) {
            var cursorPosition = event.target.selectionEnd;
            event.target.value = currentValue;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appInputValidate'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputValidateDirective.prototype, "defineInputType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], InputValidateDirective.prototype, "handleInput", null);
    InputValidateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInputValidate]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], InputValidateDirective);
    return InputValidateDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar-container\">\r\n  <div class=\"progress-bar\">\r\n    <div class=\"progress-bar-full\" [style.width]=\"width\"></div>\r\n  </div>\r\n  <div class=\"progress-labels\">\r\n    <span *ngFor=\"let label of labels\">\r\n      {{ label | translate }}\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n  .progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n  .progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n  .progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2rem;\n    height: 100%; }\n  .progress-bar-container .progress-labels span {\n      flex: 1 0 0;\n      text-align: center; }\n  .progress-bar-container .progress-labels span:first-child {\n        text-align: left; }\n  .progress-bar-container .progress-labels span:last-child {\n        text-align: right; }\n  .progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9wcm9ncmVzcy1jb250YWluZXIvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcZGlyZWN0aXZlc1xccHJvZ3Jlc3MtY29udGFpbmVyXFxwcm9ncmVzcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTtFQU5kO0lBU0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixjQUFjLEVBQUE7RUFkbEI7TUFpQk0sY0FBYyxFQUFBO0VBakJwQjtJQXNCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBMUJoQjtNQTZCTSxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUE5QnhCO1FBaUNRLGdCQUFnQixFQUFBO0VBakN4QjtRQXFDUSxpQkFBaUIsRUFBQTtFQXJDekI7SUEyQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9wcm9ncmVzcy1jb250YWluZXIvcHJvZ3Jlc3MtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG5cclxuICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTAuN3JlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDAgM3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cmVtKTtcclxuICAgIGhlaWdodDogMC43cmVtO1xyXG5cclxuICAgIC5wcm9ncmVzcy1iYXItZnVsbCB7XHJcbiAgICAgIGhlaWdodDogMC43cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLWxhYmVscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmbGV4OiAxIDAgMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLXRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3JlbTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/directives/progress-container/progress-container.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_helpers/directives/progress-container/progress-container.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProgressContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressContainerComponent", function() { return ProgressContainerComponent; });
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

var ProgressContainerComponent = /** @class */ (function () {
    function ProgressContainerComponent() {
    }
    ProgressContainerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProgressContainerComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProgressContainerComponent.prototype, "labels", void 0);
    ProgressContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-container',
            template: __webpack_require__(/*! ./progress-container.component.html */ "./src/app/_helpers/directives/progress-container/progress-container.component.html"),
            styles: [__webpack_require__(/*! ./progress-container.component.scss */ "./src/app/_helpers/directives/progress-container/progress-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressContainerComponent);
    return ProgressContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"switch\" (click)=\"toggleStaking(); $event.stopPropagation()\" [class.on]=\"staking\" [class.off]=\"!staking\">\r\n  <span class=\"circle\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  display: flex;\n  align-items: center;\n  border-radius: 1.1rem;\n  cursor: pointer;\n  padding: 0.2rem;\n  width: 3.6rem;\n  height: 2.2rem; }\n  .switch.on {\n    justify-content: flex-end; }\n  .switch.off {\n    justify-content: flex-start; }\n  .switch .circle {\n    border-radius: 50%;\n    width: 1.8rem;\n    height: 1.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9zdGFraW5nLXN3aXRjaC9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxkaXJlY3RpdmVzXFxzdGFraW5nLXN3aXRjaFxcc3Rha2luZy1zd2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFQaEI7SUFVSSx5QkFBeUIsRUFBQTtFQVY3QjtJQWFJLDJCQUEyQixFQUFBO0VBYi9CO0lBZ0JJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy9zdGFraW5nLXN3aXRjaC9zdGFraW5nLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxLjFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICB3aWR0aDogMy42cmVtO1xyXG4gIGhlaWdodDogMi4ycmVtO1xyXG5cclxuICAmLm9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gICYub2ZmIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/directives/staking-switch/staking-switch.component.ts ***!
  \********************************************************************************/
/*! exports provided: StakingSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingSwitchComponent", function() { return StakingSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StakingSwitchComponent = /** @class */ (function () {
    function StakingSwitchComponent(backend, variablesService) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.stakingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StakingSwitchComponent.prototype.ngOnInit = function () { };
    StakingSwitchComponent.prototype.toggleStaking = function () {
        var wallet = this.variablesService.getWallet(this.wallet_id);
        if (wallet && wallet.loaded) {
            this.stakingChange.emit(!this.staking);
            if (!this.staking) {
                this.backend.startPosMining(this.wallet_id);
            }
            else {
                this.backend.stopPosMining(this.wallet_id);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "wallet_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StakingSwitchComponent.prototype, "staking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StakingSwitchComponent.prototype, "stakingChange", void 0);
    StakingSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking-switch',
            template: __webpack_require__(/*! ./staking-switch.component.html */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.html"),
            styles: [__webpack_require__(/*! ./staking-switch.component.scss */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"], _services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], StakingSwitchComponent);
    return StakingSwitchComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/tooltip.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/_helpers/directives/tooltip.directive.ts ***!
  \**********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer, route) {
        this.el = el;
        this.renderer = renderer;
        this.route = route;
        this.timeout = 0;
        this.timeDelay = 0;
        this.delay = 0;
        this.showWhenNoOverflow = true;
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        var _this = this;
        if (this.showWhenNoOverflow || (!this.showWhenNoOverflow && this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth)) {
            this.cursor = 'pointer';
            if (!this.tooltip) {
                if (this.timeDelay !== 0) {
                    this.removeTooltipTimeDelay = setTimeout(function () {
                        _this.show();
                    }, this.timeDelay);
                }
                else {
                    this.show();
                }
            }
            else {
                this.cancelHide();
            }
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        clearTimeout(this.removeTooltipTimeDelay);
        if (this.tooltip) {
            this.hide();
        }
    };
    TooltipDirective.prototype.show = function () {
        this.create();
        this.placement = this.placement === null ? 'top' : this.placement;
        this.setPosition(this.placement);
    };
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        this.removeTooltipTimeout = setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '0');
            _this.removeTooltipTimeoutInner = setTimeout(function () {
                _this.renderer.removeChild(document.body, _this.tooltip);
                _this.tooltip.removeEventListener('mouseenter', _this.enter);
                _this.tooltip.removeEventListener('mouseleave', _this.leave);
                _this.tooltip = null;
                _this.onHide.emit(true);
            }, _this.delay);
        }, this.timeout);
    };
    TooltipDirective.prototype.cancelHide = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        this.renderer.setStyle(this.tooltip, 'opacity', '1');
    };
    TooltipDirective.prototype.create = function () {
        var _this = this;
        this.tooltip = this.renderer.createElement('div');
        var innerBlock = this.renderer.createElement('div');
        if (typeof this.tooltipInner === 'string') {
            innerBlock.innerHTML = this.tooltipInner;
        }
        else {
            innerBlock = this.tooltipInner;
        }
        this.renderer.addClass(innerBlock, 'tooltip-inner');
        this.renderer.addClass(innerBlock, 'scrolled-content');
        this.renderer.appendChild(this.tooltip, innerBlock);
        this.renderer.appendChild(document.body, this.tooltip);
        this.enter = function () {
            _this.cancelHide();
        };
        this.tooltip.addEventListener('mouseenter', this.enter);
        this.leave = function () {
            if (_this.tooltip) {
                _this.hide();
            }
        };
        this.tooltip.addEventListener('mouseleave', this.leave);
        this.renderer.setStyle(document.body, 'position', 'relative');
        this.renderer.setStyle(this.tooltip, 'position', 'absolute');
        if (this.tooltipClass !== null) {
            var classes = this.tooltipClass.split(' ');
            for (var i = 0; i < classes.length; i++) {
                this.renderer.addClass(this.tooltip, classes[i]);
            }
        }
        this.renderer.setStyle(this.tooltip, 'opacity', '0');
        this.renderer.setStyle(this.tooltip, '-webkit-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-moz-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-o-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, 'transition', "opacity " + this.delay + "ms");
        window.setTimeout(function () {
            _this.renderer.setStyle(_this.tooltip, 'opacity', '1');
        }, 0);
    };
    TooltipDirective.prototype.setPosition = function (placement) {
        var hostPos = this.el.nativeElement.getBoundingClientRect();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-' + placement);
        var topExit = hostPos.top - this.tooltip.getBoundingClientRect().height - parseInt(getComputedStyle(this.tooltip).marginTop, 10) < 0;
        var bottomExit = window.innerHeight < hostPos.bottom + this.tooltip.getBoundingClientRect().height + parseInt(getComputedStyle(this.tooltip).marginTop, 10);
        switch (placement) {
            case 'top':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-left':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'top-right':
                if (topExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('bottom-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.top - this.tooltip.getBoundingClientRect().height + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + (hostPos.right - hostPos.left) / 2 - this.tooltip.getBoundingClientRect().width / 2 + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-left':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-left');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.left + 'px');
                    this.checkSides();
                }
                break;
            case 'bottom-right':
                if (bottomExit) {
                    this.renderer.removeClass(this.tooltip, 'ng-tooltip-' + placement);
                    this.setPosition('top-right');
                    return;
                }
                else {
                    this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom + 'px');
                    this.renderer.setStyle(this.tooltip, 'left', hostPos.right - this.tooltip.offsetWidth + 'px');
                    this.checkSides();
                }
                break;
            case 'left':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'left-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                break;
            case 'left-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.left - this.tooltip.getBoundingClientRect().width + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
            case 'right':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + (hostPos.bottom - hostPos.top) / 2 - this.tooltip.getBoundingClientRect().height / 2 + 'px');
                break;
            case 'right-top':
                this.renderer.setStyle(this.tooltip, 'top', hostPos.top + 'px');
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                break;
            case 'right-bottom':
                this.renderer.setStyle(this.tooltip, 'left', hostPos.right + 'px');
                this.renderer.setStyle(this.tooltip, 'top', hostPos.bottom - this.tooltip.getBoundingClientRect().height + 'px');
                break;
        }
    };
    TooltipDirective.prototype.checkSides = function () {
        if (this.tooltip.getBoundingClientRect().left < 0) {
            this.renderer.setStyle(this.tooltip, 'left', 0);
        }
        if (this.tooltip.getBoundingClientRect().right > window.innerWidth) {
            this.renderer.setStyle(this.tooltip, 'left', window.innerWidth - this.tooltip.getBoundingClientRect().width + 'px');
        }
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.removeTooltipTimeout);
        clearTimeout(this.removeTooltipTimeoutInner);
        clearTimeout(this.removeTooltipTimeDelay);
        if (this.tooltip) {
            this.renderer.removeChild(document.body, this.tooltip);
            this.tooltip = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.cursor'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "cursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltip'),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipInner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "timeDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "showWhenNoOverflow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tooltip]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.ID' | translate }}</span>\r\n    <span class=\"cell key-value\" [style.flex-basis]=\"sizes[1] + 'px'\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.tx_hash)\" (click)=\"openInBrowser(transaction.tx_hash)\">{{transaction.tx_hash}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.SIZE' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{ 'HISTORY.DETAILS.SIZE_VALUE' | translate : {value: transaction.tx_blob_size} }}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.HEIGHT' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\">{{transaction.height}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.CONFIRMATION' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\">{{transaction.height === 0 ? 0 : variablesService.height_app - transaction.height}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.INPUTS' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + 'px'\" tooltip=\"{{inputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{inputs.join(', ')}}</span>\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[2] + 'px'\">{{ 'HISTORY.DETAILS.OUTPUTS' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[3] + 'px'\" tooltip=\"{{outputs.join(', ')}}\" placement=\"top\" tooltipClass=\"table-tooltip table-tooltip-dimensions\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{outputs.join(', ')}}</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.PAYMENT_ID' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\r\n          tooltip=\"{{transaction.payment_id}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\r\n      {{transaction.payment_id}}\r\n    </span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span class=\"cell label\" [style.flex-basis]=\"sizes[0] + 'px'\">{{ 'HISTORY.DETAILS.COMMENT' | translate }}</span>\r\n    <span class=\"cell value\" [style.flex-basis]=\"sizes[1] + sizes[2] + sizes[3] + 'px'\"\r\n          tooltip=\"{{transaction.comment}}\" placement=\"top\" tooltipClass=\"table-tooltip comment-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\"\r\n          (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, transaction.comment)\">\r\n      {{transaction.comment}}\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n\n.table {\n  margin: 0 3rem;\n  padding: 0.5rem 0; }\n\n.table .row {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-top: none;\n    line-height: 3rem;\n    margin: 0 -3rem;\n    width: 100%;\n    height: 3rem; }\n\n.table .row .cell {\n      flex-shrink: 0;\n      flex-grow: 0;\n      padding: 0 1rem;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.table .row .cell:first-child {\n        padding-left: 3rem; }\n\n.table .row .cell:last-child {\n        padding-right: 3rem; }\n\n.table .row .cell.key-value {\n        cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy90cmFuc2FjdGlvbi1kZXRhaWxzL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXGRpcmVjdGl2ZXNcXHRyYW5zYWN0aW9uLWRldGFpbHNcXHRyYW5zYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRm5CO0lBS0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFaaEI7TUFlTSxjQUFjO01BQ2QsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUE7O0FBbkI3QjtRQXNCUSxrQkFBa0IsRUFBQTs7QUF0QjFCO1FBMEJRLG1CQUFtQixFQUFBOztBQTFCM0I7UUE4QlEsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvZGlyZWN0aXZlcy90cmFuc2FjdGlvbi1kZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIG1hcmdpbjogMCAzcmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luOiAwIC0zcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcblxyXG4gICAgLmNlbGwge1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYua2V5LXZhbHVlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/directives/transaction-details/transaction-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/transaction.model */ "./src/app/_helpers/models/transaction.model.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(variablesService, backendService, intToMoneyPipe) {
        this.variablesService = variablesService;
        this.backendService = backendService;
        this.intToMoneyPipe = intToMoneyPipe;
        this.inputs = [];
        this.outputs = [];
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        for (var input in this.transaction.td['spn']) {
            if (this.transaction.td['spn'].hasOwnProperty(input)) {
                this.inputs.push(this.intToMoneyPipe.transform(this.transaction.td['spn'][input]));
            }
        }
        for (var output in this.transaction.td['rcv']) {
            if (this.transaction.td['rcv'].hasOwnProperty(output)) {
                this.outputs.push(this.intToMoneyPipe.transform(this.transaction.td['rcv'][output]));
            }
        }
    };
    TransactionDetailsComponent.prototype.openInBrowser = function (tr) {
        this.backendService.openUrlInBrowser((this.variablesService.testnet ? _shared_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_EXPLORER_TN_TX_URL_PREFIX"] : _shared_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_EXPLORER_TX_URL_PREFIX"]) + tr);
    };
    TransactionDetailsComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_transaction_model__WEBPACK_IMPORTED_MODULE_1__["Transaction"])
    ], TransactionDetailsComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransactionDetailsComponent.prototype, "sizes", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.scss */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"], _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_4__["IntToMoneyPipe"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_helpers/modals/confirm-modal/confirm-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"content\">\r\n    <i class=\"icon info\"></i>\r\n    <div class=\"message-container\">\r\n      <span class=\"title\">{{title}}</span>\r\n      <span class=\"message\">{{message}}</span>\r\n\r\n      <div class=\"wrap-btn\">\r\n        <button type=\"button\" class=\"action-button\" (click)=\"onClose()\">{{ 'MODALS.CANCEL' | translate }}</button>\r\n        <button type=\"button\" class=\"action-button\" (click)=\"onSubmit()\" #btn>{{ 'MODALS.OK' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/_helpers/modals/confirm-modal/confirm-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 3rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 2rem;\n      height: 2rem; }\n\n.modal .content .icon.info {\n        background: center/contain no-repeat url('modal-info.svg'); }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 1rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .wrap-btn {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 3.5rem; }\n\n.modal .action-button {\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      background: center/contain no-repeat url('close.svg');\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL2NvbmZpcm0tbW9kYWwvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcbW9kYWxzXFxjb25maXJtLW1vZGFsXFxjb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBUmxCO0lBV0ksYUFBYSxFQUFBOztBQVhqQjtNQWNNLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWhCbEI7UUFtQlEsMERBQTRFLEVBQUE7O0FBbkJwRjtNQXdCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsaUJBQWlCLEVBQUE7O0FBNUJ2QjtRQStCUSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQixFQUFBOztBQWpDM0I7UUFxQ1EsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTs7QUF2QzFCO0lBNkNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQWhEdEI7SUFvREksWUFBWTtJQUNaLGNBQWMsRUFBQTs7QUFyRGxCO0lBeURJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBbkVsQjtNQXNFTSxxREFBdUU7TUFDdkUsYUFBYTtNQUNiLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19oZWxwZXJzL21vZGFscy9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIG1pbi13aWR0aDogMzRyZW07XHJcbiAgbWF4LXdpZHRoOiA2MHJlbTtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgJi5pbmZvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwofnNyYy9hc3NldHMvaWNvbnMvbW9kYWwtaW5mby5zdmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2UtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53cmFwLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDIuNHJlbTtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zyk7XHJcbiAgICAgIHdpZHRoOiAyLjRyZW07XHJcbiAgICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_helpers/modals/confirm-modal/confirm-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
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

var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
    };
    ConfirmModalComponent.prototype.onSubmit = function () {
        this.confirmed.emit(true);
    };
    ConfirmModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmModalComponent.prototype, "confirmed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfirmModalComponent.prototype, "button", void 0);
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/modals/export-history-modal/export-history-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"title\">\r\n    <span>{{ 'EXPORT_HISTORY.TITLE' | translate }}</span>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"inputs-container\">\r\n      <div class=\"lock-selection\">\r\n        <label class=\"lock-selection-title\">Format:</label>\r\n        <ng-select class=\"custom-select\" [items]=\"exportFormats\" bindValue=\"format\" bindLabel=\"formatName\"\r\n          [(ngModel)]=\"curentFormat\" [clearable]=\"false\" [searchable]=\"false\">\r\n          <ng-template ng-label-tmp let-item=\"item\">\r\n            {{item.formatName}}\r\n          </ng-template>\r\n          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n            {{item.formatName}}\r\n          </ng-template>\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"lock-selection filter-switch\">\r\n        <label class=\"lock-selection-title\">{{ 'EXPORT_HISTORY.FILTER' | translate }}</label>\r\n        <div class=\"switch\" (click)=\"posFilterIsOn = !posFilterIsOn\" [ngClass]=\"posFilterIsOn ? 'off' : 'on'\">\r\n          <span class=\"circle\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"wrapper-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"closeModal()\">{{ 'EXPORT_HISTORY.CANCEL' | translate\r\n        }}</button>\r\n      <button type=\"submit\" class=\"blue-button\" (click)=\"confirmExport()\">{{ 'EXPORT_HISTORY.EXPORT' | translate\r\n        }}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/_helpers/modals/export-history-modal/export-history-modal.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 3.2rem;\n  width: 72rem;\n  height: 47rem; }\n\n.modal .title {\n    padding-bottom: 3.6rem;\n    font-size: 2rem;\n    line-height: 2.4rem; }\n\n.modal .content {\n    display: flex;\n    flex-direction: column; }\n\n.modal .content .inputs-container {\n      margin-bottom: 13rem; }\n\n.modal .content .inputs-container .lock-selection {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start; }\n\n.modal .content .inputs-container .lock-selection.filter-switch {\n          margin-top: 4rem;\n          display: flex;\n          flex-direction: row; }\n\n.modal .content .inputs-container .lock-selection.filter-switch label {\n            font-size: 2rem;\n            line-height: 2.4rem;\n            color: #fdfeff;\n            margin-right: 3.5rem; }\n\n.modal .content .inputs-container .lock-selection .lock-selection-title {\n          display: flex;\n          font-size: 1.6rem;\n          line-height: 1.9rem;\n          margin-bottom: 1.2rem;\n          color: #1f8feb; }\n\n.modal .content .inputs-container .lock-selection .switch {\n          border-radius: 1.1rem;\n          cursor: pointer;\n          padding: 0.2rem;\n          width: 3.6rem;\n          height: 2.2rem;\n          transition: all 0.3s ease;\n          position: relative; }\n\n.modal .content .inputs-container .lock-selection .switch.on .circle {\n            margin-left: 1.4rem; }\n\n.modal .content .inputs-container .lock-selection .switch.off {\n            background-color: rgba(255, 255, 255, 0.2); }\n\n.modal .content .inputs-container .lock-selection .switch .circle {\n            display: block;\n            transition: all 0.3s ease;\n            position: relative;\n            border-radius: 50%;\n            width: 1.8rem;\n            height: 1.8rem; }\n\n.modal .content .wrapper-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: space-between; }\n\n.modal .content .wrapper-buttons button {\n        width: 100%; }\n\n.modal .content .wrapper-buttons button:first-child {\n          margin-right: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL2V4cG9ydC1oaXN0b3J5LW1vZGFsL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcX2hlbHBlcnNcXG1vZGFsc1xcZXhwb3J0LWhpc3RvcnktbW9kYWxcXGV4cG9ydC1oaXN0b3J5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQVJmO0lBV0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFidkI7SUFpQkksYUFBYTtJQUNiLHNCQUFzQixFQUFBOztBQWxCMUI7TUFvQk0sb0JBQW9CLEVBQUE7O0FBcEIxQjtRQXNCUSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QixFQUFBOztBQXhCL0I7VUEwQlUsZ0JBQWdCO1VBQ2hCLGFBQWE7VUFDYixtQkFBbUIsRUFBQTs7QUE1QjdCO1lBOEJZLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLG9CQUFvQixFQUFBOztBQWpDaEM7VUFzQ1UsYUFBYTtVQUNiLGlCQUFpQjtVQUNqQixtQkFBbUI7VUFDbkIscUJBQXFCO1VBQ3JCLGNBQWMsRUFBQTs7QUExQ3hCO1VBNkNVLHFCQUFxQjtVQUNyQixlQUFlO1VBQ2YsZUFBZTtVQUNmLGFBQWE7VUFDYixjQUFjO1VBQ2QseUJBQXlCO1VBQ3pCLGtCQUFrQixFQUFBOztBQW5ENUI7WUFzRGMsbUJBQW1CLEVBQUE7O0FBdERqQztZQTBEWSwwQ0FBMEMsRUFBQTs7QUExRHREO1lBNkRZLGNBQWM7WUFDZCx5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsY0FBYyxFQUFBOztBQWxFMUI7TUF3RU0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTs7QUExRXBDO1FBZ0ZRLFdBQVcsRUFBQTs7QUFoRm5CO1VBOEVVLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL2V4cG9ydC1oaXN0b3J5LW1vZGFsL2V4cG9ydC1oaXN0b3J5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcbiAgcGFkZGluZzogMy4ycmVtO1xyXG4gIHdpZHRoOiA3MnJlbTtcclxuICBoZWlnaHQ6IDQ3cmVtO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5pbnB1dHMtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTNyZW07XHJcbiAgICAgIC5sb2NrLXNlbGVjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICYuZmlsdGVyLXN3aXRjaCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZGZlZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvY2stc2VsZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzFmOGZlYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN3aXRjaCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgICB3aWR0aDogMy42cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgJi5vbiB7XHJcbiAgICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYub2ZmIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcHBlci1idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/_helpers/modals/export-history-modal/export-history-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ExportHistoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportHistoryModalComponent", function() { return ExportHistoryModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportHistoryModalComponent = /** @class */ (function () {
    function ExportHistoryModalComponent(backend, variablesService, translate) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.translate = translate;
        this.posFilterIsOn = true;
        this.exportData = {
            wallet_id: 0,
            include_pos_transactions: false,
            path: "C:\\some_file.txt",
            format: 'json'
        };
        this.exportFormats = [
            {
                format: 'json',
                formatName: 'JSON'
            },
            {
                format: 'text',
                formatName: 'Text'
            },
            {
                format: 'csv',
                formatName: 'CSV'
            }
        ];
        this.closeExportModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.curentFormat = this.exportFormats[0].format;
    }
    ExportHistoryModalComponent.prototype.closeModal = function () {
        this.closeExportModal.emit(true);
    };
    ExportHistoryModalComponent.prototype.confirmExport = function () {
        var _this = this;
        this.exportData.format = "" + this.curentFormat;
        this.exportData.wallet_id = this.currentWalletId;
        this.exportData.include_pos_transactions = this.posFilterIsOn;
        this.backend.saveFileDialog(this.translate.instant('EXPORT_HISTORY.SAVED_FILE'), "" + this.exportData.format, this.variablesService.settings.default_path, function (file_status, file_data) {
            if (_this.exportData.format === 'text') {
                _this.exportData.path = file_data.path + '.txt';
            }
            else {
                _this.exportData.path = file_data.path + ("." + _this.exportData.format);
            }
            if (file_status) {
                _this.backend.exportWalletHistory(JSON.stringify(_this.exportData));
                _this.closeExportModal.emit(true);
            }
            ;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExportHistoryModalComponent.prototype, "currentWalletId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ExportHistoryModalComponent.prototype, "closeExportModal", void 0);
    ExportHistoryModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-history-modal',
            template: __webpack_require__(/*! ./export-history-modal.component.html */ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.html"),
            styles: [__webpack_require__(/*! ./export-history-modal.component.scss */ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ExportHistoryModalComponent);
    return ExportHistoryModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/modal-container/modal-container.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/modals/modal-container/modal-container.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <div class=\"content\">\r\n    <i class=\"icon\" [class.error]=\"type === 'error'\" [class.success]=\"type === 'success'\"\r\n      [class.info]=\"type === 'info'\"></i>\r\n    <div class=\"message-container\">\r\n      <span class=\"title\">{{title}}</span>\r\n      <span class=\"message\" [innerHTML]=\"message\"></span>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"close-button\" (click)=\"onClose()\"><i class=\"icon close\"></i></button>\r\n  <button type=\"button\" class=\"action-button\" (click)=\"onClose()\" #btn>{{ 'MODALS.OK' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/modals/modal-container/modal-container.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/_helpers/modals/modal-container/modal-container.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.modal {\n  background-color: #174491;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 60rem; }\n\n.modal .content {\n    display: flex;\n    margin: 1.2rem 0; }\n\n.modal .content .icon {\n      flex: 0 0 auto;\n      width: 4.4rem;\n      height: 4.4rem; }\n\n.modal .content .icon.error {\n        background: center/contain no-repeat url('modal-alert.svg'); }\n\n.modal .content .icon.success {\n        background: center/contain no-repeat url('modal-success.svg'); }\n\n.modal .content .icon.info {\n        background: center/contain no-repeat url('modal-info.svg'); }\n\n.modal .content .message-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      margin-left: 2rem; }\n\n.modal .content .message-container .title {\n        font-size: 1.8rem;\n        font-weight: 600;\n        line-height: 2.2rem; }\n\n.modal .content .message-container .message {\n        font-size: 1.3rem;\n        line-height: 1.8rem;\n        margin-top: 0.4rem; }\n\n.modal .action-button {\n    margin: 1.2rem auto 0.6rem;\n    width: 10rem;\n    height: 2.4rem; }\n\n.modal .close-button {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    width: 2.4rem;\n    height: 2.4rem; }\n\n.modal .close-button .icon {\n      background: center/contain no-repeat url('close.svg');\n      width: 2.4rem;\n      height: 2.4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL21vZGFsLWNvbnRhaW5lci9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXF9oZWxwZXJzXFxtb2RhbHNcXG1vZGFsLWNvbnRhaW5lclxcbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVRsQjtJQVlJLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTs7QUFicEI7TUFnQk0sY0FBYztNQUNkLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBbEJwQjtRQXFCUSwyREFBNkUsRUFBQTs7QUFyQnJGO1FBeUJRLDZEQUErRSxFQUFBOztBQXpCdkY7UUE2QlEsMERBQTRFLEVBQUE7O0FBN0JwRjtNQWtDTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsaUJBQWlCLEVBQUE7O0FBdEN2QjtRQXlDUSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLG1CQUFtQixFQUFBOztBQTNDM0I7UUErQ1EsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTs7QUFqRDFCO0lBdURJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osY0FBYyxFQUFBOztBQXpEbEI7SUE2REksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWMsRUFBQTs7QUF2RWxCO01BMEVNLHFEQUF1RTtNQUN2RSxhQUFhO01BQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL21vZGFsLWNvbnRhaW5lci9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0NDkxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1pbi13aWR0aDogMzRyZW07XHJcbiAgbWF4LXdpZHRoOiA2MHJlbTtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMS4ycmVtIDA7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgd2lkdGg6IDQuNHJlbTtcclxuICAgICAgaGVpZ2h0OiA0LjRyZW07XHJcblxyXG4gICAgICAmLmVycm9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwofnNyYy9hc3NldHMvaWNvbnMvbW9kYWwtYWxlcnQuc3ZnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zdWNjZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwofnNyYy9hc3NldHMvaWNvbnMvbW9kYWwtc3VjY2Vzcy5zdmcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmluZm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9tb2RhbC1pbmZvLnN2Zyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxLjJyZW0gYXV0byAwLjZyZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDIuNHJlbTtcclxuICAgIGhlaWdodDogMi40cmVtO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Zyk7XHJcbiAgICAgIHdpZHRoOiAyLjRyZW07XHJcbiAgICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_helpers/modals/modal-container/modal-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_helpers/modals/modal-container/modal-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(translate) {
        this.translate = translate;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        this.button.nativeElement.focus();
        switch (this.type) {
            case 'error':
                this.title = this.translate.instant('MODALS.ERROR');
                break;
            case 'success':
                this.title = this.translate.instant('MODALS.SUCCESS');
                break;
            case 'info':
                this.title = this.translate.instant('MODALS.INFO');
                break;
        }
    };
    ModalContainerComponent.prototype.onClose = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalContainerComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalContainerComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalContainerComponent.prototype, "button", void 0);
    ModalContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-container',
            template: __webpack_require__(/*! ./modal-container.component.html */ "./src/app/_helpers/modals/modal-container/modal-container.component.html"),
            styles: [__webpack_require__(/*! ./modal-container.component.scss */ "./src/app/_helpers/modals/modal-container/modal-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/modals/sync-modal/sync-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_helpers/modals/sync-modal/sync-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"host-container\">\r\n  <div class=\"container\">\r\n    <div class=\"modal sync-modal\">\r\n      <div class=\"title\">\r\n        <span>This action is not available\r\n          during synchronization...</span>\r\n      </div>\r\n      <button type=\"button\" class=\"blue-button\">OK</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_helpers/modals/sync-modal/sync-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/_helpers/modals/sync-modal/sync-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host-container {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.deep-overflow {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 0; }\n\n.container {\n  position: relative;\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 3.5rem; }\n\n.modal .title {\n    padding: 0 0 7.5rem;\n    font-size: 3.6rem;\n    font-weight: 500;\n    text-align: center;\n    line-height: 4.296rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 30rem; }\n\n.modal .wrapper-buttons button:first-child {\n        margin-right: 5rem; }\n\n.modal.sync-modal {\n    width: 72rem;\n    height: 48rem;\n    padding: 11.2rem 11.2rem 4.1rem; }\n\n.modal.sync-modal .title {\n      padding: 0 0 13.2rem; }\n\n.modal.sync-modal button {\n      margin: 0 auto;\n      width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2hlbHBlcnMvbW9kYWxzL3N5bmMtbW9kYWwvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxfaGVscGVyc1xcbW9kYWxzXFxzeW5jLW1vZGFsXFxzeW5jLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUpqQjtJQU9JLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBQTs7QUFYekI7SUFlSSxhQUFhLEVBQUE7O0FBZmpCO0lBbUJJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7O0FBckJsQztNQTJCTSxZQUFZLEVBQUE7O0FBM0JsQjtRQXlCUSxrQkFBa0IsRUFBQTs7QUF6QjFCO0lBK0JJLFlBQVk7SUFDWixhQUFhO0lBQ2IsK0JBQStCLEVBQUE7O0FBakNuQztNQW1DTSxvQkFBb0IsRUFBQTs7QUFuQzFCO01Bc0NNLGNBQWM7TUFDZCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9faGVscGVycy9tb2RhbHMvc3luYy1tb2RhbC9zeW5jLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvc3QtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcbi5kZWVwLW92ZXJmbG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDMuNXJlbTtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMCA3LjVyZW07XHJcbiAgICBmb250LXNpemU6IDMuNnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNC4yOTZyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XHJcbiAgICAgIH1cclxuICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLnN5bmMtbW9kYWwge1xyXG4gICAgd2lkdGg6IDcycmVtO1xyXG4gICAgaGVpZ2h0OiA0OHJlbTtcclxuICAgIHBhZGRpbmc6IDExLjJyZW0gMTEuMnJlbSA0LjFyZW07XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMTMuMnJlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMzByZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_helpers/modals/sync-modal/sync-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_helpers/modals/sync-modal/sync-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: SyncModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncModalComponent", function() { return SyncModalComponent; });
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

var SyncModalComponent = /** @class */ (function () {
    function SyncModalComponent() {
    }
    SyncModalComponent.prototype.ngOnInit = function () {
    };
    SyncModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sync-modal',
            template: __webpack_require__(/*! ./sync-modal.component.html */ "./src/app/_helpers/modals/sync-modal/sync-modal.component.html"),
            styles: [__webpack_require__(/*! ./sync-modal.component.scss */ "./src/app/_helpers/modals/sync-modal/sync-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SyncModalComponent);
    return SyncModalComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/models/transaction.model.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/models/transaction.model.ts ***!
  \******************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    return Transaction;
}());



/***/ }),

/***/ "./src/app/_helpers/models/wallet.model.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/models/wallet.model.ts ***!
  \*************************************************/
/*! exports provided: Wallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

var Wallet = /** @class */ (function () {
    function Wallet(id, name, pass, path, address, balance, unlocked_balance, mined, tracking) {
        if (mined === void 0) { mined = 0; }
        if (tracking === void 0) { tracking = ''; }
        this.updated = false;
        this.history = [];
        this.pages = [];
        this.excluded_history = [];
        this.contracts = [];
        this.send_data = {
            address: null,
            amount: null,
            comment: null,
            mixin: null,
            fee: null,
            hide: null
        };
        this.wallet_id = id;
        this.name = name;
        this.pass = pass;
        this.path = path;
        this.address = address;
        this.balance = balance;
        this.unlocked_balance = unlocked_balance;
        this.mined_total = mined;
        this.tracking_hey = tracking;
        this.alias = {};
        this.staking = false;
        this.new_messages = 0;
        this.new_contracts = 0;
        this.history = [];
        this.excluded_history = [];
        this.progress = 0;
        this.loaded = false;
    }
    Wallet.prototype.getMoneyEquivalent = function (equivalent) {
        return this.balance.multipliedBy(equivalent).toFixed(0);
    };
    Wallet.prototype.havePass = function () {
        return (this.pass !== '' && this.pass !== null);
    };
    Wallet.prototype.isActive = function (id) {
        return this.wallet_id === id;
    };
    Wallet.prototype.prepareHistoryItem = function (item) {
        if (item.tx_type === 4) {
            item.sortFee = item.amount.plus(item.fee).negated();
            item.sortAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if (item.tx_type === 3) {
            item.sortFee = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__["BigNumber"](0);
        }
        else if ((item.hasOwnProperty('contract') && (item.contract[0].state === 3 || item.contract[0].state === 6 || item.contract[0].state === 601) && !item.contract[0].is_a)) {
            item.sortFee = item.fee.negated();
            item.sortAmount = item.amount;
        }
        else {
            if (!item.is_income) {
                item.sortFee = item.fee.negated();
                item.sortAmount = item.amount.negated();
            }
            else {
                item.sortAmount = item.amount;
            }
        }
        return item;
    };
    Wallet.prototype.prepareHistory = function (items) {
        for (var i = 0; i < items.length; i++) {
            if ((items[i].tx_type === 7 && items[i].is_income) || (items[i].tx_type === 11 && items[i].is_income) || (items[i].amount.eq(0) && items[i].fee.eq(0) && !items[i].is_mining)) {
                var exists = false;
                for (var j = 0; j < this.excluded_history.length; j++) {
                    if (this.excluded_history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.excluded_history[j].height !== items[i].height) {
                            this.excluded_history[j] = items[i];
                        }
                        break;
                    }
                }
                if (!exists) {
                    this.excluded_history.push(items[i]);
                }
            }
            else {
                var exists = false;
                for (var j = 0; j < this.history.length; j++) {
                    if (this.history[j].tx_hash === items[i].tx_hash) {
                        exists = true;
                        if (this.history[j].height !== items[i].height) {
                            this.history[j] = this.prepareHistoryItem(items[i]);
                        }
                        break;
                    }
                }
                if (!exists) {
                    if (this.history.length && items[i].timestamp >= this.history[0].timestamp) {
                        this.history.unshift(this.prepareHistoryItem(items[i]));
                    }
                    else {
                        this.history.push(this.prepareHistoryItem(items[i]));
                    }
                }
            }
        }
    };
    Wallet.prototype.removeFromHistory = function (hash) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].tx_hash === hash) {
                this.history.splice(i, 1);
                break;
            }
        }
    };
    Wallet.prototype.prepareContractsAfterOpen = function (items, exp_med_ts, height_app, viewedContracts, notViewedContracts) {
        var wallet = this;
        var _loop_1 = function (i) {
            var contract = items[i];
            var contractTransactionExist = false;
            if (wallet && wallet.history) {
                contractTransactionExist = wallet.history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist && wallet && wallet.excluded_history) {
                contractTransactionExist = wallet.excluded_history.some(function (elem) { return elem.contract && elem.contract.length && elem.contract[0].contract_id === contract.contract_id; });
            }
            if (!contractTransactionExist) {
                contract.state = 140;
            }
            else if (contract.state === 1 && contract.expiration_time < exp_med_ts) {
                contract.state = 110;
            }
            else if (contract.state === 2 && contract.cancel_expiration_time !== 0 && contract.cancel_expiration_time < exp_med_ts && contract.height === 0) {
                var searchResult1 = viewedContracts.some(function (elem) { return elem.state === 2 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (!searchResult1) {
                    contract.state = 130;
                    contract.is_new = true;
                }
            }
            else if (contract.state === 1) {
                var searchResult2 = notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult2) {
                    if (searchResult2.time === contract.expiration_time) {
                        contract.state = 110;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 2 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 201;
            }
            else if (contract.state === 2) {
                var searchResult3 = viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult3) {
                    contract.state = 120;
                }
            }
            else if (contract.state === 5) {
                var searchResult4 = notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
                if (searchResult4) {
                    if (searchResult4.time === contract.cancel_expiration_time) {
                        contract.state = 130;
                    }
                    else {
                        for (var j = 0; j < notViewedContracts.length; j++) {
                            if (notViewedContracts[j].contract_id === contract.contract_id && notViewedContracts[j].is_a === contract.is_a) {
                                notViewedContracts.splice(j, 1);
                                break;
                            }
                        }
                        for (var j = 0; j < viewedContracts.length; j++) {
                            if (viewedContracts[j].contract_id === contract.contract_id && viewedContracts[j].is_a === contract.is_a) {
                                viewedContracts.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }
            else if (contract.state === 6 && (contract.height === 0 || (height_app - contract.height) < 10)) {
                contract.state = 601;
            }
            var searchResult = viewedContracts.some(function (elem) { return elem.state === contract.state && elem.is_a === contract.is_a && elem.contract_id === contract.contract_id; });
            contract.is_new = !searchResult;
            wallet.contracts.push(contract);
        };
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        this.recountNewContracts();
    };
    Wallet.prototype.recountNewContracts = function () {
        this.new_contracts = (this.contracts.filter(function (item) { return item.is_new === true; })).length;
    };
    Wallet.prototype.getContract = function (id) {
        for (var i = 0; i < this.contracts.length; i++) {
            if (this.contracts[i].contract_id === id) {
                return this.contracts[i];
            }
        }
        return null;
    };
    return Wallet;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-status-messages.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ContractStatusMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractStatusMessagesPipe", function() { return ContractStatusMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractStatusMessagesPipe = /** @class */ (function () {
    function ContractStatusMessagesPipe(translate) {
        this.translate = translate;
    }
    ContractStatusMessagesPipe.prototype.getStateSeller = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NEW_CONTRACT');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.WAITING_BUYER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.PROPOSAL_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.SELLER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.getStateBuyer = function (stateNum) {
        var state = { part1: '', part2: '' };
        switch (stateNum) {
            case 1:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING');
                break;
            case 110:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED');
                break;
            case 201:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAIT');
                break;
            case 2:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.ACCEPTED');
                break;
            case 120:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_SELLER');
                break;
            case 3:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.COMPLETED');
                break;
            case 4:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NOT_RECEIVED');
                state.part2 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.NULLIFIED');
                break;
            case 5:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.WAITING_CANCEL');
                break;
            case 601:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.BEING_CANCELLED');
                break;
            case 6:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.CANCELLED');
                break;
            case 130:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.IGNORED_CANCEL');
                break;
            case 140:
                state.part1 = this.translate.instant('CONTRACTS.STATUS_MESSAGES.BUYER.EXPIRED');
                break;
        }
        return state.part1 + (state.part2.length ? '. ' + state.part2 : '');
    };
    ContractStatusMessagesPipe.prototype.transform = function (state, is_a) {
        if (is_a) {
            return this.getStateBuyer(state);
        }
        else {
            return this.getStateSeller(state);
        }
    };
    ContractStatusMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractStatusMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ContractStatusMessagesPipe);
    return ContractStatusMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/contract-time-left.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/_helpers/pipes/contract-time-left.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ContractTimeLeftPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractTimeLeftPipe", function() { return ContractTimeLeftPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractTimeLeftPipe = /** @class */ (function () {
    function ContractTimeLeftPipe(service, translate) {
        this.service = service;
        this.translate = translate;
    }
    ContractTimeLeftPipe.prototype.transform = function (value, arg) {
        var time = parseInt(((parseInt(value, 10) - this.service.exp_med_ts) / 3600).toFixed(0), 10);
        var type = arg || 0;
        if (time === 0) {
            return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_LESS_ONE');
        }
        if (this.service.settings.language === 'en') {
            if (type === 0) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
            }
            else if (type === 1) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
            }
        }
        else {
            var rest = time % 10;
            if (type === 0) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT', { time: time });
                }
            }
            else if (type === 1) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_RESPONSE', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_RESPONSE', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_RESPONSE', { time: time });
                }
            }
            else if (type === 2) {
                if (((time > 20) && (rest === 1)) || time === 1) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_ONE_WAITING', { time: time });
                }
                else if ((time > 1) && (time < 5) || ((time > 20) && (rest === 2 || rest === 3 || rest === 4))) {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_WAITING', { time: time });
                }
                else {
                    return this.translate.instant('CONTRACTS.TIME_LEFT.REMAINING_MANY_ALT_WAITING', { time: time });
                }
            }
        }
        return null;
    };
    ContractTimeLeftPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'contractTimeLeft'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ContractTimeLeftPipe);
    return ContractTimeLeftPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/history-type-messages.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/_helpers/pipes/history-type-messages.pipe.ts ***!
  \**************************************************************/
/*! exports provided: HistoryTypeMessagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTypeMessagesPipe", function() { return HistoryTypeMessagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryTypeMessagesPipe = /** @class */ (function () {
    function HistoryTypeMessagesPipe(translate) {
        this.translate = translate;
    }
    HistoryTypeMessagesPipe.prototype.transform = function (item, args) {
        if (item.tx_type === 0) {
            if (item.remote_addresses && item.remote_addresses[0]) {
                return item.remote_addresses[0];
            }
            else {
                if (item.is_income) {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.HIDDEN');
                }
                else {
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
                }
            }
        }
        else if (item.tx_type === 6 && item.height === 0) {
            return 'unknown';
        }
        else if (item.tx_type === 9) {
            if (item.hasOwnProperty('contract') && item.contract[0].is_a) {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_BUYER');
            }
            else {
                return this.translate.instant('HISTORY.TYPE_MESSAGES.COMPLETE_SELLER');
            }
        }
        else {
            switch (item.tx_type) {
                // case 0:
                //   return '';
                // case 1:
                //   return '';
                // case 2:
                //   return '';
                // case 3:
                //   return '';
                case 4:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_ALIAS');
                case 5:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.UPDATE_ALIAS');
                case 6:
                    return (item.td['spn'] && item.td['spn'].length) ? this.translate.instant('HISTORY.TYPE_MESSAGES.POS_REWARD') : this.translate.instant('HISTORY.TYPE_MESSAGES.POW_REWARD');
                case 7:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CREATE_CONTRACT');
                case 8:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PLEDGE_CONTRACT');
                // case 9:
                //   return '';
                case 10:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.NULLIFY_CONTRACT');
                case 11:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.PROPOSAL_CANCEL_CONTRACT');
                case 12:
                    return this.translate.instant('HISTORY.TYPE_MESSAGES.CANCEL_CONTRACT');
            }
        }
        return this.translate.instant('HISTORY.TYPE_MESSAGES.UNDEFINED');
    };
    HistoryTypeMessagesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'historyTypeMessages'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], HistoryTypeMessagesPipe);
    return HistoryTypeMessagesPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/int-to-money.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/int-to-money.pipe.ts ***!
  \*****************************************************/
/*! exports provided: IntToMoneyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntToMoneyPipe", function() { return IntToMoneyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntToMoneyPipe = /** @class */ (function () {
    function IntToMoneyPipe(variablesService) {
        this.variablesService = variablesService;
    }
    IntToMoneyPipe.prototype.transform = function (value, args) {
        if (value === 0 || value === undefined) {
            return '0';
        }
        var maxFraction = this.variablesService.digits;
        if (args) {
            maxFraction = parseInt(args, 10);
        }
        var power = Math.pow(10, this.variablesService.digits);
        var str = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](value)).div(power).toFixed(maxFraction);
        for (var i = str.length - 1; i >= 0; i--) {
            if (str[i] !== '0') {
                str = str.substr(0, i + 1);
                break;
            }
        }
        if (str[str.length - 1] === '.') {
            str = str.substr(0, str.length - 1);
        }
        return str;
    };
    IntToMoneyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'intToMoney'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], IntToMoneyPipe);
    return IntToMoneyPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/money-to-int.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/pipes/money-to-int.pipe.ts ***!
  \*****************************************************/
/*! exports provided: MoneyToIntPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyToIntPipe", function() { return MoneyToIntPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoneyToIntPipe = /** @class */ (function () {
    function MoneyToIntPipe(variablesService) {
        this.variablesService = variablesService;
    }
    MoneyToIntPipe.prototype.transform = function (value, args) {
        var CURRENCY_DISPLAY_DECIMAL_POINT = this.variablesService.digits;
        var result;
        if (value) {
            var am_str = value.toString().trim();
            var point_index = am_str.indexOf('.');
            var fraction_size = 0;
            if (-1 !== point_index) {
                fraction_size = am_str.length - point_index - 1;
                while (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size && '0' === am_str[am_str.length - 1]) {
                    am_str = am_str.slice(0, am_str.length - 1);
                    --fraction_size;
                }
                if (CURRENCY_DISPLAY_DECIMAL_POINT < fraction_size) {
                    return undefined;
                }
                am_str = am_str.slice(0, point_index) + am_str.slice(point_index + 1, am_str.length);
            }
            else {
                fraction_size = 0;
            }
            if (!am_str.length) {
                return undefined;
            }
            if (fraction_size < CURRENCY_DISPLAY_DECIMAL_POINT) {
                for (var i = 0; i !== CURRENCY_DISPLAY_DECIMAL_POINT - fraction_size; i++) {
                    am_str = am_str + '0';
                }
            }
            result = (new bignumber_js__WEBPACK_IMPORTED_MODULE_2__["BigNumber"](am_str)).integerValue();
        }
        return result;
    };
    MoneyToIntPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'moneyToInt'
        }),
        __metadata("design:paramtypes", [_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], MoneyToIntPipe);
    return MoneyToIntPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/pipes/safe-html.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/pipes/safe-html.pipe.ts ***!
  \**************************************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHTMLPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SafeHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHTML'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/services/backend.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_helpers/services/backend.service.ts ***!
  \******************************************************/
/*! exports provided: ParamsType, getParamsType, convertersObjectForTypes, convertorParams, StatusCurrentActionState, BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamsType", function() { return ParamsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParamsType", function() { return getParamsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertersObjectForTypes", function() { return convertersObjectForTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertorParams", function() { return convertorParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCurrentActionState", function() { return StatusCurrentActionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var json_bignumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! json-bignumber */ "./node_modules/json-bignumber/src/JSONBigNumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;








var ParamsType;
(function (ParamsType) {
    ParamsType["array"] = "array";
    ParamsType["object"] = "object";
    ParamsType["string"] = "string";
})(ParamsType || (ParamsType = {}));
var getParamsType = function (value) {
    if (!value) {
        return null;
    }
    var array = Array.isArray(value) && ParamsType.array;
    var object = Object.keys(ParamsType).includes(typeof value) && ParamsType[typeof value];
    return array || object || null;
};
var convertersObjectForTypes = (_a = {},
    _a[ParamsType.string] = function (value) { return value; },
    _a[ParamsType.object] = function (value) { return json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].stringify(value); },
    _a[ParamsType.array] = function (value) { return value.map(function (v) {
        return typeof v === ParamsType.string ? v : json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].stringify(v);
    }); },
    _a);
var convertorParams = function (value) {
    var type = getParamsType(value);
    return convertersObjectForTypes[type](value);
};
var StatusCurrentActionState;
(function (StatusCurrentActionState) {
    StatusCurrentActionState["STATE_SENDING"] = "STATE_SENDING";
    StatusCurrentActionState["STATE_SENT_SUCCESS"] = "STATE_SENT_SUCCESS";
    StatusCurrentActionState["STATE_SEND_FAILED"] = "STATE_SEND_FAILED";
    StatusCurrentActionState["STATE_INITIALIZING"] = "STATE_INITIALIZING";
    StatusCurrentActionState["STATE_DOWNLOADING_CONSENSUS"] = "STATE_DOWNLOADING_CONSENSUS";
    StatusCurrentActionState["STATE_MAKING_TUNNEL_A"] = "STATE_MAKING_TUNNEL_A";
    StatusCurrentActionState["STATE_MAKING_TUNNEL_B"] = "STATE_MAKING_TUNNEL_B";
    StatusCurrentActionState["STATE_CREATING_STREAM"] = "STATE_CREATING_STREAM";
    StatusCurrentActionState["STATE_FAILED"] = "STATE_FAILED";
    StatusCurrentActionState["STATE_SUCCESS"] = "STATE_SUCCESS";
})(StatusCurrentActionState || (StatusCurrentActionState = {}));
var BackendService = /** @class */ (function () {
    function BackendService(translate, variablesService, modalService, moneyToIntPipe, ngZone) {
        this.translate = translate;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToIntPipe = moneyToIntPipe;
        this.ngZone = ngZone;
        this.dispatchAsyncCallResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.handleCurrentActionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.backendLoaded = false;
    }
    BackendService_1 = BackendService;
    BackendService.bigNumberParser = function (key, val) {
        if (val.constructor.name === 'BigNumber' && ['balance', 'unlocked_balance', 'amount', 'fee', 'b_fee', 'to_pay', 'a_pledge', 'b_pledge', 'coast', 'a'].indexOf(key) === -1) {
            return val.toNumber();
        }
        if (key === 'rcv' || key === 'spn') {
            for (var i = 0; i < val.length; i++) {
                val[i] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](val[i]);
            }
        }
        return val;
    };
    BackendService.Debug = function (type, message) {
        switch (type) {
            case 0:
                console.error(message);
                break;
            case 1:
                console.warn(message);
                break;
            case 2:
                console.log(message);
                break;
            default:
                console.log(message);
                break;
        }
    };
    BackendService.prototype.informerRun = function (error, params, command) {
        var error_translate = '';
        switch (error) {
            case 'NOT_ENOUGH_MONEY':
                error_translate = 'ERRORS.NOT_ENOUGH_MONEY';
                // error_translate = 'ERRORS.NO_MONEY'; maybe that one?
                if (command === 'cancel_offer') {
                    error_translate = this.translate.instant('ERRORS.NO_MONEY_REMOVE_OFFER', {
                        'fee': this.variablesService.default_fee,
                        'currency': this.variablesService.defaultCurrency
                    });
                }
                break;
            case 'CORE_BUSY':
                error_translate = 'ERRORS.CORE_BUSY';
                break;
            case 'BUSY':
                error_translate = 'ERRORS.DAEMON_BUSY';
                break;
            case 'OVERFLOW':
                if (command !== 'get_all_aliases') {
                    error_translate = '';
                }
                break;
            case 'NOT_ENOUGH_OUTPUTS_FOR_MIXING':
                error_translate = 'ERRORS.NOT_ENOUGH_OUTPUTS_TO_MIX';
                break;
            case 'TX_IS_TOO_BIG':
                error_translate = 'ERRORS.TRANSACTION_IS_TO_BIG';
                break;
            case 'DISCONNECTED':
                error_translate = 'ERRORS.TRANSFER_ATTEMPT';
                break;
            case 'ACCESS_DENIED':
                error_translate = 'ERRORS.ACCESS_DENIED';
                break;
            case 'TX_REJECTED':
                // if (command === 'request_alias_registration') {
                // error_translate = 'INFORMER.ALIAS_IN_REGISTER';
                // } else {
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                // }
                break;
            case 'INTERNAL_ERROR':
                error_translate = 'ERRORS.TRANSACTION_ERROR';
                break;
            case 'BAD_ARG':
                error_translate = 'ERRORS.BAD_ARG';
                break;
            case 'WALLET_WRONG_ID':
                error_translate = 'ERRORS.WALLET_WRONG_ID';
                break;
            case 'WALLET_WATCH_ONLY_NOT_SUPPORTED':
                error_translate = 'ERRORS.WALLET_WATCH_ONLY_NOT_SUPPORTED';
                break;
            case 'WRONG_PASSWORD':
                params = JSON.parse(params);
                if (!params.testEmpty) {
                    error_translate = 'ERRORS.WRONG_PASSWORD';
                }
                break;
            case 'FILE_RESTORED':
                if (command === 'open_wallet') {
                    error_translate = 'ERRORS.FILE_RESTORED';
                }
                break;
            case 'FILE_NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'NOT_FOUND':
                if (command !== 'open_wallet' && command !== 'get_alias_info_by_name' && command !== 'get_alias_info_by_address') {
                    error_translate = this.translate.instant('ERRORS.FILE_NOT_FOUND');
                    params = JSON.parse(params);
                    if (params.path) {
                        error_translate += ': ' + params.path;
                    }
                }
                break;
            case 'CANCELED':
            case '':
                break;
            case 'FAIL':
                if (command === 'create_proposal' || command === 'accept_proposal' || command === 'release_contract' || command === 'request_cancel_contract' || command === 'accept_cancel_contract') {
                    error_translate = ' ';
                }
                break;
            case 'ALREADY_EXISTS':
                error_translate = 'ERRORS.FILE_EXIST';
                break;
            case 'FAILED':
                BackendService_1.Debug(0, "Error: (" + error + ") was triggered by command: " + command);
                break;
            default:
                error_translate = '';
        }
        if (error.indexOf('FAIL:failed to save file') > -1) {
            error_translate = 'ERRORS.FILE_NOT_SAVED';
        }
        if (error.indexOf('FAILED:failed to open binary wallet file for saving') > -1 && command === 'generate_wallet') {
            error_translate = '';
        }
        if (error_translate !== '') {
            this.modalService.prepareModal('error', error_translate);
        }
    };
    BackendService.prototype.commandDebug = function (command, params, result) {
        BackendService_1.Debug(2, '----------------- ' + command + ' -----------------');
        var debug = {
            _send_params: params,
            _result: result
        };
        BackendService_1.Debug(2, debug);
        try {
            BackendService_1.Debug(2, json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(result, BackendService_1.bigNumberParser));
        }
        catch (e) {
            BackendService_1.Debug(2, { response_data: result, error_code: 'OK' });
        }
    };
    BackendService.prototype.backendCallback = function (resultStr, params, callback, command) {
        var _this = this;
        var Result = resultStr;
        if (command !== 'get_clipboard') {
            if (!resultStr || resultStr === '') {
                Result = {};
            }
            else {
                try {
                    Result = json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(resultStr, BackendService_1.bigNumberParser);
                }
                catch (e) {
                    Result = { response_data: resultStr, error_code: 'OK' };
                }
            }
        }
        else {
            Result = {
                error_code: 'OK',
                response_data: Result
            };
        }
        var core_busy = Result.error_code === 'CORE_BUSY';
        var Status = (Result.error_code === 'OK' || Result.error_code === 'TRUE');
        if (!Status && Status !== undefined && Result.error_code !== undefined) {
            BackendService_1.Debug(1, 'API error for command: "' + command + '". Error code: ' + Result.error_code);
        }
        var data = ((typeof Result === 'object') && 'response_data' in Result) ? Result.response_data : Result;
        var res_error_code = false;
        if (typeof Result === 'object' && 'error_code' in Result && Result.error_code !== 'OK' && Result.error_code !== 'TRUE' && Result.error_code !== 'FALSE' && Result.error_code !== 'WRAP') {
            if (core_busy) {
                setTimeout(function () {
                    // this is will avoid update data when user
                    // on other wallet after CORE_BUSY (blink of data)
                    if (command !== 'get_recent_transfers') {
                        _this.runCommand(command, params, callback);
                    }
                    else {
                        var current_wallet_id = _this.variablesService.currentWallet.wallet_id;
                        if (current_wallet_id === params.wallet_id) {
                            _this.runCommand(command, params, callback);
                        }
                    }
                }, 50);
            }
            else {
                this.informerRun(Result.error_code, params, command);
                res_error_code = Result.error_code;
            }
        }
        // if ( command === 'get_offers_ex' ){
        //   Service.printLog( "get_offers_ex offers count "+((data.offers)?data.offers.length:0) );
        // }
        if (!core_busy) {
            if (typeof callback === 'function') {
                callback(Status, data, res_error_code);
            }
            else {
                return data;
            }
        }
    };
    BackendService.prototype.runCommand = function (command, params, callback) {
        if (!this.backendObject) {
            return;
        }
        if (command === 'get_recent_transfers') {
            this.variablesService.get_recent_transfers = true;
        }
        var Action = this.backendObject[command];
        if (!Action) {
            BackendService_1.Debug(0, 'Run Command Error! Command "' + command + '" don\'t found in backendObject');
            return;
        }
        var that = this;
        var type = getParamsType(params);
        params = params && convertorParams(params);
        if (type === ParamsType.array) {
            Action.apply(void 0, params.concat([function (resultStr) {
                    that.commandDebug(command, params, resultStr);
                    return that.backendCallback(resultStr, params, callback, command);
                }]));
            return;
        }
        if (command === 'get_recent_transfers') {
            this.variablesService.get_recent_transfers = false;
        }
        Action(params, function (resultStr) {
            that.commandDebug(command, params, resultStr);
            return that.backendCallback(resultStr, params, callback, command);
        });
    };
    BackendService.prototype.eventSubscribe = function (command, callback) {
        if (command === 'on_core_event') {
            this.backendObject[command].connect(callback);
        }
        else {
            this.backendObject[command].connect(function (str) {
                callback(json_bignumber__WEBPACK_IMPORTED_MODULE_6__["default"].parse(str, BackendService_1.bigNumberParser));
            });
        }
    };
    BackendService.prototype.initService = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            if (!_this.backendLoaded) {
                _this.backendLoaded = true;
                var that_1 = _this;
                window.QWebChannel(window.qt.webChannelTransport, function (channel) {
                    that_1.backendObject = channel.objects.mediator_object;
                    observer.next('ok');
                });
            }
            else {
                if (!_this.backendObject) {
                    observer.error('error');
                    observer.error('error');
                }
            }
        });
    };
    BackendService.prototype.webkitLaunchedScript = function () {
        return this.runCommand('webkit_launched_script');
    };
    BackendService.prototype.quitRequest = function () {
        return this.runCommand('on_request_quit');
    };
    BackendService.prototype.getAppData = function (callback) {
        this.runCommand('get_app_data', {}, callback);
    };
    BackendService.prototype.storeAppData = function (callback) {
        var _this = this;
        if (this.variablesService.wallets.length) {
            this.variablesService.settings.wallets = [];
            this.variablesService.wallets.forEach(function (wallet) {
                _this.variablesService.settings.wallets.push({ name: wallet.name, path: wallet.path });
            });
        }
        this.runCommand('store_app_data', this.variablesService.settings, callback);
    };
    BackendService.prototype.getSecureAppData = function (pass, callback) {
        this.runCommand('get_secure_app_data', pass, callback);
    };
    BackendService.prototype.setMasterPassword = function (pass, callback) {
        this.runCommand('set_master_password', pass, callback);
    };
    BackendService.prototype.checkMasterPassword = function (pass, callback) {
        this.runCommand('check_master_password', pass, callback);
    };
    BackendService.prototype.getIsDisabledNotifications = function (callback) {
        var params = {};
        this.runCommand('get_is_disabled_notifications', params, callback);
    };
    BackendService.prototype.setIsDisabledNotifications = function (state) {
        this.runCommand('set_is_disabled_notifications', state);
    };
    BackendService.prototype.storeSecureAppData = function (callback) {
        var _this = this;
        var data;
        var wallets = [];
        var contacts = [];
        this.variablesService.wallets.forEach(function (wallet) {
            wallets.push({ name: wallet.name, pass: wallet.pass, path: wallet.path, staking: wallet.staking });
        });
        this.variablesService.contacts.forEach(function (contact) {
            contacts.push({ name: contact.name, address: contact.address, notes: contact.notes });
        });
        data = { wallets: wallets, contacts: contacts };
        this.backendObject['store_secure_app_data'](JSON.stringify(data), this.variablesService.appPass, function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'store_secure_app_data');
        });
    };
    BackendService.prototype.dropSecureAppData = function (callback) {
        var _this = this;
        this.backendObject['drop_secure_app_data'](function (dataStore) {
            _this.backendCallback(dataStore, {}, callback, 'drop_secure_app_data');
        });
    };
    BackendService.prototype.haveSecureAppData = function (callback) {
        this.runCommand('have_secure_app_data', {}, callback);
    };
    BackendService.prototype.saveFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_savefile_dialog', params, callback);
    };
    BackendService.prototype.openFileDialog = function (caption, fileMask, default_path, callback) {
        var dir = default_path ? default_path : '/';
        var params = {
            caption: caption,
            filemask: fileMask,
            default_dir: dir
        };
        this.runCommand('show_openfile_dialog', params, callback);
    };
    BackendService.prototype.storeFile = function (path, buff) {
        this.backendObject['store_to_file'](path, buff);
    };
    BackendService.prototype.loadFile = function (path, callback) {
        this.runCommand('load_from_file', path, callback);
    };
    BackendService.prototype.push_offer = function (params, callback) {
        this.runCommand('push_offer', params, callback);
    };
    BackendService.prototype.generateWallet = function (path, pass, callback) {
        var params = {
            path: path,
            pass: pass
        };
        this.runCommand('generate_wallet', params, callback);
    };
    BackendService.prototype.exportWalletHistory = function (json_string) {
        this.runCommand('export_wallet_history', json_string);
    };
    BackendService.prototype.openWallet = function (path, pass, txs_to_return, testEmpty, callback) {
        var params = {
            path: path,
            pass: pass,
            txs_to_return: txs_to_return
        };
        params['testEmpty'] = !!(testEmpty);
        this.runCommand('open_wallet', params, callback);
    };
    BackendService.prototype.closeWallet = function (wallet_id, callback) {
        this.runCommand('close_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.getSmartWalletInfo = function (_a, callback) {
        var wallet_id = _a.wallet_id, seed_password = _a.seed_password;
        this.runCommand('get_smart_wallet_info', { wallet_id: +wallet_id, seed_password: seed_password }, callback);
    };
    BackendService.prototype.getSeedPhraseInfo = function (param, callback) {
        this.runCommand('get_seed_phrase_info', param, callback);
    };
    BackendService.prototype.runWallet = function (wallet_id, callback) {
        this.runCommand('run_wallet', { wallet_id: +wallet_id }, callback);
    };
    BackendService.prototype.isValidRestoreWalletText = function (param, callback) {
        this.runCommand('is_valid_restore_wallet_text', param, callback);
    };
    BackendService.prototype.restoreWallet = function (path, pass, seed_phrase, seed_pass, callback) {
        var params = {
            seed_phrase: seed_phrase,
            path: path,
            pass: pass,
            seed_pass: seed_pass
        };
        this.runCommand('restore_wallet', params, callback);
    };
    BackendService.prototype.sendMoney = function (from_wallet_id, to_address, amount, fee, mixin, comment, hide, callback) {
        var params = {
            wallet_id: parseInt(from_wallet_id, 10),
            destinations: [
                {
                    address: to_address,
                    amount: amount
                }
            ],
            mixin_count: (mixin) ? parseInt(mixin, 10) : 0,
            lock_time: 0,
            fee: this.moneyToIntPipe.transform(fee),
            comment: comment,
            push_payer: !hide
        };
        this.asyncCall('transfer', params, callback);
    };
    BackendService.prototype.validateAddress = function (address, callback) {
        this.runCommand('validate_address', address, callback);
    };
    BackendService.prototype.setClipboard = function (str, callback) {
        return this.runCommand('set_clipboard', str, callback);
    };
    BackendService.prototype.getClipboard = function (callback) {
        return this.runCommand('get_clipboard', {}, callback);
    };
    BackendService.prototype.createProposal = function (wallet_id, title, comment, a_addr, b_addr, to_pay, a_pledge, b_pledge, time, payment_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            details: {
                t: title,
                c: comment,
                a_addr: a_addr,
                b_addr: b_addr,
                to_pay: this.moneyToIntPipe.transform(to_pay),
                a_pledge: this.moneyToIntPipe.transform(a_pledge),
                b_pledge: this.moneyToIntPipe.transform(b_pledge)
            },
            payment_id: payment_id,
            expiration_period: parseInt(time, 10) * 60 * 60,
            fee: this.variablesService.default_fee_big,
            b_fee: this.variablesService.default_fee_big
        };
        BackendService_1.Debug(1, params);
        this.runCommand('create_proposal', params, callback);
    };
    BackendService.prototype.getContracts = function (wallet_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10)
        };
        BackendService_1.Debug(1, params);
        this.runCommand('get_contracts', params, callback);
    };
    BackendService.prototype.acceptProposal = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_proposal', params, callback);
    };
    BackendService.prototype.releaseProposal = function (wallet_id, contract_id, release_type, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            release_type: release_type // "normal" or "burn"
        };
        BackendService_1.Debug(1, params);
        this.runCommand('release_contract', params, callback);
    };
    BackendService.prototype.requestCancelContract = function (wallet_id, contract_id, time, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id,
            fee: this.variablesService.default_fee_big,
            expiration_period: parseInt(time, 10) * 60 * 60
        };
        BackendService_1.Debug(1, params);
        this.runCommand('request_cancel_contract', params, callback);
    };
    BackendService.prototype.acceptCancelContract = function (wallet_id, contract_id, callback) {
        var params = {
            wallet_id: parseInt(wallet_id, 10),
            contract_id: contract_id
        };
        BackendService_1.Debug(1, params);
        this.runCommand('accept_cancel_contract', params, callback);
    };
    BackendService.prototype.getMiningHistory = function (wallet_id, callback) {
        this.runCommand('get_mining_history', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.startPosMining = function (wallet_id, callback) {
        this.runCommand('start_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.stopPosMining = function (wallet_id, callback) {
        this.runCommand('stop_pos_mining', { wallet_id: parseInt(wallet_id, 10) }, callback);
    };
    BackendService.prototype.openUrlInBrowser = function (url, callback) {
        this.runCommand('open_url_in_browser', url, callback);
    };
    BackendService.prototype.start_backend = function (node, host, port, callback) {
        var params = {
            configure_for_remote_node: node,
            remote_node_host: host,
            remote_node_port: parseInt(port, 10)
        };
        this.runCommand('start_backend', params, callback);
    };
    BackendService.prototype.getDefaultFee = function (callback) {
        this.runCommand('get_default_fee', {}, callback);
    };
    BackendService.prototype.setBackendLocalization = function (stringsArray, title, callback) {
        var params = {
            strings: stringsArray,
            language_title: title
        };
        this.runCommand('set_localization_strings', params, callback);
    };
    BackendService.prototype.registerAlias = function (wallet_id, alias, address, fee, comment, reward, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias,
                address: address,
                tracking_key: '',
                comment: comment
            },
            fee: this.moneyToIntPipe.transform(fee),
            reward: this.moneyToIntPipe.transform(reward)
        };
        this.runCommand('request_alias_registration', params, callback);
    };
    BackendService.prototype.updateAlias = function (wallet_id, alias, fee, callback) {
        var params = {
            wallet_id: wallet_id,
            alias: {
                alias: alias.name.replace('@', ''),
                address: alias.address,
                tracking_key: '',
                comment: alias.comment
            },
            fee: this.moneyToIntPipe.transform(fee)
        };
        this.runCommand('request_alias_update', params, callback);
    };
    BackendService.prototype.getAllAliases = function (callback) {
        this.runCommand('get_all_aliases', {}, callback);
    };
    BackendService.prototype.getAliasByName = function (value, callback) {
        return this.runCommand('get_alias_info_by_name', value, callback);
    };
    BackendService.prototype.getAliasByAddress = function (value, callback) {
        return this.runCommand('get_alias_info_by_address', value, callback);
    };
    BackendService.prototype.getAliasCoast = function (alias, callback) {
        this.runCommand('get_alias_coast', { v: alias }, callback);
    };
    BackendService.prototype.resyncWallet = function (id) {
        this.runCommand('resync_wallet', { wallet_id: id });
    };
    BackendService.prototype.getWalletAlias = function (address) {
        var _this = this;
        if (address !== null && this.variablesService.daemon_state === 2) {
            if (this.variablesService.aliasesChecked[address] == null) {
                this.variablesService.aliasesChecked[address] = {};
                if (this.variablesService.aliases.length) {
                    for (var i = 0, length_1 = this.variablesService.aliases.length; i < length_1; i++) {
                        if (i in this.variablesService.aliases && this.variablesService.aliases[i]['address'] === address) {
                            this.variablesService.aliasesChecked[address]['name'] = this.variablesService.aliases[i].name;
                            this.variablesService.aliasesChecked[address]['address'] = this.variablesService.aliases[i].address;
                            this.variablesService.aliasesChecked[address]['comment'] = this.variablesService.aliases[i].comment;
                            return this.variablesService.aliasesChecked[address];
                        }
                    }
                }
                this.getAliasByAddress(address, function (status, data) {
                    if (status) {
                        _this.variablesService.aliasesChecked[data.address]['name'] = '@' + data.alias;
                        _this.variablesService.aliasesChecked[data.address]['address'] = data.address;
                        _this.variablesService.aliasesChecked[data.address]['comment'] = data.comment;
                    }
                });
            }
            return this.variablesService.aliasesChecked[address];
        }
        return {};
    };
    BackendService.prototype.getContactAlias = function () {
        var _this = this;
        if (this.variablesService.contacts.length && this.variablesService.daemon_state === 2) {
            this.variablesService.contacts.map(function (contact) {
                _this.getAliasByAddress(contact.address, function (status, data) {
                    if (status) {
                        if (data.alias) {
                            contact.alias = '@' + data.alias;
                        }
                    }
                    else {
                        contact.alias = null;
                    }
                });
            });
        }
    };
    BackendService.prototype.getRecentTransfers = function (id, offset, count, exclude_mining_txs, callback) {
        var params = {
            wallet_id: id,
            offset: offset,
            count: count,
            exclude_mining_txs: exclude_mining_txs
        };
        this.runCommand('get_recent_transfers', params, callback);
    };
    BackendService.prototype.getPoolInfo = function (callback) {
        this.runCommand('get_tx_pool_info', {}, callback);
    };
    BackendService.prototype.getVersion = function (callback) {
        var _this = this;
        this.runCommand('get_version', {}, function (status, version) {
            _this.runCommand('get_network_type', {}, function (status_network, type) {
                callback(version, type);
            });
        });
    };
    BackendService.prototype.setLogLevel = function (level) {
        return this.runCommand('set_log_level', { v: level });
    };
    BackendService.prototype.asyncCall = function (command, params, callback) {
        return this.runCommand('async_call', [command, params], function (status, _a) {
            var job_id = _a.job_id;
            callback(job_id);
        });
    };
    BackendService.prototype.dispatchAsyncCallResult = function () {
        var _this = this;
        this.backendObject['dispatch_async_call_result'].connect(function (job_id, json_resp) {
            var asyncCommandResults = {
                job_id: +job_id,
                response: JSON.parse(json_resp)
            };
            _this.ngZone.run(function () { return _this.dispatchAsyncCallResult$.next(asyncCommandResults); });
        });
    };
    BackendService.prototype.handleCurrentActionState = function () {
        var _this = this;
        this.backendObject['handle_current_action_state']
            .connect(function (response) {
            var currentActionState = JSON.parse(response);
            _this.ngZone.run(function () { return _this.handleCurrentActionState$.next(currentActionState); });
        });
    };
    BackendService.prototype.setEnableTor = function (value) {
        return this.runCommand('set_enable_tor', { v: value });
    };
    BackendService.prototype.getOptions = function () {
        var _this = this;
        return this.runCommand('get_options', {}, function (status, _a) {
            var disable_price_fetch = _a.disable_price_fetch, use_debug_mode = _a.use_debug_mode;
            _this.variablesService.disable_price_fetch$.next(disable_price_fetch);
            _this.variablesService.use_debug_mode$.next(use_debug_mode);
        });
    };
    var BackendService_1;
    BackendService = BackendService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_5__["MoneyToIntPipe"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], BackendService);
    return BackendService;
}());

/*

      toggleAutoStart: function (value) {
        return this.runCommand('toggle_autostart', asVal(value));
      },

      getOptions: function (callback) {
        return this.runCommand('get_options', {}, callback);
      },

      isFileExist: function (path, callback) {
        return this.runCommand('is_file_exist', path, callback);
      },

      isAutoStartEnabled: function (callback) {
        this.runCommand('is_autostart_enabled', {}, function (status, data) {
          if (angular.isFunction(callback)) {
            callback('error_code' in data && data.error_code !== 'FALSE')
          }
        });
      },

      resetWalletPass: function (wallet_id, pass, callback) {
        this.runCommand('reset_wallet_password', {wallet_id: wallet_id, pass: pass}, callback);
      },



      getOsVersion: function (callback) {
        this.runCommand('get_os_version', {}, function (status, version) {
          callback(version)
        })
      },

      getLogFile: function (callback) {
        this.runCommand('get_log_file', {}, function (status, version) {
          callback(version)
        })
      },

      resync_wallet: function (wallet_id, callback) {
        this.runCommand('resync_wallet', {wallet_id: wallet_id}, callback);
      },

      storeFile: function (path, buff, callback) {
        this.backendObject['store_to_file'](path, (typeof buff === 'string' ? buff : JSON.stringify(buff)), function (data) {
          backendCallback(data, {}, callback, 'store_to_file');
        });
      },

      getMiningEstimate: function (amount_coins, time, callback) {
        var params = {
          "amount_coins": $filter('money_to_int')(amount_coins),
          "time": parseInt(time)
        };
        this.runCommand('get_mining_estimate', params, callback);
      },

      backupWalletKeys: function (wallet_id, path, callback) {
        var params = {
          "wallet_id": wallet_id,
          "path": path
        };
        this.runCommand('backup_wallet_keys', params, callback);
      },

      setBlockedIcon: function (enabled, callback) {
        var mode = (enabled) ? "blocked" : "normal";
        Service.runCommand('bool_toggle_icon', mode, callback);
      },

      getWalletInfo: function (wallet_id, callback) {
        this.runCommand('get_wallet_info', {wallet_id: wallet_id}, callback);
      },

      printText: function (content) {
        return this.runCommand('print_text', {html_text: content});
      },

      printLog: function (msg, log_level) {
        return this.runCommand('print_log', {msg: msg, log_level: log_level});
      },

*/


/***/ }),

/***/ "./src/app/_helpers/services/modal.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/modal.service.ts ***!
  \****************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/modal-container/modal-container.component */ "./src/app/_helpers/modals/modal-container/modal-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, appRef, injector, ngZone, translate) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this.ngZone = ngZone;
        this.translate = translate;
        this.components = [];
    }
    ModalService.prototype.prepareModal = function (type, message) {
        var _this = this;
        var length = this.components.push(this.componentFactoryResolver.resolveComponentFactory(_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponent"]).create(this.injector));
        this.components[length - 1].instance['type'] = type;
        this.components[length - 1].instance['message'] = message.length ? this.translate.instant(message) : '';
        this.components[length - 1].instance['close'].subscribe(function () {
            _this.removeModal(length - 1);
        });
        this.ngZone.run(function () {
            _this.appendModal(length - 1);
        });
    };
    ModalService.prototype.appendModal = function (index) {
        this.appRef.attachView(this.components[index].hostView);
        var domElem = this.components[index].hostView.rootNodes[0];
        document.body.appendChild(domElem);
    };
    ModalService.prototype.removeModal = function (index) {
        if (this.components[index]) {
            this.appRef.detachView(this.components[index].hostView);
            this.components[index].destroy();
            this.components.splice(index, 1);
        }
        else {
            var last = this.components.length - 1;
            this.appRef.detachView(this.components[last].hostView);
            this.components[last].destroy();
            this.components.splice(last, 1);
        }
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/pagination.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_helpers/services/pagination.service.ts ***!
  \*********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _pagination_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaginationService = /** @class */ (function () {
    function PaginationService(variables, ngZone, paginationStore) {
        this.variables = variables;
        this.ngZone = ngZone;
        this.paginationStore = paginationStore;
    }
    PaginationService.prototype.paginate = function (currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = 1; }
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > this.variables.currentWallet.totalPages) {
            currentPage = this.variables.currentWallet.totalPages;
        }
        var startPage, endPage;
        if (this.variables.currentWallet.totalPages <= this.variables.maxPages) {
            startPage = 1;
            endPage = this.variables.currentWallet.totalPages;
        }
        else {
            var maxPagesBeforeCurrentPage = Math.floor(this.variables.maxPages / 2);
            var maxPagesAfterCurrentPage = Math.ceil(this.variables.maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                this.variables.currentWallet.totalPages > this.variables.maxPages
                    ? endPage = this.variables.maxPages
                    : endPage = this.variables.currentWallet.totalPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= this.variables.currentWallet.totalPages) {
                startPage = this.variables.currentWallet.totalPages - this.variables.maxPages + 1;
                endPage = this.variables.currentWallet.totalPages;
            }
            else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        this.ngZone.run(function () {
            _this.variables.currentWallet.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        });
    };
    PaginationService.prototype.getOffset = function (walletID) {
        var mining = this.variables.currentWallet.exclude_mining_txs;
        var currentPage = (this.variables.currentWallet.currentPage);
        var offset = ((currentPage - 1) * this.variables.count);
        if (!mining) {
            return offset;
        }
        var value = this.paginationStore.value;
        var pages = value.filter(function (item) { return item.walletID === walletID; });
        if (pages && pages.length) {
            var max = lodash__WEBPACK_IMPORTED_MODULE_3__["maxBy"](pages, 'page');
            var isForward = this.paginationStore.isForward(pages, currentPage);
            if (isForward) {
                offset = max.offset;
            }
            else {
                var index = pages.findIndex(function (item) { return item.page === (currentPage); });
                offset = pages[index].offset;
            }
        }
        return offset;
    };
    PaginationService.prototype.calcPages = function (data) {
        if (data.total_history_items && (data && data.history)) {
            this.variables.currentWallet.totalPages = Math.ceil(data.total_history_items / this.variables.count);
            this.variables.currentWallet.totalPages > this.variables.maxPages
                ? this.variables.currentWallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                : this.variables.currentWallet.pages =
                    new Array(this.variables.currentWallet.totalPages).fill(1).map(function (value, index) { return value + index; });
        }
        else if (this.variables.currentWallet.restore) {
            this.variables.currentWallet.totalPages = Math.ceil(data.history.length / this.variables.count);
            this.variables.currentWallet.totalPages > this.variables.maxPages
                ? this.variables.currentWallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                : this.variables.currentWallet.pages =
                    new Array(this.variables.currentWallet.totalPages).fill(1).map(function (value, index) { return value + index; });
        }
    };
    PaginationService.prototype.prepareHistory = function (data, status) {
        var _this = this;
        if (status && (data && data.total_history_items)) {
            this.variables.currentWallet.history.splice(0, this.variables.currentWallet.history.length);
            this.ngZone.run(function () {
                _this.paginate(_this.variables.currentWallet.currentPage);
                if (data.history.length !== 0) {
                    _this.variables.currentWallet.restore = false;
                    _this.variables.currentWallet.total_history_item = data.total_history_items;
                    _this.variables.currentWallet.prepareHistory(data.history);
                    if (_this.variables.currentWallet.currentPage === 1 && data.unconfirmed) {
                        _this.variables.currentWallet.prepareHistory(data.unconfirmed);
                    }
                }
            });
        }
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _pagination_store__WEBPACK_IMPORTED_MODULE_2__["PaginationStore"]])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/pagination.store.ts":
/*!*******************************************************!*\
  !*** ./src/app/_helpers/services/pagination.store.ts ***!
  \*******************************************************/
/*! exports provided: PaginationStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationStore", function() { return PaginationStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationStore = /** @class */ (function () {
    function PaginationStore() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.pages$ = this.subject.asObservable();
    }
    PaginationStore.prototype.isForward = function (pages, currentPage) {
        var max = lodash__WEBPACK_IMPORTED_MODULE_2__["maxBy"](pages, 'page');
        return !max || max.page < currentPage || max.page === currentPage;
    };
    PaginationStore.prototype.setPage = function (pageNumber, offset, walletID) {
        var newPages = [];
        var pages = this.subject.getValue();
        if (pages && pages.length) {
            newPages = pages.slice(0);
        }
        newPages.push({ page: pageNumber, offset: offset, walletID: walletID });
        this.subject.next(newPages);
    };
    Object.defineProperty(PaginationStore.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    PaginationStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationStore);
    return PaginationStore;
}());



/***/ }),

/***/ "./src/app/_helpers/services/utils.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_helpers/services/utils.service.ts ***!
  \****************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getMinWidthByScale = function (scale) {
        switch (scale) {
            case 6: return 800;
            case 8: return 1100;
            case 10: return 1400;
            case 12: return 1700;
            default: return 1100;
        }
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/_helpers/services/variables.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/services/variables.service.ts ***!
  \********************************************************/
/*! exports provided: VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var idlejs_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idlejs/dist */ "./node_modules/idlejs/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VariablesService = /** @class */ (function () {
    function VariablesService(router, ngZone, contextMenuService) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this.contextMenuService = contextMenuService;
        this.disable_price_fetch$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.use_debug_mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.request_on_in = {};
        this.stop_paginate = {};
        this.sync_started = false;
        this.digits = 12;
        this.appPass = '';
        this.appLogin = false;
        this.moneyEquivalent = 0;
        this.moneyEquivalentPercent = 0;
        this.defaultCurrency = 'CHN';
        this.exp_med_ts = 0;
        this.net_time_delta_median = 0;
        this.height_app = 0;
        this.height_max = 0;
        this.downloaded = 0;
        this.total = 0;
        this.last_build_available = '';
        this.last_build_displaymode = 0;
        this.daemon_state = 3;
        this.deeplink$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.sendActionData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.sync = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.download = {
            progress_value: 0,
            progress_value_text: '0'
        };
        this.get_recent_transfers = false; // avoid of execute function before collback complete
        this.default_fee = '0.010000000000';
        this.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"]('10000000000');
        this.settings = {
            appLockTime: 15,
            appLog: 0,
            scale: 8,
            appUseTor: false,
            language: 'en',
            default_path: '/',
            viewedContracts: [],
            notViewedContracts: [],
            wallets: []
        };
        this.count = 40;
        this.maxPages = 5;
        this.testnet = false;
        this.networkType = ''; // testnet of mainnet
        this.wallets = [];
        this.aliases = [];
        this.aliasesChecked = {};
        this.enableAliasSearch = false;
        this.maxWalletNameLength = 25;
        this.maxCommentLength = 255;
        this.dataIsLoaded = false;
        this.contacts = [];
        this.newContact = { name: null, address: null, notes: null };
        this.pattern = '^[a-zA-Z0-9_.\\\]\*\|\~\!\?\@\#\$\%\^\&\+\{\}\(\)\<\>\:\;\"\'\-\=\/\,\[\\\\]*$';
        this.after_sync_request = {};
        this.getExpMedTsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getHeightMaxEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getDownloadedAppEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getTotalEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getRefreshStackingEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getAliasChangedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.idle = new idlejs_dist__WEBPACK_IMPORTED_MODULE_2__["Idle"]()
            .whenNotInteractive()
            .do(function () {
            if (_this.appPass === '') {
                _this.restartCountdown();
            }
            else {
                _this.ngZone.run(function () {
                    _this.idle.stop();
                    _this.appPass = '';
                    _this.appLogin = false;
                    _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                });
            }
        });
    }
    VariablesService.prototype.setExpMedTs = function (timestamp) {
        if (timestamp !== this.exp_med_ts) {
            this.exp_med_ts = timestamp;
            this.getExpMedTsEvent.next(timestamp);
        }
    };
    VariablesService.prototype.setHeightApp = function (height) {
        if (height !== this.height_app) {
            this.height_app = height;
            this.getHeightAppEvent.next(height);
        }
    };
    VariablesService.prototype.setHeightMax = function (height) {
        if (height !== this.height_max) {
            this.height_max = height;
            this.getHeightMaxEvent.next(height);
        }
    };
    VariablesService.prototype.setDownloadedBytes = function (bytes) {
        if (bytes !== this.downloaded) {
            this.downloaded = this.bytesToMb(bytes);
            this.getDownloadedAppEvent.next(bytes);
        }
    };
    VariablesService.prototype.setTotalBytes = function (bytes) {
        if (bytes !== this.total) {
            this.total = this.bytesToMb(bytes);
            this.getTotalEvent.next(bytes);
        }
    };
    VariablesService.prototype.setRefreshStacking = function (wallet_id) {
        this.getHeightAppEvent.next(wallet_id);
    };
    VariablesService.prototype.changeAliases = function () {
        this.getAliasChangedEvent.next(true);
    };
    VariablesService.prototype.setCurrentWallet = function (id) {
        var _this = this;
        this.wallets.forEach(function (wallet) {
            if (wallet.wallet_id === id) {
                _this.currentWallet = wallet;
            }
        });
    };
    VariablesService.prototype.getWallet = function (id) {
        for (var i = 0; i < this.wallets.length; i++) {
            if (this.wallets[i].wallet_id === id) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.getNotLoadedWallet = function () {
        for (var i = 0; i < this.wallets.length; i++) {
            if (!this.wallets[i].loaded) {
                return this.wallets[i];
            }
        }
        return null;
    };
    VariablesService.prototype.startCountdown = function () {
        this.idle.within(this.settings.appLockTime).start();
    };
    VariablesService.prototype.stopCountdown = function () {
        this.idle.stop();
    };
    VariablesService.prototype.restartCountdown = function () {
        this.idle.within(this.settings.appLockTime).restart();
    };
    VariablesService.prototype.bytesToMb = function (bytes) {
        return Number((bytes / Math.pow(1024, 2)).toFixed(1));
    };
    VariablesService.prototype.onContextMenu = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.allContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService.prototype.onContextMenuOnlyCopy = function ($event, copyText) {
        this.contextMenuService.show.next({
            contextMenu: this.onlyCopyContextMenu,
            event: $event,
            item: copyText
        });
        $event.preventDefault();
        $event.stopPropagation();
    };
    VariablesService.prototype.onContextMenuPasteSelect = function ($event) {
        $event.target['contextSelectionStart'] = $event.target['selectionStart'];
        $event.target['contextSelectionEnd'] = $event.target['selectionEnd'];
        console.warn($event.target);
        console.warn($event.target['disabled']);
        if ($event.target && ($event.target['nodeName'].toUpperCase() === 'TEXTAREA' || $event.target['nodeName'].toUpperCase() === 'INPUT') && !$event.target['readOnly']) {
            this.contextMenuService.show.next({
                contextMenu: this.pasteSelectContextMenu,
                event: $event,
                item: $event.target,
            });
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    VariablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenuService"]])
    ], VariablesService);
    return VariablesService;
}());



/***/ }),

/***/ "./src/app/_shared/constants.ts":
/*!**************************************!*\
  !*** ./src/app/_shared/constants.ts ***!
  \**************************************/
/*! exports provided: MIXIN, RCV_ADDR_QR_SCALE, AUDITABLE_WALLET_HELP_PAGE, CREATE_NEW_WALLET_HELP_PAGE, LOCKED_BALANCE_HELP_PAGE, DOWNLOADS_PAGE_URL, BLOCK_EXPLORER_TX_URL_PREFIX, BLOCK_EXPLORER_TN_TX_URL_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIXIN", function() { return MIXIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RCV_ADDR_QR_SCALE", function() { return RCV_ADDR_QR_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUDITABLE_WALLET_HELP_PAGE", function() { return AUDITABLE_WALLET_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_NEW_WALLET_HELP_PAGE", function() { return CREATE_NEW_WALLET_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED_BALANCE_HELP_PAGE", function() { return LOCKED_BALANCE_HELP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADS_PAGE_URL", function() { return DOWNLOADS_PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_EXPLORER_TX_URL_PREFIX", function() { return BLOCK_EXPLORER_TX_URL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_EXPLORER_TN_TX_URL_PREFIX", function() { return BLOCK_EXPLORER_TN_TX_URL_PREFIX; });
var MIXIN = 10; // default mixin value
var RCV_ADDR_QR_SCALE = 1.5; // scale factor for QR code
var AUDITABLE_WALLET_HELP_PAGE = 'docs.chinet.io/docs/auditable-wallets';
var CREATE_NEW_WALLET_HELP_PAGE = 'docs.chinet.io/docs/getting-started-1#section-create-new-wallet';
var LOCKED_BALANCE_HELP_PAGE = 'docs.chinet.io/docs/locked-balance';
var DOWNLOADS_PAGE_URL = 'chinet.io/downloads.html';
var BLOCK_EXPLORER_TX_URL_PREFIX = 'explorer.chinet.io/transaction/';
var BLOCK_EXPLORER_TN_TX_URL_PREFIX = 'testnet-explorer.chinet.io/transaction/';


/***/ }),

/***/ "./src/app/_shared/directives/disable-price-fetch/disable-price-fetch.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/_shared/directives/disable-price-fetch/disable-price-fetch.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: DisablePriceFetchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisablePriceFetchDirective", function() { return DisablePriceFetchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisablePriceFetchDirective = /** @class */ (function () {
    function DisablePriceFetchDirective(_variablesService, _templateRef, _viewContainer) {
        var _this = this;
        this._variablesService = _variablesService;
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._variablesService.disable_price_fetch$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$)).subscribe(function (disable_price_fetch) {
            return !disable_price_fetch ? _this._viewContainer.createEmbeddedView(_this._templateRef) : _this._viewContainer.clear();
        });
    }
    DisablePriceFetchDirective.prototype.ngOnDestroy = function () {
        this._destroy$.next();
    };
    DisablePriceFetchDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDisablePriceFetch]'
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], DisablePriceFetchDirective);
    return DisablePriceFetchDirective;
}());



/***/ }),

/***/ "./src/app/_shared/directives/disable-price-fetch/disable-price-fetch.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/_shared/directives/disable-price-fetch/disable-price-fetch.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DisablePriceFetchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisablePriceFetchModule", function() { return DisablePriceFetchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _disable_price_fetch_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disable-price-fetch.directive */ "./src/app/_shared/directives/disable-price-fetch/disable-price-fetch.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DisablePriceFetchModule = /** @class */ (function () {
    function DisablePriceFetchModule() {
    }
    DisablePriceFetchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_disable_price_fetch_directive__WEBPACK_IMPORTED_MODULE_2__["DisablePriceFetchDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_disable_price_fetch_directive__WEBPACK_IMPORTED_MODULE_2__["DisablePriceFetchDirective"]]
        })
    ], DisablePriceFetchModule);
    return DisablePriceFetchModule;
}());



/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div class=\"head\">\r\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.ADD_CONTACT' | translate }}</h3>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <form class=\"form-add\" [formGroup]=\"addContactForm\" (ngSubmit)=\"add()\">\r\n    <div class=\"input-block input-block-name\">\r\n      <label for=\"add-name\">{{ 'CONTACTS.FORM.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"add-name\"\r\n        [class.required-error]=\"addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched\"\r\n        [placeholder]=\"addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched ? ('CONTACTS.FORM_ERRORS.NAME_REQUIRED' | translate) : ('PLACEHOLDERS.NAME_PLACEHOLDER' | translate)\"\r\n        formControlName=\"name\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"addContactForm.controls['name'].invalid && !addContactForm.controls['name'].errors['required'] && (addContactForm.controls['name'].dirty || addContactForm.controls['name'].touched)\">\r\n        <div\r\n          *ngIf=\"addContactForm.controls['name'].errors['minlength'] || addContactForm.controls['name'].errors['maxlength']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_LENGTH' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['name'].errors['dublicated']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.NAME_DUBLICATED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block input-block-alias\">\r\n      <label for=\"address\">{{ 'CONTACTS.FORM.ADDRESS' | translate }}</label>\r\n\r\n      <input type=\"text\" id=\"address\"\r\n        [class.required-error]=\"addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched\"\r\n        [placeholder]=\"addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched ? ('CONTACTS.FORM_ERRORS.ADDRESS_REQUIRED' | translate) : ('PLACEHOLDERS.ADRESS_PLACEHOLDER' | translate)\"\r\n        formControlName=\"address\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n\r\n      <div class=\"error-block\"\r\n        *ngIf=\"addContactForm.controls['address'].invalid && !addContactForm.controls['address'].errors['required'] && (addContactForm.controls['address'].dirty || addContactForm.controls['address'].touched)\">\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['address_not_valid']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\r\n        </div>\r\n        <div *ngIf=\"addContactForm.controls['address'].errors['dublicated']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.ADDRESS_DUBLICATED' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block input-block-notes\">\r\n      <label for=\"notes\">{{ 'CONTACTS.FORM.NOTES' | translate }}</label>\r\n\r\n      <input type=\"text\" id=\"notes\" placeholder=\"{{ 'PLACEHOLDERS.NOTES_PLACEHOLDER' | translate }}\"\r\n        formControlName=\"notes\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\" *ngIf=\"addContactForm.controls['notes'].invalid\">\r\n        <div *ngIf=\"addContactForm.controls['notes'].errors['maxLength']\">\r\n          {{ 'CONTACTS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"blue-button\" [disabled]=\"!addContactForm.valid\">{{ 'CONTACTS.BUTTON.ADD_EDIT' |\r\n      translate }}</button>\r\n\r\n    <app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"addContactForm\" (confirmed)=\"confirmed($event)\">\r\n    </app-send-modal>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.form-add {\n  margin-top: 3rem; }\n\n.form-add .input-block-name {\n    width: 50%; }\n\n.form-add button {\n    margin-top: 3rem;\n    height: 7rem;\n    width: 25.6rem;\n    max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWNvbnRhY3RzL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcYWRkLWNvbnRhY3RzXFxhZGQtY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBSUksVUFBVSxFQUFBOztBQUpkO0lBUUksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtY29udGFjdHMvYWRkLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG59XHJcblxyXG4uZm9ybS1hZGQge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcblxyXG4gIC5pbnB1dC1ibG9jay1uYW1lIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICAgIHdpZHRoOiAyNS42cmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/add-contacts/add-contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-contacts/add-contacts.component.ts ***!
  \********************************************************/
/*! exports provided: AddContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactsComponent", function() { return AddContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddContactsComponent = /** @class */ (function () {
    function AddContactsComponent(route, backend, variablesService, modalService, ngZone, location) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.addContactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    if (g.value) {
                        _this.backend.validateAddress(g.value, function (valid_status) {
                            _this.ngZone.run(function () {
                                if (valid_status === false) {
                                    g.setErrors(Object.assign({ address_not_valid: true }, g.errors));
                                }
                                else {
                                    if (g.hasError('address_not_valid')) {
                                        delete g.errors['address_not_valid'];
                                        if (Object.keys(g.errors).length === 0) {
                                            g.setErrors(null);
                                        }
                                    }
                                }
                            });
                        });
                        return g.hasError('address_not_valid')
                            ? { address_not_valid: true }
                            : null;
                    }
                    return null;
                },
                function (g) {
                    var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === g.value; });
                    if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                        return { dublicated: true };
                    }
                    return null;
                }
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                function (g) {
                    if (g.value) {
                        if (g.value.length > _this.variablesService.maxCommentLength) {
                            return { maxLength: true };
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        return null;
                    }
                }
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                function (g) {
                    if (g.value) {
                        var isDublicated = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === g.value.trim(); });
                        if (isDublicated !== -1 && !(_this.id === isDublicated)) {
                            return { dublicated: true };
                        }
                        return null;
                    }
                }
            ])
        });
    }
    AddContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.id) {
                _this.id = parseInt(params.id, 10);
                _this.addContactForm.reset({
                    name: _this.variablesService.contacts[params.id]['name'],
                    address: _this.variablesService.contacts[params.id]['address'],
                    notes: _this.variablesService.contacts[params.id]['notes']
                });
            }
            else {
                _this.addContactForm.reset({
                    name: _this.variablesService.newContact['name'],
                    address: _this.variablesService.newContact['address'],
                    notes: _this.variablesService.newContact['notes']
                });
            }
        });
    };
    AddContactsComponent.prototype.add = function () {
        var _this = this;
        if (!this.variablesService.appPass) {
            this.modalService.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
        else {
            if (this.addContactForm.valid) {
                this.backend.validateAddress(this.addContactForm.get('address').value, function (valid_status) {
                    if (valid_status === false) {
                        _this.ngZone.run(function () {
                            _this.addContactForm
                                .get('address')
                                .setErrors({ address_not_valid: true });
                        });
                    }
                    else {
                        if (_this.id || _this.id === 0) {
                            _this.variablesService.contacts.forEach(function (contact, index) {
                                if (index === _this.id) {
                                    contact.name = _this.addContactForm.get('name').value.trim();
                                    contact.address = _this.addContactForm.get('address').value;
                                    contact.notes =
                                        _this.addContactForm.get('notes').value || '';
                                }
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SAVE');
                        }
                        else {
                            _this.variablesService.contacts.push({
                                name: _this.addContactForm.get('name').value.trim(),
                                address: _this.addContactForm.get('address').value,
                                notes: _this.addContactForm.get('notes').value || ''
                            });
                            _this.backend.storeSecureAppData();
                            _this.backend.getContactAlias();
                            _this.modalService.prepareModal('success', 'CONTACTS.SUCCESS_SENT');
                            _this.variablesService.newContact = {
                                name: null,
                                address: null,
                                notes: null
                            };
                            _this.addContactForm.reset();
                        }
                    }
                });
            }
        }
    };
    AddContactsComponent.prototype.confirmed = function () {
    };
    AddContactsComponent.prototype.back = function () {
        this.location.back();
    };
    AddContactsComponent.prototype.ngOnDestroy = function () {
        if (!(this.id || this.id === 0)) {
            this.variablesService.newContact = {
                name: this.addContactForm.get('name').value,
                address: this.addContactForm.get('address').value,
                notes: this.addContactForm.get('notes').value
            };
        }
        this.queryRouting.unsubscribe();
    };
    AddContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contacts',
            template: __webpack_require__(/*! ./add-contacts.component.html */ "./src/app/add-contacts/add-contacts.component.html"),
            styles: [__webpack_require__(/*! ./add-contacts.component.scss */ "./src/app/add-contacts/add-contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AddContactsComponent);
    return AddContactsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
/* harmony import */ var _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./deeplink/deeplink.component */ "./src/app/deeplink/deeplink.component.ts");
/* harmony import */ var _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contracts/contracts-tab/contracts-tab.component */ "./src/app/contracts/contracts-tab/contracts-tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components


























var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'wallet',
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"],
        children: [
            {
                path: 'send',
                component: _send_send_component__WEBPACK_IMPORTED_MODULE_5__["SendComponent"]
            },
            {
                path: 'receive',
                component: _receive_receive_component__WEBPACK_IMPORTED_MODULE_6__["ReceiveComponent"]
            },
            {
                path: 'history',
                component: _history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"]
            },
            {
                path: 'contracts',
                component: _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_27__["ContractsTabComponent"],
                children: [
                    {
                        path: '',
                        component: _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_8__["ContractsComponent"],
                    },
                    {
                        path: 'purchase',
                        component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
                    },
                    {
                        path: 'purchase/:id',
                        component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseComponent"]
                    },
                    {
                        path: '**', redirectTo: '',
                    },
                ]
            },
            {
                path: 'messages',
                component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
            },
            {
                path: 'messages/:id',
                component: _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_11__["TypingMessageComponent"],
            },
            {
                path: 'staking',
                component: _staking_staking_component__WEBPACK_IMPORTED_MODULE_12__["StakingComponent"]
            },
            {
                path: '',
                redirectTo: 'history',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'create',
        component: _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_14__["CreateWalletComponent"]
    },
    {
        path: 'open',
        component: _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_15__["OpenWalletComponent"]
    },
    {
        path: 'restore',
        component: _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_16__["RestoreWalletComponent"]
    },
    {
        path: 'seed-phrase',
        component: _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_17__["SeedPhraseComponent"]
    },
    {
        path: 'details',
        component: _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_18__["WalletDetailsComponent"]
    },
    {
        path: 'assign-alias',
        component: _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_19__["AssignAliasComponent"]
    },
    {
        path: 'edit-alias',
        component: _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_20__["EditAliasComponent"]
    },
    {
        path: 'transfer-alias',
        component: _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_21__["TransferAliasComponent"]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_22__["ContactsComponent"]
    },
    {
        path: 'add-contacts',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__["AddContactsComponent"]
    },
    {
        path: 'edit-contacts/:id',
        component: _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_23__["AddContactsComponent"]
    },
    {
        path: 'contact-send/:id',
        component: _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_24__["ContactSendComponent"]
    },
    {
        path: 'import',
        component: _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_25__["ExportImportComponent"]
    },
    {
        path: 'deeplink',
        component: _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_26__["DeeplinkComponent"]
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar *ngIf=\"variablesService.appLogin\"></app-sidebar>\r\n\r\n<div class=\"app-content scrolled-content\">\r\n  <router-outlet *ngIf=\"[0, 1, 2, 6].indexOf(variablesService.daemon_state) !== -1\"></router-outlet>\r\n  <div class=\"preloader\" *ngIf=\"[3, 4, 5].indexOf(variablesService.daemon_state) !== -1\">\r\n    <span *ngIf=\"variablesService.daemon_state === 3\">{{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}</span>\r\n    <span *ngIf=\"variablesService.daemon_state === 4\">{{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}</span>\r\n    <span *ngIf=\"variablesService.daemon_state === 5\">{{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}</span>\r\n    <span class=\"loading-bar\"></span>\r\n  </div>\r\n</div>\r\n<context-menu #allContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n<context-menu #onlyCopyContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuOnlyCopy($event.item)\">{{ 'CONTEXT_MENU.COPY' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n<context-menu #pasteSelectContextMenu>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuPaste($event.item)\">{{ 'CONTEXT_MENU.PASTE' | translate }}</ng-template>\r\n  <ng-template contextMenuItem (execute)=\"contextMenuSelect($event.item)\">{{ 'CONTEXT_MENU.SELECT' | translate }}</ng-template>\r\n</context-menu>\r\n\r\n\r\n<app-open-wallet-modal *ngIf=\"needOpenWallets.length\" [wallets]=\"needOpenWallets\"></app-open-wallet-modal>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n* Implementation of themes\r\n*/\n.app-content {\n  display: flex;\n  overflow-x: overlay;\n  overflow-y: hidden;\n  width: 100%; }\n.app-content .preloader {\n    align-self: center;\n    color: #fff;\n    font-size: 2rem;\n    margin: 0 auto;\n    text-align: center;\n    width: 50%; }\n.app-content .preloader .loading-bar {\n      display: block;\n      -webkit-animation: move 5s linear infinite;\n              animation: move 5s linear infinite;\n      background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n      background-size: 10rem 10rem;\n      margin-top: 2rem;\n      width: 100%;\n      height: 1rem; }\n@-webkit-keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n@keyframes move {\n  0% {\n    background-position: 100% -10rem; }\n  100% {\n    background-position: 100% 10rem; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXNzZXRzXFxzY3NzXFxiYXNlXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVBOztDQzVFQztBQ0FEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBSmI7SUFPSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtBQVpkO01BZU0sY0FBYztNQUNkLDBDQUFrQztjQUFsQyxrQ0FBa0M7TUFDbEMsK2xDQXNCRztNQUNILDRCQUE0QjtNQUM1QixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTtBQUloQjtFQUNFO0lBQ0UsZ0NBQWdDLEVBQUE7RUFFbEM7SUFDRSwrQkFBK0IsRUFBQSxFQUFBO0FBTG5DO0VBQ0U7SUFDRSxnQ0FBZ0MsRUFBQTtFQUVsQztJQUNFLCtCQUErQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdGV4dC10cnVuY2F0ZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbkBtaXhpbiB0ZXh0V3JhcCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgbGluZS1icmVhazogc3RyaWN0O1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcbkBtaXhpbiBjb3ZlckJveCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5AbWl4aW4gYWJzICgkdG9wOiBhdXRvLCAkcmlnaHQ6IGF1dG8sICRib3R0b206IGF1dG8sICRsZWZ0OiBhdXRvKSB7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG4gIGxlZnQ6ICRsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5AbWl4aW4gY292ZXJJbWcge1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG59XHJcbkBtaXhpbiB2YWxpbmdCb3gge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6ICA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbkBtaXhpbiB1blNlbGVjdCB7XHJcblx0LXdlYmtpdC10b3VjaC1jb2xsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbkBtaXhpbiBtYXgxMTk5IHsgLy8gbWFrZXQgMTE3MVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbWF4MTE3MCB7IC8vIG1ha2V0cyA5OTJcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE3MHB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIG1heDk5MSB7IC8vIG1ha2V0cyA3NjJcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHsgQGNvbnRlbnQ7IH1cclxufVxyXG5AbWl4aW4gbWF4NzYxIHsgLy8gbWFrZXRzIDU3NlxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjFweCkgeyBAY29udGVudDsgfVxyXG59XHJcbkBtaXhpbiBtYXg1NzUgeyAvLyBtYWtldHMgNDAwXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIG1vYmlsZSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OXB4KSB7IEBjb250ZW50OyB9XHJcbn1cclxuQG1peGluIGljb0NlbnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5AbWl4aW4gcHNldWRvICgkZGlzcGxheTogYmxvY2ssICRwb3M6IGFic29sdXRlLCAkY29udGVudDogJycpe1xyXG4gIGNvbnRlbnQ6ICRjb250ZW50O1xyXG4gIGRpc3BsYXk6ICRkaXNwbGF5O1xyXG4gIHBvc2l0aW9uOiAkcG9zO1xyXG59XHJcblxyXG4vKlxyXG4qIEltcGxlbWVudGF0aW9uIG9mIHRoZW1lc1xyXG4qL1xyXG5AbWl4aW4gdGhlbWlmeSgkdGhlbWVzOiAkdGhlbWVzKSB7XHJcbiAgQGVhY2ggJHRoZW1lLCAkbWFwIGluICR0aGVtZXMge1xyXG4gICAgLnRoZW1lLSN7JHRoZW1lfSAmIHtcclxuICAgICAgJHRoZW1lLW1hcDogKCkgIWdsb2JhbDtcclxuICAgICAgQGVhY2ggJGtleSwgJHN1Ym1hcCBpbiAkbWFwIHtcclxuICAgICAgICAkdmFsdWU6IG1hcC1nZXQobWFwLWdldCgkdGhlbWVzLCAkdGhlbWUpLCAnI3ska2V5fScpO1xyXG4gICAgICAgICR0aGVtZS1tYXA6IG1hcC1tZXJnZSgkdGhlbWUtbWFwLCAoJGtleTogJHZhbHVlKSkgIWdsb2JhbDtcclxuICAgICAgfVxyXG4gICAgICBAY29udGVudDtcclxuICAgICAgJHRoZW1lLW1hcDogbnVsbCAhZ2xvYmFsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGZ1bmN0aW9uIHRoZW1lZCgka2V5KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZS1tYXAsICRrZXkpO1xyXG59XHJcbiIsIi8qXHJcbiogSW1wbGVtZW50YXRpb24gb2YgdGhlbWVzXHJcbiovXG4uYXBwLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBvdmVybGF5O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5hcHAtY29udGVudCAucHJlbG9hZGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlOyB9XG4gICAgLmFwcC1jb250ZW50IC5wcmVsb2FkZXIgLmxvYWRpbmctYmFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYW5pbWF0aW9uOiBtb3ZlIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDEwMCUgMTAwJSwgY29sb3Itc3RvcCgwLjEyNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC4xMjUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjM3NSwgcmdiYSgwLCAwLCAwLCAwLjEpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksIGNvbG9yLXN0b3AoMC42MjUsIHJnYmEoMCwgMCwgMCwgMC4xNSkpLCBjb2xvci1zdG9wKDAuNjI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksIGNvbG9yLXN0b3AoMC44NzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKDAuMTI1LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuMTI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuMjUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuMzc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjg3NSwgcmdiYSgwLCAwLCAwLCAwLjI1KSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTByZW0gMTByZW07XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDFyZW07IH1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgLTEwcmVtOyB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTByZW07IH0gfVxuIiwiQGltcG9ydCAnfnNyYy9hc3NldHMvc2Nzcy9iYXNlL21peGlucyc7XHJcblxyXG4uYXBwLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteDogb3ZlcmxheTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5wcmVsb2FkZXIge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgLmxvYWRpbmctYmFyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGFuaW1hdGlvbjogbW92ZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgLXdlYmtpdC1ncmFkaWVudChcclxuICAgICAgICAgICAgbGluZWFyLCAwIDAsIDEwMCUgMTAwJSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguMTI1LCByZ2JhKDAsIDAsIDAsIC4xNSkpLCBjb2xvci1zdG9wKC4xMjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguMjUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjI1MCwgcmdiYSgwLCAwLCAwLCAuMTApKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguMzc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC4zNzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguNTAwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUwMCwgcmdiYSgwLCAwLCAwLCAuMTUpKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguNjI1LCByZ2JhKDAsIDAsIDAsIC4xNSkpLCBjb2xvci1zdG9wKC42MjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguNzUwLCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjc1MCwgcmdiYSgwLCAwLCAwLCAuMTApKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCguODc1LCByZ2JhKDAsIDAsIDAsIC4xMCkpLCBjb2xvci1zdG9wKC44NzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXHJcbiAgICAgICAgKSxcclxuICAgICAgICAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgICAgICAgICBsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4xMjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjEyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4yNTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguMjUwLCByZ2JhKDAsIDAsIDAsIC4yNSkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC4zNzUsIHJnYmEoMCwgMCwgMCwgLjI1KSksIGNvbG9yLXN0b3AoLjM3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC41MDAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNTAwLCByZ2JhKDAsIDAsIDAsIC4zMCkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC42MjUsIHJnYmEoMCwgMCwgMCwgLjMwKSksIGNvbG9yLXN0b3AoLjYyNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC43NTAsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNzUwLCByZ2JhKDAsIDAsIDAsIC4yNSkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKC44NzUsIHJnYmEoMCwgMCwgMCwgLjI1KSksIGNvbG9yLXN0b3AoLjg3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICB0byh0cmFuc3BhcmVudClcclxuICAgICAgICApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcmVtIDEwcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBtb3ZlIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAtMTByZW07XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/services/utils.service */ "./src/app/_helpers/services/utils.service.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function AppComponent(http, renderer, translate, backend, router, variablesService, ngZone, intToMoneyPipe, modalService, utilsService, store) {
        var _this = this;
        this.http = http;
        this.renderer = renderer;
        this.translate = translate;
        this.backend = backend;
        this.router = router;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.modalService = modalService;
        this.utilsService = utilsService;
        this.store = store;
        this.onQuitRequest = false;
        this.firstOnlineState = false;
        this.translateUsed = false;
        this.needOpenWallets = [];
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        translate.addLangs(['en', 'fr', 'de', 'it', 'pt']);
        translate.setDefaultLang('en');
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        translate.use('en').subscribe(function () {
            _this.translateUsed = true;
        });
    }
    AppComponent.prototype.setBackendLocalization = function () {
        var _this = this;
        if (this.translateUsed) {
            var stringsArray = [
                this.translate.instant('BACKEND_LOCALIZATION.QUIT'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_RECEIVED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_UNCONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.INCOME_TRANSFER_CONFIRMED'),
                this.translate.instant('BACKEND_LOCALIZATION.MINED'),
                this.translate.instant('BACKEND_LOCALIZATION.LOCKED'),
                this.translate.instant('BACKEND_LOCALIZATION.IS_MINIMIZE'),
                this.translate.instant('BACKEND_LOCALIZATION.RESTORE'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_SHOW'),
                this.translate.instant('BACKEND_LOCALIZATION.TRAY_MENU_MINIMIZE')
            ];
            this.backend.setBackendLocalization(stringsArray, this.variablesService.settings.language);
        }
        else {
            console.warn('wait translate use');
            setTimeout(function () {
                _this.setBackendLocalization();
            }, 10000);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variablesService.allContextMenu = this.allContextMenu;
        this.variablesService.onlyCopyContextMenu = this.onlyCopyContextMenu;
        this.backend.initService().subscribe(function (initMessage) {
            console.log('Init message: ', initMessage);
            _this.backend.getOptions();
            _this.backend.webkitLaunchedScript();
            _this.backend.start_backend(false, '127.0.0.1', 11512, function (st2, dd2) {
                console.log(st2, dd2);
            });
            _this.backend.eventSubscribe('quit_requested', function () {
                if (!_this.onQuitRequest) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                    _this.needOpenWallets = [];
                    _this.variablesService.daemon_state = 5;
                    var saveFunction_1 = function () {
                        _this.backend.storeAppData(function () {
                            var recursionCloseWallets = function () {
                                if (_this.variablesService.wallets.length) {
                                    var lastIndex_1 = _this.variablesService.wallets.length - 1;
                                    _this.backend.closeWallet(_this.variablesService.wallets[lastIndex_1].wallet_id, function () {
                                        _this.variablesService.wallets.splice(lastIndex_1, 1);
                                        recursionCloseWallets();
                                    });
                                }
                                else {
                                    _this.backend.quitRequest();
                                }
                            };
                            recursionCloseWallets();
                        });
                    };
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData(function () {
                            saveFunction_1();
                        });
                    }
                    else {
                        saveFunction_1();
                    }
                }
                _this.onQuitRequest = true;
            });
            _this.backend.eventSubscribe('update_wallet_status', function (data) {
                console.log('----------------- update_wallet_status -----------------');
                console.log(data);
                var wallet_state = data.wallet_state;
                var is_mining = data.is_mining;
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                // 1-synch, 2-ready, 3 - error
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.loaded = false;
                        wallet.staking = is_mining;
                        if (wallet_state === 2) { // ready
                            wallet.loaded = true;
                        }
                        if (wallet_state === 3) { // error
                            // wallet.error = true;
                        }
                        wallet.balance = data.balance;
                        wallet.unlocked_balance = data.unlocked_balance;
                        wallet.mined_total = data.minied_total;
                        wallet.alias_available = data.is_alias_operations_available;
                    });
                }
            });
            _this.backend.eventSubscribe('wallet_sync_progress', function (data) {
                console.log('----------------- wallet_sync_progress -----------------');
                console.log(data);
                var wallet = _this.variablesService.getWallet(data.wallet_id);
                if (wallet) {
                    _this.ngZone.run(function () {
                        wallet.progress = (data.progress < 0) ? 0 : ((data.progress > 100) ? 100 : data.progress);
                        if (!_this.variablesService.sync_started) {
                            _this.variablesService.sync_started = true;
                        }
                        _this.addToStore(wallet, true); // subscribe on data
                        if (wallet.progress === 0) {
                            wallet.loaded = false;
                        }
                        else if (wallet.progress === 100) {
                            wallet.loaded = true;
                            _this.addToStore(wallet, false);
                            _this.variablesService.sync_started = false;
                        }
                    });
                }
            });
            _this.backend.eventSubscribe('update_daemon_state', function (data) {
                console.log('----------------- update_daemon_state -----------------');
                console.log('DAEMON:' + data.daemon_network_state);
                console.log(data);
                // this.variablesService.exp_med_ts = data['expiration_median_timestamp'] + 600 + 1;
                _this.variablesService.setExpMedTs(data['expiration_median_timestamp'] + 600 + 1);
                _this.variablesService.net_time_delta_median = data.net_time_delta_median;
                _this.variablesService.last_build_available = data.last_build_available;
                _this.variablesService.last_build_displaymode = data.last_build_displaymode;
                _this.variablesService.setHeightApp(data.height);
                _this.variablesService.setHeightMax(data.max_net_seen_height);
                _this.variablesService.setDownloadedBytes(data.downloaded_bytes);
                _this.variablesService.setTotalBytes(data.download_total_data_size);
                _this.backend.getContactAlias();
                _this.ngZone.run(function () {
                    _this.variablesService.daemon_state = data['daemon_network_state'];
                    if (data['daemon_network_state'] === 1) {
                        var max = data['max_net_seen_height'] - data['synchronization_start_height'];
                        var current = data.height - data['synchronization_start_height'];
                        var return_val = Math.floor((current * 100 / max) * 100) / 100;
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.sync.progress_value = 0;
                            _this.variablesService.sync.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.sync.progress_value = 100;
                            _this.variablesService.sync.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.sync.progress_value = return_val;
                            _this.variablesService.sync.progress_value_text = return_val.toFixed(2);
                        }
                    }
                    if (data['daemon_network_state'] === 6) {
                        var max = data['download_total_data_size'];
                        var current = data['downloaded_bytes'];
                        var return_val = Math.floor((current / max) * 100);
                        if (max === 0 || return_val < 0) {
                            _this.variablesService.download.progress_value = 0;
                            _this.variablesService.download.progress_value_text = '0.00';
                        }
                        else if (return_val >= 100) {
                            _this.variablesService.download.progress_value = 100;
                            _this.variablesService.download.progress_value_text = '99.99';
                        }
                        else {
                            _this.variablesService.download.progress_value = return_val;
                            _this.variablesService.download.progress_value_text = return_val.toFixed(2);
                        }
                    }
                });
                if (!_this.firstOnlineState && data['daemon_network_state'] === 2) {
                    _this.getAliases();
                    _this.backend.getContactAlias();
                    _this.backend.getDefaultFee(function (status_fee, data_fee) {
                        _this.variablesService.default_fee_big = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](data_fee);
                        _this.variablesService.default_fee = _this.intToMoneyPipe.transform(data_fee);
                    });
                    _this.firstOnlineState = true;
                }
            });
            _this.backend.eventSubscribe('money_transfer', function (data) {
                console.log('----------------- money_transfer -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (wallet.history.length > 40) {
                        wallet.history.splice(40, 1);
                    }
                    _this.ngZone.run(function () {
                        if (!wallet.loaded) {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        else {
                            wallet.balance = data.balance;
                            wallet.unlocked_balance = data.unlocked_balance;
                        }
                        if (tr_info.tx_type === 6) {
                            _this.variablesService.setRefreshStacking(wallet_id);
                        }
                        var tr_exists = wallet.excluded_history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; });
                        tr_exists = (!tr_exists) ? wallet.history.some(function (elem) { return elem.tx_hash === tr_info.tx_hash; }) : tr_exists;
                        if (wallet.currentPage === 1) {
                            wallet.prepareHistory([tr_info]);
                            if (wallet.restore) {
                                wallet.total_history_item = wallet.history.length;
                                wallet.totalPages = Math.ceil(wallet.total_history_item / _this.variablesService.count);
                                wallet.totalPages > _this.variablesService.maxPages
                                    ? wallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                    : wallet.pages = new Array(wallet.totalPages).fill(1).map(function (value, index) { return value + index; });
                            }
                        }
                        if (tr_info.hasOwnProperty('contract')) {
                            var exp_med_ts = _this.variablesService.exp_med_ts;
                            var height_app = _this.variablesService.height_app;
                            var contract_1 = tr_info.contract[0];
                            if (tr_exists) {
                                for (var i = 0; i < wallet.contracts.length; i++) {
                                    if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                        wallet.contracts[i].cancel_expiration_time = contract_1.cancel_expiration_time;
                                        wallet.contracts[i].expiration_time = contract_1.expiration_time;
                                        wallet.contracts[i].height = contract_1.height;
                                        wallet.contracts[i].timestamp = contract_1.timestamp;
                                        break;
                                    }
                                }
                                // $rootScope.getContractsRecount();
                                return;
                            }
                            if (contract_1.state === 1 && contract_1.expiration_time < exp_med_ts) {
                                contract_1.state = 110;
                            }
                            else if (contract_1.state === 5 && contract_1.cancel_expiration_time < exp_med_ts) {
                                contract_1.state = 130;
                            }
                            else if (contract_1.state === 1) {
                                var searchResult2 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 110 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult2) {
                                    if (searchResult2.time === contract_1.expiration_time) {
                                        contract_1.state = 110;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 2 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 201;
                            }
                            else if (contract_1.state === 2) {
                                var searchResult3 = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === 120 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult3) {
                                    contract_1.state = 120;
                                }
                            }
                            else if (contract_1.state === 5) {
                                var searchResult4 = _this.variablesService.settings.notViewedContracts.find(function (elem) { return elem.state === 130 && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                                if (searchResult4) {
                                    if (searchResult4.time === contract_1.cancel_expiration_time) {
                                        contract_1.state = 130;
                                    }
                                    else {
                                        for (var j = 0; j < _this.variablesService.settings.notViewedContracts.length; j++) {
                                            if (_this.variablesService.settings.notViewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.notViewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.notViewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                        for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                                            if (_this.variablesService.settings.viewedContracts[j].contract_id === contract_1.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === contract_1.is_a) {
                                                _this.variablesService.settings.viewedContracts.splice(j, 1);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            else if (contract_1.state === 6 && (contract_1.height === 0 || (height_app - contract_1.height) < 10)) {
                                contract_1.state = 601;
                            }
                            var searchResult = _this.variablesService.settings.viewedContracts.some(function (elem) { return elem.state === contract_1.state && elem.is_a === contract_1.is_a && elem.contract_id === contract_1.contract_id; });
                            contract_1.is_new = !searchResult;
                            var findContract = false;
                            for (var i = 0; i < wallet.contracts.length; i++) {
                                if (wallet.contracts[i].contract_id === contract_1.contract_id && wallet.contracts[i].is_a === contract_1.is_a) {
                                    for (var prop in contract_1) {
                                        if (contract_1.hasOwnProperty(prop)) {
                                            wallet.contracts[i][prop] = contract_1[prop];
                                        }
                                    }
                                    findContract = true;
                                    break;
                                }
                            }
                            if (findContract === false) {
                                wallet.contracts.push(contract_1);
                            }
                            wallet.recountNewContracts();
                        }
                    });
                }
            });
            _this.backend.backendObject['handle_deeplink_click'].connect(function (data) {
                console.log('----------------- handle_deeplink_click -----------------');
                console.log(data);
                if (data) {
                    _this.variablesService.deeplink$.next(data);
                }
            });
            _this.backend.eventSubscribe('money_transfer_cancel', function (data) {
                console.log('----------------- money_transfer_cancel -----------------');
                console.log(data);
                if (!data.ti) {
                    return;
                }
                var wallet_id = data.wallet_id;
                var tr_info = data.ti;
                var wallet = _this.variablesService.getWallet(wallet_id);
                if (wallet) {
                    if (tr_info.hasOwnProperty('contract')) {
                        for (var i = 0; i < wallet.contracts.length; i++) {
                            if (wallet.contracts[i].contract_id === tr_info.contract[0].contract_id && wallet.contracts[i].is_a === tr_info.contract[0].is_a) {
                                if (wallet.contracts[i].state === 1 || wallet.contracts[i].state === 110) {
                                    wallet.contracts[i].is_new = true;
                                    wallet.contracts[i].state = 140;
                                    wallet.recountNewContracts();
                                }
                                break;
                            }
                        }
                    }
                    wallet.removeFromHistory(tr_info.tx_hash);
                    var error_tr = '';
                    switch (tr_info.tx_type) {
                        case 0:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NORMAL') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_TO') + ' ' + _this.intToMoneyPipe.transform(tr_info.amount) + ' ' +
                                _this.translate.instant('ERRORS.TX_TYPE_NORMAL_END');
                            break;
                        case 1:
                            // this.translate.instant('ERRORS.TX_TYPE_PUSH_OFFER');
                            break;
                        case 2:
                            // this.translate.instant('ERRORS.TX_TYPE_UPDATE_OFFER');
                            break;
                        case 3:
                            // this.translate.instant('ERRORS.TX_TYPE_CANCEL_OFFER');
                            break;
                        case 4:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 5:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_UPDATE_ALIAS') + '<br>' +
                                tr_info.tx_hash + '<br>' + wallet.name + '<br>' + wallet.address + '<br>' +
                                _this.translate.instant('ERRORS.TX_TYPE_NEW_ALIAS_END');
                            break;
                        case 6:
                            error_tr = _this.translate.instant('ERRORS.TX_TYPE_COIN_BASE');
                            break;
                    }
                    if (error_tr) {
                        _this.modalService.prepareModal('error', error_tr);
                    }
                }
            });
            _this.backend.eventSubscribe('on_core_event', function (data) {
                console.log('----------------- on_core_event -----------------');
                console.log(data);
                data = JSON.parse(data);
                if (data.events != null) {
                    var _loop_1 = function (i, length_1) {
                        switch (data.events[i].method) {
                            case 'CORE_EVENT_BLOCK_ADDED':
                                break;
                            case 'CORE_EVENT_ADD_ALIAS':
                                if (_this.variablesService.aliasesChecked[data.events[i].details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['address'] = data.events[i].details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.address]['comment'] = data.events[i].details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var newAlias = {
                                        name: '@' + data.events[i].details.alias,
                                        address: data.events[i].details.address,
                                        comment: data.events[i].details.comment
                                    };
                                    _this.variablesService.aliases = _this.variablesService.aliases.concat(newAlias);
                                    _this.variablesService.changeAliases();
                                }
                                break;
                            case 'CORE_EVENT_UPDATE_ALIAS':
                                for (var address in _this.variablesService.aliasesChecked) {
                                    if (_this.variablesService.aliasesChecked.hasOwnProperty(address)) {
                                        if (_this.variablesService.aliasesChecked[address].name === '@' + data.events[i].details.alias) {
                                            if (_this.variablesService.aliasesChecked[address].address !== data.events[i].details.details.address) {
                                                delete _this.variablesService.aliasesChecked[address]['name'];
                                                delete _this.variablesService.aliasesChecked[address]['address'];
                                                delete _this.variablesService.aliasesChecked[address]['comment'];
                                            }
                                            else {
                                                _this.variablesService.aliasesChecked[address].comment = data.events[i].details.details.comment;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (_this.variablesService.aliasesChecked[data.events[i].details.details.address] != null) {
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['name'] = '@' + data.events[i].details.alias;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['address'] = data.events[i].details.details.address;
                                    _this.variablesService.aliasesChecked[data.events[i].details.details.address]['comment'] = data.events[i].details.details.comment;
                                }
                                if (_this.variablesService.enableAliasSearch) {
                                    var CurrentAlias = _this.variablesService.aliases.find(function (element) { return element.name === '@' + data.events[i].details.alias; });
                                    if (CurrentAlias) {
                                        CurrentAlias.address = data.events[i].details.details.address;
                                        CurrentAlias.comment = data.events[i].details.details.comment;
                                    }
                                }
                                _this.variablesService.changeAliases();
                                break;
                            default:
                                break;
                        }
                    };
                    for (var i = 0, length_1 = data.events.length; i < length_1; i++) {
                        _loop_1(i, length_1);
                    }
                }
            });
            _this.intervalUpdateContractsState = setInterval(function () {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 201 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 2;
                            contract.is_new = true;
                            console.warn('need check state in contracts');
                        }
                        else if (contract.state === 601 && contract.height !== 0 && (_this.variablesService.height_app - contract.height) >= 10) {
                            contract.state = 6;
                            contract.is_new = true;
                        }
                    });
                });
            }, 30000);
            _this.expMedTsEvent = _this.variablesService.getExpMedTsEvent.subscribe(function (newTimestamp) {
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.contracts.forEach(function (contract) {
                        if (contract.state === 1 && contract.expiration_time <= newTimestamp) {
                            contract.state = 110;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                        else if (contract.state === 5 && contract.cancel_expiration_time <= newTimestamp) {
                            contract.state = 130;
                            contract.is_new = true;
                            wallet.recountNewContracts();
                        }
                    });
                });
            });
            _this.backend.getAppData(function (status, data) {
                if (data && Object.keys(data).length > 0) {
                    for (var key in data) {
                        if (data.hasOwnProperty(key) && _this.variablesService.settings.hasOwnProperty(key)) {
                            _this.variablesService.settings[key] = data[key];
                        }
                    }
                    if (_this.variablesService.settings.hasOwnProperty('scale') && [6, 8, 10, 12].indexOf(_this.variablesService.settings.scale) !== -1) {
                        var width = _this.utilsService.getMinWidthByScale(_this.variablesService.settings.scale);
                        var app = document.documentElement.querySelector('app-root');
                        _this.renderer.setStyle(app, 'min-width', width + 'px');
                        _this.renderer.setStyle(document.documentElement, 'font-size', _this.variablesService.settings.scale + 'px');
                    }
                    else {
                        _this.variablesService.settings.scale = 8;
                        var width = _this.utilsService.getMinWidthByScale(_this.variablesService.settings.scale);
                        var app = document.documentElement.querySelector('app-root');
                        _this.renderer.setStyle(app, 'min-width', width + 'px');
                        _this.renderer.setStyle(document.documentElement, 'font-size', _this.variablesService.settings.scale + 'px');
                    }
                }
                _this.translate.use(_this.variablesService.settings.language);
                _this.setBackendLocalization();
                _this.backend.setLogLevel(_this.variablesService.settings.appLog);
                _this.backend.setEnableTor(_this.variablesService.settings.appUseTor);
                if (_this.router.url !== '/login') {
                    _this.backend.haveSecureAppData(function (statusPass) {
                        if (statusPass) {
                            _this.ngZone.run(function () {
                                _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
                            });
                        }
                        else {
                            if (Object.keys(data).length !== 0) {
                                _this.needOpenWallets = JSON.parse(JSON.stringify(_this.variablesService.settings.wallets));
                                _this.ngZone.run(function () {
                                    _this.variablesService.appLogin = true;
                                    _this.router.navigate(['/']);
                                });
                            }
                            else {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/login'], { queryParams: { type: 'reg' } });
                                });
                            }
                        }
                    });
                }
            });
            /** Start listening dispatchAsyncCallResult */
            _this.backend.dispatchAsyncCallResult();
            /** Start listening handleCurrentActionState */
            _this.backend.handleCurrentActionState();
        }, function (error) {
            console.log(error);
        });
        this.variablesService.disable_price_fetch$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy$)).subscribe(function (disable_price_fetch) {
            if (!disable_price_fetch) {
                _this.getMoneyEquivalent();
                _this.intervalUpdatePriceState = setInterval(function () {
                    _this.getMoneyEquivalent();
                }, 30000);
            }
            else {
                if (_this.intervalUpdatePriceState) {
                    clearInterval(_this.intervalUpdatePriceState);
                }
            }
        });
    };
    AppComponent.prototype.getMoneyEquivalent = function () {
        var _this = this;
        this.http.get('https://xeggex.com/api/v2/info').subscribe(function () {
            _this.http.get('https://xeggex.com/api/v2/market/getbysymbol/CHN_USDT').subscribe(function (data) {
                _this.variablesService.moneyEquivalent = data['lastPrice'];
                _this.variablesService.moneyEquivalentPercent = data['changePercent'];
            }, function (error) {
                console.warn('xeggex.com price error: ', error);
            });
        }, function (error) {
            console.warn('xeggex.com error: ', error);
            setTimeout(function () {
                _this.getMoneyEquivalent();
            }, 30000);
        });
    };
    AppComponent.prototype.getAliases = function () {
        var _this = this;
        this.backend.getAllAliases(function (status, data, error) {
            console.warn(error);
            if (error === 'CORE_BUSY') {
                window.setTimeout(function () {
                    _this.getAliases();
                }, 10000);
            }
            else if (error === 'OVERFLOW') {
                _this.variablesService.aliases = [];
                _this.variablesService.enableAliasSearch = false;
                _this.variablesService.wallets.forEach(function (wallet) {
                    wallet.alias = _this.backend.getWalletAlias(wallet.address);
                });
            }
            else {
                _this.variablesService.enableAliasSearch = true;
                if (data.aliases && data.aliases.length) {
                    _this.variablesService.aliases = [];
                    data.aliases.forEach(function (alias) {
                        var newAlias = {
                            name: '@' + alias.alias,
                            address: alias.address,
                            comment: alias.comment
                        };
                        _this.variablesService.aliases.push(newAlias);
                    });
                    _this.variablesService.wallets.forEach(function (wallet) {
                        wallet.alias = _this.backend.getWalletAlias(wallet.address);
                    });
                    _this.variablesService.aliases = _this.variablesService.aliases.sort(function (a, b) {
                        if (a.name.length > b.name.length) {
                            return 1;
                        }
                        if (a.name.length < b.name.length) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    _this.variablesService.changeAliases();
                }
            }
        });
    };
    AppComponent.prototype.contextMenuCopy = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
            var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
            var canUseSelection = ((target[start]) || (target[start] === '0'));
            var SelectedText = (canUseSelection) ? target['value'].substring(target[start], target[end]) : target['value'];
            this.backend.setClipboard(String(SelectedText));
        }
    };
    AppComponent.prototype.contextMenuOnlyCopy = function (text) {
        if (text) {
            this.backend.setClipboard(String(text));
        }
    };
    AppComponent.prototype.contextMenuPaste = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            this.backend.getClipboard(function (status, clipboard) {
                clipboard = String(clipboard);
                if (typeof clipboard !== 'string' || clipboard.length) {
                    var start = (target['contextSelectionStart']) ? 'contextSelectionStart' : 'selectionStart';
                    var end = (target['contextSelectionEnd']) ? 'contextSelectionEnd' : 'selectionEnd';
                    var _pre = target['value'].substring(0, target[start]);
                    var _aft = target['value'].substring(target[end], target['value'].length);
                    var text = _pre + clipboard + _aft;
                    var cursorPosition = (_pre + clipboard).length;
                    if (target['maxLength'] && parseInt(target['maxLength'], 10) > 0) {
                        text = text.substr(0, parseInt(target['maxLength'], 10));
                    }
                    target['value'] = text;
                    target.setSelectionRange(cursorPosition, cursorPosition);
                    target.dispatchEvent(new Event('input'));
                    target['focus']();
                }
            });
        }
    };
    AppComponent.prototype.contextMenuSelect = function (target) {
        if (target && (target['nodeName'].toUpperCase() === 'TEXTAREA' || target['nodeName'].toUpperCase() === 'INPUT')) {
            target['focus']();
            setTimeout(function () {
                target['select']();
            });
        }
    };
    AppComponent.prototype.addToStore = function (wallet, boolean) {
        var value = this.store.value.sync;
        if (value && value.length) {
            var sync = value.filter(function (item) { return item.wallet_id === wallet.wallet_id; });
            if (sync && sync.length) {
                var result = value.map(function (item) {
                    if (item.wallet_id === wallet.wallet_id) {
                        return { sync: boolean, wallet_id: wallet.wallet_id };
                    }
                    else {
                        return item;
                    }
                });
                this.store.set('sync', result);
            }
            else {
                value.push({ sync: boolean, wallet_id: wallet.wallet_id });
                this.store.set('sync', value);
            }
        }
        else {
            this.store.set('sync', [{ sync: boolean, wallet_id: wallet.wallet_id }]);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        if (this.intervalUpdateContractsState) {
            clearInterval(this.intervalUpdateContractsState);
        }
        if (this.intervalUpdatePriceState) {
            clearInterval(this.intervalUpdatePriceState);
        }
        this.expMedTsEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('allContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "allContextMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('onlyCopyContextMenu'),
        __metadata("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"])
    ], AppComponent.prototype, "onlyCopyContextMenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
            _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"],
            store__WEBPACK_IMPORTED_MODULE_11__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, highchartsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-wallet/create-wallet.component */ "./src/app/create-wallet/create-wallet.component.ts");
/* harmony import */ var _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-wallet/open-wallet.component */ "./src/app/open-wallet/open-wallet.component.ts");
/* harmony import */ var _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./open-wallet-modal/open-wallet-modal.component */ "./src/app/open-wallet-modal/open-wallet-modal.component.ts");
/* harmony import */ var _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restore-wallet/restore-wallet.component */ "./src/app/restore-wallet/restore-wallet.component.ts");
/* harmony import */ var _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seed-phrase/seed-phrase.component */ "./src/app/seed-phrase/seed-phrase.component.ts");
/* harmony import */ var _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wallet-details/wallet-details.component */ "./src/app/wallet-details/wallet-details.component.ts");
/* harmony import */ var _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assign-alias/assign-alias.component */ "./src/app/assign-alias/assign-alias.component.ts");
/* harmony import */ var _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-alias/edit-alias.component */ "./src/app/edit-alias/edit-alias.component.ts");
/* harmony import */ var _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transfer-alias/transfer-alias.component */ "./src/app/transfer-alias/transfer-alias.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _send_send_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./send/send.component */ "./src/app/send/send.component.ts");
/* harmony import */ var _receive_receive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./receive/receive.component */ "./src/app/receive/receive.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contracts/contracts.component */ "./src/app/contracts/contracts.component.ts");
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./purchase/purchase.component */ "./src/app/purchase/purchase.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./typing-message/typing-message.component */ "./src/app/typing-message/typing-message.component.ts");
/* harmony import */ var _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./staking/staking.component */ "./src/app/staking/staking.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_helpers/services/pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_helpers/pipes/history-type-messages.pipe */ "./src/app/_helpers/pipes/history-type-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_helpers/pipes/contract-status-messages.pipe */ "./src/app/_helpers/pipes/contract-status-messages.pipe.ts");
/* harmony import */ var _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_helpers/pipes/contract-time-left.pipe */ "./src/app/_helpers/pipes/contract-time-left.pipe.ts");
/* harmony import */ var _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_helpers/pipes/safe-html.pipe */ "./src/app/_helpers/pipes/safe-html.pipe.ts");
/* harmony import */ var _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_helpers/directives/tooltip.directive */ "./src/app/_helpers/directives/tooltip.directive.ts");
/* harmony import */ var _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_helpers/directives/input-validate/input-validate.directive */ "./src/app/_helpers/directives/input-validate/input-validate.directive.ts");
/* harmony import */ var _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_helpers/directives/staking-switch/staking-switch.component */ "./src/app/_helpers/directives/staking-switch/staking-switch.component.ts");
/* harmony import */ var _helpers_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_helpers/modals/modal-container/modal-container.component */ "./src/app/_helpers/modals/modal-container/modal-container.component.ts");
/* harmony import */ var _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_helpers/directives/transaction-details/transaction-details.component */ "./src/app/_helpers/directives/transaction-details/transaction-details.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! highcharts/modules/exporting.src */ "./node_modules/highcharts/modules/exporting.src.js");
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./_helpers/directives/progress-container/progress-container.component */ "./src/app/_helpers/directives/progress-container/progress-container.component.ts");
/* harmony import */ var _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_helpers/directives/input-disable-selection/input-disable-selection.directive */ "./src/app/_helpers/directives/input-disable-selection/input-disable-selection.directive.ts");
/* harmony import */ var _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./send-modal/send-modal.component */ "./src/app/send-modal/send-modal.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./add-contacts/add-contacts.component */ "./src/app/add-contacts/add-contacts.component.ts");
/* harmony import */ var _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./contact-send/contact-send.component */ "./src/app/contact-send/contact-send.component.ts");
/* harmony import */ var _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./export-import/export-import.component */ "./src/app/export-import/export-import.component.ts");
/* harmony import */ var _helpers_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./_helpers/modals/confirm-modal/confirm-modal.component */ "./src/app/_helpers/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _helpers_modals_export_history_modal_export_history_modal_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./_helpers/modals/export-history-modal/export-history-modal.component */ "./src/app/_helpers/modals/export-history-modal/export-history-modal.component.ts");
/* harmony import */ var cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! cdk-drag-scroll */ "./node_modules/cdk-drag-scroll/fesm5/cdk-drag-scroll.js");
/* harmony import */ var _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./deeplink/deeplink.component */ "./src/app/deeplink/deeplink.component.ts");
/* harmony import */ var _helpers_modals_sync_modal_sync_modal_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./_helpers/modals/sync-modal/sync-modal.component */ "./src/app/_helpers/modals/sync-modal/sync-modal.component.ts");
/* harmony import */ var _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./contracts/contracts-tab/contracts-tab.component */ "./src/app/contracts/contracts-tab/contracts-tab.component.ts");
/* harmony import */ var _send_details_modal_send_details_modal_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./send-details-modal/send-details-modal.component */ "./src/app/send-details-modal/send-details-modal.component.ts");
/* harmony import */ var _shared_directives_disable_price_fetch_disable_price_fetch_module__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./_shared/directives/disable-price-fetch/disable-price-fetch.module */ "./src/app/_shared/directives/disable-price-fetch/disable-price-fetch.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// SERVICES



// SERVICES
// Feature module

// Feature module
































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_28__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}
// import * as more from 'highcharts/highcharts-more.src';
// import * as exporting from 'highcharts/modules/exporting.src';
// import * as highstock from 'highcharts/modules/stock.src';
function highchartsFactory() {
    // Default options.
    highcharts__WEBPACK_IMPORTED_MODULE_48__["setOptions"]({
        time: {
            useUTC: false
        }
    });
    return [highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_49___default.a];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _create_wallet_create_wallet_component__WEBPACK_IMPORTED_MODULE_8__["CreateWalletComponent"],
                _open_wallet_open_wallet_component__WEBPACK_IMPORTED_MODULE_9__["OpenWalletComponent"],
                _open_wallet_modal_open_wallet_modal_component__WEBPACK_IMPORTED_MODULE_10__["OpenWalletModalComponent"],
                _restore_wallet_restore_wallet_component__WEBPACK_IMPORTED_MODULE_11__["RestoreWalletComponent"],
                _seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_12__["SeedPhraseComponent"],
                _wallet_details_wallet_details_component__WEBPACK_IMPORTED_MODULE_13__["WalletDetailsComponent"],
                _assign_alias_assign_alias_component__WEBPACK_IMPORTED_MODULE_14__["AssignAliasComponent"],
                _edit_alias_edit_alias_component__WEBPACK_IMPORTED_MODULE_15__["EditAliasComponent"],
                _transfer_alias_transfer_alias_component__WEBPACK_IMPORTED_MODULE_16__["TransferAliasComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"],
                _send_send_component__WEBPACK_IMPORTED_MODULE_18__["SendComponent"],
                _receive_receive_component__WEBPACK_IMPORTED_MODULE_19__["ReceiveComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_20__["HistoryComponent"],
                _contracts_contracts_component__WEBPACK_IMPORTED_MODULE_21__["ContractsComponent"],
                _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"],
                _staking_staking_component__WEBPACK_IMPORTED_MODULE_25__["StakingComponent"],
                _typing_message_typing_message_component__WEBPACK_IMPORTED_MODULE_24__["TypingMessageComponent"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__["IntToMoneyPipe"],
                _helpers_directives_staking_switch_staking_switch_component__WEBPACK_IMPORTED_MODULE_43__["StakingSwitchComponent"],
                _helpers_pipes_history_type_messages_pipe__WEBPACK_IMPORTED_MODULE_37__["HistoryTypeMessagesPipe"],
                _helpers_pipes_contract_status_messages_pipe__WEBPACK_IMPORTED_MODULE_38__["ContractStatusMessagesPipe"],
                _helpers_pipes_contract_time_left_pipe__WEBPACK_IMPORTED_MODULE_39__["ContractTimeLeftPipe"],
                _helpers_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["TooltipDirective"],
                _helpers_directives_input_validate_input_validate_directive__WEBPACK_IMPORTED_MODULE_42__["InputValidateDirective"],
                _helpers_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__["ModalContainerComponent"],
                _helpers_directives_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_45__["TransactionDetailsComponent"],
                _helpers_directives_progress_container_progress_container_component__WEBPACK_IMPORTED_MODULE_50__["ProgressContainerComponent"],
                _helpers_directives_input_disable_selection_input_disable_selection_directive__WEBPACK_IMPORTED_MODULE_51__["InputDisableSelectionDirective"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__["SendModalComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__["ContactsComponent"],
                _add_contacts_add_contacts_component__WEBPACK_IMPORTED_MODULE_54__["AddContactsComponent"],
                _contact_send_contact_send_component__WEBPACK_IMPORTED_MODULE_55__["ContactSendComponent"],
                _export_import_export_import_component__WEBPACK_IMPORTED_MODULE_56__["ExportImportComponent"],
                _helpers_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_40__["SafeHTMLPipe"],
                _helpers_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__["ConfirmModalComponent"],
                _helpers_modals_export_history_modal_export_history_modal_component__WEBPACK_IMPORTED_MODULE_60__["ExportHistoryModalComponent"],
                _deeplink_deeplink_component__WEBPACK_IMPORTED_MODULE_62__["DeeplinkComponent"],
                _helpers_modals_sync_modal_sync_modal_component__WEBPACK_IMPORTED_MODULE_63__["SyncModalComponent"],
                _contracts_contracts_tab_contracts_tab_component__WEBPACK_IMPORTED_MODULE_64__["ContractsTabComponent"],
                _send_details_modal_send_details_modal_component__WEBPACK_IMPORTED_MODULE_65__["SendDetailsModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_58__["DragDropModule"],
                cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_61__["DragScrollModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClient"]]
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_30__["NgSelectModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["ChartModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_59__["PapaParseModule"],
                _shared_directives_disable_price_fetch_disable_price_fetch_module__WEBPACK_IMPORTED_MODULE_66__["DisablePriceFetchModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_46__["ContextMenuModule"].forRoot()
            ],
            providers: [
                store__WEBPACK_IMPORTED_MODULE_34__["Store"],
                _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_31__["BackendService"],
                _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_32__["ModalService"],
                _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_33__["PaginationStore"],
                _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_35__["MoneyToIntPipe"],
                _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_36__["IntToMoneyPipe"],
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_47__["HIGHCHARTS_MODULES"], useFactory: highchartsFactory }
                // {provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock, more, exporting ] }
            ],
            entryComponents: [
                _helpers_modals_modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_44__["ModalContainerComponent"],
                _send_modal_send_modal_component__WEBPACK_IMPORTED_MODULE_52__["SendModalComponent"],
                _helpers_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_57__["ConfirmModalComponent"],
                _helpers_modals_export_history_modal_export_history_modal_component__WEBPACK_IMPORTED_MODULE_60__["ExportHistoryModalComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.ASSIGN_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-assign\" [formGroup]=\"assignForm\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\" tooltip=\"{{ 'ASSIGN_ALIAS.NAME.TOOLTIP' | translate }}\" placement=\"bottom-left\"\r\n        tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\r\n        {{ 'ASSIGN_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <div class=\"has-no-edit-symbol\">\r\n        <input type=\"text\" id=\"alias-name\" formControlName=\"name\"\r\n          [class.required-error]=\"assignForm.controls['name'].dirty || assignForm.controls['name'].touched\"\r\n          [placeholder]=\" assignForm.controls['name'].dirty || assignForm.controls['name'].touched ? ('ASSIGN_ALIAS.FORM_ERRORS.NAME_REQUIRED' | translate ) : ('ASSIGN_ALIAS.NAME.PLACEHOLDER' | translate)\"\r\n          (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      </div>\r\n      <div class=\"error-block\"\r\n        *ngIf=\"assignForm.controls['name'].invalid && !assignForm.controls['name'].errors['required'] && (assignForm.controls['name'].dirty || assignForm.controls['name'].touched)\">\r\n        <div\r\n          *ngIf=\"assignForm.controls['name'].errors['pattern'] && assignForm.get('name').value.length > 6 && assignForm.get('name').value.length <= 25\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_WRONG' | translate }}\r\n        </div>\r\n        <div *ngIf=\"assignForm.get('name').value.length <= 6 || assignForm.get('name').value.length > 25\">\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"alias.exists\">\r\n        <div>\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NAME_EXISTS' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"notEnoughMoney\">\r\n        <div>\r\n          {{ 'ASSIGN_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\" tooltip=\"{{ 'ASSIGN_ALIAS.COMMENT.TOOLTIP' | translate }}\" placement=\"bottom-left\"\r\n        tooltipClass=\"table-tooltip assign-alias-tooltip\" [delay]=\"50\">\r\n        {{ 'ASSIGN_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\" class=\"scrolled-content\" formControlName=\"comment\"\r\n        placeholder=\"{{ 'ASSIGN_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"\r\n        [maxLength]=\"variablesService.maxCommentLength\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      </textarea>\r\n      <div class=\"error-block\" *ngIf=\"assignForm.get('comment').value.length >= variablesService.maxCommentLength\">\r\n        {{ 'ASSIGN_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"ASSIGN_ALIAS.COST\" | translate : {value: alias.price | intToMoney, currency:\r\n      variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"assignAlias()\"\r\n        [disabled]=\"!assignForm.valid || !canRegister || notEnoughMoney\">{{ 'ASSIGN_ALIAS.BUTTON_ASSIGN' | translate\r\n        }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-assign {\n  margin: 2.4rem 0; }\n  .form-assign label {\n    font-size: 1.6rem;\n    line-height: 2rem; }\n  .form-assign .alias-name {\n    width: 50%; }\n  .form-assign .alias-cost {\n    font-size: 2rem;\n    line-height: 2rem;\n    margin-top: 2rem; }\n  .form-assign .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-assign .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n  .assign-alias-tooltip {\n  max-width: 46rem; }\n  .has-no-edit-symbol {\n  position: relative;\n  width: 100%; }\n  .has-no-edit-symbol input {\n    padding-left: 2.35rem; }\n  .has-no-edit-symbol:after {\n    content: \"@\";\n    position: absolute;\n    display: inline-block;\n    top: 50%;\n    left: 1rem;\n    transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduLWFsaWFzL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcYXNzaWduLWFsaWFzXFxhc3NpZ24tYWxpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUdJLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQUpyQjtJQU9JLFVBQVUsRUFBQTtFQVBkO0lBV0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQWJwQjtJQWlCSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQixFQUFBO0VBbkIxQjtNQXNCTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0VBS2xCO0VBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBRmI7SUFJSSxxQkFBcUIsRUFBQTtFQUp6QjtJQU9JLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixVQUFVO0lBQ1YsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ24tYWxpYXMvYXNzaWduLWFsaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYXNzaWduIHtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG4gIC5hbGlhcy1uYW1lIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYWxpYXMtY29zdCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcbiAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hc3NpZ24tYWxpYXMtdG9vbHRpcCB7XHJcbiAgbWF4LXdpZHRoOiA0NnJlbTtcclxufVxyXG5cclxuLmhhcy1uby1lZGl0LXN5bWJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMi4zNXJlbTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIkBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/assign-alias/assign-alias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/assign-alias/assign-alias.component.ts ***!
  \********************************************************/
/*! exports provided: AssignAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAliasComponent", function() { return AssignAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssignAliasComponent = /** @class */ (function () {
    function AssignAliasComponent(ngZone, location, router, backend, variablesService, modalService, moneyToInt, intToMoney) {
        var _this = this;
        this.ngZone = ngZone;
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.moneyToInt = moneyToInt;
        this.intToMoney = intToMoney;
        this.assignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^@?[a-z0-9\.\-]{6,25}$/)]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [function (g) {
                    if (g.value > _this.variablesService.maxCommentLength) {
                        return { 'maxLength': true };
                    }
                    else {
                        return null;
                    }
                }])
        });
        this.alias = {
            name: '',
            fee: this.variablesService.default_fee,
            price: new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0),
            reward: '0',
            rewardOriginal: '0',
            comment: '',
            exists: false
        };
        this.canRegister = false;
        this.notEnoughMoney = false;
    }
    AssignAliasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wallet = this.variablesService.currentWallet;
        this.assignFormSubscription = this.assignForm.get('name').valueChanges.subscribe(function (value) {
            _this.canRegister = false;
            _this.alias.exists = false;
            var newName = value.toLowerCase().replace('@', '');
            if (!(_this.assignForm.controls['name'].errors && _this.assignForm.controls['name'].errors.hasOwnProperty('pattern')) && newName.length >= 6 && newName.length <= 25) {
                _this.backend.getAliasByName(newName, function (status) {
                    _this.ngZone.run(function () {
                        _this.alias.exists = status;
                    });
                    if (!status) {
                        _this.alias.price = new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(0);
                        _this.backend.getAliasCoast(newName, function (statusPrice, dataPrice) {
                            _this.ngZone.run(function () {
                                if (statusPrice) {
                                    _this.alias.price = bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a.sum(dataPrice['coast'], _this.variablesService.default_fee_big);
                                }
                                _this.notEnoughMoney = _this.alias.price.isGreaterThan(_this.wallet.unlocked_balance);
                                _this.alias.reward = _this.intToMoney.transform(_this.alias.price, false);
                                _this.alias.rewardOriginal = _this.intToMoney.transform(dataPrice['coast'], false);
                                _this.canRegister = !_this.notEnoughMoney;
                            });
                        });
                    }
                    else {
                        _this.notEnoughMoney = false;
                        _this.alias.reward = '0';
                        _this.alias.rewardOriginal = '0';
                    }
                });
            }
            else {
                _this.notEnoughMoney = false;
                _this.alias.reward = '0';
                _this.alias.rewardOriginal = '0';
            }
            _this.alias.name = newName;
        });
    };
    AssignAliasComponent.prototype.assignAlias = function () {
        var _this = this;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        if (alias.hasOwnProperty('name')) {
            this.modalService.prepareModal('info', 'ASSIGN_ALIAS.ONE_ALIAS');
        }
        else {
            this.alias.comment = this.assignForm.get('comment').value;
            this.backend.registerAlias(this.wallet.wallet_id, this.alias.name, this.wallet.address, this.alias.fee, this.alias.comment, this.alias.rewardOriginal, function (status, data) {
                if (status) {
                    _this.wallet.wakeAlias = true;
                    _this.modalService.prepareModal('info', 'ASSIGN_ALIAS.REQUEST_ADD_REG');
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/']);
                    });
                }
            });
        }
    };
    AssignAliasComponent.prototype.back = function () {
        this.location.back();
    };
    AssignAliasComponent.prototype.ngOnDestroy = function () {
        this.assignFormSubscription.unsubscribe();
    };
    AssignAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-alias',
            template: __webpack_require__(/*! ./assign-alias.component.html */ "./src/app/assign-alias/assign-alias.component.html"),
            styles: [__webpack_require__(/*! ./assign-alias.component.scss */ "./src/app/assign-alias/assign-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_7__["MoneyToIntPipe"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_8__["IntToMoneyPipe"]])
    ], AssignAliasComponent);
    return AssignAliasComponent;
}());



/***/ }),

/***/ "./src/app/contact-send/contact-send.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/contacts']\">{{\r\n        'CONTACTS.TITLE' | translate\r\n        }}</span>\r\n      <span>{{ 'CONTACTS.SEND' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"wallets-selection\">\r\n      <div class=\"input-block\">\r\n        <label>\r\n          {{ 'CONTACTS.SEND_FROM' | translate }}\r\n        </label>\r\n        <ng-select class=\"custom-select\" [items]=\"this.variablesService.wallets\"\r\n          [(ngModel)]=\"this.variablesService.selectWallet\" bindValue=\"wallet_id\" bindLabel=\"name\" [clearable]=\"false\"\r\n          [searchable]=\"false\">\r\n        </ng-select>\r\n      </div>\r\n      <button class=\"blue-button_reset\" [routerLink]=\"['/main']\">\r\n        {{ 'CONTACTS.OPEN_ADD_WALLET' | translate }}\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"address\">{{ 'CONTACTS.SEND_TO' | translate }}</label>\r\n      <input type=\"text\" id=\"address\" [ngModel]=\"address\" [readonly]=\"true\" />\r\n    </div>\r\n  </div>\r\n  <button class=\"blue-button\" (click)=\"goToWallet(this.variablesService.selectWallet)\"\r\n    [disabled]=\"!(this.variablesService.selectWallet === 0 || this.variablesService.selectWallet)\">{{\r\n    'CONTACTS.BUTTON.GO_TO_WALLET' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wallets-selection {\n  display: flex;\n  align-items: center;\n  margin-top: 2rem; }\n  .wallets-selection button {\n    height: 4rem;\n    font-size: 2rem; }\n  .input-block {\n  width: 44rem; }\n  .input-block input {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .blue-button {\n  margin-top: 2.5rem;\n  width: 100%;\n  max-width: 18rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1zZW5kL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcY29udGFjdC1zZW5kXFxjb250YWN0LXNlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0VBSGxCO0lBS0ksWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUluQjtFQUNFLFlBQVksRUFBQTtFQURkO0lBSUksZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBSTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Qtc2VuZC9jb250YWN0LXNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FsbGV0cy1zZWxlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtYmxvY2sge1xyXG4gIHdpZHRoOiA0NHJlbTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG5cclxuLmJsdWUtYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxOHJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-send/contact-send.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-send/contact-send.component.ts ***!
  \********************************************************/
/*! exports provided: ContactSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSendComponent", function() { return ContactSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactSendComponent = /** @class */ (function () {
    function ContactSendComponent(location, variablesService, route, ngZone, router) {
        this.location = location;
        this.variablesService = variablesService;
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
    }
    ContactSendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.address) {
                _this.address = params.address;
            }
        });
    };
    ContactSendComponent.prototype.goToWallet = function (id) {
        var _this = this;
        this.variablesService.setCurrentWallet(id);
        this.variablesService.currentWallet.send_data['address'] = this.address;
        this.ngZone.run(function () {
            _this.router.navigate(['/wallet/send'], { queryParams: { send: true } });
        });
    };
    ContactSendComponent.prototype.back = function () {
        this.location.back();
    };
    ContactSendComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    ContactSendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-send',
            template: __webpack_require__(/*! ./contact-send.component.html */ "./src/app/contact-send/contact-send.component.html"),
            styles: [__webpack_require__(/*! ./contact-send.component.scss */ "./src/app/contact-send/contact-send.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ContactSendComponent);
    return ContactSendComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div>\r\n    <div class=\"head\">\r\n      <h3 class=\"contacts-title\">{{ 'CONTACTS.TITLE' | translate }}</h3>\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"wrap-table\">\r\n      <ng-container>\r\n        <table *ngIf=\"this.variablesService.contacts.length !== 0; else emptyList\">\r\n          <thead>\r\n            <tr #head (window:resize)=\"calculateWidth()\">\r\n              <th>{{ 'CONTACTS.TABLE.NAME' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.ALIAS' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.ADDRESS' | translate }}</th>\r\n              <th>{{ 'CONTACTS.TABLE.NOTES' | translate }}</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngFor=\"\r\n                let contact of this.variablesService.contacts;\r\n                let i = index\r\n              \">\r\n              <tr>\r\n                <td>\r\n                  {{ contact.name }}\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngIf=\"contact.alias\">\r\n                    <span>{{ contact.alias }}</span>\r\n                  </ng-container>\r\n                </td>\r\n                <td class=\"remote-address\">\r\n                  {{ contact.address }}\r\n                </td>\r\n                <td class=\"remote-notes\">\r\n                  {{ contact.notes }}\r\n                </td>\r\n                <td>\r\n                  <div class=\"button-wrapper\">\r\n                    <button [routerLink]=\"['/contact-send/' + i]\" [queryParams]=\"{ address: contact.address }\">\r\n                      <i class=\"icon transfer\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.SEND' | translate }}</span>\r\n                    </button>\r\n                    <button [routerLink]=\"['/edit-contacts/' + i]\" [queryParams]=\"{ id: i }\">\r\n                      <i class=\"icon edit\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.EDIT' | translate }}</span>\r\n                    </button>\r\n                    <button (click)=\"delete(i)\">\r\n                      <i class=\"icon delete\"></i>\r\n                      <span>{{ 'CONTACTS.BUTTON.DELETE' | translate }}</span>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <div class=\"row-divider\"></div>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </ng-container>\r\n\r\n      <ng-template #emptyList>\r\n        <div class=\"empty-list\">\r\n          {{ 'CONTACTS.TABLE.EMPTY' | translate }}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <button [routerLink]=\"['/add-contacts']\" class=\"blue-button\">\r\n      {{ 'CONTACTS.BUTTON.ADD' | translate }}\r\n    </button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.head {\n  justify-content: space-between; }\n\n.wrap-table {\n  margin-top: 2rem; }\n\n.wrap-table table thead tr th:last-child {\n    max-width: 6rem; }\n\n.wrap-table table tbody tr td {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n.wrap-table table tbody tr td:first-child {\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:nth-child(2) {\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:last-child {\n      width: 25rem;\n      min-width: -webkit-fit-content;\n      min-width: -moz-fit-content;\n      min-width: fit-content; }\n\n.wrap-table table tbody tr td .alias {\n      cursor: pointer; }\n\n.wrap-table table tbody tr td .button-wrapper {\n      display: flex; }\n\n.wrap-table table tbody tr td .button-wrapper button {\n        font-size: 1.5rem;\n        line-height: 1.8rem;\n        display: flex;\n        align-items: center;\n        background: transparent;\n        border: none;\n        outline: none;\n        padding: 0;\n        height: auto;\n        margin-right: 1.8rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon {\n          cursor: pointer;\n          margin-right: 0.8rem;\n          width: 2rem;\n          height: 2rem; }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.edit {\n            background: center/contain no-repeat url('edit.svg'); }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.transfer {\n            background: center/contain no-repeat url('send.svg'); }\n\n.wrap-table table tbody tr td .button-wrapper button .icon.delete {\n            background: center/contain no-repeat url('delete.svg'); }\n\n.wrap-table .empty-list {\n    margin: 2.5rem 3rem; }\n\n.blue-button {\n  width: 100%;\n  max-width: 18rem;\n  margin-top: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdCQUFnQixFQUFBOztBQURsQjtJQU1VLGVBQWUsRUFBQTs7QUFOekI7SUFhVSxnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7O0FBZGpDO01BZ0JZLGdCQUFnQixFQUFBOztBQWhCNUI7TUFtQlksZ0JBQWdCLEVBQUE7O0FBbkI1QjtNQXNCWSxZQUFZO01BQ1osOEJBQXNCO01BQXRCLDJCQUFzQjtNQUF0QixzQkFBc0IsRUFBQTs7QUF2QmxDO01BMEJZLGVBQWUsRUFBQTs7QUExQjNCO01BNkJZLGFBQWEsRUFBQTs7QUE3QnpCO1FBZ0NjLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLGFBQWE7UUFDYixVQUFVO1FBQ1YsWUFBWTtRQUNaLG9CQUFvQixFQUFBOztBQXpDbEM7VUE0Q2dCLGVBQWU7VUFDZixvQkFBb0I7VUFDcEIsV0FBVztVQUNYLFlBQVksRUFBQTs7QUEvQzVCO1lBaURrQixvREFBdUUsRUFBQTs7QUFqRHpGO1lBb0RrQixvREFBdUUsRUFBQTs7QUFwRHpGO1lBdURrQixzREFBeUUsRUFBQTs7QUF2RDNGO0lBa0VJLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtaW4td2lkdGg6IDk1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLndyYXAtdGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgdGFibGUge1xyXG4gICAgdGhlYWQge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbGlhcyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG5cclxuICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgJi5lZGl0IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRyYW5zZmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZW5kLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmRlbGV0ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZGVsZXRlLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktbGlzdCB7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJsdWUtYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE4cmVtO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(location, variablesService, backend) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.calculatedWidth = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.backend.getContactAlias();
    };
    ContactsComponent.prototype.delete = function (index) {
        if (this.variablesService.appPass) {
            this.variablesService.contacts.splice(index, 1);
            this.backend.storeSecureAppData();
        }
    };
    ContactsComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth +
            this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    ContactsComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContactsComponent.prototype, "head", void 0);
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts-tab/contracts-tab.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/contracts/contracts-tab/contracts-tab.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/contracts/contracts-tab/contracts-tab.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/contracts/contracts-tab/contracts-tab.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL2NvbnRyYWN0cy10YWIvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxjb250cmFjdHNcXGNvbnRyYWN0cy10YWJcXGNvbnRyYWN0cy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udHJhY3RzL2NvbnRyYWN0cy10YWIvY29udHJhY3RzLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contracts/contracts-tab/contracts-tab.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contracts/contracts-tab/contracts-tab.component.ts ***!
  \********************************************************************/
/*! exports provided: ContractsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsTabComponent", function() { return ContractsTabComponent; });
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

var ContractsTabComponent = /** @class */ (function () {
    function ContractsTabComponent() {
    }
    ContractsTabComponent.prototype.ngOnInit = function () {
    };
    ContractsTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts-tab',
            template: __webpack_require__(/*! ./contracts-tab.component.html */ "./src/app/contracts/contracts-tab/contracts-tab.component.html"),
            styles: [__webpack_require__(/*! ./contracts-tab.component.scss */ "./src/app/contracts/contracts-tab/contracts-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContractsTabComponent);
    return ContractsTabComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts.component.html":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table scrolled-content\" *ngIf=\"variablesService.currentWallet.contracts.length; else emtyContracts\">\r\n  <table class=\"contracts-table\">\r\n    <thead>\r\n      <tr>\r\n        <th>{{ 'CONTRACTS.CONTRACTS' | translate }}</th>\r\n        <th>{{ 'CONTRACTS.DATE' | translate }}</th>\r\n        <th>{{ 'CONTRACTS.AMOUNT' | translate }}</th>\r\n        <th>{{ 'CONTRACTS.STATUS' | translate }}</th>\r\n        <th>{{ 'CONTRACTS.COMMENTS' | translate }}</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let item of sortedArrayContracts\">\r\n        <div class=\"row-divider\"></div>\r\n        <tr [routerLink]=\"'/wallet/contracts/purchase/' + item.contract_id\">\r\n          <td>\r\n            <div class=\"contract\">\r\n              <i class=\"icon alert\" *ngIf=\"!item.is_new\"></i>\r\n              <i class=\"icon new\" *ngIf=\"item.is_new\"></i>\r\n              <i class=\"icon\" [class.purchase]=\"item.is_a\" [class.sell]=\"!item.is_a\"></i>\r\n              <span tooltip=\"{{ item.private_detailes.t }}\" placement=\"top-left\" tooltipClass=\"table-tooltip\"\r\n                [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{item.private_detailes.t}}</span>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</div>\r\n          </td>\r\n          <td>\r\n            <div>{{item.private_detailes.to_pay | intToMoney}} {{variablesService.defaultCurrency}}</div>\r\n          </td>\r\n          <td>\r\n            <div class=\"status\" [class.error-text]=\"item.state === 4\"\r\n              tooltip=\"{{item.state | contractStatusMessages : item.is_a}}\" placement=\"top\" tooltipClass=\"table-tooltip\"\r\n              [delay]=\"500\">\r\n              {{item.state | contractStatusMessages : item.is_a}}\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"comment\" tooltip=\"{{ item.private_detailes.c }}\" placement=\"top-right\"\r\n              tooltipClass=\"table-tooltip\" [delay]=\"500\" [showWhenNoOverflow]=\"false\">\r\n              {{item.private_detailes.c}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <div class=\"row-divider\"></div>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"contracts-buttons\">\r\n  <button type=\"button\" class=\"blue-button\" [routerLink]=\"'/wallet/contracts/purchase'\">{{\r\n    'CONTRACTS.PURCHASE_BUTTON' | translate }}</button>\r\n  <button type=\"button\" class=\"blue-button\" disabled>{{ 'CONTRACTS.LISTING_BUTTON' | translate }}</button>\r\n</div>\r\n\r\n<ng-template #emtyContracts>\r\n  <span class=\"empty-contracts\">{{ 'CONTRACTS.EMPTY' | translate }}</span>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/contracts/contracts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contracts/contracts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.empty-contracts {\n  font-size: 1.5rem; }\n\n.wrap-table {\n  overflow-x: auto; }\n\n.wrap-table table tbody tr {\n    cursor: pointer;\n    outline: none !important; }\n\n.wrap-table table tbody tr .contract {\n      position: relative;\n      display: flex;\n      align-items: center; }\n\n.wrap-table table tbody tr .contract .icon {\n        flex-shrink: 0; }\n\n.wrap-table table tbody tr .contract .icon.new, .wrap-table table tbody tr .contract .icon.alert {\n          margin-right: 1rem;\n          position: relative; }\n\n.wrap-table table tbody tr .contract .icon.new {\n          background: center/contain no-repeat url('new.svg');\n          width: 1.7rem;\n          height: 1.7rem; }\n\n.wrap-table table tbody tr .contract .icon.alert {\n          background: center/contain no-repeat url('alert.svg');\n          width: 1.7rem;\n          height: 1.2rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase, .wrap-table table tbody tr .contract .icon.sell {\n          margin-right: 1rem;\n          width: 1.5rem;\n          height: 1.5rem; }\n\n.wrap-table table tbody tr .contract .icon.purchase {\n          background: center/contain no-repeat url('purchase.svg'); }\n\n.wrap-table table tbody tr .contract .icon.sell {\n          background: center/contain no-repeat url('sell.svg'); }\n\n.wrap-table table tbody tr .contract span {\n        text-overflow: ellipsis;\n        overflow: hidden; }\n\n.wrap-table table tbody tr .status,\n    .wrap-table table tbody tr .comment {\n      display: inline-flex;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 100%; }\n\n.contracts-buttons {\n  display: flex;\n  margin: 3rem 0;\n  width: 50%; }\n\n.contracts-buttons button {\n    flex: 0 1 50%;\n    margin-right: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3RzL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcY29udHJhY3RzXFxjb250cmFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFEbEI7SUFLUSxlQUFlO0lBQ2Ysd0JBQXdCLEVBQUE7O0FBTmhDO01BUVUsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixtQkFBbUIsRUFBQTs7QUFWN0I7UUFZWSxjQUFjLEVBQUE7O0FBWjFCO1VBZWMsa0JBQWtCO1VBQ2xCLGtCQUFrQixFQUFBOztBQWhCaEM7VUFtQmMsbURBQXNFO1VBQ3RFLGFBQWE7VUFDYixjQUFjLEVBQUE7O0FBckI1QjtVQXlCYyxxREFBd0U7VUFDeEUsYUFBYTtVQUNiLGNBQWMsRUFBQTs7QUEzQjVCO1VBK0JjLGtCQUFrQjtVQUNsQixhQUFhO1VBQ2IsY0FBYyxFQUFBOztBQWpDNUI7VUFvQ2Msd0RBQTJFLEVBQUE7O0FBcEN6RjtVQXVDYyxvREFBdUUsRUFBQTs7QUF2Q3JGO1FBMkNZLHVCQUF1QjtRQUN2QixnQkFBZ0IsRUFBQTs7QUE1QzVCOztNQWlEVSxvQkFBb0I7TUFDcEIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7O0FBT3pCO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBSFo7SUFNSSxhQUFhO0lBQ2Isb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250cmFjdHMvY29udHJhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbXB0eS1jb250cmFjdHMge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi53cmFwLXRhYmxlIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHRhYmxlIHtcclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNvbnRyYWN0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgJi5uZXcsXHJcbiAgICAgICAgICAgICYuYWxlcnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5uZXcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbmV3LnN2Zyk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuN3JlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9hbGVydC5zdmcpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5wdXJjaGFzZSxcclxuICAgICAgICAgICAgJi5zZWxsIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnB1cmNoYXNlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3B1cmNoYXNlLnN2Zyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zZWxsIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3NlbGwuc3ZnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhdHVzLFxyXG4gICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRyYWN0cy1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmbGV4OiAwIDEgNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contracts/contracts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contracts/contracts.component.ts ***!
  \**************************************************/
/*! exports provided: ContractsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsComponent", function() { return ContractsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractsComponent = /** @class */ (function () {
    function ContractsComponent(variablesService) {
        this.variablesService = variablesService;
    }
    Object.defineProperty(ContractsComponent.prototype, "sortedArrayContracts", {
        get: function () {
            return this.variablesService.currentWallet.contracts.sort(function (a, b) {
                if (a.is_new < b.is_new) {
                    return 1;
                }
                if (a.is_new > b.is_new) {
                    return -1;
                }
                if (a.timestamp < b.timestamp) {
                    return 1;
                }
                if (a.timestamp > b.timestamp) {
                    return -1;
                }
                if (a.contract_id < b.contract_id) {
                    return 1;
                }
                if (a.contract_id > b.contract_id) {
                    return -1;
                }
                return 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    ContractsComponent.prototype.ngOnInit = function () {
    };
    ContractsComponent.prototype.ngOnDestroy = function () {
    };
    ContractsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contracts',
            template: __webpack_require__(/*! ./contracts.component.html */ "./src/app/contracts/contracts.component.html"),
            styles: [__webpack_require__(/*! ./contracts.component.scss */ "./src/app/contracts/contracts.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]])
    ], ContractsComponent);
    return ContractsComponent;
}());



/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.CREATE_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-create\" [formGroup]=\"createForm\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{'CREATE_WALLET.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\"\r\n        [class.required-error]=\"createForm.controls['name'].dirty || createForm.controls['name'].touched\"\r\n        [placeholder]=\"createForm.controls['name'].dirty || createForm.controls['name'].touched ? ('CREATE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\r\n        [attr.readonly]=\"walletSaved ? '' : null\" [maxlength]=\"variablesService.maxWalletNameLength\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"createForm.controls['name'].invalid && !createForm.controls['name'].errors['required'] && (createForm.controls['name'].dirty || createForm.controls['name'].touched)\">\r\n        <div *ngIf=\"createForm.controls['name'].errors['duplicate']\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"createForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'CREATE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-password\">{{ 'CREATE_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\"\r\n        placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_NEW' | translate }}\" [attr.readonly]=\"walletSaved ? '' : null\"\r\n        (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\" *ngIf=\"createForm.controls['password'].dirty && createForm.controls['password'].errors\">\r\n        <div *ngIf=\"createForm.controls['password'].errors.pattern\">\r\n          {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"confirm-wallet-password\">{{ 'CREATE_WALLET.CONFIRM' | translate }}</label>\r\n      <input type=\"password\" id=\"confirm-wallet-password\" formControlName=\"confirm\"\r\n        placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate }}\" [attr.readonly]=\"walletSaved ? '' : null\"\r\n        (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"createForm.controls['confirm'].dirty && createForm.controls['confirm'].dirty && createForm.errors\">\r\n        <div *ngIf=\"createForm.errors['confirm_mismatch'] && createForm.get('confirm').value.length > 0\">\r\n          {{ 'CREATE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button_reset\" *ngIf=\"walletSaved\" disabled><i\r\n          class=\"icon\"></i>{{walletSavedName}}</button>\r\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\" [disabled]=\"!createForm.valid\"\r\n        *ngIf=\"!walletSaved\">{{ 'CREATE_WALLET.BUTTON_SELECT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button_reset create-button\" (click)=\"createWallet()\"\r\n        [disabled]=\"!walletSaved\">{{\r\n        'CREATE_WALLET.BUTTON_CREATE' | translate }}</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.scss":
/*!************************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-create {\n  margin: 3.5rem 0 0 0;\n  width: 50%; }\n\n.form-create .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n\n.form-create .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-create .wrap-buttons button.blue-button_reset {\n        width: 30rem; }\n\n.form-create .wrap-buttons button.select-button {\n        width: 30rem; }\n\n.form-create .wrap-buttons button.create-button {\n        width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXdhbGxldC9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGNyZWF0ZS13YWxsZXRcXGNyZWF0ZS13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVSxFQUFBOztBQUZaO0lBS0ksYUFBYTtJQUNiLHNCQUFzQixFQUFBOztBQU4xQjtNQVNNLGdCQUFnQixFQUFBOztBQVR0QjtRQVlRLFlBQVksRUFBQTs7QUFacEI7UUFnQlEsWUFBWSxFQUFBOztBQWhCcEI7UUFvQlEsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXdhbGxldC9jcmVhdGUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm0tY3JlYXRlIHtcclxuICBtYXJnaW46IDMuNXJlbSAwIDAgMDtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAmLmJsdWUtYnV0dG9uX3Jlc2V0IHtcclxuICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNyZWF0ZS1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/create-wallet/create-wallet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-wallet/create-wallet.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWalletComponent", function() { return CreateWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateWalletComponent = /** @class */ (function () {
    function CreateWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, function (g) {
            return g.get('password').value === g.get('confirm').value ? null : { 'confirm_mismatch': true };
        });
        this.wallet = {
            id: ''
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
    }
    CreateWalletComponent.prototype.ngOnInit = function () {
    };
    CreateWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.router.navigate(['/seed-phrase'], { queryParams: { wallet_id: _this.wallet.id } });
        });
    };
    CreateWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.createForm.valid && this.createForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.saveFileDialog(this.translate.instant('CREATE_WALLET.TITLE_SAVE'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
                if (file_status) {
                    _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                    _this.walletSavedName = file_data.path.substr(file_data.path.lastIndexOf('/') + 1, file_data.path.length - 1);
                    _this.backend.generateWallet(file_data.path, _this.createForm.get('password').value, function (generate_status, generate_data, errorCode) {
                        if (generate_status) {
                            _this.wallet.id = generate_data.wallet_id;
                            _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](generate_data.wallet_id, _this.createForm.get('name').value, _this.createForm.get('password').value, generate_data['wi'].path, generate_data['wi'].address, generate_data['wi'].balance, generate_data['wi'].unlocked_balance, generate_data['wi'].mined_total, generate_data['wi'].tracking_hey);
                            _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(generate_data['wi'].address);
                            _this.variablesService.opening_wallet.total_history_item = 0;
                            _this.variablesService.opening_wallet.pages = new Array(1).fill(1);
                            _this.variablesService.opening_wallet.totalPages = 1;
                            _this.variablesService.opening_wallet.currentPage = 1;
                            _this.ngZone.run(function () {
                                _this.walletSaved = true;
                                _this.progressWidth = '33%';
                            });
                        }
                        else {
                            if (errorCode && errorCode === 'ALREADY_EXISTS') {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_TOP');
                            }
                            else {
                                _this.modalService.prepareModal('error', 'CREATE_WALLET.ERROR_CANNOT_SAVE_SYSTEM');
                            }
                        }
                    });
                }
            });
        }
    };
    CreateWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-wallet',
            template: __webpack_require__(/*! ./create-wallet.component.html */ "./src/app/create-wallet/create-wallet.component.html"),
            styles: [__webpack_require__(/*! ./create-wallet.component.scss */ "./src/app/create-wallet/create-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], CreateWalletComponent);
    return CreateWalletComponent;
}());



/***/ }),

/***/ "./src/app/deeplink/deeplink.component.html":
/*!**************************************************!*\
  !*** ./src/app/deeplink/deeplink.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"host-container\"\r\n  *ngIf=\"deeplink && (variablesService.daemon_state === 2 && variablesService.sync_started === false)\">\r\n  <div class=\"container\">\r\n    <ng-container *ngIf=\"this.walletsTopay.length > 1 && !secondStep\">\r\n      <div class=\"modal select-wallet\">\r\n        <div class=\"content\">\r\n          <div class=\"title\">\r\n            <span>Select wallet for action:</span>\r\n          </div>\r\n          <div class=\"inputs-container\">\r\n            <div class=\"lock-selection\">\r\n              <ng-select class=\"custom-select\" [items]=\"walletsTopay\" bindValue=\"wallet_id\" bindLabel=\"name\"\r\n                [(ngModel)]=\"walletToPayId\" [clearable]=\"false\" [searchable]=\"false\">\r\n                <ng-template ng-label-tmp let-item=\"item\">\r\n                  {{item.name}}\r\n                </ng-template>\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                  {{item.name}}\r\n                </ng-template>\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"wrapper-buttons\">\r\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">{{ 'EXPORT_HISTORY.CANCEL' |\r\n            translate\r\n            }}</button>\r\n          <button type=\"submit\" class=\"blue-button\" (click)=\"nextStep()\">Next...</button>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"secondStep && marketplaceModalShow && actionData.action === 'marketplace_offer_create'\">\r\n      <div class=\"modal marketplace\">\r\n        <div class=\"title\">\r\n          <span>Creating a marketplace offer</span>\r\n        </div>\r\n        <div class=\"data-container\">\r\n          <div class=\"row\"><span>Offer title:</span> {{actionData.title}}</div>\r\n          <div class=\"row\"><span>Description:</span> {{actionData.description}}</div>\r\n          <div class=\"row\"><span>Category:</span> {{actionData.category}}</div>\r\n          <div class=\"row\"><span>Price:</span> {{actionData.price}} {{this.variablesService.defaultCurrency}}</div>\r\n          <div class=\"row\"><span>Preview url:</span> {{actionData.url || actionData.img_url}}</div>\r\n          <div class=\"row\"><span>Contacts:</span> {{actionData.contact}}</div>\r\n          <div class=\"row\"><span>Comments:</span>{{actionData.comment || actionData.comments}}</div>\r\n          <div class=\"row mixins\"><span>Mixins:</span> {{actionData.mixins || defaultMixin}}</div>\r\n          <div class=\"row\"><span>Transaction fee:</span> {{actionData.price * (actionData.fee ||\r\n            this.variablesService.default_fee)}}\r\n            {{this.variablesService.defaultCurrency}}\r\n          </div>\r\n        </div>\r\n        <div class=\"wrapper-buttons\">\r\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">{{ 'EXPORT_HISTORY.CANCEL' | translate\r\n            }}</button>\r\n          <button type=\"submit\" class=\"blue-button\" (click)=\"marketplaceSend()\">Sign & Send...</button>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"marketplaceConfirmHash\">\r\n      <div class=\"modal marketplace--success\">\r\n        <div class=\"title\">\r\n          <span>Operation successful</span>\r\n        </div>\r\n        <div class=\"data-container\">\r\n          <div class=\"row\"><span>Operation hash:</span>\r\n            <p (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, marketplaceConfirmHash)\">\r\n              {{marketplaceConfirmHash}}<i class=\"icon\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\"\r\n                (click)=\"copyHash()\"></i></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"wrapper-buttons\">\r\n          <button type=\"button\" class=\"blue-button\" (click)=\"canselAction()\">Close</button>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<app-sync-modal *ngIf=\"deeplink && (variablesService.daemon_state !== 2 || variablesService.sync_started === true)\">\r\n</app-sync-modal>\r\n"

/***/ }),

/***/ "./src/app/deeplink/deeplink.component.scss":
/*!**************************************************!*\
  !*** ./src/app/deeplink/deeplink.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host-container {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.deep-overflow {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 0; }\n\n.container {\n  position: relative;\n  z-index: 5; }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 3.5rem; }\n\n.modal .title {\n    padding: 0 0 7.5rem;\n    font-size: 3.6rem;\n    font-weight: 500;\n    text-align: center;\n    line-height: 4.296rem; }\n\n.modal .content {\n    display: flex; }\n\n.modal .wrapper-buttons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n\n.modal .wrapper-buttons button {\n      width: 30rem; }\n\n.modal .wrapper-buttons button:first-child {\n        margin-right: 5rem; }\n\n.modal.select-wallet .title {\n    padding: 0 0 7.5rem;\n    font-size: 3.6rem;\n    line-height: 4.296rem; }\n\n.modal.select-wallet .content {\n    display: flex;\n    margin: 0 auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    flex-direction: column; }\n\n.modal.select-wallet .content .ng-select.custom-select {\n      border: 1px solid #1f8feb;\n      background: rgba(31, 143, 235, 0.15);\n      border-radius: 1rem;\n      width: 100%;\n      font-weight: 600;\n      padding: 0.3rem 1rem; }\n\n.modal.select-wallet .wrapper-buttons {\n    margin-top: 16rem; }\n\n.modal.marketplace {\n    padding: 2.2rem 20rem 4rem; }\n\n.modal.marketplace .title {\n      padding: 1rem 0 3rem; }\n\n.modal.marketplace .data-container {\n      max-width: 70rem; }\n\n.modal.marketplace .data-container .row {\n        color: rgba(255, 255, 255, 0.616);\n        margin-bottom: 1.4rem;\n        font-weight: 400;\n        font-size: 2.8rem;\n        line-height: normal; }\n\n.modal.marketplace .data-container .row.mixins {\n          margin-top: 3.8rem; }\n\n.modal.marketplace .data-container .row span {\n          font-weight: 700;\n          color: #fff; }\n\n.modal.marketplace .wrapper-buttons {\n      margin: 4.2rem auto 0; }\n\n.modal.marketplace--success .data-container .row {\n      color: rgba(255, 255, 255, 0.616);\n      font-weight: 400;\n      font-size: 2.8rem;\n      line-height: normal; }\n\n.modal.marketplace--success .data-container .row span {\n        font-weight: 700;\n        color: #fff; }\n\n.modal.marketplace--success .data-container .icon {\n      cursor: pointer;\n      margin-left: 1rem; }\n\n.modal.marketplace--success .data-container .icon.copy {\n        transition: all 0.25s ease;\n        width: 2.4rem;\n        height: 2.4rem;\n        background: center/contain no-repeat url('copy.svg'); }\n\n.modal.marketplace--success .data-container .icon.copied {\n        background: center/contain no-repeat url('complete-testwallet.svg'); }\n\n.modal.marketplace--success .wrapper-buttons {\n      justify-content: center;\n      margin-top: 4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVlcGxpbmsvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxkZWVwbGlua1xcZGVlcGxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBSmpCO0lBT0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQixFQUFBOztBQVh6QjtJQWVJLGFBQWEsRUFBQTs7QUFmakI7SUFtQkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUFyQmxDO01BMkJNLFlBQVksRUFBQTs7QUEzQmxCO1FBeUJRLGtCQUFrQixFQUFBOztBQXpCMUI7SUFnQ00sbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBQTs7QUFsQzNCO0lBc0NNLGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUE7O0FBekM1QjtNQTJDUSx5QkFBeUI7TUFDekIsb0NBQW9DO01BQ3BDLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBOztBQWhENUI7SUFxRE0saUJBQWlCLEVBQUE7O0FBckR2QjtJQXlESSwwQkFBMEIsRUFBQTs7QUF6RDlCO01BMkRNLG9CQUFvQixFQUFBOztBQTNEMUI7TUE4RE0sZ0JBQWdCLEVBQUE7O0FBOUR0QjtRQWdFUSxpQ0FBaUM7UUFDakMscUJBQXFCO1FBSXJCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CLEVBQUE7O0FBdkUzQjtVQW1FVSxrQkFBa0IsRUFBQTs7QUFuRTVCO1VBeUVVLGdCQUFnQjtVQUNoQixXQUFXLEVBQUE7O0FBMUVyQjtNQStFTSxxQkFBcUIsRUFBQTs7QUEvRTNCO01Bb0ZVLGlDQUFpQztNQUNqQyxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBOztBQXZGN0I7UUF5RlksZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBQTs7QUExRnZCO01BOEZVLGVBQWU7TUFDZixpQkFBaUIsRUFBQTs7QUEvRjNCO1FBaUdZLDBCQUEwQjtRQUMxQixhQUFhO1FBQ2IsY0FBYztRQUNkLG9EQUF1RSxFQUFBOztBQXBHbkY7UUF1R1ksbUVBQXNGLEVBQUE7O0FBdkdsRztNQTRHUSx1QkFBdUI7TUFDdkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZWVwbGluay9kZWVwbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3N0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG4uZGVlcC1vdmVyZmxvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAzLjVyZW07XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDAgNy41cmVtO1xyXG4gICAgZm9udC1zaXplOiAzLjZyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQuMjk2cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5zZWxlY3Qtd2FsbGV0IHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCA3LjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMy42cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogNC4yOTZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAubmctc2VsZWN0LmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZjhmZWI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTQzLCAyMzUsIDAuMTUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyLWJ1dHRvbnMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5tYXJrZXRwbGFjZSB7XHJcbiAgICBwYWRkaW5nOiAyLjJyZW0gMjByZW0gNHJlbTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMCAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiA3MHJlbTtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTYpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxuICAgICAgICAmLm1peGlucyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC53cmFwcGVyLWJ1dHRvbnMge1xyXG4gICAgICBtYXJnaW46IDQuMnJlbSBhdXRvIDA7XHJcbiAgICB9XHJcbiAgICAmLS1zdWNjZXNzIHtcclxuICAgICAgLmRhdGEtY29udGFpbmVyIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjE2KTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgJi5jb3B5IHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLjRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuY29waWVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC53cmFwcGVyLWJ1dHRvbnMge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/deeplink/deeplink.component.ts":
/*!************************************************!*\
  !*** ./src/app/deeplink/deeplink.component.ts ***!
  \************************************************/
/*! exports provided: DeeplinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeeplinkComponent", function() { return DeeplinkComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeeplinkComponent = /** @class */ (function () {
    function DeeplinkComponent(_router, variablesService, backend, ngZone) {
        var _this = this;
        this._router = _router;
        this.variablesService = variablesService;
        this.backend = backend;
        this.ngZone = ngZone;
        this.deeplink = null;
        this.secondStep = false;
        this.walletToPayId = 0;
        this.marketplaceModalShow = true;
        this.copyAnimation = false;
        this.marketplaceConfirmHash = null;
        this.sendRoute = false;
        this.actionData = {};
        this.defaultMixin = _shared_constants__WEBPACK_IMPORTED_MODULE_6__["MIXIN"];
        this.walletsTopay = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.variablesService.deeplink$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            _this.ngZone.run(function () {
                if (data) {
                    _this.deeplink = data;
                    _this.actionData = {};
                    _this.walletsTopay = _this.variablesService.wallets.filter(function (wallet) { return !wallet.is_watch_only || !wallet.is_auditable; });
                    if (_this.walletsTopay.length === 0) {
                        _this.canselAction();
                        return;
                    }
                    _this.actionData = _this.parceString(_this.deeplink);
                    if (_this.walletsTopay.length === 1) {
                        if (variablesService.daemon_state === 2 && variablesService.sync_started === false) {
                            _this.walletToPayId = _this.walletsTopay[0].wallet_id;
                            _this.nextStep();
                        }
                        else {
                            _this.nextStepInterval = setInterval(function () {
                                if (variablesService.daemon_state === 2 && variablesService.sync_started === false) {
                                    _this.walletToPayId = _this.walletsTopay[0].wallet_id;
                                    _this.nextStep();
                                    clearInterval(_this.nextStepInterval);
                                }
                            }, 1500);
                        }
                    }
                }
                else {
                    _this.deeplink = null;
                }
            });
        });
    }
    DeeplinkComponent.prototype.ngOnInit = function () {
    };
    DeeplinkComponent.prototype.parceString = function (string) {
        var qoutesRex = new RegExp(/'|"|”|%E2%80%9D|%22/g);
        var spaceSymbolRex = new RegExp(/%20/g);
        var newobj = {};
        var newstring = string.substr(5); // delete chinet:;
        newstring.split('&').forEach(function (string) {
            var _a = string.split('='), key = _a[0], value = _a[1];
            newobj[key] = value.replace(qoutesRex, '').replace(spaceSymbolRex, " ").trim();
        });
        return newobj;
    };
    DeeplinkComponent.prototype.canselAction = function () {
        this.deeplink = null;
        this.variablesService.deeplink$.next(null);
        this.variablesService.sendActionData$.next({});
        this.actionData = {};
        this.secondStep = false;
    };
    DeeplinkComponent.prototype.marketplaceSend = function () {
        var _this = this;
        var offerObject = {
            wallet_id: this.walletToPayId,
            od: {
                ap: this.actionData.price || '',
                at: '1',
                cat: this.actionData.category || '',
                cnt: this.actionData.contact || '',
                com: this.actionData.comment || this.actionData.comments || '',
                do: this.actionData.description || '',
                et: 10,
                fee: new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"]('' + ((+this.actionData.fee || +this.variablesService.default_fee) * 1000000000000)),
                lci: '',
                lco: 'World Wide',
                ot: 1,
                pt: 'Credit cards, BTC, CHN, ETH',
                t: this.actionData.title || '',
                url: this.actionData.url || this.actionData.img_url || '',
            },
        };
        this.backend.push_offer(offerObject, function (Status, data) {
            if (data.success) {
                _this.marketplaceModalShow = false;
                _this.marketplaceConfirmHash = data.tx_hash;
            }
            else {
                _this.canselAction();
            }
        });
    };
    DeeplinkComponent.prototype.copyHash = function () {
        var _this = this;
        this.backend.setClipboard(this.marketplaceConfirmHash);
        this.copyAnimation = true;
        setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    DeeplinkComponent.prototype.nextStep = function () {
        var _this = this;
        if (this.actionData.action === "send") {
            this.ngZone.run(function () {
                _this.variablesService.sendActionData$.next(_this.actionData);
                _this.variablesService.deeplink$.next(null);
                _this.variablesService.setCurrentWallet(_this.walletToPayId);
                _this._router.navigate(['/wallet/send']);
                _this.secondStep = false;
            });
        }
        else if (this.actionData.action === "escrow") {
            this.ngZone.run(function () {
                _this.variablesService.sendActionData$.next(_this.actionData);
                _this.variablesService.deeplink$.next(null);
                _this.variablesService.setCurrentWallet(_this.walletToPayId);
                _this._router.navigate(['/wallet/contracts/purchase']);
                _this.secondStep = false;
            });
        }
        else {
            this.secondStep = true;
        }
    };
    DeeplinkComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.variablesService.deeplink$.next(null);
    };
    DeeplinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-deeplink',
            template: __webpack_require__(/*! ./deeplink.component.html */ "./src/app/deeplink/deeplink.component.html"),
            styles: [__webpack_require__(/*! ./deeplink.component.scss */ "./src/app/deeplink/deeplink.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], DeeplinkComponent);
    return DeeplinkComponent;
}());



/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.EDIT_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-edit\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\">\r\n        {{ 'EDIT_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" id=\"alias-name\" [value]=\"alias.name\"\r\n        placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\">\r\n        {{ 'EDIT_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\" class=\"scrolled-content\" [(ngModel)]=\"alias.comment\"\r\n        [ngModelOptions]=\"{standalone: true}\" [maxlength]=\"variablesService.maxCommentLength\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\"\r\n        placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\">\r\n      </textarea>\r\n      <div class=\"error-block\" *ngIf=\"alias.comment.length > 0 && notEnoughMoney\">\r\n        {{ 'EDIT_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"alias.comment.length >= variablesService.maxCommentLength\">\r\n        {{ 'EDIT_ALIAS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"EDIT_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency:\r\n      variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"updateAlias()\"\r\n        [disabled]=\"notEnoughMoney || (oldAliasComment === alias.comment) || alias.comment.length > variablesService.maxCommentLength\">{{\r\n        'EDIT_ALIAS.BUTTON_EDIT' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.scss":
/*!******************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-edit {\n  margin: 2.4rem 0; }\n  .form-edit .alias-name {\n    width: 50%; }\n  .form-edit .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-edit .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-edit .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1hbGlhcy9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGVkaXQtYWxpYXNcXGVkaXQtYWxpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLFVBQVUsRUFBQTtFQUpkO0lBUUksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBVHBCO0lBYUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0IsRUFBQTtFQWYxQjtNQWtCTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1hbGlhcy9lZGl0LWFsaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWRpdCB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuXHJcbiAgLmFsaWFzLW5hbWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hbGlhcy1jb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-alias/edit-alias.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-alias/edit-alias.component.ts ***!
  \****************************************************/
/*! exports provided: EditAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAliasComponent", function() { return EditAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAliasComponent = /** @class */ (function () {
    function EditAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.requestProcessing = false;
    }
    EditAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment
        };
        this.oldAliasComment = alias.comment;
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    EditAliasComponent.prototype.updateAlias = function () {
        var _this = this;
        if (this.requestProcessing || this.notEnoughMoney || this.oldAliasComment === this.alias.comment || this.alias.comment.length > this.variablesService.maxCommentLength) {
            return;
        }
        this.requestProcessing = true;
        this.backend.updateAlias(this.wallet.wallet_id, this.alias, this.variablesService.default_fee, function (status) {
            if (status) {
                _this.modalService.prepareModal('success', '');
                _this.wallet.alias['comment'] = _this.alias.comment;
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/']);
                });
            }
            _this.requestProcessing = false;
        });
    };
    EditAliasComponent.prototype.back = function () {
        this.location.back();
    };
    EditAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-alias',
            template: __webpack_require__(/*! ./edit-alias.component.html */ "./src/app/edit-alias/edit-alias.component.html"),
            styles: [__webpack_require__(/*! ./edit-alias.component.scss */ "./src/app/edit-alias/edit-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EditAliasComponent);
    return EditAliasComponent;
}());



/***/ }),

/***/ "./src/app/export-import/export-import.component.html":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n  <div>\r\n    <div class=\"head\">\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <h3 class=\"contacts-title\">{{ 'CONTACTS.IMPORT_EXPORT' | translate }}</h3>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <button class=\"blue-button\" type=\"button\" (click)=\"import()\">\r\n        {{ 'CONTACTS.IMPORT' | translate }}\r\n      </button>\r\n      <button class=\"blue-button\" type=\"button\" (click)=\"export()\">\r\n        {{ 'CONTACTS.EXPORT' | translate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/export-import/export-import.component.scss":
/*!************************************************************!*\
  !*** ./src/app/export-import/export-import.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.head {\n  justify-content: flex-end; }\n\n.contacts-title {\n  font-size: 1.7rem;\n  margin-bottom: 1rem; }\n\n.btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 -0.5rem;\n  padding: 1.5rem 0; }\n\n.btn-wrapper button {\n    flex: 1 0 auto;\n    margin: 0 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwb3J0LWltcG9ydC9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGV4cG9ydC1pbXBvcnRcXGV4cG9ydC1pbXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUxuQjtJQVFJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2V4cG9ydC1pbXBvcnQvZXhwb3J0LWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jb250YWN0cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmJ0bi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCAtMC41cmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/export-import/export-import.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/export-import/export-import.component.ts ***!
  \**********************************************************/
/*! exports provided: ExportImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImportComponent", function() { return ExportImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExportImportComponent = /** @class */ (function () {
    function ExportImportComponent(location, variablesService, backend, modalService, papa, translate, router, ngZone) {
        this.location = location;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modalService = modalService;
        this.papa = papa;
        this.translate = translate;
        this.router = router;
        this.ngZone = ngZone;
    }
    ExportImportComponent.prototype.ngOnInit = function () { };
    ExportImportComponent.prototype.import = function () {
        var _this = this;
        this.backend.openFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                if (_this.isValid(file_data.path)) {
                    _this.backend.loadFile(file_data.path, function (status, data) {
                        if (!status) {
                            _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT_EMPTY');
                        }
                        else {
                            var options = {
                                header: true
                            };
                            var elements = _this.papa.parse(data, options);
                            var isArray = Array.isArray(elements.data);
                            if (isArray && elements.data.length !== 0 && !elements.errors.length) {
                                if (!_this.variablesService.contacts.length) {
                                    elements.data.forEach(function (element) {
                                        _this.variablesService.contacts.push(element);
                                    });
                                }
                                else {
                                    elements.data.forEach(function (element) {
                                        var indexName = _this.variablesService.contacts.findIndex(function (contact) { return contact.name === element.name; });
                                        var indexAddress = _this.variablesService.contacts.findIndex(function (contact) { return contact.address === element.address; });
                                        if (indexAddress === -1 && indexName === -1) {
                                            _this.variablesService.contacts.push(element);
                                        }
                                        if (indexName !== -1 && indexAddress === -1) {
                                            _this.variablesService.contacts.push({
                                                name: element.name + " " + _this.translate.instant('CONTACTS.COPY'),
                                                address: element.address,
                                                notes: element.notes
                                            });
                                        }
                                    });
                                }
                                _this.backend.getContactAlias();
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/contacts']);
                                });
                            }
                            if (elements.errors.length) {
                                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_IMPORT');
                                console.log(elements.errors);
                            }
                        }
                    });
                }
                else {
                    _this.modalService.prepareModal('error', 'CONTACTS.ERROR_TYPE_FILE');
                }
            }
        });
    };
    ExportImportComponent.prototype.export = function () {
        var _this = this;
        var contacts = [];
        this.variablesService.contacts.forEach(function (contact) {
            delete contact.alias;
            contacts.push(contact);
        });
        this.backend.saveFileDialog('', '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (!_this.variablesService.contacts.length && !(file_data.error_code === 'CANCELED')) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EMPTY_LIST');
            }
            var path = _this.isValid(file_data.path) ? file_data.path : file_data.path + ".csv";
            if (file_status && _this.isValid(path) && _this.variablesService.contacts.length) {
                _this.backend.storeFile(path, _this.papa.unparse(contacts));
            }
            if (!(file_data.error_code === 'CANCELED') && !_this.isValid(path)) {
                _this.modalService.prepareModal('error', 'CONTACTS.ERROR_EXPORT');
            }
        });
    };
    ExportImportComponent.prototype.isValid = function (file) {
        return file.endsWith('.csv');
    };
    ExportImportComponent.prototype.back = function () {
        this.location.back();
    };
    ExportImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-import',
            template: __webpack_require__(/*! ./export-import.component.html */ "./src/app/export-import/export-import.component.html"),
            styles: [__webpack_require__(/*! ./export-import.component.scss */ "./src/app/export-import/export-import.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["Papa"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ExportImportComponent);
    return ExportImportComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"history-wrap\">\r\n  <div class=\"wrap-table scrolled-content\">\r\n    <table class=\"history-table\">\r\n      <thead>\r\n        <tr #head (window:resize)=\"calculateWidth()\">\r\n          <th>{{ 'HISTORY.STATUS' | translate }}</th>\r\n          <th>{{ 'HISTORY.DATE' | translate }}</th>\r\n          <th>{{ 'HISTORY.AMOUNT' | translate }}</th>\r\n          <th>{{ 'HISTORY.FEE' | translate }}</th>\r\n          <th>{{ 'HISTORY.ADDRESS' | translate }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let item of variablesService.currentWallet.history\">\r\n          <tr (click)=\"openDetails(item.tx_hash)\" [class.locked-transaction]=\"!item.is_mining && item.unlock_time > 0\">\r\n            <td>\r\n              <div class=\"status\" [ngClass]=\"item.is_income ? 'received' : 'send'\">\r\n                <ng-container *ngIf=\"getHeight(item) < 10\">\r\n                  <svg class=\"confirmation\" style=\"transform: rotateZ(-90deg)\"\r\n                    tooltip=\"{{ 'HISTORY.STATUS_TOOLTIP' | translate : {'current': getHeight(item), 'total': 10} }}\"\r\n                    placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\">\r\n                    <circle stroke-dasharray=\"100\" fill=\"transparent\" stroke-dashoffset=\"0\" cx=\"50%\" cy=\"50%\"\r\n                      stroke=\"rgba(31, 143, 235, 0.33)\" r=\"0.7rem\" stroke-width=\"0.3rem\">\r\n                    </circle>\r\n                    <circle class=\"progress-circle\" cx=\"50%\" cy=\"50%\"\r\n                      [style.stroke]=\"item.is_income ? '#16d1d6' : '#1f8feb'\" r=\"0.7rem\" fill=\"transparent\"\r\n                      stroke-width=\"0.3rem\" stroke-dasharray=\"4.5rem\" stroke-dashoffset=\"4.5rem\" stroke-linecap=\"round\"\r\n                      [style.stroke-dashoffset]=\"strokeSize(item)\"></circle>\r\n                  </svg>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"getHeight(item) === 10\">\r\n                  <img *ngIf=\"!item.is_income\" class=\"status-transaction\" src=\"./assets/icons/send.svg\" alt=\"\">\r\n                  <img *ngIf=\"item.is_income\" class=\"status-transaction\" src=\"./assets/icons/receive.svg\" alt=\"\">\r\n                </ng-container>\r\n                <span class=\"status-transaction-text\">{{ (item.is_income ? 'HISTORY.RECEIVED' : 'HISTORY.SEND') |\r\n                  translate }}</span>\r\n                <ng-container *ngIf=\"item.unlock_time !== 0 && item.tx_type !== 6\">\r\n                  <ng-container *ngIf=\"isLocked(item); else unlock\">\r\n                    <ng-container *ngIf=\"item.unlock_time < 500000000\">\r\n                      <i class=\"icon lock-transaction\"\r\n                        tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': time(item) | date : 'MM.dd.yy'} }}\"\r\n                        placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\r\n                        [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"item.unlock_time > 500000000\">\r\n                      <i class=\"icon lock-transaction\"\r\n                        tooltip=\"{{ 'HISTORY.LOCK_TOOLTIP' | translate : {'date': item.unlock_time * 1000 | date : 'MM.dd.yy'} }}\"\r\n                        placement=\"bottom-left\" tooltipClass=\"table-tooltip\" [delay]=\"500\"\r\n                        [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-template #unlock>\r\n                    <i class=\"icon unlock-transaction\" placement=\"bottom-left\"\r\n                      [class.position]=\"variablesService.height_app - item.height < 10 || item.height === 0 && item.timestamp > 0\"></i>\r\n                  </ng-template>\r\n                </ng-container>\r\n              </div>\r\n            </td>\r\n            <td>{{item.timestamp * 1000 | date : 'dd-MM-yyyy HH:mm'}}</td>\r\n            <td>\r\n              <span *ngIf=\"item.sortAmount && item.sortAmount.toString() !== '0'\">{{item.sortAmount | intToMoney}}\r\n                {{variablesService.defaultCurrency}}</span>\r\n            </td>\r\n            <td>\r\n              <span *ngIf=\"item.sortFee && item.sortFee.toString() !== '0'\">{{item.sortFee | intToMoney}}\r\n                {{variablesService.defaultCurrency}}</span>\r\n            </td>\r\n            <td class=\"remote-address\">\r\n              <span *ngIf=\"!(item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0])\">{{item |\r\n                historyTypeMessages}}</span>\r\n              <span *ngIf=\"item.tx_type === 0 && item.remote_addresses && item.remote_addresses[0]\"\r\n                (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, item.remote_addresses[0])\">{{item.remote_addresses[0]}}</span>\r\n            </td>\r\n          </tr>\r\n          <div class=\"row-divider\"></div>\r\n          <tr class=\"transaction-details\" [class.open]=\"item.tx_hash === openedDetails\">\r\n            <td colspan=\"5\">\r\n              <ng-container *ngIf=\"item.tx_hash === openedDetails\">\r\n                <app-transaction-details [transaction]=\"item\" [sizes]=\"calculatedWidth\"></app-transaction-details>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n          <div class=\"row-divider\"></div>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div></div>\r\n  <div class=\"pagination-wrapper\">\r\n    <div class=\"pagination\">\r\n      <div>\r\n        <button [ngClass]=\"{'disabled': variablesService.sync_started || wallet}\"\r\n          [disabled]=\"variablesService.currentWallet.currentPage === 1 || variablesService.sync_started || wallet\"\r\n          (click)=\"setPage(variablesService.currentWallet.currentPage - 1)\">\r\n          <svg class=\"icon\" viewBox=\"0 0 17 17\" width=\"100%\" height=\"100%\" fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path\r\n              d=\"M8.63281 16.3281C12.9922 16.3281 16.6016 12.7109 16.6016 8.35938C16.6016 4 12.9844 0.390625 8.625 0.390625C4.27344 0.390625 0.664062 4 0.664062 8.35938C0.664062 12.7109 4.28125 16.3281 8.63281 16.3281ZM4.49219 8.35156C4.49219 8.17188 4.55469 8.04688 4.71875 7.88281L7.4375 5.14844C7.54688 5.03906 7.6875 4.98438 7.85938 4.98438C8.19531 4.98438 8.44531 5.23438 8.44531 5.57031C8.44531 5.74219 8.36719 5.89062 8.26562 6.00781L7.26562 7L6.29688 7.8125L8 7.74219H12.1797C12.5312 7.74219 12.7891 7.99219 12.7891 8.35156C12.7891 8.70312 12.5391 8.95312 12.1797 8.95312H8L6.28906 8.89062L7.26562 9.70312L8.26562 10.6953C8.375 10.8047 8.44531 10.9531 8.44531 11.125C8.44531 11.4609 8.19531 11.7188 7.85938 11.7188C7.6875 11.7188 7.54688 11.6562 7.4375 11.5469L4.71875 8.82031C4.57031 8.67188 4.49219 8.53125 4.49219 8.35156Z\"\r\n              fill=\"#FDFEFF\" fill-opacity=\"0.3\" />\r\n          </svg>\r\n        </button>\r\n\r\n        <ng-container *ngIf=\"!mining\">\r\n          <button *ngFor=\"let page of variablesService.currentWallet.pages\"\r\n            [class.active]=\"variablesService.currentWallet.currentPage === page\"\r\n            (click)=\"setPage(page)\">{{page}}</button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"mining\">\r\n          <button\r\n            [ngClass]=\"{ 'active': variablesService.currentWallet.currentPage, 'disabled': variablesService.sync_started || wallet}\"\r\n            [disabled]=\"stop_paginate || variablesService.sync_started || wallet\"\r\n            (click)=\"setPage(variablesService.currentWallet.currentPage)\">\r\n            {{variablesService.currentWallet.currentPage}}\r\n          </button>\r\n        </ng-container>\r\n\r\n        <button [disabled]=\"stop_paginate || variablesService.sync_started || wallet\"\r\n          [ngClass]=\"{'disabled': variablesService.sync_started || wallet}\"\r\n          (click)=\"setPage(variablesService.currentWallet.currentPage + 1)\">\r\n          <svg class=\"icon\" viewBox=\"0 0 17 17\" width=\"100%\" height=\"100%\" fill=\"none\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path\r\n              d=\"M8.63281 16.3281C12.9922 16.3281 16.6016 12.7109 16.6016 8.35938C16.6016 4 12.9844 0.390625 8.625 0.390625C4.27344 0.390625 0.664062 4 0.664062 8.35938C0.664062 12.7109 4.28125 16.3281 8.63281 16.3281ZM12.7656 8.35156C12.7656 8.53125 12.6953 8.67188 12.5391 8.82031L9.82031 11.5469C9.71094 11.6562 9.57031 11.7188 9.39844 11.7188C9.0625 11.7188 8.8125 11.4609 8.8125 11.125C8.8125 10.9531 8.88281 10.8047 8.99219 10.6953L9.99219 9.70312L10.9688 8.89062L9.26562 8.95312H5.07812C4.72656 8.95312 4.46875 8.70312 4.46875 8.35156C4.46875 7.99219 4.72656 7.74219 5.07812 7.74219H9.26562L10.9688 7.8125L9.99219 7L8.99219 6.00781C8.89062 5.89062 8.8125 5.74219 8.8125 5.57031C8.8125 5.23438 9.0625 4.98438 9.39844 4.98438C9.57031 4.98438 9.71094 5.03906 9.82031 5.14844L12.5391 7.88281C12.7031 8.04688 12.7656 8.17188 12.7656 8.35156Z\"\r\n              fill=\"#FDFEFF\" fill-opacity=\"0.3\" />\r\n          </svg>\r\n        </button>\r\n      </div>\r\n      <div class=\"mining-transaction-switch\">\r\n        <span class=\"switch-text\">Hide mining transactions</span>\r\n        <div class=\"switch\" [ngClass]=\"{'disabled': variablesService.sync_started || wallet}\"\r\n          (click)=\"toggleMiningTransactions(); $event.stopPropagation()\" [class.on]=\"mining\" [class.off]=\"!mining\">\r\n          <span class=\"circle\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.history-wrap {\n  height: 95%; }\n\n.wrap-table {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: overlay; }\n\n.wrap-table table.history-table tbody {\n    font-weight: 500; }\n\n.wrap-table table.history-table tbody tr td {\n      min-width: 10rem; }\n\n.wrap-table table.history-table tbody tr .status {\n      position: relative;\n      display: flex;\n      align-items: center; }\n\n.wrap-table table.history-table tbody tr .status .confirmation {\n        margin-right: 0.7rem;\n        width: 1.7rem;\n        height: 1.7rem; }\n\n.wrap-table table.history-table tbody tr .status .lock-transaction {\n        background: center/contain no-repeat url('lock-transaction.svg');\n        margin-left: 0.7rem;\n        width: 1.4rem;\n        height: 1.4rem; }\n\n.wrap-table table.history-table tbody tr .status .unlock-transaction {\n        background: center/contain no-repeat url('unlock-transaction.svg');\n        margin-left: 0.7rem;\n        width: 1.4rem;\n        height: 1.4rem; }\n\n.wrap-table table.history-table tbody tr .status img.status-transaction {\n        margin-right: 0.7rem;\n        width: 1.5rem;\n        height: 1.5rem; }\n\n.wrap-table table.history-table tbody tr .remote-address span {\n      display: inline-flex;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.wrap-table table.history-table tbody tr:not(.transaction-details) {\n      cursor: pointer; }\n\n.wrap-table table.history-table tbody tr.transaction-details {\n      transition: 0.5s height linear, 0s font-size;\n      transition-delay: 0s, 0.5s;\n      height: 0; }\n\n.wrap-table table.history-table tbody tr.transaction-details.open {\n        height: 18rem; }\n\n.wrap-table table.history-table tbody tr.transaction-details td {\n        border-radius: 1rem;\n        position: relative;\n        overflow: hidden;\n        line-height: inherit;\n        padding-top: 0;\n        padding-bottom: 0; }\n\n.pagination-wrapper {\n  margin-right: 1rem; }\n\n.pagination-wrapper .pagination {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n\n.pagination-wrapper .pagination > div {\n      display: flex;\n      align-items: center; }\n\n.pagination-wrapper .pagination button {\n      margin-right: 0.5rem;\n      padding: 0;\n      font-size: 1.6rem;\n      transition: all 0.3s; }\n\n.pagination-wrapper .pagination button.disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.pagination-wrapper .pagination button svg {\n        margin-top: 0.3rem;\n        width: 1.8rem;\n        height: 1.8rem; }\n\n.mining-transaction-switch {\n  display: flex;\n  align-items: center; }\n\n.mining-transaction-switch .switch-text {\n    margin-right: 2rem;\n    font-size: 1.6rem;\n    line-height: 1.9rem;\n    color: #fdfeff; }\n\n.mining-transaction-switch .switch {\n    display: flex;\n    align-items: center;\n    border-radius: 1.1rem;\n    cursor: pointer;\n    padding: 0.2rem;\n    width: 3.6rem;\n    height: 2.2rem; }\n\n.mining-transaction-switch .switch.on {\n      justify-content: flex-end; }\n\n.mining-transaction-switch .switch.off {\n      justify-content: flex-start;\n      background-color: rgba(255, 255, 255, 0.2); }\n\n.mining-transaction-switch .switch .circle {\n      border-radius: 50%;\n      width: 1.8rem;\n      height: 1.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXGhpc3RvcnlcXGhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUhyQjtJQU1NLGdCQUFnQixFQUFBOztBQU50QjtNQVNVLGdCQUFnQixFQUFBOztBQVQxQjtNQVlVLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7O0FBZDdCO1FBZ0JZLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQWxCMUI7UUFxQlksZ0VBQW1GO1FBQ25GLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQXhCMUI7UUEyQlksa0VBQXFGO1FBQ3JGLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsY0FBYyxFQUFBOztBQTlCMUI7UUFpQ1ksb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixjQUFjLEVBQUE7O0FBbkMxQjtNQXdDWSxvQkFBb0I7TUFDcEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBQTs7QUEzQ25DO01BK0NVLGVBQWUsRUFBQTs7QUEvQ3pCO01BbURVLDRDQUE0QztNQUM1QywwQkFBMEI7TUFDMUIsU0FBUyxFQUFBOztBQXJEbkI7UUF1RFksYUFBYSxFQUFBOztBQXZEekI7UUEwRFksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTs7QUFPN0I7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFPSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTs7QUFWdkI7TUFJTSxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7O0FBTHpCO01Bb0JNLG9CQUFvQjtNQUNwQixVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBOztBQXZCMUI7UUFhUSwyQ0FBNEQsRUFBQTs7QUFicEU7UUFnQlEsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjLEVBQUE7O0FBU3RCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUZyQjtJQUlJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTs7QUFQbEI7SUFVSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBaEJsQjtNQWtCTSx5QkFBeUIsRUFBQTs7QUFsQi9CO01BcUJNLDJCQUEyQjtNQUMzQiwwQ0FBMEMsRUFBQTs7QUF0QmhEO01BeUJNLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oaXN0b3J5LXdyYXAge1xyXG4gIGhlaWdodDogOTUlO1xyXG59XHJcbi53cmFwLXRhYmxlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XHJcbiAgdGFibGUuaGlzdG9yeS10YWJsZSB7XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgLmNvbmZpcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2NrLXRyYW5zYWN0aW9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9sb2NrLXRyYW5zYWN0aW9uLnN2Zyk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVubG9jay10cmFuc2FjdGlvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdW5sb2NrLXRyYW5zYWN0aW9uLnN2Zyk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nLnN0YXR1cy10cmFuc2FjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlbW90ZS1hZGRyZXNzIHtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOm5vdCgudHJhbnNhY3Rpb24tZGV0YWlscykge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRyYW5zYWN0aW9uLWRldGFpbHMge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGhlaWdodCBsaW5lYXIsIDBzIGZvbnQtc2l6ZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgaGVpZ2h0IGxpbmVhciwgMHMgZm9udC1zaXplO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuNXM7XHJcbiAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBjdXJzb3I6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbm90LWFsbG93ZWQuc3ZnKSwgbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgICAgICAgd2lkdGg6IDEuOHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgfVxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubWluaW5nLXRyYW5zYWN0aW9uLXN3aXRjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5zd2l0Y2gtdGV4dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XHJcbiAgICBjb2xvcjogI2ZkZmVmZjtcclxuICB9XHJcbiAgLnN3aXRjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIHdpZHRoOiAzLjZyZW07XHJcbiAgICBoZWlnaHQ6IDIuMnJlbTtcclxuICAgICYub24ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgJi5vZmYge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIH1cclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_services_pagination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/pagination.service */ "./src/app/_helpers/services/pagination.service.ts");
/* harmony import */ var _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/pagination.store */ "./src/app/_helpers/services/pagination.store.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(route, variablesService, pagination, backend, ngZone, paginationStore) {
        this.route = route;
        this.variablesService = variablesService;
        this.pagination = pagination;
        this.backend = backend;
        this.ngZone = ngZone;
        this.paginationStore = paginationStore;
        this.openedDetails = '';
        this.calculatedWidth = [];
        this.stop_paginate = false;
        this.mining = false;
        this.x = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(3);
        this.y = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0.2);
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.openedDetails = '';
        });
        var restore = false;
        if (this.variablesService.after_sync_request.hasOwnProperty(this.variablesService.currentWallet.wallet_id)) {
            restore = this.variablesService.after_sync_request[this.variablesService.currentWallet.wallet_id];
        }
        if (!this.variablesService.sync_started && restore && this.variablesService.currentWallet.wallet_id) {
            this.wallet = this.variablesService.getNotLoadedWallet();
            if (this.wallet) {
                this.tick();
            }
            // if this is was restore wallet and it was selected on moment when sync completed
            this.getRecentTransfers();
            this.variablesService.after_sync_request[this.variablesService.currentWallet.wallet_id] = false;
        }
        var after_sync_request = false;
        if (this.variablesService.after_sync_request.hasOwnProperty(this.variablesService.currentWallet.wallet_id)) {
            after_sync_request = this.variablesService.after_sync_request[this.variablesService.currentWallet.wallet_id];
        }
        if (after_sync_request && !this.variablesService.sync_started) {
            // if user click on the wallet at the first time after restore.
            this.getRecentTransfers();
        }
        if (this.variablesService.stop_paginate.hasOwnProperty(this.variablesService.currentWallet.wallet_id)) {
            this.stop_paginate = this.variablesService.stop_paginate[this.variablesService.currentWallet.wallet_id];
        }
        else {
            this.stop_paginate = false;
        }
        // this will hide pagination a bit earlier
        this.wallet = this.variablesService.getNotLoadedWallet();
        if (this.wallet) {
            this.tick();
        }
        this.mining = this.variablesService.currentWallet.exclude_mining_txs;
    };
    HistoryComponent.prototype.ngAfterViewChecked = function () {
        this.calculateWidth();
    };
    HistoryComponent.prototype.strokeSize = function (item) {
        var rem = this.variablesService.settings.scale;
        if ((this.variablesService.height_app - item.height >= 10 && item.height !== 0) || (item.is_mining === true && item.height === 0)) {
            return 0;
        }
        else {
            if (item.height === 0 || this.variablesService.height_app - item.height < 0) {
                return (4.5 * rem);
            }
            else {
                return ((4.5 * rem) - (((4.5 * rem) / 100) * ((this.variablesService.height_app - item.height) * 10)));
            }
        }
    };
    HistoryComponent.prototype.resetPaginationValues = function () {
        var _this = this;
        this.ngZone.run(function () {
            var total_history_item = _this.variablesService.currentWallet
                .total_history_item;
            var count = _this.variablesService.count;
            _this.variablesService.currentWallet.totalPages = Math.ceil(total_history_item / count);
            _this.variablesService.currentWallet.exclude_mining_txs = _this.mining;
            _this.variablesService.currentWallet.currentPage = 1;
            if (!_this.variablesService.currentWallet.totalPages) {
                _this.variablesService.currentWallet.totalPages = 1;
            }
            _this.variablesService.currentWallet.totalPages >
                _this.variablesService.maxPages
                ? (_this.variablesService.currentWallet.pages = new Array(5)
                    .fill(1)
                    .map(function (value, index) { return value + index; }))
                : (_this.variablesService.currentWallet.pages = new Array(_this.variablesService.currentWallet.totalPages)
                    .fill(1)
                    .map(function (value, index) { return value + index; }));
        });
    };
    HistoryComponent.prototype.setPage = function (pageNumber) {
        // this is will allow pagination for wallets that was open from existed wallets'
        if (pageNumber === this.variablesService.currentWallet.currentPage) {
            return;
        }
        if (this.variablesService.currentWallet.open_from_exist &&
            !this.variablesService.currentWallet.updated) {
            this.variablesService.get_recent_transfers = false;
            this.variablesService.currentWallet.updated = true;
        }
        // if not running get_recent_transfers callback
        if (!this.variablesService.get_recent_transfers) {
            this.variablesService.currentWallet.currentPage = pageNumber;
        }
        if (!this.variablesService.get_recent_transfers) {
            this.getRecentTransfers();
        }
    };
    HistoryComponent.prototype.toggleMiningTransactions = function () {
        var _this = this;
        if (!this.variablesService.sync_started && !this.wallet) {
            var value = this.paginationStore.value;
            if (!value) {
                this.paginationStore.setPage(1, 0, this.variablesService.currentWallet.wallet_id); // add back page for the first page
            }
            else {
                var pages = value.filter(function (item) { return item.walletID === _this.variablesService.currentWallet.wallet_id; });
                if (!pages.length) {
                    this.paginationStore.setPage(1, 0, this.variablesService.currentWallet.wallet_id); // add back page for the first page
                }
            }
            this.mining = !this.mining;
            this.resetPaginationValues();
            this.getRecentTransfers();
        }
    };
    HistoryComponent.prototype.getRecentTransfers = function () {
        var _this = this;
        var offset = this.pagination.getOffset(this.variablesService.currentWallet.wallet_id);
        var value = this.paginationStore.value;
        var pages = value
            ? value.filter(function (item) { return item.walletID === _this.variablesService.currentWallet.wallet_id; })
            : [];
        this.backend.getRecentTransfers(this.variablesService.currentWallet.wallet_id, offset, this.variablesService.count, this.variablesService.currentWallet.exclude_mining_txs, function (status, data) {
            var isForward = _this.paginationStore.isForward(pages, _this.variablesService.currentWallet.currentPage);
            if (_this.mining && isForward && pages && pages.length === 1) {
                _this.variablesService.currentWallet.currentPage = 1; // set init page after navigation back
            }
            var history = data && data.history;
            _this.variablesService.stop_paginate[_this.variablesService.currentWallet.wallet_id] =
                (history && history.length < _this.variablesService.count) || !history;
            _this.stop_paginate = _this.variablesService.stop_paginate[_this.variablesService.currentWallet.wallet_id];
            if (!_this.variablesService.stop_paginate[_this.variablesService.currentWallet.wallet_id]) {
                var page = _this.variablesService.currentWallet.currentPage + 1;
                if (isForward &&
                    _this.mining &&
                    history &&
                    history.length === _this.variablesService.count) {
                    _this.paginationStore.setPage(page, data.last_item_index, _this.variablesService.currentWallet.wallet_id); // add back page for current page
                }
            }
            _this.pagination.calcPages(data);
            _this.pagination.prepareHistory(data, status);
            _this.ngZone.run(function () {
                _this.variablesService.get_recent_transfers = false;
                if (_this.variablesService.after_sync_request.hasOwnProperty(_this.variablesService.currentWallet.wallet_id)) {
                    // this is will complete get_recent_transfers request
                    // this will switch of
                    _this.variablesService.after_sync_request[_this.variablesService.currentWallet.wallet_id] = false;
                }
            });
        });
    };
    HistoryComponent.prototype.tick = function () {
        var _this = this;
        var walletInterval = setInterval(function () {
            _this.wallet = _this.variablesService.getNotLoadedWallet();
            if (!_this.wallet) {
                clearInterval(walletInterval);
            }
        }, 1000);
    };
    HistoryComponent.prototype.getHeight = function (item) {
        if ((this.variablesService.height_app - item.height >= 10 && item.height !== 0) || (item.is_mining === true && item.height === 0)) {
            return 10;
        }
        else {
            if (item.height === 0 || this.variablesService.height_app - item.height < 0) {
                return 0;
            }
            else {
                return (this.variablesService.height_app - item.height);
            }
        }
    };
    HistoryComponent.prototype.openDetails = function (tx_hash) {
        if (tx_hash === this.openedDetails) {
            this.openedDetails = '';
        }
        else {
            this.openedDetails = tx_hash;
        }
    };
    HistoryComponent.prototype.calculateWidth = function () {
        this.calculatedWidth = [];
        this.calculatedWidth.push(this.head.nativeElement.childNodes[0].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[1].clientWidth + this.head.nativeElement.childNodes[2].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[3].clientWidth);
        this.calculatedWidth.push(this.head.nativeElement.childNodes[4].clientWidth);
    };
    HistoryComponent.prototype.time = function (item) {
        var now = new Date().getTime();
        var unlockTime = now + ((item.unlock_time - this.variablesService.height_max) * 60 * 1000);
        return unlockTime;
    };
    HistoryComponent.prototype.isLocked = function (item) {
        if ((item.unlock_time > 500000000) && (item.unlock_time > new Date().getTime() / 1000)) {
            return true;
        }
        if ((item.unlock_time < 500000000) && (item.unlock_time > this.variablesService.height_max)) {
            return true;
        }
        return false;
    };
    HistoryComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('head'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HistoryComponent.prototype, "head", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_pagination_service__WEBPACK_IMPORTED_MODULE_4__["PaginationService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_services_pagination_store__WEBPACK_IMPORTED_MODULE_5__["PaginationStore"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"wrap-login\">\r\n\r\n    <div class=\"logo\"><img src=\"assets/icons/logo-all.png\" alt=\"\"></div>\r\n\r\n    <form *ngIf=\"type === 'reg'\" class=\"form-login\" [formGroup]=\"regForm\" (ngSubmit)=\"onSubmitCreatePass()\">\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"master-pass\">{{ 'LOGIN.SETUP_MASTER_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"master-pass\" formControlName=\"password\"\r\n          placeholder=\"{{ 'PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate }}\"\r\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n        <div class=\"error-block\" *ngIf=\"regForm.controls['password'].dirty && regForm.controls['password'].errors\">\r\n          <div *ngIf=\"regForm.controls['password'].errors.pattern\">\r\n            {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"confirm-pass\">{{ 'LOGIN.SETUP_CONFIRM_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"confirm-pass\" placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate }}\"\r\n          formControlName=\"confirmation\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n        <div class=\"error-block\"\r\n          *ngIf=\"regForm.controls['password'].dirty && regForm.controls['confirmation'].dirty && regForm.errors\">\r\n          <div *ngIf=\"regForm.errors['mismatch']\">\r\n            {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"wrap-button\">\r\n        <button type=\"submit\" class=\"blue-button\"\r\n          [disabled]=\"!regForm.controls['password'].value.length || !regForm.controls['confirmation'].value.length || (regForm.errors && regForm.errors['mismatch']) || regForm.controls['password'].errors\">{{\r\n          'LOGIN.BUTTON_NEXT' | translate }}</button>\r\n        <button type=\"button\" class=\"blue-button\" (click)=\"onSkipCreatePass()\"\r\n          [disabled]=\"regForm.controls['password'].value.length || regForm.controls['confirmation'].value.length\">{{\r\n          'LOGIN.BUTTON_SKIP' | translate }}</button>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <form *ngIf=\"type !== 'reg'\" class=\"form-login\" [formGroup]=\"authForm\" (ngSubmit)=\"onSubmitAuthPass()\">\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"master-pass-login\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\r\n        <input type=\"password\" id=\"master-pass-login\" [class.required-error]=\"authForm.controls['password'].dirty\"\r\n          [placeholder]=\"authForm.controls['password'].dirty ? ('LOGIN.FORM_ERRORS.INVALID_PASS' | translate) : ('PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate)\"\r\n          formControlName=\"password\" autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      </div>\r\n\r\n      <div class=\"wrap-button\">\r\n        <button type=\"submit\" class=\"blue-button\">{{\r\n          'LOGIN.BUTTON_NEXT' | translate }}</button>\r\n        <button type=\"button\" class=\"blue-button_reset\" (click)=\"dropSecureAppData()\">{{ 'LOGIN.BUTTON_RESET' |\r\n          translate }}</button>\r\n        <!--Add \"Reset\"-button-->\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <div class=\"synchronization-status\"\r\n    [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 || variablesService.daemon_state === 6 ? 'flex-start' : 'center'}\">\r\n    <div class=\"status-container\">\r\n      <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\r\n      </span>\r\n      <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{\r\n        'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\r\n      </span>\r\n      <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\r\n      </span>\r\n      <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\r\n      </span>\r\n      <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\r\n      </span>\r\n      <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\r\n      </span>\r\n      <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 6\">\r\n        {{ 'SIDEBAR.SYNCHRONIZATION.DOWNLOADING' | translate }} {{ variablesService.downloaded }}{{\r\n        'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.total }}{{ 'SIDEBAR.SYNCHRONIZATION.MB' |\r\n        translate }}\r\n      </span>\r\n      <div class=\"progress-bar-container\"\r\n        *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\r\n        <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\r\n        </div>\r\n        <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\r\n      </div>\r\n\r\n      <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 6\">\r\n        <div class=\"syncing downloading\" *ngIf=\"variablesService.daemon_state === 6\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"variablesService.download.progress_value + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ variablesService.download.progress_value_text }}%</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"update-container\"\r\n      *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\r\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\r\n        <div class=\"update-text standard\">\r\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\r\n        </div>\r\n        <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\"\r\n          placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\r\n        <div class=\"update-text important\">\r\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\r\n          <br>\r\n          <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n        </div>\r\n        <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\"\r\n          placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\r\n        <div class=\"update-text critical\">\r\n          <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\r\n          <br>\r\n          <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n        </div>\r\n        <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\"\r\n          placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\"></i>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"update-container\"\r\n      *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\r\n      <div class=\"update-text time\">\r\n        <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\"\r\n        tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  :host .content {\n    display: flex; }\n  :host .content .wrap-login {\n      margin: auto;\n      width: 100%;\n      max-width: 42rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n  :host .content .wrap-login .logo {\n        margin-bottom: 7.6rem;\n        height: 14.3rem;\n        display: flex;\n        justify-content: center; }\n  :host .content .wrap-login .form-login {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between; }\n  :host .content .wrap-login .form-login .wrap-button {\n          margin-top: 1.8rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-between; }\n  :host .content .wrap-login .form-login .wrap-button button {\n            height: 7rem;\n            min-width: 20rem;\n            max-width: 38rem; }\n  .synchronization-status {\n  position: absolute;\n  bottom: 3rem;\n  left: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBTGQ7SUFRSSxhQUFhLEVBQUE7RUFSakI7TUFXTSxZQUFZO01BQ1osV0FBVztNQUNYLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDhCQUE4QixFQUFBO0VBaEJwQztRQW1CUSxxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGFBQWE7UUFDYix1QkFBdUIsRUFBQTtFQXRCL0I7UUEwQlEsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw4QkFBOEIsRUFBQTtFQTVCdEM7VUFvQ1Usa0JBQWtCO1VBQ2xCLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsOEJBQThCLEVBQUE7RUF2Q3hDO1lBZ0NZLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsZ0JBQWdCLEVBQUE7RUFXNUI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLndyYXAtbG9naW4ge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQycmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNy42cmVtO1xyXG4gICAgICAgIGhlaWdodDogMTQuM3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1sb2dpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLndyYXAtYnV0dG9uIHtcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzOHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEuOHJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc3luY2hyb25pemF0aW9uLXN0YXR1cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICBsZWZ0OiAzcmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json");
var _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/icons/icons.json */ "./src/assets/icons/icons.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, backend, variablesService, modalService, ngZone) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        }, [function (g) {
                return g.get('password').value === g.get('confirmation').value ? null : { 'mismatch': true };
            }
        ]);
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.type = 'reg';
        this.logo = _assets_icons_icons_json__WEBPACK_IMPORTED_MODULE_8__.logo;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.type) {
                _this.type = params.type;
            }
        });
    };
    LoginComponent.prototype.onSubmitCreatePass = function () {
        var _this = this;
        if (this.regForm.valid) {
            this.variablesService.appPass = this.regForm.get('password').value; // the pass what was written in input of login form by user
            this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                if (status) {
                    _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                    _this.variablesService.appLogin = true;
                    _this.variablesService.dataIsLoaded = true;
                    if (_this.variablesService.settings.appLockTime) {
                        _this.variablesService.startCountdown();
                    }
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/']);
                    });
                }
                else {
                    console.log(data['error_code']);
                }
            });
        }
    };
    LoginComponent.prototype.onSkipCreatePass = function () {
        var _this = this;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.variablesService.appLogin = true;
            _this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.dropSecureAppData = function () {
        var _this = this;
        this.backend.dropSecureAppData(function () {
            _this.onSkipCreatePass();
        });
        this.variablesService.wallets = [];
        this.variablesService.contacts = [];
    };
    LoginComponent.prototype.onSubmitAuthPass = function () {
        var _this = this;
        if (this.authForm.valid) {
            this.variablesService.appPass = this.authForm.get('password').value;
            if (this.variablesService.dataIsLoaded) {
                this.backend.checkMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.variablesService.appLogin = true;
                        if (_this.variablesService.settings.appLockTime) {
                            _this.variablesService.startCountdown();
                        }
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/'], { queryParams: { prevUrl: 'login' } });
                        });
                    }
                });
            }
            else {
                this.getData(this.variablesService.appPass);
            }
        }
    };
    LoginComponent.prototype.getData = function (appPass) {
        var _this = this;
        this.backend.getSecureAppData({ pass: appPass }, function (status, data) {
            if (!data.error_code) {
                _this.variablesService.appLogin = true;
                _this.variablesService.dataIsLoaded = true;
                if (_this.variablesService.settings.appLockTime) {
                    _this.variablesService.startCountdown();
                }
                _this.variablesService.appPass = appPass;
                var isEmptyObject = Object.keys(data).length === 0 && data.constructor === Object;
                if (_this.variablesService.wallets.length) {
                    _this.ngZone.run(function () {
                        _this.router.navigate(['/wallet/']);
                    });
                    return;
                }
                if (data.hasOwnProperty('contacts')) {
                    if (Object.keys(data['contacts']).length !== 0) {
                        data['contacts'].map(function (contact) {
                            _this.variablesService.contacts.push(contact);
                        });
                    }
                }
                if (data.hasOwnProperty('wallets')) {
                    if (Object.keys(data['wallets']).length !== 0) {
                        _this.getWalletData(data['wallets']);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
                if (!data.hasOwnProperty('wallets') && !data.hasOwnProperty('contacts')) {
                    if (data.length !== 0 && !isEmptyObject) {
                        _this.getWalletData(data);
                    }
                    else {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            }
        });
    };
    LoginComponent.prototype.getWalletData = function (walletData) {
        var _this = this;
        var openWallets = 0;
        var runWallets = 0;
        walletData.forEach(function (wallet, wallet_index) {
            _this.backend.openWallet(wallet.path, wallet.pass, _this.variablesService.count, true, function (open_status, open_data, open_error) {
                if (open_status || open_error === 'FILE_RESTORED') {
                    openWallets++;
                    _this.ngZone.run(function () {
                        var new_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, wallet.name, wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet.alias = _this.backend.getWalletAlias(new_wallet.address);
                        if (wallet.staking) {
                            new_wallet.staking = true;
                            _this.backend.startPosMining(new_wallet.wallet_id);
                        }
                        else {
                            new_wallet.staking = false;
                        }
                        new_wallet.is_auditable = open_data['wi'].is_auditable;
                        new_wallet.is_watch_only = open_data['wi'].is_watch_only;
                        new_wallet.currentPage = 1;
                        new_wallet.exclude_mining_txs = false;
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet.total_history_item = open_data.recent_history.total_history_items;
                            new_wallet.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                            new_wallet.totalPages > _this.variablesService.maxPages
                                ? new_wallet.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                : new_wallet.pages = new Array(new_wallet.totalPages).fill(1).map(function (value, index) { return value + index; });
                            new_wallet.prepareHistory(open_data.recent_history.history);
                        }
                        else {
                            new_wallet.total_history_item = 0;
                            new_wallet.pages = new Array(1).fill(1);
                            new_wallet.totalPages = 1;
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet);
                        if (_this.variablesService.wallets.length === 1) {
                            _this.router.navigate(['/wallet/']);
                        }
                    });
                    _this.backend.runWallet(open_data.wallet_id, function (run_status) {
                        if (run_status) {
                            runWallets++;
                        }
                        else {
                            if (wallet_index === walletData.length - 1 && runWallets === 0) {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            }
                        }
                    });
                }
                else {
                    if (wallet_index === walletData.length - 1 && openWallets === 0) {
                        _this.ngZone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                }
            });
        });
    };
    LoginComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_7__["DOWNLOADS_PAGE_URL"]);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"add-wallet\">\r\n    <div class=\"head\">\r\n      <h3 class=\"add-wallet-title\">{{ 'MAIN.TITLE' | translate }}</h3>\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"add-wallet-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" [routerLink]=\"['/create']\">{{ 'MAIN.BUTTON_NEW_WALLET' | translate\r\n        }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"openWallet()\">{{ 'MAIN.BUTTON_OPEN_WALLET' | translate\r\n        }}</button>\r\n      <button type=\"button\" class=\"blue-button_reset\" [routerLink]=\"['/restore']\">{{ 'MAIN.BUTTON_RESTORE_BACKUP' |\r\n        translate\r\n        }}</button>\r\n    </div>\r\n    <div class=\"add-wallet-help\" (click)=\"openInBrowser()\">\r\n      <i class=\"icon\"></i><span>{{ 'MAIN.HELP' | translate }}</span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 0 auto;\n  background: none; }\n\n.add-wallet .add-wallet-title {\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.add-wallet .add-wallet-buttons {\n  margin: 8rem 0 3rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.add-wallet .add-wallet-buttons button {\n    margin-right: 3rem;\n    flex: 1 0 auto; }\n\n.add-wallet .add-wallet-buttons button:last-child {\n      margin-right: 0; }\n\n.add-wallet .add-wallet-help {\n  display: flex;\n  cursor: pointer;\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.add-wallet .add-wallet-help .icon {\n    background: center/contain no-repeat url('howto.svg');\n    margin-right: 0.8rem;\n    width: 2rem;\n    height: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBRUksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUh2QjtFQU1JLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQVRsQztJQWNNLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7O0FBZnBCO01BWVEsZUFBZSxFQUFBOztBQVp2QjtFQW9CSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUF2QnZCO0lBMEJNLHFEQUF3RTtJQUN4RSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5hZGQtd2FsbGV0IHtcclxuICAuYWRkLXdhbGxldC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gIH1cclxuICAuYWRkLXdhbGxldC1idXR0b25zIHtcclxuICAgIG1hcmdpbjogOHJlbSAwIDNyZW0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZGQtd2FsbGV0LWhlbHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2hvd3RvLnN2Zyk7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(route, router, location, backend, variablesService, ngZone, translate) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.prevUrl = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.prevUrl) {
            this.prevUrl = this.route.snapshot.queryParams.prevUrl;
        }
    };
    MainComponent.prototype.openWallet = function () {
        var _this = this;
        this.backend.openFileDialog(this.translate.instant('MAIN.CHOOSE_PATH'), '*', this.variablesService.settings.default_path, function (file_status, file_data) {
            if (file_status) {
                _this.variablesService.settings.default_path = file_data.path.substr(0, file_data.path.lastIndexOf('/'));
                _this.ngZone.run(function () {
                    _this.router.navigate(['/open'], { queryParams: { path: file_data.path } });
                });
            }
            else {
                console.log(file_data['error_code']);
            }
        });
    };
    MainComponent.prototype.openInBrowser = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_WALLET_HELP_PAGE"]);
    };
    MainComponent.prototype.back = function () {
        this.location.back();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-table\">\r\n\r\n  <table class=\"messages-table\">\r\n    <thead>\r\n    <tr>\r\n      <th>{{ 'MESSAGES.ADDRESS' | translate }}</th>\r\n      <th>{{ 'MESSAGES.MESSAGE' | translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\" [routerLink]=\"[message.address]\">\r\n      <td>\r\n        <span>{{message.address}}</span>\r\n        <i class=\"icon\" *ngIf=\"message.is_new\"></i>\r\n      </td>\r\n      <td>\r\n        <span>{{message.message}}</span>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-table {\n  margin: -3rem; }\n\n.wrap-table table tbody tr td:first-child {\n    position: relative;\n    padding-right: 5rem;\n    width: 18rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.wrap-table table tbody tr td:first-child span {\n      display: block;\n      line-height: 3.5rem;\n      max-width: 10rem; }\n\n.wrap-table table tbody tr td:first-child .icon {\n      position: absolute;\n      top: 50%;\n      right: 1rem;\n      transform: translateY(-50%);\n      display: block;\n      background: center/contain no-repeat url('alert.svg');\n      width: 1.2rem;\n      height: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxtZXNzYWdlc1xcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhLEVBQUE7O0FBRGY7SUFPWSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBOztBQVovQjtNQWNjLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7O0FBaEI5QjtNQW1CYyxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFdBQVc7TUFDWCwyQkFBMkI7TUFDM0IsY0FBYztNQUNkLHFEQUF3RTtNQUN4RSxhQUFhO01BQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndyYXAtdGFibGUge1xyXG4gIG1hcmdpbjogLTNyZW07XHJcbiAgdGFibGUge1xyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvYWxlcnQuc3ZnKTtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
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

var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.messages = [
            {
                is_new: true,
                address: '@bitmap',
                message: 'No more miners for you!'
            },
            {
                is_new: false,
                address: 'Hjkwey36gHasdhkajshd4bxnb5mcvowyefb2633FdsFGGWbb',
                message: 'Hey! What’s with our BBR deal?'
            },
            {
                is_new: false,
                address: '@john',
                message: 'I’m coming!'
            }
        ];
    }
    MessagesComponent.prototype.ngOnInit = function () { };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <h3 class=\"title\">{{ 'OPEN_WALLET.MODAL.TITLE' | translate }}</h3>\r\n  <form class=\"open-form\" (ngSubmit)=\"openWallet()\">\r\n    <div class=\"wallet-path\">{{ wallet.name }}</div>\r\n    <div class=\"wallet-path\">{{ wallet.path }}</div>\r\n    <div class=\"input-block\" *ngIf=\"!wallet.notFound\">\r\n      <label for=\"password\">{{ 'OPEN_WALLET.MODAL.LABEL' | translate }}</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"wallet.pass\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n    </div>\r\n    <div class=\"error-block\" *ngIf=\"wallet.notFound\">\r\n      {{ 'OPEN_WALLET.MODAL.NOT_FOUND' | translate }}\r\n    </div>\r\n    <div class=\"wrap-button\">\r\n      <button type=\"submit\" class=\"blue-button\" [disabled]=\"wallet.notFound\">{{ 'OPEN_WALLET.MODAL.OPEN' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"skipWallet()\">{{ 'OPEN_WALLET.MODAL.SKIP' | translate }}</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  background-position: center;\n  background-size: 200%;\n  padding: 2rem;\n  min-width: 34rem;\n  max-width: 64rem; }\n\n.modal .title {\n    font-size: 1.8rem;\n    text-align: center; }\n\n.modal .open-form .wallet-path {\n    font-size: 1.3rem;\n    margin: 5rem 0 2rem;\n    word-wrap: break-word;\n    line-height: 2rem; }\n\n.modal .open-form .wrap-button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 2rem -2rem 0; }\n\n.modal .open-form .wrap-button button {\n      flex: 1 0 0;\n      margin: 0 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQtbW9kYWwvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxvcGVuLXdhbGxldC1tb2RhbFxcb3Blbi13YWxsZXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUd2QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVBsQjtJQVVJLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFYdEI7SUFpQk0saUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBcEJ2QjtJQXdCTSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0IsRUFBQTs7QUEzQjFCO01BOEJRLFdBQVc7TUFDWCxjQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcGVuLXdhbGxldC1tb2RhbC9vcGVuLXdhbGxldC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzNHJlbTtcclxuICBtYXgtd2lkdGg6IDY0cmVtO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAub3Blbi1mb3JtIHtcclxuXHJcbiAgICAud2FsbGV0LXBhdGgge1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgbWFyZ2luOiA1cmVtIDAgMnJlbTtcclxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAud3JhcC1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbjogMnJlbSAtMnJlbSAwO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAxIDAgMDtcclxuICAgICAgICBtYXJnaW46IDAgMnJlbSA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/open-wallet-modal/open-wallet-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/open-wallet-modal/open-wallet-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: OpenWalletModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletModalComponent", function() { return OpenWalletModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenWalletModalComponent = /** @class */ (function () {
    function OpenWalletModalComponent(variablesService, backend, translate, modalService, ngZone) {
        this.variablesService = variablesService;
        this.backend = backend;
        this.translate = translate;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.wallet = {
            name: '',
            path: '',
            pass: '',
            notFound: false,
            emptyPass: false
        };
    }
    OpenWalletModalComponent.prototype.ngOnInit = function () {
        if (this.wallets.length) {
            this.wallet = this.wallets[0];
            this.wallet.pass = '';
        }
    };
    OpenWalletModalComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.wallets.length === 0) {
            return;
        }
        this.backend.openWallet(this.wallet.path, this.wallet.pass, this.variablesService.count, false, function (open_status, open_data, open_error) {
            if (open_error && open_error === 'FILE_NOT_FOUND') {
                _this.ngZone.run(function () {
                    _this.wallet.notFound = true;
                });
                var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                error_translate += ':<br>' + _this.wallet.path;
                error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                _this.modalService.prepareModal('error', error_translate);
            }
            else {
                if (open_status || open_error === 'FILE_RESTORED') {
                    var exists_1 = false;
                    _this.variablesService.wallets.forEach(function (wallet) {
                        if (wallet.address === open_data['wi'].address) {
                            exists_1 = true;
                        }
                    });
                    if (exists_1) {
                        _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                        _this.backend.closeWallet(open_data.wallet_id);
                    }
                    else {
                        var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_2__["Wallet"](open_data.wallet_id, _this.wallet.name, _this.wallet.pass, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                        new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                        new_wallet_1.is_auditable = open_data['wi'].is_auditable;
                        new_wallet_1.is_watch_only = open_data['wi'].is_watch_only;
                        new_wallet_1.currentPage = 1;
                        new_wallet_1.exclude_mining_txs = false;
                        if (open_data.recent_history && open_data.recent_history.history) {
                            new_wallet_1.total_history_item = open_data.recent_history.total_history_items;
                            new_wallet_1.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                            new_wallet_1.totalPages > _this.variablesService.maxPages
                                ? new_wallet_1.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                : new_wallet_1.pages = new Array(new_wallet_1.totalPages).fill(1).map(function (value, index) { return value + index; });
                            new_wallet_1.prepareHistory(open_data.recent_history.history);
                        }
                        else {
                            new_wallet_1.total_history_item = 0;
                            new_wallet_1.pages = new Array(1).fill(1);
                            new_wallet_1.totalPages = 1;
                        }
                        _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                            if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                _this.ngZone.run(function () {
                                    new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                });
                            }
                        });
                        _this.variablesService.wallets.push(new_wallet_1);
                        _this.backend.runWallet(open_data.wallet_id);
                        _this.skipWallet();
                    }
                }
            }
        });
    };
    OpenWalletModalComponent.prototype.skipWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            if (_this.wallets.length) {
                _this.wallets.splice(0, 1);
                _this.ngOnInit();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OpenWalletModalComponent.prototype, "wallets", void 0);
    OpenWalletModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet-modal',
            template: __webpack_require__(/*! ./open-wallet-modal.component.html */ "./src/app/open-wallet-modal/open-wallet-modal.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet-modal.component.scss */ "./src/app/open-wallet-modal/open-wallet-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OpenWalletModalComponent);
    return OpenWalletModalComponent;
}());



/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.html":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.OPEN_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-open\" [formGroup]=\"openForm\">\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'OPEN_WALLET.NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\"\r\n        [class.required-error]=\"openForm.controls['name'].dirty || openForm.controls['name'].touched\"\r\n        [placeholder]=\"openForm.controls['name'].dirty || openForm.controls['name'].touched ? ('OPEN_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate ):('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"openForm.controls['name'].invalid && !openForm.controls['name'].errors['required'] && (openForm.controls['name'].dirty || openForm.controls['name'].touched)\">\r\n        <div *ngIf=\"openForm.controls['name'].errors['duplicate']\">\r\n          {{ 'OPEN_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\" *ngIf=\"openForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n        {{ 'OPEN_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-password\">{{ 'OPEN_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\" formControlName=\"password\"\r\n        (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"openWallet()\" [disabled]=\"!openForm.valid\">{{\r\n        'OPEN_WALLET.BUTTON' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.scss":
/*!********************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-open {\n  margin: 2.4rem 0;\n  width: 50%; }\n  .form-open .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem; }\n  .form-open .wrap-buttons button {\n      margin: 0 0.7rem; }\n  .form-open .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Blbi13YWxsZXQvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxvcGVuLXdhbGxldFxcb3Blbi13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBO0VBRlo7SUFLSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFOMUI7TUFTTSxnQkFBZ0IsRUFBQTtFQVR0QjtRQVlRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29wZW4td2FsbGV0L29wZW4td2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tb3BlbiB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICAud3JhcC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAtMC43cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAmLmNyZWF0ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/open-wallet/open-wallet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/open-wallet/open-wallet.component.ts ***!
  \******************************************************/
/*! exports provided: OpenWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenWalletComponent", function() { return OpenWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpenWalletComponent = /** @class */ (function () {
    function OpenWalletComponent(route, router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.openForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { 'duplicate': true };
                        }
                    }
                    return null;
                }]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    OpenWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.path) {
                _this.filePath = params.path;
                var filename = '';
                if (params.path.lastIndexOf('.') === -1) {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1);
                }
                else {
                    filename = params.path.substr(params.path.lastIndexOf('/') + 1, params.path.lastIndexOf('.') - 1 - params.path.lastIndexOf('/'));
                }
                if (filename.length > 25) {
                    filename = filename.slice(0, 25);
                }
                _this.openForm.get('name').setValue(filename);
                _this.openForm.get('name').markAsTouched();
            }
        });
    };
    OpenWalletComponent.prototype.openWallet = function () {
        var _this = this;
        if (this.openForm.valid && this.openForm.get('name').value.length <= this.variablesService.maxWalletNameLength) {
            this.backend.openWallet(this.filePath, this.openForm.get('password').value, this.variablesService.count, false, function (open_status, open_data, open_error) {
                if (open_error && open_error === 'FILE_NOT_FOUND') {
                    var error_translate = _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND1');
                    error_translate += ':<br>' + _this.filePath;
                    error_translate += _this.translate.instant('OPEN_WALLET.FILE_NOT_FOUND2');
                    _this.modalService.prepareModal('error', error_translate);
                }
                else {
                    if (open_status || open_error === 'FILE_RESTORED') {
                        var exists_1 = false;
                        _this.variablesService.wallets.forEach(function (wallet) {
                            if (wallet.address === open_data['wi'].address) {
                                exists_1 = true;
                            }
                        });
                        if (exists_1) {
                            _this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
                            _this.backend.closeWallet(open_data.wallet_id, function () {
                                _this.ngZone.run(function () {
                                    _this.router.navigate(['/']);
                                });
                            });
                        }
                        else {
                            var new_wallet_1 = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](open_data.wallet_id, _this.openForm.get('name').value, _this.openForm.get('password').value, open_data['wi'].path, open_data['wi'].address, open_data['wi'].balance, open_data['wi'].unlocked_balance, open_data['wi'].mined_total, open_data['wi'].tracking_hey);
                            new_wallet_1.alias = _this.backend.getWalletAlias(new_wallet_1.address);
                            new_wallet_1.currentPage = 1;
                            new_wallet_1.open_from_exist = true;
                            new_wallet_1.exclude_mining_txs = false;
                            new_wallet_1.is_auditable = open_data['wi'].is_auditable;
                            new_wallet_1.is_watch_only = open_data['wi'].is_watch_only;
                            if (open_data.recent_history && open_data.recent_history.history) {
                                new_wallet_1.total_history_item = open_data.recent_history.total_history_items;
                                new_wallet_1.totalPages = Math.ceil(open_data.recent_history.total_history_items / _this.variablesService.count);
                                new_wallet_1.totalPages > _this.variablesService.maxPages
                                    ? new_wallet_1.pages = new Array(5).fill(1).map(function (value, index) { return value + index; })
                                    : new_wallet_1.pages = new Array(new_wallet_1.totalPages).fill(1).map(function (value, index) { return value + index; });
                                new_wallet_1.prepareHistory(open_data.recent_history.history);
                            }
                            else {
                                new_wallet_1.total_history_item = 0;
                                new_wallet_1.pages = new Array(1).fill(1);
                                new_wallet_1.totalPages = 1;
                            }
                            _this.backend.getContracts(open_data.wallet_id, function (contracts_status, contracts_data) {
                                if (contracts_status && contracts_data.hasOwnProperty('contracts')) {
                                    _this.ngZone.run(function () {
                                        new_wallet_1.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings.viewedContracts, _this.variablesService.settings.notViewedContracts);
                                    });
                                }
                            });
                            _this.variablesService.wallets.push(new_wallet_1);
                            _this.backend.runWallet(open_data.wallet_id, function (run_status, run_data) {
                                if (run_status) {
                                    if (_this.variablesService.appPass) {
                                        _this.backend.storeSecureAppData();
                                    }
                                    _this.ngZone.run(function () {
                                        _this.variablesService.setCurrentWallet(open_data.wallet_id);
                                        _this.router.navigate(['/wallet/']);
                                    });
                                }
                                else {
                                    console.log(run_data['error_code']);
                                }
                            });
                        }
                    }
                }
            });
        }
    };
    OpenWalletComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    OpenWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-wallet',
            template: __webpack_require__(/*! ./open-wallet.component.html */ "./src/app/open-wallet/open-wallet.component.html"),
            styles: [__webpack_require__(/*! ./open-wallet.component.scss */ "./src/app/open-wallet/open-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], OpenWalletComponent);
    return OpenWalletComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <div class=\"breadcrumbs\">\r\n    <span [routerLink]=\"'/wallet/contracts'\">{{ 'BREADCRUMBS.CONTRACTS' | translate }}</span>\r\n    <span *ngIf=\"newPurchase\">{{ 'BREADCRUMBS.NEW_PURCHASE' | translate }}</span>\r\n    <span *ngIf=\"!newPurchase\">{{ 'BREADCRUMBS.OLD_PURCHASE' | translate }}</span>\r\n  </div>\r\n  <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n    <i class=\"icon back\"></i>\r\n    <span>{{ 'COMMON.BACK' | translate }}</span>\r\n  </button>\r\n</div>\r\n\r\n<form class=\"form-purchase scrolled-content\" [formGroup]=\"purchaseForm\">\r\n  <div class=\"input-block\">\r\n    <label for=\"purchase-description\">{{ 'PURCHASE.DESCRIPTION' | translate }}</label>\r\n    <input type=\"text\" id=\"purchase-description\" formControlName=\"description\"\r\n      [class.required-error]=\"purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched\"\r\n      [placeholder]=\"purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched ? ('PURCHASE.FORM_ERRORS.DESC_REQUIRED' | translate ) : ('PLACEHOLDERS.DESCRIPTION_PLACEHOLDER' | translate)\"\r\n      maxlength=\"100\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    <div class=\"error-block\"\r\n      *ngIf=\"purchaseForm.controls['description'].invalid && !purchaseForm.controls['description'].errors['required'] && (purchaseForm.controls['description'].dirty || purchaseForm.controls['description'].touched)\">\r\n      <div *ngIf=\"newPurchase && purchaseForm.controls['description'].value.length >= 100\">\r\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n    <div class=\"input-block input-block-alias\">\r\n      <label for=\"purchase-seller\">{{ 'PURCHASE.SELLER' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-seller\"\r\n        [class.required-error]=\"purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched\"\r\n        [placeholder]=\"purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched ? ('PURCHASE.FORM_ERRORS.SELLER_REQUIRED' | translate ) : ('PLACEHOLDERS.SELLER_PLACEHOLDER' | translate)\"\r\n        formControlName=\"seller\" [readonly]=\"!newPurchase\" (mousedown)=\"addressMouseDown($event)\"\r\n        (contextmenu)=\"(!newPurchase) ? variablesService.onContextMenuOnlyCopy($event, purchaseForm.controls['seller'].value) : variablesService.onContextMenu($event)\">\r\n      <div class=\"alias-dropdown scrolled-content\" *ngIf=\"isOpen\">\r\n        <div *ngFor=\"let item of localAliases\" (click)=\"setAlias(item.name)\">{{item.name}}</div>\r\n      </div>\r\n      <div class=\"error-block\"\r\n        *ngIf=\"purchaseForm.controls['seller'].invalid && !purchaseForm.controls['seller'].errors['required'] && (purchaseForm.controls['seller'].dirty || purchaseForm.controls['seller'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['address_not_valid']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_NOT_VALID' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['address_same']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.SELLER_SAME' | translate }}\r\n        </div>\r\n        <div *ngIf=\"purchaseForm.controls['seller'].errors['alias_not_valid']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-amount\">{{ 'PURCHASE.AMOUNT' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-amount\" formControlName=\"amount\"\r\n        [class.required-error]=\"purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched\"\r\n        [placeholder]=\"purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched ? ('PURCHASE.FORM_ERRORS.AMOUNT_REQUIRED' | translate ) : ('PLACEHOLDERS.AMOUNT_PLACEHOLDER' | translate)\"\r\n        appInputValidate=\"money\" [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"purchaseForm.controls['amount'].invalid && !purchaseForm.controls['amount'].errors['required'] && (purchaseForm.controls['amount'].dirty || purchaseForm.controls['amount'].touched)\">\r\n        <div *ngIf=\"purchaseForm.controls['amount'].errors['amount_zero']\">\r\n          {{ 'PURCHASE.FORM_ERRORS.AMOUNT_ZERO' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-blocks-row\">\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-your-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.BUYER_DEPOSIT' :\r\n        'PURCHASE.YOUR_DEPOSIT') | translate }}</label>\r\n      <input type=\"text\"\r\n        [class.required-error]=\"purchaseForm.controls['yourDeposit'].dirty || purchaseForm.controls['yourDeposit'].touched\"\r\n        [placeholder]=\"purchaseForm.controls['yourDeposit'].dirty || purchaseForm.controls['yourDeposit'].touched ? ('PURCHASE.FORM_ERRORS.YOUR_DEPOSIT_REQUIRED' | translate ) : ('PLACEHOLDERS.DEPOSIT_PLACEHOLDER' | translate)\"\r\n        id=\"purchase-your-deposit\" formControlName=\"yourDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    </div>\r\n\r\n    <div class=\"input-block\">\r\n      <div class=\"wrap-label\">\r\n        <label for=\"purchase-seller-deposit\">{{ ( (currentContract && !currentContract.is_a) ? 'PURCHASE.YOUR_DEPOSIT' :\r\n          'PURCHASE.SELLER_DEPOSIT') | translate }}</label>\r\n        <div class=\"checkbox-block\">\r\n          <input type=\"checkbox\" id=\"purchase-same-amount\" class=\"style-checkbox\" formControlName=\"sameAmount\"\r\n            (change)=\"sameAmountChange()\">\r\n          <label for=\"purchase-same-amount\">{{ 'PURCHASE.SAME_AMOUNT' | translate }}</label>\r\n        </div>\r\n      </div>\r\n      <input type=\"text\" id=\"purchase-seller-deposit\" [readonly]=\"sameAmountChecked\"\r\n        [value]=\"sameAmountChecked ? purchaseForm.controls['amount'].value : ''\"\r\n        [class.required-error]=\"purchaseForm.controls['sellerDeposit'].dirty || purchaseForm.controls['sellerDeposit'].touched\"\r\n        [placeholder]=\"purchaseForm.controls['sellerDeposit'].dirty || purchaseForm.controls['sellerDeposit'].touched ? ('PURCHASE.FORM_ERRORS.SELLER_DEPOSIT_REQUIRED' | translate) : ('PLACEHOLDERS.SELLER_DEPOSIT_PLACEHOLDER' | translate)\"\r\n        formControlName=\"sellerDeposit\" appInputValidate=\"money\" [readonly]=\"!newPurchase\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"input-block\">\r\n    <label for=\"purchase-comment\">{{ 'PURCHASE.COMMENT' | translate }}</label>\r\n    <input type=\"text\" id=\"purchase-comment\" formControlName=\"comment\"\r\n      placeholder=\"{{ 'PLACEHOLDERS.COMMENT_PLACEHOLDER' | translate }}\" maxlength=\"100\" [readonly]=\"!newPurchase\"\r\n      (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    <div class=\"error-block\" *ngIf=\"newPurchase && purchaseForm.controls['comment'].value.length >= 100\">\r\n      <div>\r\n        {{ 'PURCHASE.FORM_ERRORS.COMMENT_MAXIMUM' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"input-block confirm-master-pass\" *ngIf=\"variablesService.appPass\">\r\n    <label for=\"password\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\r\n    <input type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\"\r\n      [class.required-error]=\"purchaseForm.controls['password'].dirty || purchaseForm.controls['password'].touched\"\r\n      [placeholder]=\"purchaseForm.controls['password'].dirty || purchaseForm.controls['password'].touched ? ('LOGIN.FORM_ERRORS.PASS_REQUIRED' | translate ) : ('PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate) \"\r\n      autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\r\n    <div class=\"error-block\">\r\n      <div *ngIf=\"purchaseForm.controls.password.errors && purchaseForm.controls.password.errors.password_not_match\">\r\n        {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"purchase-select\" (click)=\"toggleOptions()\">\r\n    <span style=\"letter-spacing: 1px;\">{{ 'PURCHASE.DETAILS' | translate }}</span><i class=\"icon arrow\"\r\n      [class.down]=\"!additionalOptions\" [class.up]=\"additionalOptions\"></i>\r\n  </button>\r\n\r\n  <div class=\"additional-details\" *ngIf=\"additionalOptions\">\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-fee\">{{ 'PURCHASE.FEE' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-fee\" formControlName=\"fee\" readonly>\r\n    </div>\r\n    <div class=\"input-block\" *ngIf=\"newPurchase\">\r\n      <label for=\"purchase-time\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\r\n      <ng-select id=\"purchase-time\" class=\"custom-select\" [clearable]=\"false\" [searchable]=\"false\"\r\n        formControlName=\"time\">\r\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\r\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\r\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\r\n        </ng-option>\r\n      </ng-select>\r\n    </div>\r\n    <div class=\"input-block\">\r\n      <label for=\"purchase-payment\">{{ 'PURCHASE.PAYMENT' | translate }}</label>\r\n      <input type=\"text\" id=\"purchase-payment\"\r\n        placeholder=\"{{ 'PLACEHOLDERS.PURCHASE_PAYMENT_PLACEHOLDER' | translate }}\" formControlName=\"payment\"\r\n        [readonly]=\"!newPurchase\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"blue-button_reset send-button\" *ngIf=\"newPurchase\" [disabled]=\"!purchaseForm.valid\"\r\n    (click)=\"createPurchase()\">{{ 'PURCHASE.SEND_BUTTON' | translate }}</button>\r\n\r\n  <div class=\"purchase-states\" *ngIf=\"!newPurchase\">\r\n    <ng-container\r\n      *ngIf=\"currentContract.state == 1 && !currentContract.is_a && currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\r\n      <span>{{ 'PURCHASE.NEED_MONEY' | translate }}</span>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"purchase-buttons\" *ngIf=\"!newPurchase\">\r\n\r\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 1\">\r\n      <button type=\"button\" class=\"blue-button_reset\" (click)=\"acceptState();\"\r\n        [disabled]=\"currentContract.private_detailes.b_pledge.plus(variablesService.default_fee_big).plus(variablesService.default_fee_big).isGreaterThan(variablesService.currentWallet.unlocked_balance)\">\r\n        {{'PURCHASE.BUTTON_MAKE_PLEDGE' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"ignoredContract();\">{{'PURCHASE.BUTTON_IGNORE' |\r\n        translate}}</button>\r\n    </ng-container>\r\n\r\n    <ng-container\r\n      *ngIf=\"!showNullify && !showTimeSelect && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\r\n      <button type=\"button\" class=\"blue-button_reset\" (click)=\"dealsDetailsFinish();\"\r\n        [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_RECEIVED' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button_reset\" (click)=\"showNullify = true;\"\r\n        [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_NULLIFY' | translate}}\r\n      </button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = true;\"\r\n        [disabled]=\"currentContract.cancel_expiration_time == 0 && (currentContract.height == 0 || (variablesService.height_app - currentContract.height) < 10)\">\r\n        {{'PURCHASE.BUTTON_CANCEL_BUYER' | translate}}\r\n      </button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!currentContract.is_a && currentContract.state == 5\">\r\n      <button type=\"button\" class=\"blue-button_reset\"\r\n        (click)=\"dealsDetailsDontCanceling();\">{{'PURCHASE.BUTTON_NOT_CANCEL' | translate}}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsSellerCancel();\">{{'PURCHASE.BUTTON_CANCEL_SELLER'\r\n        | translate}}</button>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n  <div class=\"nullify-block-row\" *ngIf=\"showNullify\">\r\n    <div>{{'PURCHASE.NULLIFY_QUESTION' | translate}}</div>\r\n    <div class=\"nullify-block-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showNullify = false;\">{{ 'PURCHASE.CANCEL' | translate\r\n        }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"productNotGot();\">{{ 'PURCHASE.BUTTON_NULLIFY_SHORT' |\r\n        translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"time-cancel-block-row\"\r\n    *ngIf=\"showTimeSelect && !newPurchase && currentContract.is_a && (currentContract.state == 201 || currentContract.state == 2 || currentContract.state == 120 || currentContract.state == 130)\">\r\n    <div class=\"time-cancel-block-question\">{{ 'PURCHASE.WAITING_TIME_QUESTION' | translate }}</div>\r\n    <label for=\"purchase-timeCancel\">{{ 'PURCHASE.WAITING_TIME' | translate }}</label>\r\n    <div class=\"input-block\">\r\n      <ng-select id=\"purchase-timeCancel\" class=\"custom-select\" [clearable]=\"false\" [searchable]=\"false\"\r\n        formControlName=\"timeCancel\">\r\n        <ng-option [value]=\"1\">1 {{ 'PURCHASE.HOUR' | translate }}</ng-option>\r\n        <ng-option *ngFor=\"let title of [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]\" [value]=\"title\">\r\n          {{title}} {{ 'PURCHASE.HOURS' | translate }}\r\n        </ng-option>\r\n      </ng-select>\r\n    </div>\r\n    <div class=\"time-cancel-block-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"showTimeSelect = false;\">{{ 'PURCHASE.CANCEL' | translate\r\n        }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"dealsDetailsCancel();\">{{ 'PURCHASE.BUTTON_CANCEL_BUYER' |\r\n        translate }}</button>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<div class=\"progress-bar-container\">\r\n  <div class=\"progress-bar\">\r\n    <div class=\"progress-bar-full\" [style.width]=\"getProgressBarWidth()\"></div>\r\n  </div>\r\n  <div class=\"progress-labels\">\r\n\r\n    <ng-container *ngIf=\"newPurchase\">\r\n      <span>{{ 'PURCHASE.STATUS_MESSAGES.NEW_PURCHASE' | translate }}</span>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!newPurchase && currentContract.is_a\">\r\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_SELLER' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 120\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_SELLER' | translate\r\n        }}</span>\r\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_SELLER' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 201\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container\r\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\r\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate\r\n        }}\r\n      </span>\r\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_SELLER' | translate\r\n        }}</span>\r\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 601\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container\r\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\r\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!newPurchase && !currentContract.is_a\">\r\n      <span *ngIf=\"currentContract.state == 1\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_BUYER' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 110\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_BUYER' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 130\">{{ 'PURCHASE.STATUS_MESSAGES.IGNORED_CANCEL_BUYER' | translate\r\n        }}</span>\r\n      <span *ngIf=\"currentContract.state == 140\">{{ 'PURCHASE.STATUS_MESSAGES.EXPIRED' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 2\">{{ 'PURCHASE.STATUS_MESSAGES.WAITING_DELIVERY' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 201\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.WAITING_CONFIRMATION' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container\r\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\r\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n      <span *ngIf=\"currentContract.state == 3\">{{ 'PURCHASE.STATUS_MESSAGES.COMPLETED' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 4\" class=\"error-text\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.NOT_RECEIVED' | translate }}. {{ 'PURCHASE.STATUS_MESSAGES.NULLIFIED' | translate}}\r\n      </span>\r\n      <span *ngIf=\"currentContract.state == 5\">{{ 'PURCHASE.STATUS_MESSAGES.PROPOSAL_CANCEL_BUYER' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 6\">{{ 'PURCHASE.STATUS_MESSAGES.CANCELLED' | translate }}</span>\r\n      <span *ngIf=\"currentContract.state == 601\">\r\n        {{ 'PURCHASE.STATUS_MESSAGES.BEING_CANCELLED' | translate }}\r\n        <ng-container *ngIf=\"currentContract.height === 0\">(0/10)</ng-container>\r\n        <ng-container\r\n          *ngIf=\"currentContract.height !== 0 && (variablesService.height_app - currentContract.height) < 10\">\r\n          ({{variablesService.height_app - currentContract.height}}/10)</ng-container>\r\n      </span>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"progress-time\" *ngIf=\"!newPurchase\">\r\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time |\r\n      contractTimeLeft: 0}}</span>\r\n    <span *ngIf=\"currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time |\r\n      contractTimeLeft: 2}}</span>\r\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 1\">{{currentContract.expiration_time |\r\n      contractTimeLeft: 1}}</span>\r\n    <span *ngIf=\"!currentContract.is_a && currentContract.state == 5\">{{currentContract.cancel_expiration_time |\r\n      contractTimeLeft: 1}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/purchase/purchase.component.scss":
/*!**************************************************!*\
  !*** ./src/app/purchase/purchase.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box; }\n\n.form-purchase {\n  flex: 1 1 auto;\n  margin: 1.5rem -3rem 0;\n  padding: 0 3rem;\n  overflow-y: overlay; }\n\n.form-purchase .input-blocks-row {\n    display: flex; }\n\n.form-purchase .input-blocks-row .input-block {\n      flex-basis: 50%; }\n\n.form-purchase .input-blocks-row .input-block:first-child {\n        margin-right: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block:last-child {\n        margin-left: 1.5rem; }\n\n.form-purchase .input-blocks-row .input-block .checkbox-block {\n        display: flex; }\n\n.form-purchase .purchase-select {\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    font-size: 1.3rem;\n    line-height: 1.3rem;\n    margin: 1.5rem 0 0;\n    padding: 0;\n    width: 100%;\n    max-width: 15rem;\n    height: 1.3rem; }\n\n.form-purchase .purchase-select .arrow {\n      margin-left: 1rem;\n      width: 0.8rem;\n      height: 0.8rem; }\n\n.form-purchase .purchase-select .arrow.down {\n        background: center/contain no-repeat url('arrow-down.svg'); }\n\n.form-purchase .purchase-select .arrow.up {\n        background: center/contain no-repeat url('arrow-up.svg'); }\n\n.form-purchase .additional-details {\n    display: flex;\n    margin-top: 1.5rem;\n    padding: 0.5rem 0 2rem; }\n\n.form-purchase .additional-details > div {\n      flex-basis: 25%; }\n\n.form-purchase .additional-details > div:first-child {\n        padding-left: 1.5rem;\n        padding-right: 1rem; }\n\n.form-purchase .additional-details > div:last-child {\n        padding-left: 1rem;\n        padding-right: 1.5rem; }\n\n.form-purchase .purchase-states {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    line-height: 2.9rem; }\n\n.form-purchase .send-button {\n    margin: 2.4rem 0;\n    width: 100%;\n    max-width: 15rem; }\n\n.form-purchase .purchase-buttons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 2.4rem -0.5rem; }\n\n.form-purchase .purchase-buttons button {\n      flex: 0 1 33%;\n      margin: 0 0.5rem; }\n\n.form-purchase .nullify-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .nullify-block-row .nullify-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.form-purchase .time-cancel-block-row {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-question {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .input-block {\n      width: 25%; }\n\n.form-purchase .time-cancel-block-row label {\n      margin-bottom: 1rem; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 1rem 0;\n      width: 100%; }\n\n.form-purchase .time-cancel-block-row .time-cancel-block-buttons button {\n        flex: 0 1 25%;\n        margin: 0 0.5rem; }\n\n.progress-bar-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0 3rem;\n  width: 100%;\n  height: 3rem; }\n\n.progress-bar-container .progress-bar {\n    position: absolute;\n    top: -0.7rem;\n    left: 0;\n    margin: 0 3rem;\n    width: calc(100% - 6rem);\n    height: 0.7rem; }\n\n.progress-bar-container .progress-bar .progress-bar-full {\n      height: 0.7rem; }\n\n.progress-bar-container .progress-labels {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    height: 100%; }\n\n.progress-bar-container .progress-time {\n    position: absolute;\n    top: -3rem;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVyY2hhc2UvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxwdXJjaGFzZVxccHVyY2hhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWM7RUFDZCx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFKckI7SUFNSSxhQUFhLEVBQUE7O0FBTmpCO01BUU0sZUFBZSxFQUFBOztBQVJyQjtRQVVRLG9CQUFvQixFQUFBOztBQVY1QjtRQWFRLG1CQUFtQixFQUFBOztBQWIzQjtRQWdCUSxhQUFhLEVBQUE7O0FBaEJyQjtJQXFCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBOztBQS9CbEI7TUFpQ00saUJBQWlCO01BQ2pCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBbkNwQjtRQXFDUSwwREFBNEUsRUFBQTs7QUFyQ3BGO1FBd0NRLHdEQUEwRSxFQUFBOztBQXhDbEY7SUE2Q0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0IsRUFBQTs7QUEvQzFCO01BaURNLGVBQWUsRUFBQTs7QUFqRHJCO1FBbURRLG9CQUFvQjtRQUNwQixtQkFBbUIsRUFBQTs7QUFwRDNCO1FBdURRLGtCQUFrQjtRQUNsQixxQkFBcUIsRUFBQTs7QUF4RDdCO0lBNkRJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7O0FBbEV2QjtJQXFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQXZFcEI7SUEwRUksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0IsRUFBQTs7QUE1RTFCO01BOEVNLGFBQWE7TUFDYixnQkFBZ0IsRUFBQTs7QUEvRXRCO0lBbUZJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQXRGM0I7TUF3Rk0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLFdBQVcsRUFBQTs7QUE1RmpCO1FBOEZRLGFBQWE7UUFDYixnQkFBZ0IsRUFBQTs7QUEvRnhCO0lBb0dJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQXZHM0I7TUF5R00sbUJBQW1CLEVBQUE7O0FBekd6QjtNQTRHTSxVQUFVLEVBQUE7O0FBNUdoQjtNQStHTSxtQkFBbUIsRUFBQTs7QUEvR3pCO01Ba0hNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxXQUFXLEVBQUE7O0FBdEhqQjtRQXdIUSxhQUFhO1FBQ2IsZ0JBQWdCLEVBQUE7O0FBS3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBTmQ7SUFRSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGNBQWMsRUFBQTs7QUFibEI7TUFlTSxjQUFjLEVBQUE7O0FBZnBCO0lBbUJJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7O0FBdkJoQjtJQTBCSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdXJjaGFzZS9wdXJjaGFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhlYWQge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcbi5mb3JtLXB1cmNoYXNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtYXJnaW46IDEuNXJlbSAtM3JlbSAwO1xyXG4gIHBhZGRpbmc6IDAgM3JlbTtcclxuICBvdmVyZmxvdy15OiBvdmVybGF5O1xyXG4gIC5pbnB1dC1ibG9ja3Mtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaW5wdXQtYmxvY2sge1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAuY2hlY2tib3gtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnB1cmNoYXNlLXNlbGVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gICAgbWFyZ2luOiAxLjVyZW0gMCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogMS4zcmVtO1xyXG4gICAgLmFycm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgIHdpZHRoOiAwLjhyZW07XHJcbiAgICAgIGhlaWdodDogMC44cmVtO1xyXG4gICAgICAmLmRvd24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLnN2Zyk7XHJcbiAgICAgIH1cclxuICAgICAgJi51cCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKH5zcmMvYXNzZXRzL2ljb25zL2Fycm93LXVwLnN2Zyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmFkZGl0aW9uYWwtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMnJlbTtcclxuICAgID4gZGl2IHtcclxuICAgICAgZmxleC1iYXNpczogMjUlO1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucHVyY2hhc2Utc3RhdGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi45cmVtO1xyXG4gIH1cclxuICAuc2VuZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICB9XHJcbiAgLnB1cmNoYXNlLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbjogMi40cmVtIC0wLjVyZW07XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmbGV4OiAwIDEgMzMlO1xyXG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAubnVsbGlmeS1ibG9jay1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAubnVsbGlmeS1ibG9jay1idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRpbWUtY2FuY2VsLWJsb2NrLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC50aW1lLWNhbmNlbC1ibG9jay1xdWVzdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtYmxvY2sge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLnRpbWUtY2FuY2VsLWJsb2NrLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDAgM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgLnByb2dyZXNzLWJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0wLjdyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwIDNyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7XHJcbiAgICBoZWlnaHQ6IDAuN3JlbTtcclxuICAgIC5wcm9ncmVzcy1iYXItZnVsbCB7XHJcbiAgICAgIGhlaWdodDogMC43cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJvZ3Jlc3MtbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnByb2dyZXNzLXRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3JlbTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
/*!************************************************!*\
  !*** ./src/app/purchase/purchase.component.ts ***!
  \************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(route, backend, variablesService, modalService, ngZone, location, intToMoneyPipe) {
        var _this = this;
        this.route = route;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.location = location;
        this.intToMoneyPipe = intToMoneyPipe;
        this.isOpen = false;
        this.localAliases = [];
        this.newPurchase = false;
        this.sameAmountChecked = false;
        this.additionalOptions = false;
        this.currentContract = null;
        this.showTimeSelect = false;
        this.showNullify = false;
        this.purchaseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            seller: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (g.value === _this.variablesService.currentWallet.address) {
                        return { 'address_same': true };
                    }
                    return null;
                }, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status) {
                                _this.ngZone.run(function () {
                                    if (valid_status === false) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status, alias_data) {
                                    _this.ngZone.run(function () {
                                        if (alias_status) {
                                            if (alias_data.address === _this.variablesService.currentWallet.address) {
                                                g.setErrors(Object.assign({ 'address_same': true }, g.errors));
                                            }
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (parseFloat(g.value) === 0) {
                        return { 'amount_zero': true };
                    }
                    return null;
                }]),
            yourDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sellerDeposit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            sameAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: false, disabled: false }),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.variablesService.default_fee),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            timeCancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 12, disabled: false }),
            payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    PurchaseComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'purchase-seller' && this.isOpen) {
            this.isOpen = false;
        }
    };
    PurchaseComponent.prototype.checkAndChangeHistory = function () {
        var _this = this;
        if (this.currentContract.state === 201) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 8 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
        else if (this.currentContract.state === 601) {
            this.historyBlock = this.variablesService.currentWallet.history.find(function (item) { return item.tx_type === 12 && item.contract[0].contract_id === _this.currentContract.contract_id && item.contract[0].is_a === _this.currentContract.is_a; });
        }
    };
    PurchaseComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.purchaseForm.get('seller').value && this.purchaseForm.get('seller').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    PurchaseComponent.prototype.setAlias = function (alias) {
        this.purchaseForm.get('seller').setValue(alias);
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subRouting = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.currentContract = _this.variablesService.currentWallet.getContract(params['id']);
                _this.purchaseForm.controls['seller'].setValidators([]);
                _this.purchaseForm.updateValueAndValidity();
                _this.purchaseForm.setValue({
                    description: _this.currentContract.private_detailes.t,
                    seller: _this.currentContract.private_detailes.b_addr,
                    amount: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.to_pay),
                    yourDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.a_pledge),
                    sellerDeposit: _this.intToMoneyPipe.transform(_this.currentContract.private_detailes.b_pledge),
                    sameAmount: _this.currentContract.private_detailes.to_pay.isEqualTo(_this.currentContract.private_detailes.b_pledge),
                    comment: _this.currentContract.private_detailes.c,
                    fee: _this.variablesService.default_fee,
                    time: 12,
                    timeCancel: 12,
                    payment: _this.currentContract.payment_id
                });
                _this.purchaseForm.get('sameAmount').disable();
                _this.newPurchase = false;
                if (_this.currentContract.is_new) {
                    if (_this.currentContract.is_a && _this.currentContract.state === 2) {
                        _this.currentContract.state = 120;
                    }
                    if (_this.currentContract.state === 130 && _this.currentContract.cancel_expiration_time !== 0 && _this.currentContract.cancel_expiration_time < _this.variablesService.exp_med_ts) {
                        _this.currentContract.state = 2;
                    }
                    _this.variablesService.settings.viewedContracts = (_this.variablesService.settings.viewedContracts) ? _this.variablesService.settings.viewedContracts : [];
                    var findViewedCont = false;
                    for (var j = 0; j < _this.variablesService.settings.viewedContracts.length; j++) {
                        if (_this.variablesService.settings.viewedContracts[j].contract_id === _this.currentContract.contract_id && _this.variablesService.settings.viewedContracts[j].is_a === _this.currentContract.is_a) {
                            _this.variablesService.settings.viewedContracts[j].state = _this.currentContract.state;
                            findViewedCont = true;
                            break;
                        }
                    }
                    if (!findViewedCont) {
                        _this.variablesService.settings.viewedContracts.push({
                            contract_id: _this.currentContract.contract_id,
                            is_a: _this.currentContract.is_a,
                            state: _this.currentContract.state
                        });
                    }
                    _this.currentContract.is_new = false;
                    setTimeout(function () {
                        _this.variablesService.currentWallet.recountNewContracts();
                    }, 0);
                }
                _this.checkAndChangeHistory();
            }
            else {
                _this.newPurchase = true;
            }
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (_this.currentContract && _this.currentContract.state === 201 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 2;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
            else if (_this.currentContract && _this.currentContract.state === 601 && _this.currentContract.height !== 0 && (newHeight - _this.currentContract.height) >= 10) {
                _this.currentContract.state = 6;
                _this.currentContract.is_new = true;
                _this.variablesService.currentWallet.recountNewContracts();
            }
        });
        if (this.variablesService.appPass) {
            this.purchaseForm.controls.password.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, function (g) {
                    if (g.value) {
                        _this.backend.checkMasterPassword({ pass: g.value }, function (status) {
                            _this.ngZone.run(function () {
                                if (status === false) {
                                    g.setErrors(Object.assign({ password_not_match: true }, g.errors));
                                }
                                else {
                                    if (g.hasError('password_not_match')) {
                                        delete g.errors['password_not_match'];
                                        if (Object.keys(g.errors).length === 0) {
                                            g.setErrors(null);
                                        }
                                    }
                                }
                            });
                        });
                        return g.hasError('password_not_match')
                            ? { password_not_match: true }
                            : null;
                    }
                    return null;
                }]);
        }
        this.dLActionSubscribe = this.variablesService.sendActionData$.subscribe(function (res) {
            if (res.action === "escrow") {
                _this.actionData = res;
                _this.fillDeepLinkData();
                _this.variablesService.sendActionData$.next({});
            }
        });
    };
    PurchaseComponent.prototype.fillDeepLinkData = function () {
        this.additionalOptions = true;
        this.purchaseForm.get("description").setValue(this.actionData.description || '');
        this.purchaseForm.get("seller").setValue(this.actionData.seller_address || '');
        this.purchaseForm.get("amount").setValue(this.actionData.amount || '');
        this.purchaseForm.get("yourDeposit").setValue(this.actionData.my_deposit || '');
        this.purchaseForm.get("sellerDeposit").setValue(this.actionData.seller_deposit || '');
        this.purchaseForm.get("comment").setValue(this.actionData.comment || this.actionData.comments || '');
    };
    PurchaseComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    PurchaseComponent.prototype.getProgressBarWidth = function () {
        var progress = '0';
        if (!this.newPurchase) {
            if (this.currentContract) {
                if (this.currentContract.state === 1) {
                    progress = '10%';
                }
                if (this.currentContract.state === 201) {
                    progress = '25%';
                }
                if ([120, 2].indexOf(this.currentContract.state) !== -1) {
                    progress = '50%';
                }
                if ([5, 601].indexOf(this.currentContract.state) !== -1) {
                    progress = '75%';
                }
                if ([110, 130, 140, 3, 4, 6].indexOf(this.currentContract.state) !== -1) {
                    progress = '100%';
                }
            }
        }
        return progress;
    };
    PurchaseComponent.prototype.sameAmountChange = function () {
        if (!this.sameAmountChecked) {
            this.purchaseForm.get('sellerDeposit').clearValidators();
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
            this.sameAmountChecked = !this.sameAmountChecked;
        }
        else {
            this.purchaseForm.get('sellerDeposit').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.purchaseForm.get('sellerDeposit').updateValueAndValidity();
            this.sameAmountChecked = !this.sameAmountChecked;
        }
    };
    PurchaseComponent.prototype.createPurchase = function () {
        var _this = this;
        if (this.purchaseForm.valid) {
            var sellerDeposit_1 = this.purchaseForm.get('sameAmount').value ? this.purchaseForm.get('amount').value : this.purchaseForm.get('sellerDeposit').value;
            if (this.purchaseForm.get('seller').value.indexOf('@') !== 0) {
                this.backend.createProposal(this.variablesService.currentWallet.wallet_id, this.purchaseForm.get('description').value, this.purchaseForm.get('comment').value, this.variablesService.currentWallet.address, this.purchaseForm.get('seller').value, this.purchaseForm.get('amount').value, this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, this.purchaseForm.get('time').value, this.purchaseForm.get('payment').value, function (create_status) {
                    if (create_status) {
                        _this.back();
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.purchaseForm.get('seller').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.purchaseForm.get('seller').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.createProposal(_this.variablesService.currentWallet.wallet_id, _this.purchaseForm.get('description').value, _this.purchaseForm.get('comment').value, _this.variablesService.currentWallet.address, alias_data.address, _this.purchaseForm.get('amount').value, _this.purchaseForm.get('yourDeposit').value, sellerDeposit_1, _this.purchaseForm.get('time').value, _this.purchaseForm.get('payment').value, function (create_status) {
                                if (create_status) {
                                    _this.back();
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    PurchaseComponent.prototype.back = function () {
        this.location.back();
    };
    PurchaseComponent.prototype.acceptState = function () {
        var _this = this;
        this.backend.acceptProposal(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.ACCEPT_STATE_WAIT_BIG');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ignoredContract = function () {
        this.variablesService.settings.notViewedContracts = (this.variablesService.settings.notViewedContracts) ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 110;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 110,
                time: this.currentContract.expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 110;
        this.currentContract.time = this.currentContract.expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_ACCEPT');
        this.back();
    };
    PurchaseComponent.prototype.productNotGot = function () {
        var _this = this;
        this.backend.releaseProposal(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, 'REL_B', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.BURN_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsFinish = function () {
        var _this = this;
        this.backend.releaseProposal(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, 'REL_N', function (release_status) {
            if (release_status) {
                _this.modalService.prepareModal('success', 'PURCHASE.SUCCESS_FINISH_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsCancel = function () {
        var _this = this;
        this.backend.requestCancelContract(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, this.purchaseForm.get('timeCancel').value, function (cancel_status) {
            if (cancel_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.SEND_CANCEL_PROPOSAL');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.dealsDetailsDontCanceling = function () {
        this.variablesService.settings.notViewedContracts = this.variablesService.settings.notViewedContracts ? this.variablesService.settings.notViewedContracts : [];
        var findViewedCont = false;
        for (var j = 0; j < this.variablesService.settings.notViewedContracts.length; j++) {
            if (this.variablesService.settings.notViewedContracts[j].contract_id === this.currentContract.contract_id && this.variablesService.settings.notViewedContracts[j].is_a === this.currentContract.is_a) {
                this.variablesService.settings.notViewedContracts[j].state = 130;
                this.variablesService.settings.notViewedContracts[j].time = this.currentContract.cancel_expiration_time;
                findViewedCont = true;
                break;
            }
        }
        if (!findViewedCont) {
            this.variablesService.settings.notViewedContracts.push({
                contract_id: this.currentContract.contract_id,
                is_a: this.currentContract.is_a,
                state: 130,
                time: this.currentContract.cancel_expiration_time
            });
        }
        this.currentContract.is_new = true;
        this.currentContract.state = 130;
        this.currentContract.time = this.currentContract.cancel_expiration_time;
        this.variablesService.currentWallet.recountNewContracts();
        this.modalService.prepareModal('info', 'PURCHASE.IGNORED_CANCEL');
        this.back();
    };
    PurchaseComponent.prototype.dealsDetailsSellerCancel = function () {
        var _this = this;
        this.backend.acceptCancelContract(this.variablesService.currentWallet.wallet_id, this.currentContract.contract_id, function (accept_status) {
            if (accept_status) {
                _this.modalService.prepareModal('info', 'PURCHASE.DEALS_CANCELED_WAIT');
                _this.back();
            }
        });
    };
    PurchaseComponent.prototype.ngOnDestroy = function () {
        this.actionData = {};
        this.dLActionSubscribe.unsubscribe();
        this.subRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PurchaseComponent.prototype, "onClick", null);
    PurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__(/*! ./purchase.component.scss */ "./src/app/purchase/purchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_7__["IntToMoneyPipe"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/receive/receive.component.html":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-qr\">\r\n  <img src=\"{{qrImageSrc}}\" alt=\"qr-code\">\r\n  <div class=\"wrap-address\">\r\n    <div class=\"address\">{{variablesService.currentWallet.address}}</div>\r\n    <button type=\"button\" class=\"btn-copy-address\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/receive/receive.component.scss":
/*!************************************************!*\
  !*** ./src/app/receive/receive.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.wrap-qr {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.wrap-qr img {\n    margin: 4rem 0; }\n\n.wrap-qr .wrap-address {\n    display: flex;\n    align-items: center;\n    font-size: 1.4rem;\n    line-height: 2.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address {\n      margin-left: 1.2rem;\n      width: 1.7rem;\n      height: 1.7rem; }\n\n.wrap-qr .wrap-address .btn-copy-address.copy {\n        transition: all 0.25s ease;\n        width: 2.4rem;\n        height: 2.4rem;\n        background: center/contain no-repeat url('copy.svg'); }\n\n.wrap-qr .wrap-address .btn-copy-address.copied {\n        background: center/contain no-repeat url('complete-testwallet.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZS9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHJlY2VpdmVcXHJlY2VpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUhyQjtJQUtJLGNBQWMsRUFBQTs7QUFMbEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUFYdkI7TUFhTSxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUFmcEI7UUFpQlEsMEJBQTBCO1FBQzFCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0RBQXVFLEVBQUE7O0FBcEIvRTtRQXVCUSxtRUFBc0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlY2VpdmUvcmVjZWl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ud3JhcC1xciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogNHJlbSAwO1xyXG4gIH1cclxuICAud3JhcC1hZGRyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi43cmVtO1xyXG4gICAgLmJ0bi1jb3B5LWFkZHJlc3Mge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMS4ycmVtO1xyXG4gICAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgJi5jb3B5IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICB3aWR0aDogMi40cmVtO1xyXG4gICAgICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvY29weS5zdmcpO1xyXG4gICAgICB9XHJcbiAgICAgICYuY29waWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvbXBsZXRlLXRlc3R3YWxsZXQuc3ZnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/receive/receive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/receive/receive.component.ts ***!
  \**********************************************/
/*! exports provided: ReceiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveComponent", function() { return ReceiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReceiveComponent = /** @class */ (function () {
    function ReceiveComponent(backend, variablesService) {
        this.backend = backend;
        this.variablesService = variablesService;
        this.copyAnimation = false;
    }
    ReceiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        qrcode__WEBPACK_IMPORTED_MODULE_1___default.a.toDataURL(this.variablesService.currentWallet.address, {
            width: 200 * _shared_constants__WEBPACK_IMPORTED_MODULE_4__["RCV_ADDR_QR_SCALE"],
            height: 200 * _shared_constants__WEBPACK_IMPORTED_MODULE_4__["RCV_ADDR_QR_SCALE"]
        }).then(function (url) {
            _this.qrImageSrc = url;
        }).catch(function (err) {
            console.error(err);
        });
    };
    ReceiveComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    ReceiveComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copyAnimationTimeout);
    };
    ReceiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receive',
            template: __webpack_require__(/*! ./receive.component.html */ "./src/app/receive/receive.component.html"),
            styles: [__webpack_require__(/*! ./receive.component.scss */ "./src/app/receive/receive.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"]])
    ], ReceiveComponent);
    return ReceiveComponent;
}());



/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.html":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.RESTORE_WALLET' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" [routerLink]=\"['/main']\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-restore\" [formGroup]=\"restoreForm\">\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"wallet-name\">{{ 'RESTORE_WALLET.LABEL_NAME' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-name\" formControlName=\"name\"\r\n        [class.required-error]=\"restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched\"\r\n        [placeholder]=\"restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched ? ('RESTORE_WALLET.FORM_ERRORS.NAME_REQUIRED' | translate) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\r\n        [attr.readonly]=\"walletSaved ? '' : null\" [maxLength]=\"variablesService.maxWalletNameLength\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"restoreForm.controls['name'].invalid && !restoreForm.controls['name'].errors['required'] && (restoreForm.controls['name'].dirty || restoreForm.controls['name'].touched)\">\r\n        <div *ngIf=\"restoreForm.controls['name'].errors['duplicate']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n        <div *ngIf=\"restoreForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n        <div *ngIf=\"restoreForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"wallet-password\">{{ 'RESTORE_WALLET.PASS' | translate }}</label>\r\n      <input type=\"password\" id=\"wallet-password\"\r\n        placeholder=\"{{ 'PLACEHOLDERS.WALET_PASSWORD_PLACEHOLDER' | translate }}\" formControlName=\"password\"\r\n        [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['password'].errors\">\r\n        <div *ngIf=\"restoreForm.controls['password'].errors.pattern\">\r\n          {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-block half-block\">\r\n      <label for=\"confirm-wallet-password\">{{ 'RESTORE_WALLET.CONFIRM' | translate }}</label>\r\n      <input type=\"password\" id=\"confirm-wallet-password\"\r\n        placeholder=\"{{ 'PLACEHOLDERS.CONFIRM_WALET_PASSWORD_PLACEHOLDER' | translate }}\" formControlName=\"confirm\"\r\n        [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"restoreForm.controls['password'].dirty && restoreForm.controls['confirm'].dirty && restoreForm.errors && restoreForm.get('confirm').value.length > 0\">\r\n        <div *ngIf=\"restoreForm.errors['confirm_mismatch']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"input-block\">\r\n      <label for=\"phrase-key\">{{ 'RESTORE_WALLET.LABEL_PHRASE_KEY' | translate }}</label>\r\n      <input type=\"text\" id=\"phrase-key\" formControlName=\"key\"\r\n        [class.required-error]=\"restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched\"\r\n        [placeholder]=\"restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched ? ('RESTORE_WALLET.FORM_ERRORS.KEY_REQUIRED' | translate ) : ('PLACEHOLDERS.SEED_PHRASE_PLACEHOLDER' | translate) \"\r\n        [attr.readonly]=\"walletSaved ? '' : null\" (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"restoreForm.controls['key'].invalid && !restoreForm.controls['key'].errors['required'] && (restoreForm.controls['key'].dirty || restoreForm.controls['key'].touched)\">\r\n        <div *ngIf=\"restoreForm.controls['key'].errors['key_not_valid']\">\r\n          {{ 'RESTORE_WALLET.FORM_ERRORS.KEY_NOT_VALID' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"input-block half-block\"\r\n      *ngIf=\"this.seedPhraseInfo?.syntax_correct && this.seedPhraseInfo?.require_password\">\r\n      <label for=\"seed-password\">{{ 'RESTORE_WALLET.SEED_PASSWORD' | translate }}</label>\r\n      <input type=\"password\" id=\"seed-password\" placeholder=\"{{ 'PLACEHOLDERS.SEED_PHRASE_PLACEHOLDER' | translate }}\"\r\n        formControlName=\"seedPassword\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"(restoreForm.controls['seedPassword'].dirty || restoreForm.controls['seedPassword'].touched) && !this.seedPhraseInfo?.hash_sum_matched\">\r\n        <span>{{ 'RESTORE_WALLET.FORM_ERRORS.INCORRECT_PASSWORD' | translate }}</span>\r\n      </div>\r\n      <div class=\"success-block\" *ngIf=\"this.seedPhraseInfo?.hash_sum_matched\">\r\n        <span>{{ 'RESTORE_WALLET.OK' | translate }}</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button_reset\" *ngIf=\"walletSaved\" disabled><i\r\n          class=\"icon\"></i>{{walletSavedName}}</button>\r\n      <button type=\"button\" class=\"blue-button select-button\" (click)=\"saveWallet()\"\r\n        [disabled]=\"(!this.seedPhraseInfo?.syntax_correct || !this.seedPhraseInfo?.require_password || !this.seedPhraseInfo?.hash_sum_matched) && (!this.seedPhraseInfo?.syntax_correct || this.seedPhraseInfo?.require_password)\"\r\n        *ngIf=\"!walletSaved\">{{ 'RESTORE_WALLET.BUTTON_SELECT' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button create-button\" (click)=\"createWallet()\" [disabled]=\"!walletSaved\">{{\r\n        'RESTORE_WALLET.BUTTON_CREATE' | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.form-restore {\n  margin: 2.4rem 0;\n  width: 100%; }\n\n.form-restore .input-block.half-block {\n    width: 50%; }\n\n.form-restore .wrap-buttons {\n    display: flex;\n    margin: 2.5rem -0.7rem;\n    width: 50%; }\n\n.form-restore .wrap-buttons button {\n      margin: 0 0.7rem; }\n\n.form-restore .wrap-buttons button.blue-button_reset {\n        flex-basis: 50%; }\n\n.form-restore .wrap-buttons button.select-button {\n        flex-basis: 60%; }\n\n.form-restore .wrap-buttons button.create-button {\n        flex: 1 1 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdG9yZS13YWxsZXQvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxyZXN0b3JlLXdhbGxldFxccmVzdG9yZS13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUZiO0lBTU0sVUFBVSxFQUFBOztBQU5oQjtJQVdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVSxFQUFBOztBQWJkO01BZ0JNLGdCQUFnQixFQUFBOztBQWhCdEI7UUFtQlEsZUFBZSxFQUFBOztBQW5CdkI7UUF1QlEsZUFBZSxFQUFBOztBQXZCdkI7UUEyQlEsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVzdG9yZS13YWxsZXQvcmVzdG9yZS13YWxsZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9ybS1yZXN0b3JlIHtcclxuICBtYXJnaW46IDIuNHJlbSAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuaW5wdXQtYmxvY2sge1xyXG4gICAgJi5oYWxmLWJsb2NrIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAmLmJsdWUtYnV0dG9uX3Jlc2V0IHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0LWJ1dHRvbiB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNyZWF0ZS1idXR0b24ge1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/restore-wallet/restore-wallet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/restore-wallet/restore-wallet.component.ts ***!
  \************************************************************/
/*! exports provided: RestoreWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreWalletComponent", function() { return RestoreWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/models/wallet.model */ "./src/app/_helpers/models/wallet.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RestoreWalletComponent = /** @class */ (function () {
    function RestoreWalletComponent(router, backend, variablesService, modalService, ngZone, translate) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.restoreForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            return { duplicate: true };
                        }
                    }
                    return null;
                },
            ]),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            seedPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
        }, function (g) {
            return g.get('password').value === g.get('confirm').value
                ? null
                : { confirm_mismatch: true };
        });
        this.wallet = {
            id: '',
        };
        this.walletSaved = false;
        this.walletSavedName = '';
        this.progressWidth = '9rem';
        this.seedPhraseInfo = null;
        this.unsubscribeAll = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    RestoreWalletComponent.prototype.ngOnInit = function () {
        this.checkValidSeedPhrasePassword();
        this.changeDetectionSeedPhrasePassword();
    };
    RestoreWalletComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll.next(true);
        this.unsubscribeAll.complete();
    };
    RestoreWalletComponent.prototype.changeDetectionSeedPhrasePassword = function () {
        var _this = this;
        this.restoreForm.controls.seedPassword.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(function () {
            _this.checkValidSeedPhrasePassword();
        });
        this.restoreForm.controls.key.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribeAll))
            .subscribe(function () {
            _this.checkValidSeedPhrasePassword();
        });
    };
    RestoreWalletComponent.prototype.checkValidSeedPhrasePassword = function () {
        var _this = this;
        var seed_password = this.restoreForm.controls.seedPassword.value;
        var seed_phrase = this.restoreForm.controls.key.value;
        this.backend.getSeedPhraseInfo({ seed_phrase: seed_phrase, seed_password: seed_password }, function (status, data) {
            _this.ngZone.run(function () {
                _this.seedPhraseInfo = data;
            });
        });
    };
    RestoreWalletComponent.prototype.createWallet = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.progressWidth = '100%';
            _this.runWallet();
        });
    };
    RestoreWalletComponent.prototype.saveWallet = function () {
        var _this = this;
        if (this.restoreForm.valid &&
            this.restoreForm.get('name').value.length <=
                this.variablesService.maxWalletNameLength) {
            this.backend.isValidRestoreWalletText({
                seed_phrase: this.restoreForm.get('key').value,
                seed_password: this.restoreForm.get('seedPassword').value,
            }, function (valid_status, valid_data) {
                if (valid_data !== 'TRUE') {
                    _this.ngZone.run(function () {
                        _this.restoreForm.get('key').setErrors({ key_not_valid: true });
                    });
                }
                else {
                    _this.backend.saveFileDialog(_this.translate.instant('RESTORE_WALLET.CHOOSE_PATH'), '*', _this.variablesService.settings.default_path, function (save_status, save_data) {
                        if (save_status) {
                            _this.variablesService.settings.default_path = save_data.path.substr(0, save_data.path.lastIndexOf('/'));
                            _this.walletSavedName = save_data.path.substr(save_data.path.lastIndexOf('/') + 1, save_data.path.length - 1);
                            _this.backend.restoreWallet(save_data.path, _this.restoreForm.get('password').value, _this.restoreForm.get('key').value, _this.restoreForm.get('seedPassword').value, function (restore_status, restore_data) {
                                if (restore_status) {
                                    _this.wallet.id = restore_data.wallet_id;
                                    _this.variablesService.opening_wallet = new _helpers_models_wallet_model__WEBPACK_IMPORTED_MODULE_6__["Wallet"](restore_data.wallet_id, _this.restoreForm.get('name').value, _this.restoreForm.get('password').value, restore_data['wi'].path, restore_data['wi'].address, restore_data['wi'].balance, restore_data['wi'].unlocked_balance, restore_data['wi'].mined_total, restore_data['wi'].tracking_hey);
                                    _this.variablesService.opening_wallet.is_auditable =
                                        restore_data['wi'].is_auditable;
                                    _this.variablesService.opening_wallet.is_watch_only =
                                        restore_data['wi'].is_watch_only;
                                    _this.variablesService.opening_wallet.currentPage = 1;
                                    _this.variablesService.opening_wallet.alias = _this.backend.getWalletAlias(_this.variablesService.opening_wallet.address);
                                    _this.variablesService.opening_wallet.pages = new Array(1).fill(1);
                                    _this.variablesService.opening_wallet.totalPages = 1;
                                    _this.variablesService.opening_wallet.currentPage = 1;
                                    _this.variablesService.opening_wallet.total_history_item = 0;
                                    _this.variablesService.opening_wallet.restore = true;
                                    if (restore_data.recent_history &&
                                        restore_data.recent_history.history) {
                                        _this.variablesService.opening_wallet.totalPages = Math.ceil(restore_data.recent_history.total_history_items /
                                            _this.variablesService.count);
                                        _this.variablesService.opening_wallet.totalPages >
                                            _this.variablesService.maxPages
                                            ? (_this.variablesService.opening_wallet.pages = new Array(5)
                                                .fill(1)
                                                .map(function (value, index) { return value + index; }))
                                            : (_this.variablesService.opening_wallet.pages = new Array(_this.variablesService.opening_wallet.totalPages)
                                                .fill(1)
                                                .map(function (value, index) { return value + index; }));
                                        _this.variablesService.opening_wallet.prepareHistory(restore_data.recent_history.history);
                                    }
                                    _this.backend.getContracts(_this.variablesService.opening_wallet.wallet_id, function (contracts_status, contracts_data) {
                                        if (contracts_status &&
                                            contracts_data.hasOwnProperty('contracts')) {
                                            _this.ngZone.run(function () {
                                                _this.variablesService.opening_wallet.prepareContractsAfterOpen(contracts_data.contracts, _this.variablesService.exp_med_ts, _this.variablesService.height_app, _this.variablesService.settings
                                                    .viewedContracts, _this.variablesService.settings
                                                    .notViewedContracts);
                                            });
                                        }
                                    });
                                    _this.ngZone.run(function () {
                                        _this.walletSaved = true;
                                        _this.progressWidth = '50%';
                                    });
                                }
                                else {
                                    _this.modalService.prepareModal('error', 'RESTORE_WALLET.NOT_CORRECT_FILE_OR_PASSWORD');
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    RestoreWalletComponent.prototype.runWallet = function () {
        var _this = this;
        // add flag when wallet was restored form seed
        this.variablesService.after_sync_request[this.wallet.id] = true;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet.id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.variablesService.setCurrentWallet(_this.wallet.id);
                        _this.router.navigate(['/wallet/']);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet.id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    RestoreWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restore-wallet',
            template: __webpack_require__(/*! ./restore-wallet.component.html */ "./src/app/restore-wallet/restore-wallet.component.html"),
            styles: [__webpack_require__(/*! ./restore-wallet.component.scss */ "./src/app/restore-wallet/restore-wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], RestoreWalletComponent);
    return RestoreWalletComponent;
}());



/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.html":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <!-- breadcrumbs -->\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/main']\">{{ 'BREADCRUMBS.ADD_WALLET' | translate }}</span>\r\n      <span>{{ 'BREADCRUMBS.SAVE_PHRASE' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <!-- /breadcrumbs -->\r\n\r\n  <div class=\"scrolled-content\">\r\n\r\n    <form class=\"form-details\" [formGroup]=\"detailsForm\">\r\n      <div class=\"input-block\">\r\n        <label>{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\r\n        <input type=\"text\" id=\"wallet-name\" formControlName=\"name\"\r\n          [class.required-error]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched\"\r\n          [placeholder]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched ? ('WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate ) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate)\"\r\n          [maxLength]=\"variablesService.maxWalletNameLength\" (contextmenu)=\"variablesService.onContextMenu($event)\"\r\n          readonly>\r\n        <div class=\"error-block\"\r\n          *ngIf=\"detailsForm.controls['name'].invalid && !detailsForm.controls['name'].errors['required'] && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\r\n          <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\r\n            {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n          </div>\r\n          <div *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n            {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\r\n        <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\r\n      </div>\r\n    </form>\r\n\r\n    <ng-container *ngIf=\"!showSeed else seedPhraseContent\">\r\n      <form class=\"form-seed\" [formGroup]=\"seedPhraseForm\" (ngSubmit)=\"onSubmitSeed()\">\r\n        <div class=\"form-content\">\r\n          <label>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\r\n          <div class=\"seed-phrase-form\">\r\n            <div class=\"input-block\">\r\n              <label for=\"create-password\">{{ 'WALLET_DETAILS.CREATE_PASSWORD_SECURE' | translate }} <a\r\n                  title=\"{{ 'WALLET_DETAILS.INFO' | translate }}\"><i class=\"icon info\"></i></a></label>\r\n              <input type=\"password\" placeholder=\"{{ 'PLACEHOLDERS.PASSWORD_PLACEHOLDER' | translate }}\"\r\n                id=\"create-password\" formControlName=\"password\">\r\n            </div>\r\n            <div class=\"input-block\">\r\n              <label for=\"confirm-password\">{{ 'WALLET_DETAILS.FORM.CONFIRM_PASSWORD' | translate }}</label>\r\n              <input type=\"password\" placeholder=\"{{'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate}}\"\r\n                id=\"confirm-password\" formControlName=\"confirmPassword\">\r\n              <div class=\"error-block\"\r\n                *ngIf=\"seedPhraseForm.invalid && (seedPhraseForm.controls['confirmPassword'].dirty || seedPhraseForm.controls['confirmPassword'].touched)\">\r\n                <div *ngIf=\"seedPhraseForm.invalid && seedPhraseForm.get('confirmPassword').value.length > 0\">\r\n                  {{ 'WALLET_DETAILS.FORM_ERRORS.PASSWORDS_DONT_MATCH' | translate }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"blue-button\" [disabled]=\"!seedPhraseForm.valid\"><i class=\"icon safety\"></i>\r\n              {{ 'WALLET_DETAILS.FORM.GENERATE_SECURE_SEED' | translate }}</button>\r\n            <a class=\"secured-seed\"><i class=\"icon info\"></i>{{ 'WALLET_DETAILS.FORM.SECURED_SEED_WILL_REQUIRE' |\r\n              translate }}</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n    <ng-template #seedPhraseContent>\r\n      <div class=\"seed-phrase\">\r\n        <div class=\"seed-phrase-title\">\r\n          <span class=\"seed-phrase-heading\">{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</span>\r\n          <p class=\"right-part\">\r\n            <span *ngIf=\"seedPhraseForm.controls.password.value.length == 0\">{{ 'WALLET_DETAILS.SEED_IS_UNSECURED' |\r\n              translate }}\r\n              <i class=\"icon unsecured\"></i></span>\r\n            <span *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">{{ 'WALLET_DETAILS.SEED_IS_SECURED' |\r\n              translate }}\r\n              <i class=\"icon secured\"></i></span>\r\n          </p>\r\n        </div>\r\n        <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\r\n          <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\r\n            <div class=\"item\"\r\n              [class.dark]=\"(index + 1) >= 1 && (index + 1) <= 7 || (index + 1) >= 15 && (index + 1) <= 21\">\r\n              {{(index + 1) + '. ' + word}}</div>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"seed-phrase-footer\">\r\n          <div class=\"wrap-buttons\" *ngIf=\"showSeed\">\r\n            <button type=\"button\" class=\"blue-button seed-phrase-button\" (click)=\"runWallet()\">{{\r\n              'SEED_PHRASE.BUTTON_CREATE_ACCOUNT' | translate }}</button>\r\n            <button type=\"button\" class=\"blue-button_reset copy-button\" (click)=\"copySeedPhrase()\">\r\n              <ng-container *ngIf=\"!seedPhraseCopied\">\r\n                {{ 'SEED_PHRASE.BUTTON_COPY' | translate }}\r\n              </ng-container>\r\n              <ng-container *ngIf=\"seedPhraseCopied\">\r\n                {{ 'SEED_PHRASE.BUTTON_COPIED' | translate }}\r\n              </ng-container>\r\n            </button>\r\n          </div>\r\n          <div class=\"seed-phrase-footer-text\" *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">\r\n            <i class=\"icon info\"></i>\r\n            <span class=\"title\">{{ 'WALLET_DETAILS.REMEMBER_YOU_WILL_REQUIRE' | translate\r\n              }}</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.scss":
/*!********************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative; }\n\n.content {\n  padding: 3.2rem 3rem 3rem; }\n\n.scrolled-content, .content {\n  height: 100%;\n  overflow-y: auto; }\n\n.mt-2 {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VlZC1waHJhc2UvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzZWVkLXBocmFzZVxcc2VlZC1waHJhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWVkLXBocmFzZS9zZWVkLXBocmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAzLjJyZW0gM3JlbSAzcmVtO1xyXG59XHJcbi5zY3JvbGxlZC1jb250ZW50LCAuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tdC0yIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/seed-phrase/seed-phrase.component.ts":
/*!******************************************************!*\
  !*** ./src/app/seed-phrase/seed-phrase.component.ts ***!
  \******************************************************/
/*! exports provided: SeedPhraseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedPhraseComponent", function() { return SeedPhraseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeedPhraseComponent = /** @class */ (function () {
    function SeedPhraseComponent(route, router, location, backend, variablesService, modalService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.location = location;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.seedPhrase = '';
        this.showSeed = false;
        this.seedPhraseCopied = false;
        this.progressWidth = '66%';
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id ===
                                _this.variablesService.currentWallet.wallet_id) {
                                return { same: true };
                            }
                            else {
                                return { duplicate: true };
                            }
                        }
                    }
                    return null;
                },
            ]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.seedPhraseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.variablesService.pattern)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.variablesService.pattern)),
        }, { validators: this.checkPasswords });
    }
    SeedPhraseComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    SeedPhraseComponent.prototype.ngOnInit = function () {
        this.showSeed = false;
        this.getWalletId();
        this.setWalletInfoNamePath();
    };
    SeedPhraseComponent.prototype.setWalletInfoNamePath = function () {
        this.detailsForm
            .get('name')
            .setValue(this.variablesService.opening_wallet.name);
        this.detailsForm
            .get('path')
            .setValue(this.variablesService.opening_wallet.path);
    };
    SeedPhraseComponent.prototype.getWalletId = function () {
        var _this = this;
        this.queryRouting = this.route.queryParams.subscribe(function (params) {
            if (params.wallet_id) {
                _this.wallet_id = params.wallet_id;
            }
        });
    };
    SeedPhraseComponent.prototype.runWallet = function () {
        var _this = this;
        var exists = false;
        this.variablesService.wallets.forEach(function (wallet) {
            if (wallet.address === _this.variablesService.opening_wallet.address) {
                exists = true;
            }
        });
        if (!exists) {
            this.backend.runWallet(this.wallet_id, function (run_status, run_data) {
                if (run_status) {
                    _this.variablesService.wallets.push(_this.variablesService.opening_wallet);
                    if (_this.variablesService.appPass) {
                        _this.backend.storeSecureAppData();
                    }
                    _this.ngZone.run(function () {
                        _this.variablesService.setCurrentWallet(_this.wallet_id);
                        _this.router.navigate(['/wallet/']);
                    });
                }
                else {
                    console.log(run_data['error_code']);
                }
            });
        }
        else {
            this.variablesService.opening_wallet = null;
            this.modalService.prepareModal('error', 'OPEN_WALLET.WITH_ADDRESS_ALREADY_OPEN');
            this.backend.closeWallet(this.wallet_id, function () {
                _this.ngZone.run(function () {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    SeedPhraseComponent.prototype.copySeedPhrase = function () {
        var _this = this;
        this.backend.setClipboard(this.seedPhrase, function () {
            _this.ngZone.run(function () {
                setTimeout(function () {
                    _this.seedPhraseCopied = false;
                }, 4000);
                _this.seedPhraseCopied = true;
            });
        });
    };
    SeedPhraseComponent.prototype.back = function () {
        this.location.back();
    };
    SeedPhraseComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
        this.progressWidth = '100%';
    };
    SeedPhraseComponent.prototype.onSubmitSeed = function () {
        var _this = this;
        if (this.seedPhraseForm.valid) {
            this.showSeedPhrase();
            var wallet_id = this.wallet_id;
            var seed_password = this.seedPhraseForm.controls.password.value;
            this.backend.getSmartWalletInfo({ wallet_id: wallet_id, seed_password: seed_password }, function (status, data) {
                if (data.hasOwnProperty('seed_phrase')) {
                    _this.ngZone.run(function () {
                        _this.seedPhrase = data['seed_phrase'].trim();
                    });
                }
            });
        }
    };
    SeedPhraseComponent.prototype.ngOnDestroy = function () {
        this.queryRouting.unsubscribe();
    };
    SeedPhraseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed-phrase',
            template: __webpack_require__(/*! ./seed-phrase.component.html */ "./src/app/seed-phrase/seed-phrase.component.html"),
            styles: [__webpack_require__(/*! ./seed-phrase.component.scss */ "./src/app/seed-phrase/seed-phrase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SeedPhraseComponent);
    return SeedPhraseComponent;
}());



/***/ }),

/***/ "./src/app/send-details-modal/send-details-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/send-details-modal/send-details-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n    <h3 class=\"title mb-2\">{{ 'SEND_DETAILS_MODAL.TITLE1' | translate }}</h3>\r\n\r\n    <div class=\"status mb-2\">\r\n\r\n        <div *ngIf=\"isSentSuccess\"\r\n             class=\"image\">\r\n            <img src=\"assets/icons/transaction_success.svg\"\r\n                 alt=\"success\">\r\n        </div>\r\n\r\n        <div *ngIf=\"isSentFailed\"\r\n             class=\"image\">\r\n            <img class=\"image\"\r\n                 src=\"assets/icons/transaction_failed.svg\"\r\n                 alt=\"failed\">\r\n        </div>\r\n\r\n        <div *ngIf=\"!isSentSuccess && !isSentFailed\"\r\n             class=\"loader\"></div>\r\n\r\n        <p class=\"text mt-2\">\r\n            {{ ((currentActionState$ | async) ? 'TOR_LIB_STATE' + '.' + (currentActionState$ | async)?.status : 'TOR_LIB_STATE.STATE_INITIALIZING') | translate }}\r\n            {{!isSentSuccess && !isSentFailed ? '...' : ''}}\r\n        </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"details mb-2\">\r\n        <div class=\"header\"\r\n             (click)=\"isDetailsNotEmpty && toggleDetails()\">\r\n            <p class=\"title mr-2\">{{ 'SEND_DETAILS_MODAL.TITLE2' | translate }}</p>\r\n            <button *ngIf=\"isDetailsNotEmpty\"\r\n                    class=\"btn-arrow\"\r\n                    [class.rotate-180]=\"stateDetails$ | async\">\r\n                <img src=\"assets/icons/arrows/stroke/arrow_down.svg\"\r\n                     alt=\"arrow\">\r\n            </button>\r\n        </div>\r\n        <div #elDetailsWrapper\r\n             class=\"details-wrapper scrolled-content\">\r\n            <ul class=\"details-list\"\r\n                *ngIf=\"stateDetails$ | async\">\r\n                <li class=\"item\"\r\n                    *ngFor=\"let action of (currentActionStates$ | async); let last = last; trackBy: trackBy\">\r\n                    <span class=\"text mr-1\">{{ 'TOR_LIB_STATE' + '.' + action?.status | translate }}{{ last && !isSentSuccess && !isSentFailed ? '...' : '' }}</span>\r\n                    <ng-container *ngIf=\"!last\">\r\n                        <img *ngIf=\"isSuccess(action)\"\r\n                             class=\"image\"\r\n                             src=\"assets/icons/check_with_blue_bg.svg\"\r\n                             alt=\"success\">\r\n\r\n                        <img *ngIf=\"isFailed(action)\"\r\n                             class=\"image\"\r\n                             src=\"assets/icons/transaction_failed.svg\"\r\n                             alt=\"failed\">\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"last\">\r\n                        <img *ngIf=\"last && isSentSuccess\"\r\n                             class=\"image\"\r\n                             src=\"assets/icons/check_with_blue_bg.svg\"\r\n                             alt=\"success\">\r\n\r\n                        <img *ngIf=\"last && isSentFailed\"\r\n                             class=\"image\"\r\n                             src=\"assets/icons/transaction_failed.svg\"\r\n                             alt=\"failed\">\r\n                    </ng-container>\r\n                </li>\r\n\r\n                <ng-container *ngIf=\"(responseData$ | async)\">\r\n                    <li class=\"item\">\r\n                        <span class=\"text\">tx id: {{ (responseData$ | async).response_data.tx_hash }}</span>\r\n                    </li>\r\n                    <li class=\"item\">\r\n                        <span class=\"text\">tx size: {{ (responseData$ | async).response_data.tx_blob_size }}\r\n                                           bytes</span>\r\n                    </li>\r\n                </ng-container>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <button class=\"blue-button\"\r\n            [disabled]=\"!isSentSuccess && !isSentFailed\"\r\n            (click)=\"close.emit()\">{{ 'Ok' | translate }}</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/send-details-modal/send-details-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/send-details-modal/send-details-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  max-width: 54rem;\n  overflow-y: auto;\n  width: 100%;\n  background: var(--light-blue);\n  border-radius: var(--default-border-radius); }\n\n.title {\n  font-size: 1.8rem;\n  line-height: 1.3; }\n\n.rotate-180 {\n  transform: rotate(-180deg); }\n\n.status {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.status .image {\n    max-width: 13rem;\n    max-height: 13rem;\n    width: 100%;\n    height: 100%; }\n\n.status .image img {\n      width: 100%;\n      height: 100%; }\n\n.status .text {\n    color: var(--blue-text-color);\n    font-size: 1.8rem; }\n\n.details {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--default-border-radius);\n  overflow: hidden; }\n\n.details .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: nowrap;\n    min-height: 4rem;\n    max-height: 4rem;\n    overflow: hidden;\n    padding: 1rem 2rem;\n    width: 100%;\n    background-color: var(--light-blue-details);\n    cursor: pointer; }\n\n.details .header .title {\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.details .header .btn-arrow {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: none;\n      border: none; }\n\n.details-wrapper {\n    max-height: 35rem;\n    background-color: var(--light-blue-details);\n    overflow-y: auto;\n    font-size: 1.8rem;\n    scroll-behavior: smooth; }\n\n.details-list {\n    padding: 1rem 2rem; }\n\n.details-list .item {\n      display: flex;\n      align-items: center;\n      flex-wrap: nowrap;\n      margin-bottom: 1.2rem;\n      color: var(--blue-text-color); }\n\n.details-list .item .image {\n        max-width: 1.5rem;\n        max-height: 1.5rem;\n        width: 100%;\n        height: 100%; }\n\n.details-list .item .image img {\n          width: 100%;\n          height: 100%; }\n\n.details-list .item .text {\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        word-break: break-all; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1kZXRhaWxzLW1vZGFsL0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcc2VuZC1kZXRhaWxzLW1vZGFsXFxzZW5kLWRldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUd2QztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBSHJCO0lBTUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVRoQjtNQVlNLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBYmxCO0lBa0JJLDZCQUE2QjtJQUM3QixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQ0FBMkM7RUFDM0MsZ0JBQWdCLEVBQUE7O0FBTGxCO0lBUUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMkNBQTJDO0lBQzNDLGVBQWUsRUFBQTs7QUFsQm5CO01BcUJNLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBQTs7QUF0QjdCO01BMEJNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7O0FBSWhCO0lBQ0UsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QixFQUFBOztBQUd6QjtJQUNFLGtCQUFrQixFQUFBOztBQURuQjtNQUlHLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQiw2QkFBNkIsRUFBQTs7QUFSaEM7UUFXSyxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBZGpCO1VBaUJPLFdBQVc7VUFDWCxZQUFZLEVBQUE7O0FBbEJuQjtRQXVCSyxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbmQtZGV0YWlscy1tb2RhbC9zZW5kLWRldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWF4LXdpZHRoOiA1NHJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZmF1bHQtYm9yZGVyLXJhZGl1cyk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLnJvdGF0ZS0xODAge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmltYWdlIHtcclxuICAgIG1heC13aWR0aDogMTNyZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAxM3JlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1yYWRpdXMpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgICBtYXgtaGVpZ2h0OiA0cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZS1kZXRhaWxzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWFycm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtd3JhcHBlciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUtZGV0YWlscyk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcblxyXG4gICYtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZS10ZXh0LWNvbG9yKTtcclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgbWF4LWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/send-details-modal/send-details-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/send-details-modal/send-details-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: SendDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendDetailsModalComponent", function() { return SendDetailsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var successfulStatuses = [
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SENDING,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SENT_SUCCESS,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_INITIALIZING,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_DOWNLOADING_CONSENSUS,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_MAKING_TUNNEL_A,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_MAKING_TUNNEL_B,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_CREATING_STREAM,
    _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SUCCESS
];
var failedStatuses = [_helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SEND_FAILED, _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_FAILED];
var SendDetailsModalComponent = /** @class */ (function () {
    function SendDetailsModalComponent(_backendService, _variablesService) {
        this._backendService = _backendService;
        this._variablesService = _variablesService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** BehaviorSubject with ResponseAsyncTransfer */
        this.responseData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        /** BehaviorSubject flag for stateDetails */
        this.stateDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        /** BehaviorSubject with CurrentActionState */
        this.currentActionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        /** BehaviorSubject with CurrentActionState[] */
        this.currentActionStates$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(SendDetailsModalComponent.prototype, "currentActionState", {
        get: function () {
            return this.currentActionState$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendDetailsModalComponent.prototype, "currentActionStates", {
        get: function () {
            return this.currentActionStates$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendDetailsModalComponent.prototype, "isSentSuccess", {
        /** True, if currentActionState.status = success */
        get: function () {
            return this.currentActionState && this.currentActionState.status === _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SENT_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendDetailsModalComponent.prototype, "isSentFailed", {
        /** True, if currentActionState.status = failed */
        get: function () {
            return this.currentActionState && this.currentActionState.status === _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SEND_FAILED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SendDetailsModalComponent.prototype, "isDetailsNotEmpty", {
        /** True, responseData$ or currentActionStates$ not empty */
        get: function () {
            return !!(this.responseData$.value || this.currentActionStates$.value.length);
        },
        enumerable: true,
        configurable: true
    });
    SendDetailsModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this._variablesService, wallet_id = _a.currentWallet.wallet_id, appUseTor = _a.settings.appUseTor;
        if (appUseTor) {
            /** Listening handleCurrentActionState */
            this._backendService.handleCurrentActionState$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$))
                .subscribe(function (currentActionState) {
                _this.currentActionState$.next(currentActionState);
                _this.currentActionStates$.next(_this.currentActionStates.concat([currentActionState]));
            });
        }
        else {
            var actionState = {
                status: _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_INITIALIZING,
                wallet_id: wallet_id
            };
            this.currentActionState$.next(actionState);
            this.currentActionStates$.next(this.currentActionStates.concat([actionState]));
        }
        /** Listening dispatchAsyncCallResult */
        this._backendService.dispatchAsyncCallResult$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var job_id = _a.job_id, response = _a.response;
            return _this.job_id === job_id && !!response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(function (_a) {
            var response = _a.response;
            var success = response.response_data.success;
            if (!appUseTor || !success) {
                var actionState = {
                    status: success ? _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SENT_SUCCESS : _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["StatusCurrentActionState"].STATE_SEND_FAILED,
                    wallet_id: wallet_id
                };
                _this.currentActionState$.next(actionState);
                _this.currentActionStates$.next(_this.currentActionStates.concat([actionState]));
            }
            _this.responseData$.next(response);
        });
    };
    SendDetailsModalComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
    };
    /** Show/Hide details transaction */
    SendDetailsModalComponent.prototype.toggleDetails = function () {
        var _this = this;
        this.stateDetails$.next(!this.stateDetails$.value);
        setTimeout(function () { return _this._scrollToBottomDetailsWrapper(); }, 100);
    };
    /** identification item by *ngFor */
    SendDetailsModalComponent.prototype.trackBy = function (index) {
        return index;
    };
    /** True, if status success */
    SendDetailsModalComponent.prototype.isSuccess = function (action) {
        return successfulStatuses.includes(action && action.status);
    };
    /** True, if status failed */
    SendDetailsModalComponent.prototype.isFailed = function (action) {
        return failedStatuses.includes(action && action.status);
    };
    /** Scroll elDetailsWrapper to bottom */
    SendDetailsModalComponent.prototype._scrollToBottomDetailsWrapper = function () {
        if (this.elDetailsWrapper) {
            var nativeElement = this.elDetailsWrapper.nativeElement;
            nativeElement.scrollTop = nativeElement.scrollHeight;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SendDetailsModalComponent.prototype, "job_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SendDetailsModalComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('elDetailsWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SendDetailsModalComponent.prototype, "elDetailsWrapper", void 0);
    SendDetailsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-details-modal',
            template: __webpack_require__(/*! ./send-details-modal.component.html */ "./src/app/send-details-modal/send-details-modal.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./send-details-modal.component.scss */ "./src/app/send-details-modal/send-details-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_1__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"]])
    ], SendDetailsModalComponent);
    return SendDetailsModalComponent;
}());



/***/ }),

/***/ "./src/app/send-modal/send-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n\r\n  <h3 class=\"title mb-2\">{{ 'CONFIRM.TITLE' | translate }}</h3>\r\n\r\n  <form [formGroup]=\"confirmForm\" (ngSubmit)=\"submit()\">\r\n    <div class=\"table-info mb-2\">\r\n      <div class=\"row\">\r\n        <div class=\"label\">{{ 'CONFIRM.MESSAGE.SEND' | translate }}</div>\r\n        <div class=\"text\">{{ +form.get('amount').value }} {{variablesService.defaultCurrency}}</div>\r\n      </div>\r\n\r\n      <hr class=\"separator\"/>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"label\">{{ 'CONFIRM.MESSAGE.FROM' | translate }}</div>\r\n        <div class=\"text\">{{ variablesService.currentWallet.address }}</div>\r\n      </div>\r\n\r\n      <hr class=\"separator\"/>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"label\">{{ 'CONFIRM.MESSAGE.TO' | translate }}</div>\r\n        <div class=\"text\">{{ form.get('address').value }}</div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"!!form.get('comment').value\">\r\n        <hr class=\"separator\"/>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"label\">{{ 'CONFIRM.MESSAGE.COMMENT' | translate }}</div>\r\n          <div class=\"text\">{{ form.get('comment').value }}</div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"input-block mb-2\" *ngIf=\"variablesService.appPass\">\r\n      <label for=\"password\">{{ 'LOGIN.MASTER_PASS' | translate }}</label>\r\n      <input type=\"password\"\r\n             id=\"password\"\r\n             name=\"password\"\r\n             formControlName=\"password\"\r\n             [class.required-error]=\"confirmForm.controls['password'].dirty || confirmForm.controls['password'].touched\"\r\n             [placeholder]=\"confirmForm.controls['password'].dirty || confirmForm.controls['password'].touched ? ('LOGIN.FORM_ERRORS.PASS_REQUIRED' | translate ) : ('PLACEHOLDERS.MASTER_PASS_PLACEHOLDER' | translate) \"\r\n             autofocus (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\"/>\r\n      <div class=\"error-block\">\r\n        <div *ngIf=\"confirmForm.controls['password'].errors && confirmForm.controls['password'].errors.passwordNotMatch\">\r\n          {{ 'LOGIN.FORM_ERRORS.MISMATCH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"buttons\">\r\n      <button type=\"submit\" class=\"blue-button\">{{ 'CONFIRM.BUTTON_CONFIRM' | translate }}</button>\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"onClose()\">{{ 'CONFIRM.BUTTON_CANCEL' | translate }}</button>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.25); }\n\n.modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  max-width: 54rem;\n  width: 100%;\n  background: var(--light-blue); }\n\n.title {\n  font-size: 1.8rem;\n  line-height: 1.3; }\n\n.table-info {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: var(--defaul-border);\n  border-radius: var(--default-border-radius);\n  overflow: hidden;\n  color: var(--white-text-color);\n  font-size: 1.8rem;\n  line-height: 1.3; }\n\n.table-info .separator {\n    border: none;\n    height: 2px;\n    color: var(--defaul-border-color);\n    /* old IE */\n    background-color: var(--defaul-border-color);\n    /* Modern Browsers */ }\n\n.table-info .row {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    min-height: 6rem; }\n\n.table-info .row .label, .table-info .row .text {\n      overflow: hidden;\n      padding: 2rem; }\n\n.table-info .row .label {\n      max-width: 11.6rem;\n      width: 100%;\n      color: var(--blue-text-color);\n      background: var(--light-blue-gray);\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.table-info .row .text {\n      width: 100%;\n      word-break: break-word; }\n\n.buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tb2RhbC9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNlbmQtbW9kYWxcXHNlbmQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQyxFQUFBOztBQUd2QztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQVRsQjtJQVlJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0lBQUUsV0FBQTtJQUNuQyw0Q0FBNEM7SUFBRSxvQkFBQSxFQUFxQjs7QUFmdkU7SUFtQkksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBdEJwQjtNQXlCTSxnQkFBZ0I7TUFDaEIsYUFBYSxFQUFBOztBQTFCbkI7TUE4Qk0sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCw2QkFBNkI7TUFDN0Isa0NBQWtDO01BQ2xDLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBQTs7QUFuQzdCO01BdUNNLFdBQVc7TUFDWCxzQkFBc0IsRUFBQTs7QUFLNUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VuZC1tb2RhbC9zZW5kLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1heC13aWR0aDogNTRyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxufVxyXG5cclxuLnRhYmxlLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IHZhcigtLWRlZmF1bC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRlZmF1bHQtYm9yZGVyLXJhZGl1cyk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuXHJcbiAgLnNlcGFyYXRvciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWwtYm9yZGVyLWNvbG9yKTsgLyogb2xkIElFICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWwtYm9yZGVyLWNvbG9yKTsgLyogTW9kZXJuIEJyb3dzZXJzICovXHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNnJlbTtcclxuXHJcbiAgICAubGFiZWwsIC50ZXh0IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBtYXgtd2lkdGg6IDExLjZyZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmx1ZS10ZXh0LWNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmx1ZS1ncmF5KTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/send-modal/send-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/send-modal/send-modal.component.ts ***!
  \****************************************************/
/*! exports provided: SendModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendModalComponent", function() { return SendModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendModalComponent = /** @class */ (function () {
    function SendModalComponent(variablesService) {
        this.variablesService = variablesService;
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    SendModalComponent.prototype.ngOnInit = function () {
        if (this.variablesService.appPass) {
            this.confirmForm.controls['password'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.confirmForm.updateValueAndValidity();
        }
    };
    SendModalComponent.prototype.submit = function () {
        if (this.variablesService.appPass) {
            if (this.confirmForm.controls['password'].value === '') {
                this.confirmForm.controls['password'].setErrors({ requiredPass: true });
                return;
            }
            this.confirmForm.controls['password'].setErrors({ requiredPass: false });
            if (this.variablesService.appPass === this.confirmForm.controls['password'].value) {
                this.confirmed.emit(true);
            }
            else {
                this.confirmForm.controls['password'].setErrors({ passwordNotMatch: true });
            }
        }
        else {
            this.confirmed.emit(true);
        }
    };
    SendModalComponent.prototype.onClose = function () {
        this.confirmed.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], SendModalComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SendModalComponent.prototype, "confirmed", void 0);
    SendModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-modal',
            template: __webpack_require__(/*! ./send-modal.component.html */ "./src/app/send-modal/send-modal.component.html"),
            styles: [__webpack_require__(/*! ./send-modal.component.scss */ "./src/app/send-modal/send-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]])
    ], SendModalComponent);
    return SendModalComponent;
}());



/***/ }),

/***/ "./src/app/send/send.component.html":
/*!******************************************!*\
  !*** ./src/app/send/send.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!isLoading\"\r\n      class=\"form-send\"\r\n      [formGroup]=\"sendForm\"\r\n      (ngSubmit)=\"showDialog()\">\r\n\r\n    <div class=\"input-block input-block-alias\">\r\n        <label for=\"send-address\">{{ 'SEND.ADDRESS' | translate }}</label>\r\n        <div class=\"adress-input-row\">\r\n            <input type=\"text\"\r\n                   id=\"send-address\"\r\n                   formControlName=\"address\"\r\n                   [class.required-error]=\"sendForm.controls['address'].dirty || sendForm.controls['address'].touched\"\r\n                   [placeholder]=\"sendForm.controls['address'].dirty || sendForm.controls['address'].touched ? ('SEND.FORM_ERRORS.ADDRESS_REQUIRED' | translate ) : ('PLACEHOLDERS.ADRESS_PLACEHOLDER' | translate)\"\r\n                   (mousedown)=\"addressMouseDown($event)\"\r\n                   (contextmenu)=\"variablesService.onContextMenu($event)\"\r\n                   (input)=\"addressToLowerCase()\">\r\n            <span\r\n                *ngIf=\"currentAliasAdress\"\r\n                class=\"curent-alias-adress\"\r\n                [class.padding-bottom-01]=\"variablesService.settings.scale > 7.5\"\r\n                [style.left]=\"lenghtOfAdress + 3 + 'rem'\">{{getShorterAdress()}}</span></div>\r\n        <div class=\"alias-dropdown scrolled-content\"\r\n             *ngIf=\"isOpen\">\r\n            <div *ngFor=\"let item of localAliases\"\r\n                 (click)=\"setAlias(item.name)\">{{item.name}}</div>\r\n        </div>\r\n        <div class=\"error-block\"\r\n             *ngIf=\"sendForm.controls['address'].invalid && (sendForm.controls['address'].dirty || sendForm.controls['address'].touched)\">\r\n            <div *ngIf=\"sendForm.controls['address'].errors['address_not_valid']\">\r\n                {{ 'SEND.FORM_ERRORS.ADDRESS_NOT_VALID' | translate }}\r\n            </div>\r\n            <div *ngIf=\"sendForm.controls['address'].errors['alias_not_valid']\">\r\n                {{ 'SEND.FORM_ERRORS.ALIAS_NOT_VALID' | translate }}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"input-blocks-row\">\r\n        <div class=\"input-block\">\r\n            <label for=\"send-amount\">{{ 'SEND.AMOUNT' | translate }}</label>\r\n            <input type=\"text\"\r\n                   id=\"send-amount\"\r\n                   formControlName=\"amount\"\r\n                   [class.required-error]=\"sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched\"\r\n                   [placeholder]=\"sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched ? ('SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate ) : ('PLACEHOLDERS.AMOUNT_PLACEHOLDER' | translate)\"\r\n                   appInputValidate=\"money\"\r\n                   (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n            <div class=\"error-block\"\r\n                 *ngIf=\"sendForm.controls['amount'].invalid && !sendForm.controls['amount'].errors['required'] && (sendForm.controls['amount'].dirty || sendForm.controls['amount'].touched)\">\r\n                <div *ngIf=\"sendForm.controls['amount'].errors['zero']\">\r\n                    {{ 'SEND.FORM_ERRORS.AMOUNT_ZERO' | translate }}\r\n                </div>\r\n                <div *ngIf=\"sendForm.controls['amount'].errors['great_than_unwraped_coins']\">\r\n                    {{ 'SEND.FORM_ERRORS.GREAT_THAN_UNWRAPPED_COINS' | translate }}\r\n                </div>\r\n                <div *ngIf=\"sendForm.controls['amount'].errors['less_than_chinet_needed']\">\r\n                    {{ 'SEND.FORM_ERRORS.LESS_THAN_CHN_NEEDED' | translate }}\r\n                </div>\r\n                <div *ngIf=\"sendForm.controls['amount'].errors['wrap_info_null']\">\r\n                    {{ 'SEND.FORM_ERRORS.WRAP_INFO_NULL' | translate }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"input-block\">\r\n            <label for=\"send-comment\">{{ 'SEND.COMMENT' | translate }}</label>\r\n            <input type=\"text\"\r\n                   id=\"send-comment\"\r\n                   formControlName=\"comment\"\r\n                   placeholder=\"{{ 'PLACEHOLDERS.COMMENT_PLACEHOLDER' | translate }}\"\r\n                   [maxLength]=\"variablesService.maxCommentLength\"\r\n                   (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n            <div class=\"error-block\"\r\n                 *ngIf=\"sendForm.get('comment').value && sendForm.get('comment').value.length >= variablesService.maxCommentLength\">\r\n                {{ 'SEND.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"isWrapShown && wrapInfo && !isLoading\"\r\n         class=\"wrap\">\r\n        <div class=\"title\">\r\n            {{ 'SEND.WRAP.TITLE' | translate }}\r\n            <i class=\"icon info\"></i>\r\n        </div>\r\n        <div class=\"text-wrap\">\r\n            {{ 'SEND.WRAP.MAIN_TEXT' | translate }}\r\n        </div>\r\n        <div class=\"title\">{{ 'SEND.WRAP.ESTIMATE' | translate }}</div>\r\n        <table class=\"text-wrap\">\r\n            <tr>\r\n                <td>{{ 'SEND.WRAP.WILL_RECEIVE' | translate }}</td>\r\n                <td *ngIf=\"!sendForm.controls['amount'].errors\">{{getReceivedValue() | intToMoney}} {{ 'SEND.WRAP.wCHN' |\r\n                        translate }}</td>\r\n                <td *ngIf=\"sendForm.controls['amount'].errors\">-</td>\r\n            </tr>\r\n            <tr>\r\n                <td>{{ 'SEND.WRAP.FEE' | translate }}</td>\r\n                <td>\r\n                    {{wrapInfo?.tx_cost?.chinet_needed_for_erc20 | intToMoney: 3 }}\r\n                    {{ 'SEND.WRAP.CHN' | translate }}(${{wrapInfo?.tx_cost?.usd_needed_for_erc20}})\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n\r\n    <button type=\"button\"\r\n            class=\"send-select\"\r\n            (click)=\"toggleOptions()\">\r\n        <span>{{ 'SEND.DETAILS' | translate }}</span><i class=\"icon arrow\"\r\n                                                        [class.down]=\"!additionalOptions\"\r\n                                                        [class.up]=\"additionalOptions\"></i>\r\n    </button>\r\n\r\n    <div class=\"additional-details\"\r\n         *ngIf=\"additionalOptions\">\r\n        <div class=\"input-block\">\r\n            <label for=\"send-mixin\">{{ 'SEND.MIXIN' | translate }}</label>\r\n            <input type=\"text\"\r\n                   id=\"send-mixin\"\r\n                   formControlName=\"mixin\"\r\n                   [class.required-error]=\"sendForm.controls['mixin'].dirty || sendForm.controls['mixin'].touched\"\r\n                   [placeholder]=\"sendForm.controls['mixin'].dirty || sendForm.controls['mixin'].touched ? ('SEND.FORM_ERRORS.AMOUNT_REQUIRED' | translate ) : ('PLACEHOLDERS.AMOUNT_PLACEHOLDER' | translate)\"\r\n                   appInputValidate=\"integer\"\r\n                   (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n        </div>\r\n\r\n        <div class=\"input-block\">\r\n            <label for=\"send-fee\">{{ 'SEND.FEE' | translate }}</label>\r\n            <input type=\"text\"\r\n                   id=\"send-fee\"\r\n                   formControlName=\"fee\"\r\n                   [class.required-error]=\"sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched\"\r\n                   [placeholder]=\"sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched ? ('SEND.FORM_ERRORS.FEE_REQUIRED' | translate ) : ('PLACEHOLDERS.FEE_PLACEHOLDER' | translate)\"\r\n                   appInputValidate=\"money\"\r\n                   (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n            <div class=\"error-block\"\r\n                 *ngIf=\"sendForm.controls['fee'].invalid && !sendForm.controls['fee'].errors['required'] && (sendForm.controls['fee'].dirty || sendForm.controls['fee'].touched)\">\r\n                <div *ngIf=\"sendForm.controls['fee'].errors['less_min']\">\r\n                    {{ 'SEND.FORM_ERRORS.FEE_MINIMUM' | translate : { fee: variablesService.default_fee } }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"checkbox-block\"\r\n             [ngClass]=\"{'disabled-checkbox-block': hideWalletAddress}\">\r\n            <input type=\"checkbox\"\r\n                   id=\"send-hide\"\r\n                   class=\"style-checkbox\"\r\n                   formControlName=\"hide\"\r\n                   [checked]=\"hideWalletAddress || sendForm.controls['hide'].value\">\r\n            <label for=\"send-hide\">{{ 'SEND.HIDE' | translate }}</label>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <button type=\"submit\"\r\n            class=\"blue-button\"\r\n            [disabled]=\"!sendForm.valid || !variablesService.currentWallet.loaded\">{{\r\n        'SEND.BUTTON' | translate }}</button>\r\n</form>\r\n\r\n<app-send-modal *ngIf=\"isModalDialogVisible\" [form]=\"sendForm\" (confirmed)=\"confirmed($event)\"></app-send-modal>\r\n\r\n<app-send-details-modal [job_id]=\"job_id\" *ngIf=\"isModalDetailsDialogVisible\" (close)=\"handeCloseDetailsModal()\"></app-send-details-modal>\r\n"

/***/ }),

/***/ "./src/app/send/send.component.scss":
/*!******************************************!*\
  !*** ./src/app/send/send.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.form-send .input-block-alias .adress-input-row {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-end; }\n\n.form-send .input-block-alias .adress-input-row .curent-alias-adress {\n    position: absolute; }\n\n.form-send .input-block-alias .adress-input-row .curent-alias-adress.padding-bottom-01 {\n      padding-bottom: 0.1rem; }\n\n.form-send .input-block-alias input {\n  text-overflow: ellipsis; }\n\n.form-send .input-blocks-row {\n  display: flex; }\n\n.form-send .input-blocks-row > div {\n    flex-basis: 50%; }\n\n.form-send .input-blocks-row > div:first-child {\n      margin-right: 1.5rem; }\n\n.form-send .input-blocks-row > div:last-child {\n      margin-left: 1.5rem; }\n\n.form-send .send-select {\n  display: flex;\n  align-items: center;\n  background: transparent;\n  border: none;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  margin: 1.5rem 0 0;\n  padding: 0;\n  width: 100%;\n  max-width: 15rem;\n  height: 1.3rem; }\n\n.form-send .send-select .arrow {\n    margin-left: 1rem;\n    width: 0.8rem;\n    height: 0.8rem; }\n\n.form-send .send-select .arrow.down {\n      background: center/contain no-repeat url('arrow-down.svg'); }\n\n.form-send .send-select .arrow.up {\n      background: center/contain no-repeat url('arrow-up.svg'); }\n\n.form-send .additional-details {\n  display: flex;\n  margin-top: 1.5rem;\n  padding: 0.5rem 0 2rem; }\n\n.form-send .additional-details > div {\n    flex-basis: 25%; }\n\n.form-send .additional-details > div:first-child {\n      padding-left: 1.5rem;\n      padding-right: 1rem; }\n\n.form-send .additional-details > div:last-child {\n      padding-left: 1rem;\n      padding-right: 1.5rem; }\n\n.form-send .additional-details .checkbox-block {\n    flex-basis: 50%; }\n\n.form-send .additional-details .checkbox-block > label {\n      top: 3.5rem; }\n\n.form-send .additional-details .checkbox-block.disabled-checkbox-block label {\n      cursor: url('not-allowed.svg'), not-allowed; }\n\n.form-send .additional-details .checkbox-block.disabled-checkbox-block label:before {\n        background-color: #556576;\n        border: 0.1rem solid #556576; }\n\n.form-send button {\n  margin: 2.4rem 0;\n  width: 100%;\n  max-width: 15rem; }\n\n.form-send .wrap {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  padding: 2rem;\n  border: 0.1rem solid #2a3543; }\n\n.form-send .wrap .title {\n    font-size: 100%;\n    margin-bottom: 1.5rem;\n    color: #4db1ff; }\n\n.form-send .wrap .title .icon {\n      width: 2rem;\n      height: 2rem;\n      float: right; }\n\n.form-send .wrap .text-wrap {\n    margin: 1.5rem;\n    font-size: 1.5rem; }\n\n.form-send .wrap table tr {\n    background-color: transparent; }\n\n.form-send .wrap table tr td:first-child {\n      width: 22.5rem;\n      padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNlbmRcXHNlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFHTSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFOM0I7SUFRUSxrQkFBa0IsRUFBQTs7QUFSMUI7TUFVVSxzQkFBc0IsRUFBQTs7QUFWaEM7RUFlTSx1QkFBdUIsRUFBQTs7QUFmN0I7RUFtQkksYUFBYSxFQUFBOztBQW5CakI7SUFxQk0sZUFBZSxFQUFBOztBQXJCckI7TUF1QlEsb0JBQW9CLEVBQUE7O0FBdkI1QjtNQTBCUSxtQkFBbUIsRUFBQTs7QUExQjNCO0VBK0JJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBekNsQjtJQTJDTSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGNBQWMsRUFBQTs7QUE3Q3BCO01BK0NRLDBEQUE0RSxFQUFBOztBQS9DcEY7TUFrRFEsd0RBQTBFLEVBQUE7O0FBbERsRjtFQXVESSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQXpEMUI7SUEyRE0sZUFBZSxFQUFBOztBQTNEckI7TUE2RFEsb0JBQW9CO01BQ3BCLG1CQUFtQixFQUFBOztBQTlEM0I7TUFpRVEsa0JBQWtCO01BQ2xCLHFCQUFxQixFQUFBOztBQWxFN0I7SUFzRU0sZUFBZSxFQUFBOztBQXRFckI7TUF3RVEsV0FBVyxFQUFBOztBQXhFbkI7TUE0RVUsMkNBQTRELEVBQUE7O0FBNUV0RTtRQThFWSx5QkFBeUI7UUFDekIsNEJBQTRCLEVBQUE7O0FBL0V4QztFQXNGSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQXhGcEI7RUEyRkksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNEJBQTRCLEVBQUE7O0FBOUZoQztJQWdHTSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWMsRUFBQTs7QUFsR3BCO01Bb0dRLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWSxFQUFBOztBQXRHcEI7SUEwR00sY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQTNHdkI7SUE4R00sNkJBQTZCLEVBQUE7O0FBOUduQztNQWdIUSxjQUFjO01BQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VuZC9zZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3JtLXNlbmQge1xyXG4gIC5pbnB1dC1ibG9jay1hbGlhcyB7XHJcbiAgICAuYWRyZXNzLWlucHV0LXJvdyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgLmN1cmVudC1hbGlhcy1hZHJlc3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAmLnBhZGRpbmctYm90dG9tLTAxIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5wdXQtYmxvY2tzLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgPiBkaXYge1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2VuZC1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogMS41cmVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgIC5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICB3aWR0aDogMC44cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuOHJlbTtcclxuICAgICAgJi5kb3duIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwofnNyYy9hc3NldHMvaWNvbnMvYXJyb3ctZG93bi5zdmcpO1xyXG4gICAgICB9XHJcbiAgICAgICYudXAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCh+c3JjL2Fzc2V0cy9pY29ucy9hcnJvdy11cC5zdmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZGRpdGlvbmFsLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDJyZW07XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGVja2JveC1ibG9jayB7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgPiBsYWJlbCB7XHJcbiAgICAgICAgdG9wOiAzLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgJi5kaXNhYmxlZC1jaGVja2JveC1ibG9jayB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2NTc2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjNTU2NTc2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAyLjRyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICB9XHJcbiAgLndyYXAge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzJhMzU0MztcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBjb2xvcjogIzRkYjFmZjtcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LXdyYXAge1xyXG4gICAgICBtYXJnaW46IDEuNXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICB0YWJsZSB0ciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDIyLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/send/send.component.ts":
/*!****************************************!*\
  !*** ./src/app/send/send.component.ts ***!
  \****************************************/
/*! exports provided: SendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComponent", function() { return SendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/pipes/money-to-int.pipe */ "./src/app/_helpers/pipes/money-to-int.pipe.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SendComponent = /** @class */ (function () {
    function SendComponent(backend, variablesService, modalService, ngZone, http, moneyToInt) {
        var _this = this;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.http = http;
        this.moneyToInt = moneyToInt;
        this.isOpen = false;
        this.localAliases = [];
        this.isModalDialogVisible = false;
        this.isModalDetailsDialogVisible = false;
        this.hideWalletAddress = false;
        this.isLoading = true;
        this.isWrapShown = false;
        this.additionalOptions = false;
        this.sendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    _this.localAliases = [];
                    if (g.value) {
                        _this.currentAliasAdress = '';
                        if (g.value.indexOf('@') !== 0) {
                            _this.isOpen = false;
                            _this.backend.validateAddress(g.value, function (valid_status, data) {
                                _this.ngZone.run(function () {
                                    _this.isWrapShown = (data.error_code === 'WRAP');
                                    _this.sendForm.get('amount').setValue(_this.sendForm.get('amount').value);
                                    if (valid_status === false && !_this.isWrapShown) {
                                        g.setErrors(Object.assign({ 'address_not_valid': true }, g.errors));
                                    }
                                    else {
                                        if (g.hasError('address_not_valid')) {
                                            delete g.errors['address_not_valid'];
                                            if (Object.keys(g.errors).length === 0) {
                                                g.setErrors(null);
                                            }
                                        }
                                    }
                                });
                            });
                            return (g.hasError('address_not_valid')) ? { 'address_not_valid': true } : null;
                        }
                        else {
                            _this.isOpen = true;
                            _this.localAliases = _this.variablesService.aliases.filter(function (item) {
                                return item.name.indexOf(g.value) > -1;
                            });
                            if (!(/^@?[a-z0-9\.\-]{6,25}$/.test(g.value))) {
                                g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                            }
                            else {
                                _this.backend.getAliasByName(g.value.replace('@', ''), function (alias_status, alias_data) {
                                    _this.ngZone.run(function () {
                                        _this.currentAliasAdress = alias_data.address;
                                        _this.lenghtOfAdress = g.value.length;
                                        if (alias_status) {
                                            if (g.hasError('alias_not_valid')) {
                                                delete g.errors['alias_not_valid'];
                                                if (Object.keys(g.errors).length === 0) {
                                                    g.setErrors(null);
                                                }
                                            }
                                        }
                                        else {
                                            g.setErrors(Object.assign({ 'alias_not_valid': true }, g.errors));
                                        }
                                    });
                                });
                            }
                            return (g.hasError('alias_not_valid')) ? { 'alias_not_valid': true } : null;
                        }
                    }
                    return null;
                }]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if (!g.value) {
                        return null;
                    }
                    if (g.value === 0) {
                        return { 'zero': true };
                    }
                    var bigAmount = _this.moneyToInt.transform(g.value);
                    if (_this.isWrapShown) {
                        if (!_this.wrapInfo) {
                            return { wrap_info_null: true };
                        }
                        if (bigAmount.isGreaterThan(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](_this.wrapInfo.unwraped_coins_left))) {
                            return { great_than_unwraped_coins: true };
                        }
                        if (bigAmount.isLessThan(new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](_this.wrapInfo.tx_cost.chinet_needed_for_erc20))) {
                            return { less_than_chinet_needed: true };
                        }
                    }
                    return null;
                }]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mixin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_shared_constants__WEBPACK_IMPORTED_MODULE_6__["MIXIN"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.variablesService.default_fee, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, function (g) {
                    if ((new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](g.value)).isLessThan(_this.variablesService.default_fee)) {
                        return { 'less_min': true };
                    }
                    return null;
                }]),
            hide: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
    }
    SendComponent.prototype.onClick = function (targetElement) {
        if (targetElement.id !== 'send-address' && this.isOpen) {
            this.isOpen = false;
        }
    };
    SendComponent.prototype.getShorterAdress = function () {
        var tempArr = this.currentAliasAdress.split('');
        return this.currentAliasAdress.split('', 34).join('') + '...' + tempArr.splice((tempArr.length - 13), 13).join('');
    };
    SendComponent.prototype.addressMouseDown = function (e) {
        if (e['button'] === 0 && this.sendForm.get('address').value && this.sendForm.get('address').value.indexOf('@') === 0) {
            this.isOpen = true;
        }
    };
    SendComponent.prototype.setAlias = function (alias) {
        this.sendForm.get('address').setValue(alias);
    };
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mixin = this.variablesService.currentWallet.send_data['mixin'] || _shared_constants__WEBPACK_IMPORTED_MODULE_6__["MIXIN"];
        if (this.variablesService.currentWallet.is_auditable) {
            this.mixin = 0;
            this.sendForm.controls['mixin'].disable();
        }
        this.hideWalletAddress = this.variablesService.currentWallet.is_auditable && !this.variablesService.currentWallet.is_watch_only;
        if (this.hideWalletAddress) {
            this.sendForm.controls['hide'].disable();
        }
        this.sendForm.reset({
            address: this.variablesService.currentWallet.send_data['address'],
            amount: this.variablesService.currentWallet.send_data['amount'],
            comment: this.variablesService.currentWallet.send_data['comment'],
            mixin: this.mixin,
            fee: this.variablesService.currentWallet.send_data['fee'] || this.variablesService.default_fee,
            hide: this.variablesService.currentWallet.send_data['hide'] || false
        });
        this.getWrapInfo();
        this.dLActionSubscribe = this.variablesService.sendActionData$.subscribe(function (res) {
            if (res.action === 'send') {
                _this.actionData = res;
                setTimeout(function () {
                    _this.fillDeepLinkData();
                }, 100);
                _this.variablesService.sendActionData$.next({});
            }
        });
    };
    SendComponent.prototype.getWrapInfo = function () {
        var _this = this;
        this.http.get('https://explorer.chinet.io/get_wrap_info.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
            _this.isLoading = false;
        }))
            .subscribe(function (info) {
            _this.wrapInfo = info;
        });
    };
    SendComponent.prototype.showDialog = function () {
        this.isModalDialogVisible = true;
    };
    SendComponent.prototype.confirmed = function (confirmed) {
        this.isModalDialogVisible = false;
        if (confirmed) {
            this.onSend();
        }
    };
    SendComponent.prototype.fillDeepLinkData = function () {
        this.additionalOptions = true;
        this.sendForm.reset({
            address: this.actionData.address,
            amount: null,
            comment: this.actionData.comment || this.actionData.comments || '',
            mixin: this.actionData.mixins || this.mixin,
            fee: this.actionData.fee || this.variablesService.default_fee,
            hide: this.actionData.hide_sender === 'true' ? true : false
        });
    };
    SendComponent.prototype.addressToLowerCase = function () {
        var control = this.sendForm.get('address');
        var value = control.value;
        var condition = value.indexOf('@') === 0;
        return condition ? control.patchValue(value.toLowerCase()) : null;
    };
    SendComponent.prototype.onSend = function () {
        var _this = this;
        if (this.sendForm.valid) {
            if (this.sendForm.get('address').value.indexOf('@') !== 0) {
                this.backend.validateAddress(this.sendForm.get('address').value, function (valid_status, data) {
                    if (valid_status === false && !(data.error_code === 'WRAP')) {
                        _this.ngZone.run(function () {
                            _this.sendForm.get('address').setErrors({ 'address_not_valid': true });
                        });
                    }
                    else {
                        _this.backend.sendMoney(_this.variablesService.currentWallet.wallet_id, _this.sendForm.get('address').value, _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (job_id) {
                            _this.ngZone.run(function () {
                                _this.job_id = job_id;
                                _this.isModalDetailsDialogVisible = true;
                                _this.variablesService.currentWallet.send_data = {
                                    address: null,
                                    amount: null,
                                    comment: null,
                                    mixin: null,
                                    fee: null,
                                    hide: null
                                };
                                _this.sendForm.reset({
                                    address: null,
                                    amount: null,
                                    comment: null,
                                    mixin: _this.mixin,
                                    fee: _this.variablesService.default_fee,
                                    hide: false
                                });
                                _this.sendForm.markAsUntouched();
                            });
                        });
                    }
                });
            }
            else {
                this.backend.getAliasByName(this.sendForm.get('address').value.replace('@', ''), function (alias_status, alias_data) {
                    _this.ngZone.run(function () {
                        if (alias_status === false) {
                            _this.ngZone.run(function () {
                                _this.sendForm.get('address').setErrors({ 'alias_not_valid': true });
                            });
                        }
                        else {
                            _this.backend.sendMoney(_this.variablesService.currentWallet.wallet_id, alias_data.address, // this.sendForm.get('address').value,
                            _this.sendForm.get('amount').value, _this.sendForm.get('fee').value, _this.sendForm.get('mixin').value, _this.sendForm.get('comment').value, _this.sendForm.get('hide').value, function (job_id) {
                                _this.ngZone.run(function () {
                                    _this.job_id = job_id;
                                    _this.isModalDetailsDialogVisible = true;
                                    _this.variablesService.currentWallet.send_data = {
                                        address: null,
                                        amount: null,
                                        comment: null,
                                        mixin: null,
                                        fee: null,
                                        hide: null
                                    };
                                    _this.sendForm.reset({
                                        address: null,
                                        amount: null,
                                        comment: null,
                                        mixin: _this.mixin,
                                        fee: _this.variablesService.default_fee,
                                        hide: false
                                    });
                                    _this.sendForm.markAsUntouched();
                                });
                            });
                        }
                    });
                });
            }
        }
    };
    SendComponent.prototype.toggleOptions = function () {
        this.additionalOptions = !this.additionalOptions;
    };
    SendComponent.prototype.ngOnDestroy = function () {
        this.dLActionSubscribe.unsubscribe();
        this.variablesService.currentWallet.send_data = {
            address: this.sendForm.get('address').value,
            amount: this.sendForm.get('amount').value,
            comment: this.sendForm.get('comment').value,
            mixin: this.sendForm.get('mixin').value,
            fee: this.sendForm.get('fee').value,
            hide: this.sendForm.get('hide').value
        };
        this.actionData = {};
    };
    SendComponent.prototype.getReceivedValue = function () {
        var amount = this.moneyToInt.transform(this.sendForm.value.amount);
        var needed = new bignumber_js__WEBPACK_IMPORTED_MODULE_5__["BigNumber"](this.wrapInfo.tx_cost.chinet_needed_for_erc20);
        if (amount && needed) {
            return amount.minus(needed);
        }
        return 0;
    };
    SendComponent.prototype.handeCloseDetailsModal = function () {
        this.isModalDetailsDialogVisible = false;
        this.job_id = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SendComponent.prototype, "onClick", null);
    SendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send',
            template: __webpack_require__(/*! ./send.component.html */ "./src/app/send/send.component.html"),
            styles: [__webpack_require__(/*! ./send.component.scss */ "./src/app/send/send.component.scss")]
        }),
        __metadata("design:paramtypes", [_helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _helpers_pipes_money_to_int_pipe__WEBPACK_IMPORTED_MODULE_8__["MoneyToIntPipe"]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content scrolled-content\">\r\n\r\n  <div>\r\n    <div class=\"head\">\r\n      <h3 class=\"settings-title\">{{ 'SETTINGS.TITLE' | translate }}</h3>\r\n      <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n        <i class=\"icon back\"></i>\r\n        <span>{{ 'COMMON.BACK' | translate }}</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.LANGUAGE.TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\" [items]=\"languagesOptions\" bindValue=\"name\" bindLabel=\"language\"\r\n        [(ngModel)]=\"variablesService.settings.language\" [clearable]=\"false\" [searchable]=\"false\"\r\n        (change)=\"onLanguageChange()\">\r\n        <ng-template ng-label-tmp let-item=\"item\">\r\n          {{item.language | translate}}\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n          {{item.language | translate}}\r\n        </ng-template>\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOCK.TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\" [items]=\"appLockOptions\" bindValue=\"id\" bindLabel=\"name\"\r\n        [(ngModel)]=\"variablesService.settings.appLockTime\" [clearable]=\"false\" [searchable]=\"false\"\r\n        (change)=\"onLockChange()\">\r\n        <ng-template ng-label-tmp let-item=\"item\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.SCALE.TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\" [items]=\"appScaleOptions\" bindValue=\"id\" bindLabel=\"name\"\r\n        [(ngModel)]=\"variablesService.settings.scale\" [clearable]=\"false\" [searchable]=\"false\" (change)=\"setScale()\">\r\n        <ng-template ng-label-tmp let-item=\"item\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n        <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n          {{item.name | translate}}\r\n        </ng-template>\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.APP_LOG_TITLE' | translate }}</label>\r\n      <ng-select class=\"custom-select\" [items]=\"appLogOptions\" bindValue=\"id\" bindLabel=\"id\"\r\n        [(ngModel)]=\"variablesService.settings.appLog\" [clearable]=\"false\" [searchable]=\"false\"\r\n        (change)=\"onLogChange()\">\r\n      </ng-select>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.NOTIFICATIONS' | translate }}</label>\r\n      <div class=\"notifications-switch\">\r\n        <div class=\"switch\" (click)=\"toggleNotifications()\" [ngClass]=\"currentNotificationsState ? 'off' : 'on'\">\r\n          <span class=\"circle\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"lock-selection\">\r\n      <label class=\"lock-selection-title\">{{ 'SETTINGS.USE_TOR_TO_RELAY_TRANSACTIONS' | translate }}</label>\r\n      <div class=\"notifications-switch\">\r\n        <div class=\"switch\" (click)=\"toggleUseTor()\" [ngClass]=\"appUseTor ? 'on' : 'off'\">\r\n          <span class=\"circle\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"master-password\" [formGroup]=\"changeForm\" (ngSubmit)=\"onSubmitChangePass()\">\r\n\r\n      <span class=\"master-password-title\">{{ 'SETTINGS.MASTER_PASSWORD.TITLE' | translate }}</span>\r\n\r\n      <div class=\"input-block\" *ngIf=\"variablesService.appPass\">\r\n        <label for=\"old-password\">{{ 'SETTINGS.MASTER_PASSWORD.OLD' | translate }}</label>\r\n        <input type=\"password\" id=\"old-password\" formControlName=\"password\"\r\n          placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_OLD' | translate }}\"\r\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\r\n        <div class=\"error-block\"\r\n          *ngIf=\"changeForm.invalid && changeForm.controls['password'].valid && (changeForm.controls['password'].dirty || changeForm.controls['password'].touched) && changeForm.errors && changeForm.errors.pass_mismatch && changeForm.get('password').value.length > 0\">\r\n          {{ 'SETTINGS.FORM_ERRORS.PASS_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"new-password\">{{ 'SETTINGS.MASTER_PASSWORD.NEW' | translate }}</label>\r\n        <input type=\"password\" id=\"new-password\" formControlName=\"new_password\"\r\n          placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_NEW' | translate }}\"\r\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\r\n        <div class=\"error-block\"\r\n          *ngIf=\"changeForm.controls['new_password'].dirty && changeForm.controls['new_password'].errors\">\r\n          <div *ngIf=\"changeForm.controls['new_password'].errors.pattern\">\r\n            {{ 'ERRORS.WRONG_PASSWORD' | translate }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-block\">\r\n        <label for=\"confirm-password\">{{ 'SETTINGS.MASTER_PASSWORD.CONFIRM' | translate }}</label>\r\n        <input type=\"password\" id=\"confirm-password\" formControlName=\"new_confirmation\"\r\n          placeholder=\"{{ 'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate }}\"\r\n          (contextmenu)=\"variablesService.onContextMenuPasteSelect($event)\" />\r\n        <div class=\"error-block\"\r\n          *ngIf=\"changeForm.invalid && (changeForm.controls['new_confirmation'].dirty || changeForm.controls['new_confirmation'].touched) && changeForm.errors && changeForm.errors.confirm_mismatch && changeForm.get('new_confirmation').value.length > 0\">\r\n          {{ 'SETTINGS.FORM_ERRORS.CONFIRM_NOT_MATCH' | translate }}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"submit-button-container\">\r\n        <button type=\"submit\" class=\"blue-button\" [disabled]=\"!changeForm.valid\">{{ 'SETTINGS.MASTER_PASSWORD.BUTTON'\r\n          |\r\n          translate }}</button>\r\n        <span class=\"saved-message\" [class.active]=\"ifSaved\">{{ 'SETTINGS.SETTINGS_SAVED' | translate }}</span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div>\r\n    <!-- <div class=\"last-build\">{{ 'SETTINGS.LAST_BUILD' | translate : {value: currentBuild} }}</div> -->\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  position: relative;\n  justify-content: space-between; }\n\n.settings-title {\n  font-size: 2rem;\n  line-height: 2.4rem; }\n\n.lock-selection {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 2.2rem 0;\n  width: 25rem; }\n\n.lock-selection .lock-selection-title {\n    display: flex;\n    font-size: 1.6rem;\n    line-height: 1.9rem;\n    margin-bottom: 1.2rem;\n    color: #1f8feb; }\n\n.lock-selection .switch {\n    border-radius: 1.1rem;\n    cursor: pointer;\n    padding: 0.2rem;\n    width: 3.6rem;\n    height: 2.2rem;\n    transition: all 0.3s ease;\n    position: relative; }\n\n.lock-selection .switch.on .circle {\n      margin-left: 1.4rem; }\n\n.lock-selection .switch.off {\n      background-color: rgba(255, 255, 255, 0.2); }\n\n.lock-selection .switch .circle {\n      display: block;\n      transition: all 0.3s ease;\n      position: relative;\n      border-radius: 50%;\n      width: 1.8rem;\n      height: 1.8rem; }\n\n.master-password {\n  width: 50%;\n  margin-top: 4rem; }\n\n.master-password .master-password-title {\n    display: flex;\n    font-size: 2rem;\n    line-height: 2.4rem;\n    margin-bottom: 3.6rem; }\n\n.master-password .submit-button-container {\n    display: flex;\n    align-items: center; }\n\n.master-password .submit-button-container .saved-message {\n      transition: all 0.5s ease;\n      height: 0;\n      opacity: 0;\n      margin-left: 2rem;\n      font-size: 2rem;\n      line-height: 2.4rem;\n      color: #16d1d6; }\n\n.master-password .submit-button-container .saved-message.active {\n        transition: all 0.5s ease;\n        height: 2.4rem;\n        opacity: 1; }\n\n.master-password .submit-button-container button {\n      margin-top: 1.4rem;\n      width: 25.6rem; }\n\n.last-build {\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBTGQ7SUFRSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYyxFQUFBOztBQVpsQjtJQWVJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBOztBQXJCdEI7TUF3QlEsbUJBQW1CLEVBQUE7O0FBeEIzQjtNQTRCTSwwQ0FBMEMsRUFBQTs7QUE1QmhEO01BK0JNLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsY0FBYyxFQUFBOztBQUtwQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFJSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUIsRUFBQTs7QUFQekI7SUFXSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBWnZCO01BY00seUJBQXlCO01BQ3pCLFNBQVM7TUFDVCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsY0FBYyxFQUFBOztBQXBCcEI7UUFzQlEseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBeEJsQjtNQTRCTSxrQkFBa0I7TUFDbEIsY0FBYyxFQUFBOztBQUtwQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZXR0aW5ncy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbn1cclxuXHJcbi5sb2NrLXNlbGVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMi4ycmVtIDA7XHJcbiAgd2lkdGg6IDI1cmVtO1xyXG5cclxuICAubG9jay1zZWxlY3Rpb24tdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgIGNvbG9yOiAjMWY4ZmViO1xyXG4gIH1cclxuICAuc3dpdGNoIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIHdpZHRoOiAzLjZyZW07XHJcbiAgICBoZWlnaHQ6IDIuMnJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmLm9uIHtcclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5vZmYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB9XHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXN0ZXItcGFzc3dvcmQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAubWFzdGVyLXBhc3N3b3JkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMy42cmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnNhdmVkLW1lc3NhZ2Uge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgIGNvbG9yOiAjMTZkMWQ2O1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgICAgIHdpZHRoOiAyNS42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhc3QtYnVpbGQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/services/utils.service */ "./src/app/_helpers/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(renderer, variablesService, backend, location, translate, ngZone, utilsService) {
        var _this = this;
        this.renderer = renderer;
        this.variablesService = variablesService;
        this.backend = backend;
        this.location = location;
        this.translate = translate;
        this.ngZone = ngZone;
        this.utilsService = utilsService;
        this.ifSaved = false;
        this.languagesOptions = [
            {
                name: 'en',
                language: 'SETTINGS.LANGUAGE.EN'
            },
            {
                name: 'fr',
                language: 'SETTINGS.LANGUAGE.FR'
            },
            {
                name: 'de',
                language: 'SETTINGS.LANGUAGE.DE'
            },
            {
                name: 'id',
                language: 'SETTINGS.LANGUAGE.ID'
            },
            {
                name: 'it',
                language: 'SETTINGS.LANGUAGE.IT'
            },
            {
                name: 'pt',
                language: 'SETTINGS.LANGUAGE.PT'
            }
        ];
        this.appLockOptions = [
            {
                id: 5,
                name: 'SETTINGS.APP_LOCK.TIME1'
            },
            {
                id: 15,
                name: 'SETTINGS.APP_LOCK.TIME2'
            },
            {
                id: 60,
                name: 'SETTINGS.APP_LOCK.TIME3'
            },
            {
                id: 0,
                name: 'SETTINGS.APP_LOCK.TIME4'
            }
        ];
        this.appScaleOptions = [
            {
                id: 6,
                name: 'SETTINGS.SCALE.75'
            },
            {
                id: 8,
                name: 'SETTINGS.SCALE.100'
            },
            {
                id: 10,
                name: 'SETTINGS.SCALE.125'
            },
            {
                id: 12,
                name: 'SETTINGS.SCALE.150'
            }
        ];
        this.appLogOptions = [
            {
                id: -1
            },
            {
                id: 0
            },
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ];
        this.currentBuild = '';
        this.scale = this.variablesService.settings.scale;
        this.appUseTor = this.variablesService.settings.appUseTor;
        this.changeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.variablesService.pattern)),
            new_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        }, [function (g) {
                return g.get('new_password').value === g.get('new_confirmation').value ? null : { 'confirm_mismatch': true };
            }, function (g) {
                if (_this.variablesService.appPass) {
                    return g.get('password').value === _this.variablesService.appPass ? null : { 'pass_mismatch': true };
                }
                return null;
            }]);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getVersion(function (version, type) {
            _this.ngZone.run(function () {
                _this.currentBuild = version;
                _this.variablesService.testnet = false;
                if (type === 'testnet') {
                    _this.currentBuild += ' TESTNET';
                    _this.variablesService.testnet = true;
                }
                _this.variablesService.networkType = type;
            });
        });
        this.backend.getIsDisabledNotifications(function (res) {
            _this.currentNotificationsState = res;
        });
    };
    SettingsComponent.prototype.setScale = function () {
        this.scale = this.variablesService.settings.scale;
        var width = this.utilsService.getMinWidthByScale(this.scale);
        var app = document.documentElement.querySelector('app-root');
        this.renderer.setStyle(app, 'min-width', width + 'px');
        this.renderer.setStyle(document.documentElement, 'font-size', this.scale + 'px');
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onSubmitChangePass = function () {
        var _this = this;
        if (this.changeForm.valid) {
            this.onSave();
            this.variablesService.appPass = this.changeForm.get('new_password').value;
            if (this.variablesService.appPass) {
                this.backend.setMasterPassword({ pass: this.variablesService.appPass }, function (status, data) {
                    if (status) {
                        _this.backend.storeSecureAppData({ pass: _this.variablesService.appPass });
                        _this.variablesService.appLogin = true;
                        _this.variablesService.dataIsLoaded = true;
                        if (_this.variablesService.settings.appLockTime) {
                            _this.variablesService.startCountdown();
                        }
                    }
                    else {
                        console.log(data['error_code']);
                    }
                });
            }
            else {
                // this.backend.dropSecureAppData((status, data) => {
                // });
            }
            this.changeForm.reset();
        }
    };
    SettingsComponent.prototype.toggleNotifications = function () {
        if (!this.currentNotificationsState) {
            this.backend.setIsDisabledNotifications('true');
            this.currentNotificationsState = true;
        }
        else {
            this.backend.setIsDisabledNotifications('false');
            this.currentNotificationsState = false;
        }
    };
    SettingsComponent.prototype.toggleUseTor = function () {
        this.appUseTor = !this.appUseTor;
        this.variablesService.settings.appUseTor = this.appUseTor;
        this.backend.setEnableTor(this.appUseTor);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onSave = function () {
        var _this = this;
        this.ifSaved = true;
        setTimeout(function () {
            _this.ifSaved = false;
        }, 3000);
    };
    SettingsComponent.prototype.onLockChange = function () {
        if (this.variablesService.appLogin && this.variablesService.settings.appLockTime) {
            this.variablesService.restartCountdown();
        }
    };
    SettingsComponent.prototype.onLogChange = function () {
        this.backend.setLogLevel(this.variablesService.settings.appLog);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.onLanguageChange = function () {
        this.translate.use(this.variablesService.settings.language);
        this.backend.storeAppData();
    };
    SettingsComponent.prototype.back = function () {
        this.location.back();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            providers: [_helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]],
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-header\">\r\n  <img src=\"assets/icons/logo-all.png\" alt=\"\">\r\n</div>\r\n<div class=\"sidebar-accounts\">\r\n  <div class=\"sidebar-accounts-list scrolled-content\" cdkDropList #scrollContainer cdkDropListLockAxis=\"y\"\r\n       (cdkDropListDropped)=\"drop($event)\">\r\n    <ng-container *ngFor=\"let wallet of variablesService.wallets\">\r\n      <div class=\"sidebar-account\" [class.active]=\"wallet?.wallet_id === variablesService?.currentWallet?.wallet_id\"\r\n           (click)=\"selectWallet(wallet.wallet_id)\" [class.auditable]=\"wallet.is_auditable && !wallet.is_watch_only\"\r\n           [class.watch-only]=\"wallet.is_watch_only\" cdkDrag vsDragScroll [vsDragScrollContainer]=\"scrollContainer\"\r\n           [cdkDragData]=\"wallet\">\r\n        <button class=\"close-wallet-button\" type=\"button\" (click)=\"showDialog(wallet.wallet_id)\"\r\n                tooltip=\"{{ 'WALLET.TOOLTIPS.CLOSE' | translate }}\" placement=\"top-left\"\r\n                tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\r\n          <i class=\"icon close-wallet\"></i>\r\n        </button>\r\n\r\n        <div class=\"sidebar-account-row account-alias\">\r\n          <div class=\"name\">\r\n            <div class=\"indicator\" *ngIf=\"wallet.new_contracts\">{{wallet.new_contracts}}</div>\r\n            <ng-container *ngIf=\"!wallet.alias['name']\">\r\n              <span class=\"title\" tooltip=\"{{ wallet.name }}\" placement=\"top-left\"\r\n                    tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\"\r\n                    [showWhenNoOverflow]=\"false\">{{wallet.name}}</span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"wallet.alias['name']\">\r\n              <span tooltip=\"{{ wallet.name }}\" placement=\"top-left\" tooltipClass=\"table-tooltip account-tooltip\"\r\n                    [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{wallet.alias['name']}}</span>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"sidebar-account-row account-title-balance\">\r\n          <span class=\"balance\">{{wallet.balance | intToMoney : '3' }}</span>\r\n          <span class=\"balance\"> {{variablesService.defaultCurrency}}</span>\r\n        </div>\r\n\r\n        <ng-container *appDisablePriceFetch>\r\n          <div class=\"sidebar-account-row account-price\">\r\n          <span class=\"price\">${{wallet.getMoneyEquivalent(variablesService.moneyEquivalent) |\r\n            intToMoney | number :\r\n            '1.2-2'}}</span>\r\n          <span class=\"price-percent\"\r\n                [class.red-text]=\"variablesService.moneyEquivalentPercent < 0\">\r\n    {{ variablesService.moneyEquivalentPercent | number : '1.1-2' }}%\r\n  </span>\r\n        </div>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n          *ngIf=\"(!wallet.is_auditable && !wallet.is_watch_only) || (wallet.is_auditable && !wallet.is_watch_only)\">\r\n          <div class=\"sidebar-account-row account-staking\"\r\n               *ngIf=\"!(!wallet.loaded && variablesService.daemon_state === 2)\">\r\n            <span class=\"text\">{{ 'SIDEBAR.ACCOUNT.STAKING' | translate }}</span>\r\n            <app-staking-switch [wallet_id]=\"wallet.wallet_id\" [(staking)]=\"wallet.staking\"></app-staking-switch>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div class=\"sidebar-account-row account-synchronization\"\r\n             *ngIf=\"!wallet.loaded && variablesService.daemon_state === 2\">\r\n          <div class=\"progress-bar\">\r\n            <div class=\"fill\" [style.width]=\"wallet.progress + '%'\"></div>\r\n          </div>\r\n          <div class=\"progress-percent\">{{ wallet.progress }}%</div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"sidebar-settings\">\r\n  <div class=\"wrap-button\">\r\n    <button class=\"add-wallet-button\" (click)=\"goMainPage()\">\r\n      <i class=\"icon add-wallet\"></i>\r\n      <span>{{ 'SIDEBAR.ADD_NEW' | translate\r\n        }}</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"wrap-button\" routerLinkActive=\"active\" *ngIf=\"variablesService.appPass === ''; else contactsShow\"\r\n       tooltip=\"{{ 'SIDEBAR.CONTACTS_TOOLTIP' | translate }}\" placement=\"top\"\r\n       tooltipClass=\"table-tooltip account-tooltip\"\r\n       [delay]=\"500\" [timeDelay]=\"500\">\r\n    <button (click)=\"contactsRoute()\"\r\n            [class.disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\"\r\n            [disabled]=\"variablesService.daemon_state !== 2 || variablesService.appPass === ''\">\r\n      <i class=\"icon contacts\"></i>\r\n      <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <ng-template #contactsShow>\r\n    <div class=\"wrap-button\" routerLinkActive=\"active\">\r\n      <button (click)=\"contactsRoute()\" [class.disabled]=\"variablesService.daemon_state !== 2\"\r\n              [disabled]=\"variablesService.daemon_state !== 2\">\r\n        <i class=\"icon contacts\"></i>\r\n        <span>{{ 'SIDEBAR.CONTACTS' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"wrap-button\" routerLinkActive=\"active\">\r\n    <button [routerLink]=\"['/settings']\">\r\n      <i class=\"icon settings\"></i>\r\n      <span> {{ 'SIDEBAR.SETTINGS' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"wrap-button\" *ngIf=\"variablesService.appPass === ''; else masterPass\"\r\n       tooltip=\"{{ 'SIDEBAR.LOG_OUT_TOOLTIP' | translate }}\" placement=\"bottom\"\r\n       tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\r\n    <button (click)=\"logOut()\" [class.disabled]=\"variablesService.appPass === ''\"\r\n            [disabled]=\"variablesService.appPass === ''\">\r\n      <i class=\"icon logout\"></i>\r\n      <span> {{ 'SIDEBAR.LOG_OUT' | translate }}</span>\r\n    </button>\r\n  </div>\r\n  <ng-template #masterPass>\r\n    <div class=\"wrap-button\">\r\n      <button (click)=\"logOut()\">\r\n        <i class=\"icon logout\"></i>\r\n        <span> {{ 'SIDEBAR.LOG_OUT' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<div class=\"synchronization-status\"\r\n     [ngStyle]=\"{'align-items': variablesService.daemon_state === 1 || variablesService.daemon_state === 6 ? 'flex-start' : 'center'}\">\r\n  <div class=\"status-container\">\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 0\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.OFFLINE' | translate }}\r\n    </span>\r\n    <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.SYNCING' | translate }} {{ variablesService.height_app }}{{\r\n      'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.height_max }}\r\n    </span>\r\n    <span class=\"online\" *ngIf=\"variablesService.daemon_state === 2\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ONLINE' | translate }}\r\n    </span>\r\n    <span class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.LOADING' | translate }}\r\n    </span>\r\n    <span class=\"offline\" *ngIf=\"variablesService.daemon_state === 4\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.ERROR' | translate }}\r\n    </span>\r\n    <span class=\"online\" *ngIf=\"variablesService.daemon_state === 5\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.COMPLETE' | translate }}\r\n    </span>\r\n    <span class=\"syncing\" *ngIf=\"variablesService.daemon_state === 6\">\r\n      {{ 'SIDEBAR.SYNCHRONIZATION.DOWNLOADING' | translate }} {{ variablesService.downloaded }}{{\r\n      'SIDEBAR.SYNCHRONIZATION.SLASH' | translate }}{{ variablesService.total }}{{ 'SIDEBAR.SYNCHRONIZATION.MB' |\r\n      translate }}\r\n    </span>\r\n    <div class=\"progress-bar-container\"\r\n         *ngIf=\"variablesService.daemon_state === 1 || variablesService.daemon_state === 3\">\r\n      <div class=\"syncing\" *ngIf=\"variablesService.daemon_state === 1\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"fill\" [style.width]=\"variablesService.sync.progress_value + '%'\"></div>\r\n        </div>\r\n        <div class=\"progress-percent\">{{ variablesService.sync.progress_value_text }}%</div>\r\n      </div>\r\n      <div class=\"loading\" *ngIf=\"variablesService.daemon_state === 3\"></div>\r\n    </div>\r\n\r\n    <div class=\"progress-bar-container\" *ngIf=\"variablesService.daemon_state === 6\">\r\n      <div class=\"syncing downloading\" *ngIf=\"variablesService.daemon_state === 6\">\r\n        <div class=\"progress-bar\">\r\n          <div class=\"fill\" [style.width]=\"variablesService.download.progress_value + '%'\"></div>\r\n        </div>\r\n        <div class=\"progress-percent\">{{ variablesService.download.progress_value_text }}%</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"update-container\"\r\n       *ngIf=\"(variablesService.daemon_state === 0 || variablesService.daemon_state === 2) && [2, 3, 4].indexOf(variablesService.last_build_displaymode) !== -1\">\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 2\">\r\n      <div class=\"update-text standard\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.STANDARD' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update standard\" tooltip=\"{{ 'SIDEBAR.UPDATE.STANDARD_TOOLTIP' | translate }}\"\r\n         placement=\"right-bottom\" tooltipClass=\"update-tooltip\" [delay]=\"500\">\r\n        <svg version=\"1.1\" id=\"Layer_1\"\r\n          xmlns=\"http://www.w3.org/2000/svg\"  x=\"0px\" y=\"0px\"\r\n          viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\r\n          <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\r\n                        \tL14,9L24,11z\"/>\r\n          <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\r\n                        \tc-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\"/>\r\n        </svg>\r\n      </i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 3\">\r\n      <div class=\"update-text important\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.IMPORTANT' | translate }}</span>\r\n        <br>\r\n        <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update important\" tooltip=\"{{ 'SIDEBAR.UPDATE.IMPORTANT_TOOLTIP' | translate }}\"\r\n         placement=\"right-bottom\" tooltipClass=\"update-tooltip important\" [delay]=\"500\">\r\n        <svg version=\"1.1\" id=\"Layer_1\"\r\n          xmlns=\"http://www.w3.org/2000/svg\"  x=\"0px\" y=\"0px\"\r\n          viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\r\n          <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\r\n        \tL14,9L24,11z\"/>\r\n          <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\r\n        \tc-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\"/>\r\n        </svg>\r\n      </i>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"variablesService.last_build_displaymode === 4\">\r\n      <div class=\"update-text critical\">\r\n        <span [style.cursor]=\"'pointer'\" (click)=\"getUpdate()\">{{ 'SIDEBAR.UPDATE.CRITICAL' | translate }}</span>\r\n        <br>\r\n        <span style=\"font-size: 1rem\">{{ 'SIDEBAR.UPDATE.IMPORTANT_HINT' | translate }}</span>\r\n      </div>\r\n      <i class=\"icon update critical\" tooltip=\"{{ 'SIDEBAR.UPDATE.CRITICAL_TOOLTIP' | translate }}\"\r\n         placement=\"right-bottom\" tooltipClass=\"update-tooltip critical\" [delay]=\"500\">\r\n        <svg version=\"1.1\" id=\"Layer_1\"\r\n             xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\"\r\n             viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\r\n          <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\r\n                \tL14,9L24,11z\"/>\r\n          <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\r\n                \tc-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\"/>\r\n        </svg>\r\n      </i>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"update-container\"\r\n       *ngIf=\"variablesService.daemon_state === 2 && variablesService.net_time_delta_median !== 0\">\r\n    <div class=\"update-text time\">\r\n      <span>{{ 'SIDEBAR.UPDATE.TIME' | translate }}</span>\r\n    </div>\r\n    <i class=\"icon time\" tooltip=\"{{ 'SIDEBAR.UPDATE.TIME_TOOLTIP' | translate }}\" placement=\"right-bottom\"\r\n       tooltipClass=\"update-tooltip important\" [delay]=\"500\"></i>\r\n  </div>\r\n</div>\r\n\r\n<app-confirm-modal *ngIf=\"isModalDialogVisible\" [title]=\" 'WALLET.CONFIRM.TITLE' | translate \"\r\n                   [message]=\" 'WALLET.CONFIRM.MESSAGE' | translate \"\r\n                   (confirmed)=\"confirmed($event)\"></app-confirm-modal>\r\n<app-deeplink></app-deeplink>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  /** Backgrounds */\n  --light-blue: #0F2055;\n  --light-blue-gray: #1B2B5E;\n  --light-blue-details: #11316B;\n  /** Text colors */\n  --blue-text-color: #1f8feb;\n  --white-text-color: #ffffff;\n  /** Borders */\n  --defaul-border-color: #33426E;\n  --defaul-border: 2px solid var(--defaul-border-color);\n  --default-border-radius: 0.8rem; }\n\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 0 0 25rem;\n  padding: 1.8rem 0 2rem 0;\n  max-width: 25rem; }\n\n.red-text {\n  color: #ff0000 !important; }\n\n.animated {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.2rem; }\n\n.animated::ng-deep svg {\n    width: 2rem;\n    height: 2rem; }\n\n.animated::ng-deep svg path,\n    .animated::ng-deep svg circle,\n    .animated::ng-deep svg polygon {\n      fill: #1f8feb; }\n\n.sidebar-header {\n  min-height: 7rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.3rem; }\n\n.sidebar-header img {\n    height: 6.7rem;\n    width: 19.6rem; }\n\n.wallet-type {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0.7rem;\n  height: 100%;\n  background-color: transparent;\n  transition: all ease 0.3s;\n  overflow: hidden; }\n\n.wallet-type:hover {\n    width: 2.8rem; }\n\n.wallet-type .content {\n    height: 100%;\n    padding: 0.7rem;\n    font-size: 1.2rem;\n    line-height: 1.4rem;\n    font-weight: 500;\n    color: #ffffff;\n    text-decoration: none;\n    text-transform: capitalize;\n    transition: all ease 0.3s;\n    writing-mode: vertical-rl;\n    text-orientation: mixed; }\n\n.wallet-type .content.auditable {\n      background-color: #5cda9d; }\n\n.wallet-type .content.watch-only, .wallet-type .content.auditable-watch-only {\n      background-color: #8686ff; }\n\n.cdk-drag-placeholder {\n  opacity: 0.3; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-preview.sidebar-account {\n  color: #ffffff;\n  background: radial-gradient(100% 188.88% at 0% 0%, #16d1d6 0%, #274cff 100%);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-preview.sidebar-account.account-price .price {\n    color: rgba(255, 255, 255, 0.5); }\n\n.cdk-drag-preview.sidebar-account.account-price .price-percent {\n    color: #16d1d6; }\n\n.sidebar-account {\n  border-radius: 1.5rem;\n  margin-bottom: 1.5rem;\n  max-width: 23rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  padding: 1.3rem 1rem; }\n\n.sidebar-account .close-wallet-button {\n    position: absolute;\n    top: 1.2rem;\n    right: 1.2rem;\n    padding: 0;\n    height: auto;\n    background: transparent;\n    border: none; }\n\n.sidebar-account .close-wallet-button .icon {\n      width: 1.6rem;\n      height: 1.6rem;\n      display: block;\n      content: \"\";\n      background: center/contain no-repeat url('close-wallet.svg'); }\n\n.sidebar-account .sidebar-account-row:last-child {\n    margin-bottom: 0; }\n\n.sidebar-account .sidebar-account-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem; }\n\n.sidebar-account .sidebar-account-row.account-alias {\n      justify-content: flex-start;\n      font-size: 1.4rem; }\n\n.sidebar-account .sidebar-account-row.account-alias .name {\n        position: relative;\n        margin-right: 1rem;\n        display: flex;\n        align-items: center;\n        flex-shrink: 1;\n        line-height: 1.7rem; }\n\n.sidebar-account .sidebar-account-row.account-alias .name span {\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap; }\n\n.sidebar-account .sidebar-account-row.account-alias .name .indicator {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          border-radius: 50%;\n          width: 2rem;\n          height: 2rem;\n          margin-right: 0.8rem;\n          font-size: 1.4rem;\n          line-height: 1rem; }\n\n.sidebar-account .sidebar-account-row.account-title-balance .balance {\n      font-size: 2rem;\n      line-height: 2.4rem;\n      font-weight: 400;\n      white-space: nowrap; }\n\n.sidebar-account .sidebar-account-row.account-price {\n      font-size: 1.4rem;\n      line-height: 1.7rem;\n      display: flex;\n      justify-content: flex-start; }\n\n.sidebar-account .sidebar-account-row.account-price .price-percent {\n        margin-left: 0.7rem; }\n\n.sidebar-account .sidebar-account-row.account-staking .text {\n      line-height: 1.9rem;\n      font-size: 1.6rem; }\n\n.sidebar-account .sidebar-account-row.account-synchronization {\n      display: flex;\n      align-items: center;\n      width: 100%; }\n\n.sidebar-account .sidebar-account-row.account-synchronization .progress-bar {\n        border-radius: 1rem;\n        flex: 1 0 auto;\n        height: 0.4rem;\n        overflow: hidden; }\n\n.sidebar-account .sidebar-account-row.account-synchronization .progress-bar .fill {\n          height: 100%; }\n\n.sidebar-account .sidebar-account-row.account-synchronization .progress-percent {\n        flex: 0 0 auto;\n        font-size: 1.4rem;\n        line-height: 1.7rem;\n        padding-left: 1rem; }\n\n.sidebar-account:focus {\n    outline: none; }\n\n.sidebar-accounts {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto; }\n\n.sidebar-accounts .sidebar-accounts-list {\n    padding: 0 0.9rem;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    overflow-y: auto; }\n\n.sidebar-settings {\n  margin-left: 3rem;\n  flex: 0 0 auto; }\n\n.sidebar-settings .wrap-button {\n    transition: all 0.25s ease;\n    margin-top: 1.5rem; }\n\n.sidebar-settings .wrap-button button {\n      transition: all 0.25s ease;\n      display: flex;\n      align-items: center;\n      background: transparent;\n      border: none;\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 2.4rem;\n      outline: none; }\n\n.sidebar-settings .wrap-button button:hover span {\n        transition: margin 0.25s ease;\n        margin-left: 0.5rem; }\n\n.sidebar-settings .wrap-button button span {\n        transition: margin 0.25s ease; }\n\n.sidebar-settings .wrap-button button .add-wallet-div {\n        max-width: 1.2rem;\n        max-height: 1.2rem; }\n\n.sidebar-settings .wrap-button button.disabled {\n        cursor: url('not-allowed.svg') not-allowed; }\n\n.sidebar-settings .wrap-button button .icon {\n        margin-right: 0.7rem;\n        width: 2rem;\n        height: 2rem;\n        transition: all 0.25s ease; }\n\n.sidebar-settings .wrap-button button .icon.add-wallet {\n          width: 1.4rem;\n          height: 1.4rem;\n          background: center/contain no-repeat url('addnew.svg'); }\n\n.sidebar-settings .wrap-button button .icon.contacts {\n          background: center/contain no-repeat url('contacts.svg'); }\n\n.sidebar-settings .wrap-button button .icon.settings {\n          background: center/contain no-repeat url('settings-gear.svg'); }\n\n.sidebar-settings .wrap-button button .icon.logout {\n          background: none;\n          background: center/contain no-repeat url('logout.png'); }\n\n.synchronization-status {\n  margin: 2rem 3rem 2rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex: 0 0 7rem;\n  font-size: 1.4rem; }\n\n.synchronization-status .status-container {\n    padding-bottom: 1.5rem;\n    position: relative;\n    flex-grow: 1;\n    text-align: left; }\n\n.synchronization-status .status-container .offline,\n    .synchronization-status .status-container .online {\n      bottom: -3rem;\n      position: relative;\n      display: block;\n      line-height: 1.2rem;\n      padding-left: 2.2rem; }\n\n.synchronization-status .status-container .offline:before,\n      .synchronization-status .status-container .online:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: 50%;\n        width: 1.2rem;\n        height: 1.2rem; }\n\n.synchronization-status .status-container .progress-bar-container {\n      height: 0.8rem;\n      width: 100%; }\n\n.synchronization-status .status-container .progress-bar-container .syncing {\n        display: flex; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-bar {\n          border-radius: 1rem;\n          flex: 1 0 auto;\n          overflow: hidden; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-bar .fill {\n            border-radius: 1rem;\n            height: 100%; }\n\n.synchronization-status .status-container .progress-bar-container .syncing .progress-percent {\n          flex: 0 0 auto;\n          font-size: 1.4rem;\n          line-height: 1.7rem;\n          padding-left: 1.2rem; }\n\n.synchronization-status .status-container .progress-bar-container .loading {\n        -webkit-animation: move 5s linear infinite;\n                animation: move 5s linear infinite;\n        background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.125, rgba(0, 0, 0, 0.15)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.1)), color-stop(0.375, rgba(0, 0, 0, 0.1)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.15)), color-stop(0.625, rgba(0, 0, 0, 0.15)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.1)), color-stop(0.875, rgba(0, 0, 0, 0.1)), color-stop(0.875, transparent), to(transparent)), -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.125, rgba(0, 0, 0, 0.3)), color-stop(0.125, transparent), color-stop(0.25, transparent), color-stop(0.25, rgba(0, 0, 0, 0.25)), color-stop(0.375, rgba(0, 0, 0, 0.25)), color-stop(0.375, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(0, 0, 0, 0.3)), color-stop(0.625, rgba(0, 0, 0, 0.3)), color-stop(0.625, transparent), color-stop(0.75, transparent), color-stop(0.75, rgba(0, 0, 0, 0.25)), color-stop(0.875, rgba(0, 0, 0, 0.25)), color-stop(0.875, transparent), to(transparent));\n        background-size: 7rem 7rem;\n        height: 100%; }\n\n.synchronization-status .update-container {\n    display: flex;\n    flex-grow: 1;\n    margin-left: 1rem;\n    text-align: right; }\n\n.synchronization-status .update-container .update-text {\n      flex: 1 1 auto;\n      font-size: 1.2rem;\n      line-height: 1.8rem;\n      text-align: left;\n      background-color: red; }\n\n.synchronization-status .update-container .update-text.time {\n        font-size: 1.1rem; }\n\n.synchronization-status .update-container .icon {\n      flex: 1 0 auto;\n      margin: 0.3rem 0 0 0.6rem;\n      width: 1.2rem;\n      height: 1.2rem; }\n\n.synchronization-status .update-container .icon.update {\n        background: center/contain no-repeat url('update.svg'); }\n\n.synchronization-status .update-container .icon.time {\n        background: center/contain no-repeat url('time.svg'); }\n\n@-webkit-keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n@keyframes move {\n  0% {\n    background-position: 100% -7rem; }\n  100% {\n    background-position: 100% 7rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhc3NldHNcXHNjc3NcXGJhc2VcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFhO0VBQ2IsMEJBQWtCO0VBQ2xCLDZCQUFxQjtFQUVyQixpQkFBQTtFQUNBLDBCQUFrQjtFQUNsQiwyQkFBbUI7RUFHbkIsYUFBQTtFQUNBLDhCQUFzQjtFQUN0QixxREFBZ0I7RUFDaEIsK0JBQXdCLEVBQUE7O0FDYjFCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFKdEI7SUFNSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQVBoQjs7O01BV00sYUFBYSxFQUFBOztBQUluQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUIsRUFBQTs7QUFMdkI7SUFPSSxjQUFjO0lBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTs7QUFSbEI7SUFVSSxhQUFhLEVBQUE7O0FBVmpCO0lBYUksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHVCQUF1QixFQUFBOztBQXZCM0I7TUF5Qk0seUJBQXlCLEVBQUE7O0FBekIvQjtNQTZCTSx5QkFBeUIsRUFBQTs7QUFJL0I7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxzREFBc0QsRUFBQTs7QUFFeEQ7RUFDRSxjRFA0QjtFQ1E1Qiw0RURWNkY7RUNXN0YscUhEaEJrQyxFQUFBOztBQ2FwQztJQU1NLCtCRFlxQyxFQUFBOztBQ2xCM0M7SUFTTSxjRHpEa0IsRUFBQTs7QUM4RHhCO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG9CQUFvQixFQUFBOztBQVJ0QjtJQVVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVksRUFBQTs7QUFoQmhCO01Ba0JNLGFBQWE7TUFDYixjQUFjO01BQ2QsY0FBYztNQUNkLFdBQVc7TUFDWCw0REFBaUYsRUFBQTs7QUF0QnZGO0lBMkJJLGdCQUFnQixFQUFBOztBQTNCcEI7SUE4QkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CLEVBQUE7O0FBakN2QjtNQW9DTSwyQkFBMkI7TUFDM0IsaUJBQWlCLEVBQUE7O0FBckN2QjtRQXdDUSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG1CQUFtQixFQUFBOztBQTdDM0I7VUErQ1UsdUJBQXVCO1VBQ3ZCLGdCQUFnQjtVQUNoQixtQkFBbUIsRUFBQTs7QUFqRDdCO1VBb0RVLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsdUJBQXVCO1VBQ3ZCLGtCQUFrQjtVQUNsQixXQUFXO1VBQ1gsWUFBWTtVQUNaLG9CQUFvQjtVQUNwQixpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7O0FBNUQzQjtNQWtFUSxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTs7QUFyRTNCO01BeUVNLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLDJCQUEyQixFQUFBOztBQTVFakM7UUE4RVEsbUJBQW1CLEVBQUE7O0FBOUUzQjtNQW9GUSxtQkFBbUI7TUFDbkIsaUJBQWlCLEVBQUE7O0FBckZ6QjtNQTBGTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBQTs7QUE1RmpCO1FBOEZRLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsY0FBYztRQUNkLGdCQUFnQixFQUFBOztBQWpHeEI7VUFtR1UsWUFBWSxFQUFBOztBQW5HdEI7UUF1R1EsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCLEVBQUE7O0FBMUcxQjtJQStHSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUpoQjtJQU1JLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFzSHBCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFGaEI7SUFJSSwwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUE7O0FBTHRCO01BT00sMEJBQTBCO01BQzFCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixhQUFhLEVBQUE7O0FBZm5CO1FBa0JVLDZCQUE2QjtRQUM3QixtQkFBbUIsRUFBQTs7QUFuQjdCO1FBdUJRLDZCQUE2QixFQUFBOztBQXZCckM7UUEwQlEsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBOztBQTNCMUI7UUE4QlEsMENBQTJELEVBQUE7O0FBOUJuRTtRQWlDUSxvQkFBb0I7UUFDcEIsV0FBVztRQUNYLFlBQVk7UUFDWiwwQkFBMEIsRUFBQTs7QUFwQ2xDO1VBc0NVLGFBQWE7VUFDYixjQUFjO1VBQ2Qsc0RBQXlFLEVBQUE7O0FBeENuRjtVQTJDVSx3REFBMkUsRUFBQTs7QUEzQ3JGO1VBOENVLDZEQUFnRixFQUFBOztBQTlDMUY7VUFpRFUsZ0JBQWdCO1VBQ2hCLHNEQUF5RSxFQUFBOztBQU1uRjtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBTm5CO0lBUUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBWHBCOztNQWNNLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsY0FBYztNQUNkLG1CQUFtQjtNQUNuQixvQkFBb0IsRUFBQTs7QUFsQjFCOztRQXFCUSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjLEVBQUE7O0FBM0J0QjtNQStCTSxjQUFjO01BQ2QsV0FBVyxFQUFBOztBQWhDakI7UUFrQ1EsYUFBYSxFQUFBOztBQWxDckI7VUFvQ1UsbUJBQW1CO1VBQ25CLGNBQWM7VUFDZCxnQkFBZ0IsRUFBQTs7QUF0QzFCO1lBd0NZLG1CQUFtQjtZQUNuQixZQUFZLEVBQUE7O0FBekN4QjtVQTZDVSxjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixvQkFBb0IsRUFBQTs7QUFoRDlCO1FBcURRLDBDQUFrQztnQkFBbEMsa0NBQWtDO1FBQ2xDLCtsQ0FvQndpQjtRQUN4aUIsMEJBQTBCO1FBQzFCLFlBQVksRUFBQTs7QUE1RXBCO0lBaUZJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQXBGckI7TUF1Rk0sY0FBYztNQUNkLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHFCQUFxQixFQUFBOztBQTNGM0I7UUE2RlEsaUJBQWlCLEVBQUE7O0FBN0Z6QjtNQWlHTSxjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBcEdwQjtRQXNHUSxzREFBeUUsRUFBQTs7QUF0R2pGO1FBeUdRLG9EQUF1RSxFQUFBOztBQU0vRTtFQUNFO0lBQ0UsK0JBQStCLEVBQUE7RUFFakM7SUFDRSw4QkFBOEIsRUFBQSxFQUFBOztBQUxsQztFQUNFO0lBQ0UsK0JBQStCLEVBQUE7RUFFakM7SUFDRSw4QkFBOEIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC8qKiBCYWNrZ3JvdW5kcyAqL1xyXG4gIC0tbGlnaHQtYmx1ZTogIzBGMjA1NTtcclxuICAtLWxpZ2h0LWJsdWUtZ3JheTogIzFCMkI1RTtcclxuICAtLWxpZ2h0LWJsdWUtZGV0YWlsczogIzExMzE2QjtcclxuXHJcbiAgLyoqIFRleHQgY29sb3JzICovXHJcbiAgLS1ibHVlLXRleHQtY29sb3I6ICMxZjhmZWI7XHJcbiAgLS13aGl0ZS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuXHJcbiAgLyoqIEJvcmRlcnMgKi9cclxuICAtLWRlZmF1bC1ib3JkZXItY29sb3I6ICMzMzQyNkU7XHJcbiAgLS1kZWZhdWwtYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGVmYXVsLWJvcmRlci1jb2xvcik7XHJcbiAgLS1kZWZhdWx0LWJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxufVxyXG5cclxuJGJvZHlCYWNrZ3JvdW5kQ29sb3I6ICMwYzBjM2E7XHJcbiRzaWRlYmFyQmFja2dyb3VuZENvbG9yOiByZ2JhKDMxLCAxNDMsIDIzNSwgMC4xNSk7XHJcbiRzaWRlYmFyQm9yZGVyQ29sb3I6IHJnYmEoMzEsIDE0MywgMjM1LCAwLjE1KTtcclxuXHJcbiRvbmxpbmVDb2xvcjogIzE2ZDFkNjtcclxuJG9mZmxpbmVDb2xvcjogI2ZmMDAwMDtcclxuJGNvbnRlbnRCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoMzEsIDE0MywgMjM1LCAwLjE1KTtcclxuXHJcbiRtYWluVGV4dENvbG9yOiAjZmZmZmZmO1xyXG4kYWx0ZXJuYXRpdmVUZXh0Q29sb3I6IHJnYmEoMjUzLCAyNTQsIDI1NSwgMC4zKTtcclxuJG9wdGlvbmFsVGV4dENvbG9yOiAjMGMwYzNhO1xyXG4kYmx1ZVRleHRDb2xvcjogIzFmOGZlYjtcclxuJGdyZWVuVGV4dENvbG9yOiAjMTZkMWQ2O1xyXG4kb3JhbmdlVGV4dENvbG9yOiAjZmY2ZjAwO1xyXG4kcmVkVGV4dENvbG9yOiAjZmYwMDAwO1xyXG4kYWRkcmVzc1RleHRDb2xvcjogcmdiYSgzMSwgMTQzLCAyMzUsIDAuNSk7XHJcbiRwbGFjZWhvbGRlclRleHRDb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG5cclxuJGJsdWVCdXR0b25CYWNrZ3JvdW5kQ29sb3I6ICMxZjhmZWI7XHJcbiRibHVlQnV0dG9uQm94U2hhZG93OiAwcHggMTBweCA0MHB4IHJnYmEoMzAsIDE1MSwgMjMzLCAwLjQpO1xyXG4kYmx1ZUJ1dHRvbkhvdmVyQ29sb3I6ICM0YWFlZmY7XHJcbiRibHVlQnV0dG9uSG92ZXJCb3hTaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSgzMCwgMTUxLCAyMzMsIDAuNyk7XHJcbiRibHVlQnV0dG9uRm9jdXNDb2xvcjogIzAwNzVkNTtcclxuJGJsdWVCdXR0b25Gb2N1c0JveFNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDMwLCAxNTEsIDIzMywgMC4yKTtcclxuJGJsdWVCdXR0b25kaXNhYmxlZENvbG9yOiByZ2JhKDMxLCAxNDMsIDIzNSwgMC4yKTtcclxuXHJcbiRyZXNldEJ1dHRvbkJhY2tncm91bmRDb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRyZXNldEJ1dHRvbkNvbG9yOiAjMWY4ZmViO1xyXG4kcmVzZXRCdXR0b25Ib3ZlckNvbG9yOiAjNGFhZWZmO1xyXG4kcmVzZXRCdXR0b25Gb2N1c0NvbG9yOiAjMDA3NWQ1O1xyXG4kcmVzZXRCdXR0b25EaXNhYmxlZENvbG9yOiByZ2JhKDMxLCAxNDMsIDIzNSwgMC4yKTtcclxuXHJcbiRwYWdpbmF0aW9uQnV0dG9uQ29sb3I6IHJnYmEoMjUzLCAyNTQsIDI1NSwgMC43KTtcclxuJHBhZ2luYXRpb25CdXR0b25Ib3ZlckNvbG9yOiByZ2JhKDI1MywgMjU0LCAyNTUsIDAuNCk7XHJcblxyXG4kaW5wdXRCYWNrZ3JvdW5kQ29sb3I6IHRyYW5zcGFyZW50O1xyXG4kc2VsZWN0RHJvcGRvd25CYWNrZ3JvdW5kQ29sb3I6ICMxMjM2NzM7XHJcblxyXG4kc2VsZWN0SG92ZXJDb2xvcjogcmdiYSg1OCwgNjksIDg1LCAwLjUpO1xyXG4kc2VsZWN0U2VsZWN0ZWRDb2xvcjogcmdiYSg0MywgNTQsIDY4LCAwLjUpO1xyXG5cclxuJHN3aXRjaE9uQmFja2dyb3VuZENvbG9yOiAjMTZkMWQ2O1xyXG4kc3dpdGNoT2ZmQmFja2dyb3VuZENvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiRzd2l0Y2hDaXJjZWxlQm94U2hhZG93OiAwcHggMi4xMTc2NXB4IDUuNjQ3MDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggMi4xMTc2NXB4IDAuNzA1ODgycHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHJcbiRhY2NvdW50Qm94U2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMzAsIDE1MSwgMjMzLCAwLjMpO1xyXG4kYWNjb3VudERyYWdCb3hTaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4kYWNjb3VudEJhY2tncm91bmRDb2xvcjogcmdiYSgzMCwgMTUxLCAyMzMsIDAuMyk7XHJcbiRhY2NvdW50V2F0Y2hPbmx5Qm9yZGVyQ29sb3I6ICM5YTY5Zjc7XHJcbiRhY2NvdW50QXVkaXRhYmxlQm9yZGVyQ29sb3I6ICNmZmZmZmY7XHJcbiRhY2NvdW50QmFja2dyb3VuZENvbG9yOiByZ2JhKDMwLCAxNTEsIDIzMywgMC4zKTtcclxuJGFjY291bnRBY3RpdmVCYWNrZ3JvdW5kQ29sb3I6IHJhZGlhbC1ncmFkaWVudCgxMDAlIDE4OC44OCUgYXQgMCUgMCUsICMxNmQxZDYgMCUsICMyNzRjZmYgMTAwJSk7XHJcbiRhY2NvdW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICMxZTgxZDE7XHJcbiRhY2NvdW50TWFpblRleHRDb2xvcjogI2ZmZmZmZjtcclxuXHJcbiRzZWVkUGhyYXNlRm9ybUJhY2tncm91bmRDb2xvcjogcmdiYSgzMSwgMTQzLCAyMzUsIDAuMTUpO1xyXG4kc2VjdXJlZFNlZWQ6ICNlMGUwZTA7XHJcbiRzZWVkSXRlbVRleHQ6ICNlMGUwZTA7XHJcbiRjb3B5QmFja2dyb3VuZDogcmdiYSgzMCwgMTUxLCAyMzMsIDAuNik7XHJcbiRjb3B5QmFja2dyb3VuZEhvdmVyOiByZ2JhKDMwLCAxNTEsIDIzMywgMC45KTtcclxuJHNlZWRJdGVtQmFja2dyb3VuZENvbG9yOiAjMTgyMDJhO1xyXG4kYWNjb3VudE9wdGlvbmFsVGV4dENvbG9yOiAjNTU2NTc2O1xyXG4kYWNjb3VudEluZGljYXRvclRleHRDb2xvcjogIzBjMGMzYTtcclxuJGFjY291bnRJbmRpY2F0b3JCYWNrZ3JvdW5kQ29sb3I6ICNmZmZmZmY7XHJcblxyXG4kdGFiSW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3I6IHJnYmEoMzEsIDE0MywgMjM1LCAwLjA1KTtcclxuJHRhYkhvdmVyQmFja2dyb3VuZENvbG9yOiByZ2JhKDMxLCAxNDMsIDIzNSwgMC4xKTtcclxuJHRhYmxlQmFja2dyb3VuZENvbG9yOiByZ2JhKDMxLCAxNDMsIDIzNSwgMC4xNSk7XHJcbiRtZXNzYWdlTXlCYWNrZ3JvdW5kQ29sb3I6ICMyYTM1NDQ7XHJcbiRtZXNzYWdlQnVkZHlCYWNrZ3JvdW5kQ29sb3I6ICMxODIwMmE7XHJcbiRwcm9ncmVzc0JhckJhY2tncm91bmRDb2xvcjogcmdiYSgzMSwgMTQzLCAyMzUsIDAuMzMpO1xyXG4kcHJvZ3Jlc3NCYXJBY2NvdW50Q29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuJHByb2dyZXNzQmFyQWNjb3VudEFjdGl2ZUNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiRwcm9ncmVzc0JhckZ1bGxCYWNrZ3JvdW5kQ29sb3I6ICMxZjhmZWI7XHJcbiRjaGFydE9wdGlvbnNCYWNrZ3JvdW5kQ29sb3I6ICMyYjM2NDQ7XHJcbiRjaGFydE9wdGlvbnNIb3ZlckNvbG9yOiAjNTU2NTc2O1xyXG4kdG9vbHRpcEJhY2tncm91bmRDb2xvcjogIzEyMzY3MztcclxuJHRvb2x0aXBUZXh0Q29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuJHRvb2x0aXBJbXBvcnRhbnRUZXh0Q29sb3I6ICNmZjZmMDA7XHJcbiR0b29sdGlwSW1wb3J0YW50QmFja2dyb3VuZENvbG9yOiAjNWYyYjExO1xyXG4kdG9vbHRpcENyaXRpY2FsVGV4dENvbG9yOiAjZmY1MjUyO1xyXG4kdG9vbHRpcENyaXRpY2FsQmFja2dyb3VuZENvbG9yOiAjNWYxZDFkO1xyXG4kdG9vbHRpcFNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4kbW9kYWxCYWNrZ3JvdW5kOiAjMTIzNjczO1xyXG4kY2xvc2VCdXR0b25Db2xvcjogIzU1NjU3NjtcclxuJGhvdmVyUGFnZTogcmdiYSg1OCwgNzIsIDkwLCAwLjI0Nyk7XHJcblxyXG4kYWxpYXNEcm9wZG93bkJhY2tncm91bmQ6ICMxNzVhYTQ7XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc2Nzcy9iYXNlL3ZhcmlhYmxlc1wiO1xyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4OiAwIDAgMjVyZW07XHJcbiAgcGFkZGluZzogMS44cmVtIDAgMnJlbSAwO1xyXG4gIG1heC13aWR0aDogMjVyZW07XHJcbn1cclxuLnJlZC10ZXh0IHtcclxuICBjb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5hbmltYXRlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG4gICY6Om5nLWRlZXAgc3ZnIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgcGF0aCxcclxuICAgIGNpcmNsZSxcclxuICAgIHBvbHlnb24ge1xyXG4gICAgICBmaWxsOiAjMWY4ZmViO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2lkZWJhci1oZWFkZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyLjNyZW07XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNi43cmVtO1xyXG4gICAgd2lkdGg6IDE5LjZyZW07XHJcbiAgfVxyXG59XHJcbi53YWxsZXQtdHlwZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAwLjdyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmhvdmVyIHtcclxuICAgIHdpZHRoOiAyLjhyZW07XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiBtaXhlZDtcclxuICAgICYuYXVkaXRhYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjZGE5ZDtcclxuICAgIH1cclxuICAgICYud2F0Y2gtb25seSxcclxuICAgICYuYXVkaXRhYmxlLXdhdGNoLW9ubHkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4NmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcuc2lkZWJhci1hY2NvdW50IHtcclxuICBjb2xvcjogJGFjY291bnRNYWluVGV4dENvbG9yO1xyXG4gIGJhY2tncm91bmQ6ICRhY2NvdW50QWN0aXZlQmFja2dyb3VuZENvbG9yO1xyXG4gIGJveC1zaGFkb3c6ICRhY2NvdW50RHJhZ0JveFNoYWRvdztcclxuICAmLmFjY291bnQtcHJpY2Uge1xyXG4gICAgLnByaWNlIHtcclxuICAgICAgY29sb3I6ICR0b29sdGlwVGV4dENvbG9yO1xyXG4gICAgfVxyXG4gICAgLnByaWNlLXBlcmNlbnQge1xyXG4gICAgICBjb2xvcjogJGdyZWVuVGV4dENvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXItYWNjb3VudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBtYXgtd2lkdGg6IDIzcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcGFkZGluZzogMS4zcmVtIDFyZW07XHJcbiAgLmNsb3NlLXdhbGxldC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxLjJyZW07XHJcbiAgICByaWdodDogMS4ycmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgLmljb24ge1xyXG4gICAgICB3aWR0aDogMS42cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9jbG9zZS13YWxsZXQuc3ZnXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItYWNjb3VudC1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2lkZWJhci1hY2NvdW50LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgJi5hY2NvdW50LWFsaWFzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuOHJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmFjY291bnQtdGl0bGUtYmFsYW5jZSB7XHJcbiAgICAgIC5iYWxhbmNlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuYWNjb3VudC1wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIC5wcmljZS1wZXJjZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY2NvdW50LXN0YWtpbmcge1xyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYWNjb3VudC1zeW5jaHJvbml6YXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDAuNHJlbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC5maWxsIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnByb2dyZXNzLXBlcmNlbnQge1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuLnNpZGViYXItYWNjb3VudHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgLnNpZGViYXItYWNjb3VudHMtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDAuOXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLy8gLnNpZGViYXItYWNjb3VudCB7XHJcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIC8vICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgLy8gICBtYXgtd2lkdGg6IDIzcmVtO1xyXG4gICAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgLy8gICBwYWRkaW5nOiAxLjNyZW0gMXJlbTtcclxuICAgIC8vICAgLmNsb3NlLXdhbGxldC1idXR0b24ge1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB0b3A6IDEuMnJlbTtcclxuICAgIC8vICAgICByaWdodDogMS4ycmVtO1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLy8gICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8vICAgICAuaWNvbiB7XHJcbiAgICAvLyAgICAgICB3aWR0aDogMS42cmVtO1xyXG4gICAgLy8gICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAvLyAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAvLyAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvY2xvc2Utd2FsbGV0LnN2Z1wiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC5zaWRlYmFyLWFjY291bnQtcm93Omxhc3QtY2hpbGQge1xyXG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgLnNpZGViYXItYWNjb3VudC1yb3cge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAvLyAgICAgJi5hY2NvdW50LWFsaWFzIHtcclxuICAgIC8vICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8vICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cclxuICAgIC8vICAgICAgIC5uYW1lIHtcclxuICAgIC8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgLy8gICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgLy8gICAgICAgICBzcGFuIHtcclxuICAgIC8vICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC8vICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgLmluZGljYXRvciB7XHJcbiAgICAvLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8vICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgIC8vICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAvLyAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XHJcbiAgICAvLyAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAvLyAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgJi5hY2NvdW50LXRpdGxlLWJhbGFuY2Uge1xyXG4gICAgLy8gICAgICAgLmJhbGFuY2Uge1xyXG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAvLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAvLyAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgICYuYWNjb3VudC1wcmljZSB7XHJcbiAgICAvLyAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIC8vICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcblxyXG4gICAgLy8gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8vICAgICAgIC5wcmljZS1wZXJjZW50IHtcclxuICAgIC8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgICYuYWNjb3VudC1zdGFraW5nIHtcclxuICAgIC8vICAgICAgIC50ZXh0IHtcclxuICAgIC8vICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcclxuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAmLmFjY291bnQtc3luY2hyb25pemF0aW9uIHtcclxuICAgIC8vICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIC8vICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogMC40cmVtO1xyXG4gICAgLy8gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gICAgICAgICAuZmlsbCB7XHJcbiAgICAvLyAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgICAucHJvZ3Jlc3MtcGVyY2VudCB7XHJcbiAgICAvLyAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIC8vICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgIC8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gICAmOmZvY3VzIHtcclxuICAgIC8vICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcbi5zaWRlYmFyLXNldHRpbmdzIHtcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICAud3JhcC1idXR0b24ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBidXR0b24ge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmFkZC13YWxsZXQtZGl2IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgIH1cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2Zykgbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAmLmFkZC13YWxsZXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEuNHJlbTtcclxuICAgICAgICAgIGhlaWdodDogMS40cmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9hZGRuZXcuc3ZnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jb250YWN0cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvbnRhY3RzLnN2Zyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc2V0dGluZ3Mge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZXR0aW5ncy1nZWFyLnN2Zyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubG9nb3V0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2xvZ291dC5wbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc3luY2hyb25pemF0aW9uLXN0YXR1cyB7XHJcbiAgbWFyZ2luOiAycmVtIDNyZW0gMnJlbSAzcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleDogMCAwIDdyZW07XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgLnN0YXR1cy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAub2ZmbGluZSxcclxuICAgIC5vbmxpbmUge1xyXG4gICAgICBib3R0b206IC0zcmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIuMnJlbTtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2dyZXNzLWJhci1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDAuOHJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC5zeW5jaW5nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIC5maWxsIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZ3Jlc3MtcGVyY2VudCB7XHJcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgIGFuaW1hdGlvbjogbW92ZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcclxuICAgICAgICAgICAgbGluZWFyLFxyXG4gICAgICAgICAgICAwIDAsXHJcbiAgICAgICAgICAgIDEwMCUgMTAwJSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjEyNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC4xMjUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjI1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC4yNSwgcmdiYSgwLCAwLCAwLCAwLjEpKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjM3NSwgcmdiYSgwLCAwLCAwLCAwLjEpKSxcclxuICAgICAgICAgICAgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjE1KSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC42MjUsIHJnYmEoMCwgMCwgMCwgMC4xNSkpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuNjI1LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC43NSwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBjb2xvci1zdG9wKDAuNzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC44NzUsIHJnYmEoMCwgMCwgMCwgMC4xKSksXHJcbiAgICAgICAgICAgIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgdG8odHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMTAwJSwgMTAwJSAwLCBjb2xvci1zdG9wKDAuMTI1LCByZ2JhKDAsIDAsIDAsIDAuMykpLCBjb2xvci1zdG9wKDAuMTI1LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoMC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuMjUsIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCBjb2xvci1zdG9wKDAuMzc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjM3NSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgY29sb3Itc3RvcCgwLjYyNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKDAuNzUsIHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCgwLjc1LCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgY29sb3Itc3RvcCgwLjg3NSwgcmdiYSgwLCAwLCAwLCAwLjI1KSksIGNvbG9yLXN0b3AoMC44NzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDdyZW0gN3JlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnVwZGF0ZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgLnVwZGF0ZS10ZXh0IHtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICYudGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29uIHtcclxuICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgIG1hcmdpbjogMC4zcmVtIDAgMCAwLjZyZW07XHJcbiAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAmLnVwZGF0ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy91cGRhdGUuc3ZnKTtcclxuICAgICAgfVxyXG4gICAgICAmLnRpbWUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdGltZS5zdmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgLTdyZW07XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA3cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route, router, variablesService, backend, modal, ngZone) {
        this.route = route;
        this.router = router;
        this.variablesService = variablesService;
        this.backend = backend;
        this.modal = modal;
        this.ngZone = ngZone;
        this.isModalDialogVisible = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.goMainPage = function () {
        var _this = this;
        if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.prevUrl === 'login') {
            this.ngZone.run(function () {
                _this.router.navigate(['/'], { queryParams: { prevUrl: 'login' } });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.router.navigate(['/']);
            });
        }
    };
    ;
    SidebarComponent.prototype.selectWallet = function (id) {
        var _this = this;
        this.ngZone.run(function () {
            _this.variablesService.setCurrentWallet(id);
            _this.router.navigate(['/wallet/history']);
        });
    };
    SidebarComponent.prototype.contactsRoute = function () {
        var _this = this;
        if (this.variablesService.appPass) {
            this.ngZone.run(function () { _this.router.navigate(['/contacts']); });
        }
        else {
            this.modal.prepareModal('error', 'CONTACTS.FORM_ERRORS.SET_MASTER_PASSWORD');
        }
    };
    SidebarComponent.prototype.drop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.variablesService.wallets, event.previousIndex, event.currentIndex);
    };
    SidebarComponent.prototype.showDialog = function (wallet_id) {
        this.isModalDialogVisible = true;
        this.closeWalletId = wallet_id;
    };
    SidebarComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.closeWallet(this.closeWalletId);
        }
        this.isModalDialogVisible = false;
    };
    SidebarComponent.prototype.closeWallet = function (wallet_id) {
        var _this = this;
        this.backend.closeWallet(wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    SidebarComponent.prototype.getUpdate = function () {
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["DOWNLOADS_PAGE_URL"]);
    };
    SidebarComponent.prototype.goToAuditableWalletHelpPage = function (e) {
        e.preventDefault();
        this.backend.openUrlInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["AUDITABLE_WALLET_HELP_PAGE"]);
    };
    SidebarComponent.prototype.logOut = function () {
        var _this = this;
        this.variablesService.stopCountdown();
        this.variablesService.appLogin = false;
        this.variablesService.appPass = '';
        this.ngZone.run(function () {
            _this.router.navigate(['/login'], { queryParams: { type: 'auth' } });
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/staking/staking.component.html":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-header\">\r\n  <div class=\"general\">\r\n    <div *ngIf=\"(!variablesService.currentWallet.is_auditable && !variablesService.currentWallet.is_watch_only)\r\n                || (variablesService.currentWallet.is_auditable && !variablesService.currentWallet.is_watch_only)\">\r\n      <span class=\"label\">{{ 'STAKING.TITLE' | translate }}</span>\r\n      <span class=\"value\">\r\n        <app-staking-switch [wallet_id]=\"variablesService.currentWallet.wallet_id\" [(staking)]=\"variablesService.currentWallet.staking\"></app-staking-switch>\r\n      </span>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE_PENDING' | translate }}</span>\r\n      <span class=\"value\">{{pending.total | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">{{ 'STAKING.TITLE_TOTAL' | translate }}</span>\r\n      <span class=\"value\">{{total | intToMoney}} {{variablesService.defaultCurrency}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"selected\" *ngIf=\"selectedDate && selectedDate.date\">\r\n    <span>{{selectedDate.date | date : 'EEEE, MMMM d, y'}}</span>\r\n    <span>{{selectedDate.amount}} {{variablesService.defaultCurrency}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"chart\">\r\n  <div [chart]=\"chart\"></div>\r\n</div>\r\n\r\n<div class=\"chart-options\">\r\n  <div class=\"title\">\r\n    {{ 'STAKING.TITLE_PERIOD' | translate }}\r\n  </div>\r\n  <div class=\"options\">\r\n    <ng-container *ngFor=\"let period of periods\">\r\n      <button type=\"button\" [class.active]=\"period.active\" (click)=\"changePeriod(period)\">{{period.title}}</button>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"title\">\r\n    {{ 'STAKING.TITLE_GROUP' | translate }}\r\n  </div>\r\n  <div class=\"options\">\r\n    <ng-container *ngFor=\"let group of groups\">\r\n      <button type=\"button\" [class.active]=\"group.active\" (click)=\"changeGroup(group)\">{{group.title}}</button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/staking/staking.component.scss":
/*!************************************************!*\
  !*** ./src/app/staking/staking.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.chart-header {\n  display: flex;\n  flex: 0 0 auto; }\n\n.chart-header .general {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 1.6rem;\n    margin: -0.5rem 0; }\n\n.chart-header .general > div {\n      display: flex;\n      align-items: center;\n      margin: 0.5rem 0;\n      height: 2rem; }\n\n.chart-header .general > div .label {\n        display: inline-block;\n        width: 9rem; }\n\n.chart-header .selected {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n    flex-grow: 1;\n    font-size: 2rem; }\n\n.chart-header .selected span {\n      line-height: 2.9rem; }\n\n.chart {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  min-height: 40rem; }\n\n.chart > div {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n.chart-options {\n  display: flex;\n  align-items: center;\n  height: 2.4rem;\n  flex: 0 0 auto; }\n\n.chart-options .title {\n    font-size: 1.6rem;\n    padding: 0 1rem; }\n\n.chart-options .title:first-child {\n      padding-left: 0; }\n\n.chart-options .options {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1; }\n\n.chart-options .options button {\n      border-radius: 1rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex: 1 1 auto;\n      cursor: pointer;\n      font-size: 1.4rem;\n      margin: 0 0.5rem;\n      padding: 0;\n      height: 4rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rha2luZy9EOlxcV29ya1xcemFub191aVxcaHRtbF9zb3VyY2Uvc3JjXFxhcHBcXHN0YWtpbmdcXHN0YWtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBRmhCO0lBS0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBWHJCO01BY00sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQWpCbEI7UUFvQlEscUJBQXFCO1FBQ3JCLFdBQVcsRUFBQTs7QUFyQm5CO0lBMkJJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQWhDbkI7TUFtQ00sbUJBQW1CLEVBQUE7O0FBS3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUxuQjtJQVFJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQVJuQjtNQVdNLGVBQWUsRUFBQTs7QUFYckI7SUFnQkksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZLEVBQUE7O0FBbEJoQjtNQXFCTSxtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFraW5nL3N0YWtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2hhcnQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG5cclxuICAuZ2VuZXJhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIG1hcmdpbjogLTAuNXJlbSAwO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgLmxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMi45cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGFydC1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgZmxleDogMCAwIGF1dG87XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/staking/staking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/staking/staking.component.ts ***!
  \**********************************************/
/*! exports provided: StakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakingComponent", function() { return StakingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StakingComponent = /** @class */ (function () {
    function StakingComponent(route, variablesService, backend, ngZone, intToMoneyPipe, translate) {
        this.route = route;
        this.variablesService = variablesService;
        this.backend = backend;
        this.ngZone = ngZone;
        this.intToMoneyPipe = intToMoneyPipe;
        this.translate = translate;
        this.periods = [
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK1'),
                key: '1 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.WEEK2'),
                key: '2 week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH1'),
                key: '1 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH3'),
                key: '3 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.MONTH6'),
                key: '6 month',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.YEAR'),
                key: '1 year',
                active: false
            },
            {
                title: this.translate.instant('STAKING.PERIOD.ALL'),
                key: 'All',
                active: true
            }
        ];
        this.groups = [
            {
                title: this.translate.instant('STAKING.GROUP.DAY'),
                key: 'day',
                active: true
            },
            {
                title: this.translate.instant('STAKING.GROUP.WEEK'),
                key: 'week',
                active: false
            },
            {
                title: this.translate.instant('STAKING.GROUP.MONTH'),
                key: 'month',
                active: false
            }
        ];
        this.selectedDate = {
            date: null,
            amount: null
        };
        this.originalData = [];
        this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
        this.pending = {
            list: [],
            total: new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0)
        };
    }
    StakingComponent_1 = StakingComponent;
    StakingComponent.makeGroupTime = function (key, date) {
        if (key === 'day') {
            return date.setHours(0, 0, 0, 0);
        }
        else if (key === 'week') {
            return new Date(date.setDate(date.getDate() - date.getDay())).setHours(0, 0, 0, 0);
        }
        else {
            return new Date(date.setDate(1)).setHours(0, 0, 0, 0);
        }
    };
    StakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentRouting = this.route.parent.params.subscribe(function () {
            _this.getMiningHistory();
        });
        this.heightAppEvent = this.variablesService.getHeightAppEvent.subscribe(function (newHeight) {
            if (!_this.pending.total.isZero()) {
                var pendingCount = _this.pending.list.length;
                for (var i = pendingCount - 1; i >= 0; i--) {
                    if (newHeight - _this.pending.list[i].h >= 10) {
                        _this.pending.list.splice(i, 1);
                    }
                }
                if (pendingCount !== _this.pending.list.length) {
                    _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                    for (var i = 0; i < _this.pending.list.length; i++) {
                        _this.pending.total = _this.pending.total.plus(_this.pending.list[i].a);
                    }
                }
            }
        });
        this.refreshStackingEvent = this.variablesService.getRefreshStackingEvent.subscribe(function (wallet_id) {
            if (_this.variablesService.currentWallet.wallet_id === wallet_id) {
                _this.getMiningHistory();
            }
        });
    };
    StakingComponent.prototype.drawChart = function (data) {
        var _this = this;
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
            title: { text: '' },
            credits: { enabled: false },
            exporting: { enabled: false },
            legend: { enabled: false },
            chart: {
                type: 'line',
                backgroundColor: 'transparent',
                height: null,
                zoomType: null,
                events: {
                    load: function () {
                        _this.changePeriod();
                    }
                }
            },
            yAxis: {
                min: 0,
                tickAmount: 5,
                title: {
                    text: ''
                },
                gridLineColor: '#2b3644',
                gridLineWidth: 2,
                lineColor: '#2b3644',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 120,
                tickColor: '#2b3644',
                labels: {
                    y: -8,
                    align: 'left',
                    x: -120,
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    },
                    format: '{value} ' + this.variablesService.defaultCurrency
                },
                showLastLabel: false,
            },
            xAxis: {
                type: 'datetime',
                gridLineColor: '#2b3644',
                lineColor: '#2b3644',
                lineWidth: 2,
                tickWidth: 2,
                tickLength: 10,
                tickColor: '#2b3644',
                labels: {
                    style: {
                        'color': '#e0e0e0',
                        'fontSize': '13px'
                    }
                },
                minPadding: 0,
                maxPadding: 0,
                minRange: 86400000,
                // tickInterval: 86400000,
                minTickInterval: 3600000,
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(124,181,236,0.2)'],
                            [1, 'rgba(124,181,236,0)']
                        ]
                    },
                    marker: {
                        enabled: false,
                        radius: 2
                    },
                    lineWidth: 2,
                    threshold: null
                },
                series: {
                    point: {
                        events: {
                            mouseOver: function (obj) {
                                _this.selectedDate.date = obj.target['x'];
                                _this.selectedDate.amount = obj.target['y'];
                            }
                        }
                    },
                    events: {
                        mouseOut: function () {
                            _this.selectedDate.date = null;
                            _this.selectedDate.amount = null;
                        }
                    }
                }
            },
            series: [
                {
                    type: 'area',
                    data: data
                }
            ]
        });
    };
    StakingComponent.prototype.getMiningHistory = function () {
        var _this = this;
        if (this.variablesService.currentWallet.loaded) {
            this.backend.getMiningHistory(this.variablesService.currentWallet.wallet_id, function (status, data) {
                _this.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.pending.list = [];
                _this.pending.total = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](0);
                _this.originalData = [];
                if (data.mined_entries) {
                    data.mined_entries.forEach(function (item, key) {
                        if (item.t.toString().length === 10) {
                            data.mined_entries[key].t = (new Date(item.t * 1000)).setUTCMilliseconds(0);
                        }
                    });
                    data.mined_entries.forEach(function (item) {
                        _this.total = _this.total.plus(item.a);
                        if (_this.variablesService.height_app - item.h < 10) {
                            _this.pending.list.push(item);
                            _this.pending.total = _this.pending.total.plus(item.a);
                        }
                        _this.originalData.push([parseInt(item.t, 10), parseFloat(_this.intToMoneyPipe.transform(item.a))]);
                    });
                    _this.originalData = _this.originalData.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                }
                _this.ngZone.run(function () {
                    _this.drawChart([]);
                });
            });
        }
    };
    StakingComponent.prototype.changePeriod = function (period) {
        if (period) {
            this.periods.forEach(function (p) {
                p.active = false;
            });
            period.active = true;
        }
        else {
            period = this.periods.find(function (p) { return p.active; });
        }
        var d = new Date();
        var min = null;
        var newData = [];
        var group = this.groups.find(function (g) { return g.active; });
        if (period.key === '1 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 7, 0, 0, 0, 0);
        }
        else if (period.key === '2 week') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate() - 14, 0, 0, 0, 0);
        }
        else if (period.key === '1 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 1, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '3 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 3, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '6 month') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear(), d.getMonth() - 6, d.getDate(), 0, 0, 0, 0);
        }
        else if (period.key === '1 year') {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
            min = Date.UTC(d.getFullYear() - 1, d.getMonth(), d.getDate(), 0, 0, 0, 0);
        }
        else {
            this.originalData.forEach(function (item) {
                var time = StakingComponent_1.makeGroupTime(group.key, new Date(item[0]));
                var find = newData.find(function (itemNew) { return itemNew[0] === time; });
                if (find) {
                    find[1] = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](find[1]).plus(item[1]).toNumber();
                }
                else {
                    newData.push([time, item[1]]);
                }
            });
            this.chart.ref.series[0].setData(newData, true);
        }
        this.chart.ref.xAxis[0].setExtremes(min, null);
    };
    StakingComponent.prototype.changeGroup = function (group) {
        this.groups.forEach(function (g) {
            g.active = false;
        });
        group.active = true;
        this.changePeriod();
    };
    StakingComponent.prototype.ngOnDestroy = function () {
        this.parentRouting.unsubscribe();
        this.heightAppEvent.unsubscribe();
        this.refreshStackingEvent.unsubscribe();
    };
    var StakingComponent_1;
    StakingComponent = StakingComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staking',
            template: __webpack_require__(/*! ./staking.component.html */ "./src/app/staking/staking.component.html"),
            styles: [__webpack_require__(/*! ./staking.component.scss */ "./src/app/staking/staking.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], StakingComponent);
    return StakingComponent;
}());



/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span [routerLink]=\"['/wallet/history']\">{{ wallet.name }}</span>\r\n      <span>{{ 'BREADCRUMBS.TRANSFER_ALIAS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-transfer\">\r\n\r\n    <div class=\"input-block alias-name\">\r\n      <label for=\"alias-name\">\r\n        {{ 'TRANSFER_ALIAS.NAME.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" name=\"alias-name\" id=\"alias-name\" [value]=\"alias.name\"\r\n        placeholder=\"{{ 'EDIT_ALIAS.NAME.PLACEHOLDER' | translate }}\" readonly>\r\n    </div>\r\n\r\n    <div class=\"input-block textarea\">\r\n      <label for=\"alias-comment\">\r\n        {{ 'TRANSFER_ALIAS.COMMENT.LABEL' | translate }}\r\n      </label>\r\n      <textarea id=\"alias-comment\" name=\"alias-comment\" [(ngModel)]=\"alias.comment\"\r\n        placeholder=\"{{ 'EDIT_ALIAS.COMMENT.PLACEHOLDER' | translate }}\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"input-block alias-transfer-address\">\r\n      <label for=\"alias-transfer\">\r\n        {{ 'TRANSFER_ALIAS.ADDRESS.LABEL' | translate }}\r\n      </label>\r\n      <input type=\"text\" name=\"alias-transfer\" id=\"alias-transfer\" [(ngModel)]=\"transferAddress\" [ngModelOptions]=\"{standalone: true}\"\r\n        (ngModelChange)=\"changeAddress()\" placeholder=\"{{ 'TRANSFER_ALIAS.ADDRESS.PLACEHOLDER' | translate }}\"\r\n        (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n      <div class=\"error-block\"\r\n        *ngIf=\"transferAddress.length > 0 && (transferAddressAlias || !transferAddressValid || (transferAddressValid && !permissionSend) || notEnoughMoney)\">\r\n        <div *ngIf=\"!transferAddressValid\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.WRONG_ADDRESS' | translate }}\r\n        </div>\r\n        <div *ngIf=\"transferAddressAlias || (transferAddressValid && !permissionSend)\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.ALIAS_EXISTS' | translate }}\r\n        </div>\r\n        <div *ngIf=\"notEnoughMoney\">\r\n          {{ 'TRANSFER_ALIAS.FORM_ERRORS.NO_MONEY' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"alias-cost\">{{ \"TRANSFER_ALIAS.COST\" | translate : {value: variablesService.default_fee, currency:\r\n      variablesService.defaultCurrency} }}</div>\r\n\r\n    <div class=\"wrap-buttons\">\r\n      <button type=\"button\" class=\"blue-button\" (click)=\"transferAlias()\"\r\n        [disabled]=\"transferAddressAlias || !transferAddressValid || notEnoughMoney\">{{ 'TRANSFER_ALIAS.BUTTON_TRANSFER'\r\n        | translate }}</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-transfer {\n  margin: 2.4rem 0; }\n  .form-transfer .alias-name {\n    width: 50%; }\n  .form-transfer .alias-cost {\n    font-size: 1.3rem;\n    margin-top: 2rem; }\n  .form-transfer .wrap-buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem -0.7rem; }\n  .form-transfer .wrap-buttons button {\n      margin: 0 0.7rem;\n      width: 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXItYWxpYXMvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFx0cmFuc2Zlci1hbGlhc1xcdHJhbnNmZXItYWxpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLFVBQVUsRUFBQTtFQUpkO0lBUUksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBVHBCO0lBYUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0IsRUFBQTtFQWYxQjtNQWtCTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhbnNmZXItYWxpYXMvdHJhbnNmZXItYWxpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10cmFuc2ZlciB7XHJcbiAgbWFyZ2luOiAyLjRyZW0gMDtcclxuXHJcbiAgLmFsaWFzLW5hbWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hbGlhcy1jb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIC53cmFwLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMi41cmVtIC0wLjdyZW07XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwIDAuN3JlbTtcclxuICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/transfer-alias/transfer-alias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-alias/transfer-alias.component.ts ***!
  \************************************************************/
/*! exports provided: TransferAliasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferAliasComponent", function() { return TransferAliasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/services/modal.service */ "./src/app/_helpers/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransferAliasComponent = /** @class */ (function () {
    function TransferAliasComponent(location, router, backend, variablesService, modalService, ngZone) {
        this.location = location;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.transferAddress = '';
        this.requestProcessing = false;
    }
    TransferAliasComponent.prototype.ngOnInit = function () {
        this.wallet = this.variablesService.currentWallet;
        var alias = this.backend.getWalletAlias(this.wallet.address);
        this.alias = {
            name: alias.name,
            address: alias.address,
            comment: alias.comment,
            tracking_key: alias.tracking_key
        };
        this.notEnoughMoney = this.wallet.unlocked_balance.isLessThan(this.variablesService.default_fee_big);
    };
    TransferAliasComponent.prototype.changeAddress = function () {
        var _this = this;
        this.backend.validateAddress(this.transferAddress, function (status) {
            _this.transferAddressValid = status;
            if (status) {
                _this.backend.getPoolInfo(function (statusPool, dataPool) {
                    if (dataPool.hasOwnProperty('aliases_que') && dataPool.aliases_que.length) {
                        _this.setStatus(!dataPool.aliases_que.some(function (el) { return el.address === _this.transferAddress; }));
                    }
                    else {
                        _this.setStatus(status);
                    }
                });
            }
            else {
                _this.setStatus(false);
            }
        });
    };
    TransferAliasComponent.prototype.setStatus = function (statusSet) {
        var _this = this;
        this.permissionSend = statusSet;
        if (statusSet) {
            this.backend.getAliasByAddress(this.transferAddress, function (status) {
                _this.ngZone.run(function () {
                    if (status) {
                        _this.transferAddressAlias = true;
                        _this.permissionSend = false;
                    }
                    else {
                        _this.transferAddressAlias = false;
                    }
                });
            });
        }
        else {
            this.ngZone.run(function () {
                _this.transferAddressAlias = false;
            });
        }
    };
    TransferAliasComponent.prototype.transferAlias = function () {
        var _this = this;
        if (this.requestProcessing || !this.permissionSend || !this.transferAddressValid || this.notEnoughMoney) {
            return;
        }
        this.requestProcessing = true;
        var newAlias = {
            name: this.alias.name,
            address: this.transferAddress,
            comment: this.alias.comment,
            tracking_key: this.alias.tracking_key
        };
        this.backend.updateAlias(this.wallet.wallet_id, newAlias, this.variablesService.default_fee, function (status, data) {
            if (status && data.hasOwnProperty('success') && data.success) {
                _this.modalService.prepareModal('info', 'TRANSFER_ALIAS.REQUEST_SEND_REG');
                _this.ngZone.run(function () {
                    _this.router.navigate(['/wallet/']);
                });
            }
            _this.requestProcessing = false;
        });
    };
    TransferAliasComponent.prototype.back = function () {
        this.location.back();
    };
    TransferAliasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-alias',
            template: __webpack_require__(/*! ./transfer-alias.component.html */ "./src/app/transfer-alias/transfer-alias.component.html"),
            styles: [__webpack_require__(/*! ./transfer-alias.component.scss */ "./src/app/transfer-alias/transfer-alias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"],
            _helpers_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TransferAliasComponent);
    return TransferAliasComponent;
}());



/***/ }),

/***/ "./src/app/typing-message/typing-message.component.html":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <div class=\"interlocutor\">\r\n    @bitmain\r\n  </div>\r\n  <a class=\"back-btn\" [routerLink]=\"['/main']\">\r\n    <i class=\"icon back\"></i>\r\n    <span>{{ 'COMMON.BACK' | translate }}</span>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"messages-content\">\r\n  <div class=\"messages-list scrolled-content\">\r\n    <div class=\"date\">10:39</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"date\">11:44</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"date\">12:15</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"date\">13:13</div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n    <div class=\"buddy\">\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n    </div>\r\n    <div class=\"my\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    </div>\r\n  </div>\r\n  <div class=\"type-message\">\r\n    <div class=\"input-block textarea\">\r\n      <textarea placeholder=\"{{ 'MESSAGES.SEND_PLACEHOLDER' | translate }}\"></textarea>\r\n    </div>\r\n    <button type=\"button\" class=\"blue-button\">{{ 'MESSAGES.SEND_BUTTON' | translate }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n.head {\n  flex: 0 0 auto;\n  box-sizing: content-box;\n  margin: -3rem -3rem 0; }\n\n.messages-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1; }\n\n.messages-content .messages-list {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    margin: 1rem -3rem;\n    padding: 0 3rem;\n    overflow-y: overlay; }\n\n.messages-content .messages-list div {\n      margin: 0.7rem 0; }\n\n.messages-content .messages-list div.date {\n        text-align: center; }\n\n.messages-content .messages-list div.my, .messages-content .messages-list div.buddy {\n        position: relative;\n        padding: 1.8rem;\n        max-width: 60%; }\n\n.messages-content .messages-list div.buddy {\n        align-self: flex-end; }\n\n.messages-content .type-message {\n    display: flex;\n    flex: 0 0 auto;\n    width: 100%;\n    height: 4.2rem; }\n\n.messages-content .type-message .input-block {\n      width: 100%; }\n\n.messages-content .type-message .input-block > textarea {\n        min-height: 4.2rem; }\n\n.messages-content .type-message button {\n      flex: 0 0 15rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nLW1lc3NhZ2UvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFx0eXBpbmctbWVzc2FnZVxcdHlwaW5nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBOztBQUpkO0lBT0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFadkI7TUFlTSxnQkFBZ0IsRUFBQTs7QUFmdEI7UUFrQlEsa0JBQWtCLEVBQUE7O0FBbEIxQjtRQXNCUSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWMsRUFBQTs7QUF4QnRCO1FBNEJRLG9CQUFvQixFQUFBOztBQTVCNUI7SUFrQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQXJDbEI7TUF3Q00sV0FBVyxFQUFBOztBQXhDakI7UUEyQ1Esa0JBQWtCLEVBQUE7O0FBM0MxQjtNQWdETSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90eXBpbmctbWVzc2FnZS90eXBpbmctbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBtYXJnaW46IC0zcmVtIC0zcmVtIDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgLm1lc3NhZ2VzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG1hcmdpbjogMXJlbSAtM3JlbTtcclxuICAgIHBhZGRpbmc6IDAgM3JlbTtcclxuICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiAwLjdyZW0gMDtcclxuXHJcbiAgICAgICYuZGF0ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm15LCAmLmJ1ZGR5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMS44cmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ1ZGR5IHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnR5cGUtbWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNC4ycmVtO1xyXG5cclxuICAgIC5pbnB1dC1ibG9jayB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgPiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNC4ycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZmxleDogMCAwIDE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/typing-message/typing-message.component.ts":
/*!************************************************************!*\
  !*** ./src/app/typing-message/typing-message.component.ts ***!
  \************************************************************/
/*! exports provided: TypingMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingMessageComponent", function() { return TypingMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypingMessageComponent = /** @class */ (function () {
    function TypingMessageComponent(route) {
        this.route = route;
    }
    TypingMessageComponent.prototype.ngOnInit = function () {
    };
    TypingMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typing-message',
            template: __webpack_require__(/*! ./typing-message.component.html */ "./src/app/typing-message/typing-message.component.html"),
            styles: [__webpack_require__(/*! ./typing-message.component.scss */ "./src/app/typing-message/typing-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TypingMessageComponent);
    return TypingMessageComponent;
}());



/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"head\">\r\n    <div class=\"breadcrumbs\">\r\n      <span (click)=\"back()\">{{variablesService.currentWallet.name}}</span>\r\n      <span>{{ 'BREADCRUMBS.WALLET_DETAILS' | translate }}</span>\r\n    </div>\r\n    <button type=\"button\" class=\"back-btn\" (click)=\"back()\">\r\n      <i class=\"icon back\"></i>\r\n      <span>{{ 'COMMON.BACK' | translate }}</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form class=\"form-details\" [formGroup]=\"detailsForm\" (ngSubmit)=\"onSubmitEdit()\">\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-name\">{{ 'WALLET_DETAILS.LABEL_NAME' | translate }}</label>\r\n      <div class=\"input-container\">\r\n        <input type=\"text\" id=\"wallet-name\"\r\n          [class.required-error]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched\"\r\n          [placeholder]=\"detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched ? ('WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate ) : ('PLACEHOLDERS.WALLET_NAME_PLACEHOLDER' | translate) \"\r\n          formControlName=\"name\" [maxLength]=\"variablesService.maxWalletNameLength\"\r\n          (contextmenu)=\"variablesService.onContextMenu($event)\">\r\n        <div class=\"submit-button-container\">\r\n          <button type=\"submit\" class=\"blue-button\"\r\n            [disabled]=\"detailsForm.invalid && !detailsForm.controls['name'].dirty\">{{\r\n            'SETTINGS.MASTER_PASSWORD.BUTTON'\r\n            |\r\n            translate }}</button>\r\n          <span class=\"saved-message\" [class.active]=\"ifSaved\">Saved!</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"error-block\"\r\n        *ngIf=\"detailsForm.controls['name'].invalid &&!detailsForm.controls['name'].errors['required'] && (detailsForm.controls['name'].dirty || detailsForm.controls['name'].touched)\">\r\n        <!-- <div *ngIf=\"detailsForm.controls['name'].errors['required']\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_REQUIRED' | translate }}\r\n        </div> -->\r\n        <div *ngIf=\"detailsForm.controls['name'].errors['duplicate']\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.NAME_DUPLICATE' | translate }}\r\n        </div>\r\n        <div *ngIf=\"detailsForm.get('name').value.length >= variablesService.maxWalletNameLength\">\r\n          {{ 'WALLET_DETAILS.FORM_ERRORS.MAX_LENGTH' | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"input-block\">\r\n      <label for=\"wallet-location\">{{ 'WALLET_DETAILS.LABEL_FILE_LOCATION' | translate }}</label>\r\n      <input type=\"text\" id=\"wallet-location\" formControlName=\"path\" readonly>\r\n    </div>\r\n  </form>\r\n\r\n  <ng-container *ngIf=\"!showSeed else seedPhraseContent\">\r\n    <form class=\"form-seed\" [formGroup]=\"seedPhraseForm\" (ngSubmit)=\"onSubmitSeed()\">\r\n\r\n      <div class=\"form-content\">\r\n        <label class=\"form-seed-heading\">{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</label>\r\n        <div class=\"seed-phrase-form\">\r\n          <div class=\"input-block\">\r\n            <label for=\"create-password\">{{ 'WALLET_DETAILS.CREATE_PASSWORD_SECURE' | translate }} <a\r\n                class=\"text-coral\">{{ 'WALLET_DETAILS.INFO' | translate }}<i class=\"icon info\"></i></a></label>\r\n            <input type=\"password\" placeholder=\"{{ 'PLACEHOLDERS.PASSWORD_PLACEHOLDER' | translate }}\"\r\n              id=\"create-password\" formControlName=\"password\">\r\n          </div>\r\n          <div class=\"input-block\">\r\n            <label for=\"confirm-password\">{{ 'WALLET_DETAILS.FORM.CONFIRM_PASSWORD' | translate }}</label>\r\n            <input type=\"password\" placeholder=\"{{'PLACEHOLDERS.PLACEHOLDER_CONFIRM' | translate}}\"\r\n              id=\"confirm-password\" formControlName=\"confirmPassword\">\r\n            <div class=\"error-block\"\r\n              *ngIf=\"seedPhraseForm.invalid && (seedPhraseForm.controls['confirmPassword'].dirty || seedPhraseForm.controls['confirmPassword'].touched)\">\r\n              <div *ngIf=\"seedPhraseForm.invalid && seedPhraseForm.get('confirmPassword').value.length > 0\">\r\n                {{ 'WALLET_DETAILS.FORM_ERRORS.PASSWORDS_DONT_MATCH' | translate }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <button type=\"submit\" class=\"blue-button\" [disabled]=\"!seedPhraseForm.valid\"><i class=\"icon safety\"></i>\r\n            {{ 'WALLET_DETAILS.FORM.GENERATE_SECURE_SEED' | translate }}</button>\r\n\r\n          <a class=\"secured-seed\"><i class=\"icon info\"></i>{{ 'WALLET_DETAILS.FORM.SECURED_SEED_WILL_REQUIRE' |\r\n            translate }}</a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n  <ng-template #seedPhraseContent>\r\n    <div class=\"seed-phrase mt-2\">\r\n      <div class=\"seed-phrase-title\">\r\n        <span>{{ 'WALLET_DETAILS.LABEL_SEED_PHRASE' | translate }}</span>\r\n        <p class=\"right-part\">\r\n          <span *ngIf=\"seedPhraseForm.controls.password.value.length == 0\">{{ 'WALLET_DETAILS.SEED_IS_UNSECURED' |\r\n            translate }} <i class=\"icon unsecured\"></i></span>\r\n          <span *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">{{ 'WALLET_DETAILS.SEED_IS_SECURED' |\r\n            translate }} <i class=\"icon secured\"></i></span>\r\n        </p>\r\n      </div>\r\n      <div class=\"seed-phrase-content\" (contextmenu)=\"variablesService.onContextMenuOnlyCopy($event, seedPhrase)\">\r\n        <ng-container *ngFor=\"let word of seedPhrase.split(' '); let index = index\">\r\n          <div class=\"item\"\r\n            [class.dark]=\"(index + 1) >= 1 && (index + 1) <= 7 || (index + 1) >= 15 && (index + 1) <= 21\">\r\n            {{(index + 1) + '. ' + word}}</div>\r\n        </ng-container>\r\n      </div>\r\n      <div class=\"wrap-buttons\">\r\n        <button type=\"button\" class=\"blue-button_reset copy-button\" (click)=\"copySeedPhrase()\">\r\n          <ng-container *ngIf=\"!seedPhraseCopied\">\r\n            {{ 'SEED_PHRASE.BUTTON_COPY' | translate }}\r\n          </ng-container>\r\n          <ng-container *ngIf=\"seedPhraseCopied\">\r\n            {{ 'SEED_PHRASE.BUTTON_COPIED' | translate }}\r\n          </ng-container>\r\n        </button>\r\n      </div>\r\n      <div class=\"seed-phrase-footer-text\" *ngIf=\"seedPhraseForm.controls.password.value.length > 0\">\r\n        <i class=\"icon info\"></i>\r\n        <span class=\"title\">{{ 'WALLET_DETAILS.REMEMBER_YOU_WILL_REQUIRE' | translate }}</span>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-details {\n  margin-top: 3.5rem; }\n  .form-details .submit-button-container {\n    display: flex;\n    align-items: center; }\n  .form-details .submit-button-container .saved-message {\n      transition: all 0.5s ease;\n      height: 0;\n      opacity: 0;\n      margin-left: 2rem;\n      font-size: 2rem;\n      line-height: 2.4rem;\n      color: #16d1d6; }\n  .form-details .submit-button-container .saved-message.active {\n        transition: all 0.5s ease;\n        height: 2.4rem;\n        opacity: 1; }\n  .form-details .submit-button-container button {\n      min-width: 10rem;\n      height: 3.5rem; }\n  .form-details .input-block .input-container {\n    display: flex; }\n  .form-details .input-block:first-child {\n    width: 50%; }\n  .wrap-buttons {\n  display: flex;\n  margin-bottom: 2rem; }\n  .wrap-buttons .copy-button {\n    width: 20rem; }\n  .mt-2 {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LWRldGFpbHMvRDpcXFdvcmtcXHphbm9fdWlcXGh0bWxfc291cmNlL3NyY1xcYXBwXFx3YWxsZXQtZGV0YWlsc1xcd2FsbGV0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQUx2QjtNQU9NLHlCQUF5QjtNQUN6QixTQUFTO01BQ1QsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGNBQWMsRUFBQTtFQWJwQjtRQWVRLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsVUFBVSxFQUFBO0VBakJsQjtNQXFCTSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBO0VBdEJwQjtJQTRCTSxhQUFhLEVBQUE7RUE1Qm5CO0lBK0JNLFVBQVUsRUFBQTtFQUtoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZyQjtJQUtJLFlBQVksRUFBQTtFQUloQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0LWRldGFpbHMvd2FsbGV0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAzLjVyZW07XHJcblxyXG4gIC5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5zYXZlZC1tZXNzYWdlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICBjb2xvcjogIzE2ZDFkNjtcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtYmxvY2sge1xyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53cmFwLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbiAgLmNvcHktYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tdC0yIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/wallet-details/wallet-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wallet-details/wallet-details.component.ts ***!
  \************************************************************/
/*! exports provided: WalletDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailsComponent", function() { return WalletDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalletDetailsComponent = /** @class */ (function () {
    function WalletDetailsComponent(router, backend, variablesService, ngZone, location) {
        var _this = this;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.location = location;
        this.seedPhrase = '';
        this.showSeed = false;
        this.copyAnimation = false;
        this.seedPhraseCopied = false;
        this.ifSaved = false;
        this.detailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                function (g) {
                    for (var i = 0; i < _this.variablesService.wallets.length; i++) {
                        if (g.value === _this.variablesService.wallets[i].name) {
                            if (_this.variablesService.wallets[i].wallet_id ===
                                _this.variablesService.currentWallet.wallet_id) {
                                return { same: true };
                            }
                            else {
                                return { duplicate: true };
                            }
                        }
                    }
                    return null;
                },
            ]),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.seedPhraseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.variablesService.pattern)),
        }, { validators: this.checkPasswords });
    }
    WalletDetailsComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    WalletDetailsComponent.prototype.ngOnInit = function () {
        this.showSeed = false;
        this.detailsForm
            .get('name')
            .setValue(this.variablesService.currentWallet.name);
        this.detailsForm
            .get('path')
            .setValue(this.variablesService.currentWallet.path);
    };
    WalletDetailsComponent.prototype.showSeedPhrase = function () {
        this.showSeed = true;
    };
    WalletDetailsComponent.prototype.onSubmitSeed = function () {
        var _this = this;
        if (this.seedPhraseForm.valid) {
            this.showSeedPhrase();
            var wallet_id = this.variablesService.currentWallet.wallet_id;
            var seed_password = this.seedPhraseForm.controls.password.value;
            this.backend.getSmartWalletInfo({ wallet_id: wallet_id, seed_password: seed_password }, function (status, data) {
                if (data.hasOwnProperty('seed_phrase')) {
                    _this.ngZone.run(function () {
                        _this.seedPhrase = data['seed_phrase'].trim();
                    });
                }
            });
        }
    };
    WalletDetailsComponent.prototype.onSave = function () {
        var _this = this;
        this.ifSaved = true;
        setTimeout(function () {
            _this.ifSaved = false;
        }, 3000);
    };
    WalletDetailsComponent.prototype.onSubmitEdit = function () {
        if (this.detailsForm.value) {
            this.onSave();
            this.variablesService.currentWallet.name = this.detailsForm.get('name').value;
            this.detailsForm.reset({ name: this.variablesService.currentWallet.name, path: this.variablesService.currentWallet.path });
        }
    };
    WalletDetailsComponent.prototype.closeWallet = function () {
        var _this = this;
        this.backend.closeWallet(this.variablesService.currentWallet.wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id ===
                    _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletDetailsComponent.prototype.copySeedPhrase = function () {
        var _this = this;
        this.backend.setClipboard(this.seedPhrase, function () {
            _this.ngZone.run(function () {
                setTimeout(function () {
                    _this.seedPhraseCopied = false;
                }, 4000);
                _this.seedPhraseCopied = true;
            });
        });
    };
    WalletDetailsComponent.prototype.back = function () {
        this.location.back();
    };
    WalletDetailsComponent.prototype.ngOnDestroy = function () {
    };
    WalletDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet-details',
            template: __webpack_require__(/*! ./wallet-details.component.html */ "./src/app/wallet-details/wallet-details.component.html"),
            styles: [__webpack_require__(/*! ./wallet-details.component.scss */ "./src/app/wallet-details/wallet-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_3__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], WalletDetailsComponent);
    return WalletDetailsComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div>\r\n    <h3 tooltip=\"{{ variablesService.currentWallet.name }}\" placement=\"bottom-left\" tooltipClass=\"table-tooltip\"\r\n        [delay]=\"500\" [showWhenNoOverflow]=\"false\">{{variablesService.currentWallet.name}}</h3>\r\n    <div *ngIf=\"!variablesService.currentWallet.is_auditable\">\r\n      <button [routerLink]=\"['/assign-alias']\"\r\n              *ngIf=\"!variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2 && variablesService.currentWallet.alias_available\">\r\n        <i class=\"icon account\"></i>\r\n        <span>{{ 'WALLET.REGISTER_ALIAS' | translate }}</span>\r\n      </button>\r\n      <div class=\"alias\"\r\n           *ngIf=\"variablesService.currentWallet.alias.hasOwnProperty('name') && variablesService.currentWallet.loaded && variablesService.daemon_state === 2\">\r\n        <span>{{variablesService.currentWallet.alias['name']}}</span>\r\n        <ng-container *ngIf=\"variablesService.currentWallet.alias_available\">\r\n          <i class=\"icon edit\" [routerLink]=\"['/edit-alias']\" tooltip=\"{{ 'WALLET.TOOLTIPS.EDIT_ALIAS' | translate }}\"\r\n             placement=\"bottom-right\" tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"></i>\r\n          <i class=\"icon transfer\" [routerLink]=\"['/transfer-alias']\"\r\n             tooltip=\"{{ 'WALLET.TOOLTIPS.TRANSFER_ALIAS' | translate }}\" placement=\"right\"\r\n             tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"></i>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"settings-block\">\r\n    <button [disabled]=\"settingsButtonDisabled && !variablesService.currentWallet.loaded\" (click)=\"togleMenuDropdown()\">\r\n      <i class=\"icon details\" data-target=\"wallet-dropdown-button\">\r\n        <svg data-target=\"wallet-dropdown-button\" width=\"100%\" height=\"100%\" viewBox=\"0 0 20 21\" fill=\"none\"\r\n             xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path data-target=\"wallet-dropdown-button\"\r\n                d=\"M0.96875 1.22266C0.96875 1.64258 1.31055 1.96484 1.7207 1.96484L18.4395 1.96484C18.8496 1.96484 19.1816 1.64258 19.1816 1.22266C19.1816 0.8125 18.8496 0.490234 18.4395 0.490234L1.7207 0.490234C1.31055 0.490234 0.96875 0.8125 0.96875 1.22266ZM0.96875 6.0957C0.96875 6.51562 1.31055 6.83789 1.7207 6.83789L18.4395 6.83789C18.8496 6.83789 19.1816 6.51562 19.1816 6.0957C19.1816 5.68555 18.8496 5.36328 18.4395 5.36328L1.7207 5.36328C1.31055 5.36328 0.96875 5.68555 0.96875 6.0957ZM0.96875 10.9687C0.96875 11.3887 1.31055 11.7109 1.7207 11.7109L18.4395 11.7109C18.8496 11.7109 19.1816 11.3887 19.1816 10.9688C19.1816 10.5586 18.8496 10.2363 18.4395 10.2363L1.7207 10.2363C1.31055 10.2363 0.96875 10.5586 0.96875 10.9687ZM7.08203 16.8965L9.24023 20.1289C9.63086 20.7051 10.4609 20.6855 10.8516 20.1289L13.0488 16.8965C13.5566 16.1445 13.2734 15.3535 12.375 15.3633L7.74609 15.3633C6.87695 15.3535 6.61328 16.1836 7.08203 16.8965Z\"\r\n                fill=\"#1F8FEB\"/>\r\n        </svg>\r\n      </i>\r\n    </button>\r\n    <div *ngIf=\"openDropdown\" class=\"settings-dropdown\">\r\n      <button class=\"dark-line\" [routerLink]=\"['/details']\" routerLinkActive=\"active\"\r\n              tooltip=\"{{ 'WALLET.TOOLTIPS.SETTINGS' | translate }}\" placement=\"left\"\r\n              tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"\r\n              [disabled]=\"!variablesService.currentWallet.loaded\">\r\n        <i class=\"icon wallet-settings\">\r\n          <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 17 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path\r\n              d=\"M11.6641 4.47656C12.4766 4.47656 13.1641 3.95312 13.4297 3.23438H16.1328C16.4531 3.23438 16.7344 2.95312 16.7344 2.60156C16.7344 2.25 16.4531 1.97656 16.1328 1.97656H13.4297C13.1719 1.25 12.4766 0.71875 11.6641 0.71875C10.8516 0.71875 10.1484 1.25 9.89062 1.97656H1.61719C1.26562 1.97656 0.992188 2.25 0.992188 2.60156C0.992188 2.95312 1.26562 3.23438 1.61719 3.23438H9.89844C10.1562 3.95312 10.8516 4.47656 11.6641 4.47656ZM11.6641 3.51562C11.1484 3.51562 10.75 3.10938 10.75 2.59375C10.75 2.07812 11.1484 1.67969 11.6641 1.67969C12.1797 1.67969 12.5781 2.07812 12.5781 2.59375C12.5781 3.10938 12.1797 3.51562 11.6641 3.51562ZM1.58594 6.74219C1.26562 6.74219 0.992188 7.02344 0.992188 7.375C0.992188 7.72656 1.26562 8 1.58594 8H4.38281C4.64062 8.73438 5.33594 9.25781 6.14844 9.25781C6.96094 9.25781 7.65625 8.73438 7.92188 8H16.1016C16.4531 8 16.7344 7.72656 16.7344 7.375C16.7344 7.02344 16.4531 6.74219 16.1016 6.74219H7.91406C7.65625 6.02344 6.96094 5.5 6.14844 5.5C5.33594 5.5 4.64062 6.02344 4.38281 6.74219H1.58594ZM6.14844 8.28906C5.64062 8.28906 5.23438 7.88281 5.23438 7.375C5.23438 6.85938 5.64062 6.46094 6.14844 6.46094C6.66406 6.46094 7.0625 6.85938 7.0625 7.375C7.0625 7.88281 6.66406 8.28906 6.14844 8.28906ZM11.6641 14.0234C12.4766 14.0234 13.1719 13.5 13.4297 12.7734H16.1328C16.4531 12.7734 16.7344 12.5 16.7344 12.1484C16.7344 11.7969 16.4531 11.5156 16.1328 11.5156H13.4297C13.1719 10.7891 12.4766 10.2734 11.6641 10.2734C10.8516 10.2734 10.1562 10.7891 9.89844 11.5156H1.61719C1.26562 11.5156 0.992188 11.7969 0.992188 12.1484C0.992188 12.5 1.26562 12.7734 1.61719 12.7734H9.89062C10.1562 13.5 10.8516 14.0234 11.6641 14.0234ZM11.6641 13.0625C11.1484 13.0625 10.75 12.6562 10.75 12.1484C10.75 11.625 11.1484 11.2344 11.6641 11.2344C12.1797 11.2344 12.5781 11.625 12.5781 12.1484C12.5781 12.6562 12.1797 13.0625 11.6641 13.0625Z\"\r\n              fill=\"white\"/>\r\n          </svg>\r\n        </i><span>{{ 'WALLET_DETAILS.WALLET_OPTIONS' | translate }}</span>\r\n      </button>\r\n      <button class=\"dark-line\" tooltip=\"{{ 'EXPORT_HISTORY.TOOLTIP' | translate }}\" placement=\"left\"\r\n              tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\"\r\n              (click)=\"exportHistoryDialogVisible = !exportHistoryDialogVisible\"\r\n              [disabled]=\"variablesService.currentWallet.history.length <= 0\">\r\n        <i class=\"icon export-history\">\r\n          <svg viewBox=\"0 0 18 18\" width=\"100%\" height=\"100%\" fill=\"none\"\r\n               xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path\r\n              d=\"M8.95264 17.4736C13.5845 17.4736 17.4194 13.6304 17.4194 9.00684C17.4194 4.375 13.5762 0.540039 8.94434 0.540039C4.3208 0.540039 0.48584 4.375 0.48584 9.00684C0.48584 13.6304 4.3291 17.4736 8.95264 17.4736ZM8.95264 16.0625C5.03467 16.0625 1.90527 12.9248 1.90527 9.00684C1.90527 5.08887 5.02637 1.95117 8.94434 1.95117C12.8623 1.95117 16 5.08887 16.0083 9.00684C16.0166 12.9248 12.8706 16.0625 8.95264 16.0625ZM8.94434 9.77881C9.17676 9.77881 9.35938 9.60449 9.35938 9.38037V5.18018L9.34277 4.79004L9.70801 5.18018L10.0815 5.57031C10.1479 5.64502 10.2476 5.68652 10.3721 5.68652C10.5962 5.68652 10.7539 5.53711 10.7539 5.32129C10.7539 5.22168 10.7207 5.12207 10.6294 5.04736L9.24316 3.70264C9.14355 3.60303 9.04395 3.56152 8.94434 3.56152C8.84473 3.56152 8.74512 3.61133 8.65381 3.70264L7.25928 5.03906C7.16797 5.13037 7.14307 5.22168 7.14307 5.32129C7.14307 5.53711 7.30078 5.68652 7.5166 5.68652C7.63281 5.68652 7.74072 5.64502 7.80713 5.57031L8.18066 5.18018L8.5542 4.79004L8.5376 5.18018V9.38037C8.5376 9.60449 8.72021 9.77881 8.94434 9.77881ZM6.60352 13.041H11.3018C12.2065 13.041 12.6797 12.5762 12.6797 11.6797V7.5874C12.6797 6.69092 12.2065 6.23438 11.3018 6.23438H10.0732V7.07275H11.2935C11.6587 7.07275 11.8413 7.25537 11.8413 7.62891V11.6548C11.8413 12.02 11.6587 12.2109 11.2935 12.2109H6.61182C6.24658 12.2109 6.06396 12.0283 6.06396 11.6548V7.62891C6.06396 7.25537 6.24658 7.07275 6.61182 7.07275H7.84033V6.23438H6.60352C5.70703 6.23438 5.23389 6.69922 5.22559 7.5874V11.6797C5.23389 12.5679 5.70703 13.041 6.60352 13.041Z\"\r\n              fill=\"white\"/>\r\n          </svg>\r\n        </i><span>{{ 'EXPORT_HISTORY.EXPORT_BUTTON' | translate }}</span>\r\n      </button>\r\n      <ng-container *ngIf=\"walletSynchVisible\">\r\n        <button class=\"dark-line\" tooltip=\"{{ 'WALLET_DETAILS.RESYNC_WALLET' | translate }}\" placement=\"left\"\r\n                tooltipClass=\"table-tooltip account-tooltip\" [disabled]=\"!variablesService.currentWallet.loaded\"\r\n                [delay]=\"500\"\r\n                [timeDelay]=\"500\" (click)=\"resyncCurrentWallet(variablesService.currentWallet.wallet_id)\">\r\n          <i class=\"icon resync-wallet\">\r\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\"\r\n                 x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"\r\n                 style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\r\n              <style type=\"text/css\">\r\n                .st0 {\r\n                  fill: #FFFFFF;\r\n                }\r\n              </style>\r\n              <path class=\"st0\" d=\"M24,11L23,0l-3.1,3.1C17.8,1.2,15.1,0,12,0C6.1,0,1.1,4.3,0.2,10h4.1c0.9-3.4,4-6,7.7-6c2,0,3.7,0.7,5.1,1.9\r\n          \tL14,9L24,11z\"/>\r\n              <path class=\"st0\" d=\"M0,13l1,11l3.1-3.1C6.2,22.8,8.9,24,12,24c5.9,0,10.9-4.3,11.8-10h-4.1c-0.9,3.4-4,6-7.7,6\r\n          \tc-2,0-3.7-0.7-5.1-1.9L10,15L0,13z\"/>\r\n            </svg>\r\n          </i><span>{{ 'WALLET_DETAILS.RESYNC_WALLET_BUTTON' | translate }}</span>\r\n        </button>\r\n      </ng-container>\r\n      <button type=\"button\" (click)=\"showConfirmDialog(variablesService.currentWallet.wallet_id)\"\r\n              tooltip=\"{{ 'WALLET.TOOLTIPS.CLOSE' | translate }}\" placement=\"top-left\"\r\n              tooltipClass=\"table-tooltip account-tooltip\" [delay]=\"500\" [timeDelay]=\"500\">\r\n        <i class=\"icon close-wallet\"></i><span>{{ 'WALLET_DETAILS.BUTTON_REMOVE' | translate }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"address\">\r\n  <span>{{variablesService.currentWallet.address}}</span>\r\n  <i class=\"icon\" [class.copy]=\"!copyAnimation\" [class.copied]=\"copyAnimation\" (click)=\"copyAddress()\"></i>\r\n</div>\r\n\r\n\r\n<div class=\"balance\">\r\n    <span [tooltip]=\"getTooltip()\" [placement]=\"'bottom'\" [tooltipClass]=\"'balance-tooltip'\" [delay]=\"150\" [timeout]=\"0\"\r\n          (onHide)=\"onHideTooltip()\">{{variablesService.currentWallet.balance | intToMoney : '3'}}\r\n      {{variablesService.defaultCurrency}}</span>\r\n  <ng-container *appDisablePriceFetch>\r\n    <span>${{variablesService.currentWallet.getMoneyEquivalent(variablesService.moneyEquivalent) | intToMoney | number :\r\n      '1.2-2'}}</span>\r\n\r\n    <span class=\"price-percent\"\r\n          [class.red-text]=\"variablesService.moneyEquivalentPercent < 0\">\r\n      {{ variablesService.moneyEquivalentPercent | number : '1.1-2' }}%\r\n    </span>\r\n  </ng-container>\r\n</div>\r\n\r\n<div class=\"tabs\">\r\n  <div class=\"tabs-header\">\r\n    <ng-container *ngFor=\"let tab of tabs; let index = index\">\r\n      <button class=\"tab\" [routerLink]=\"['/wallet' + tab.link]\" routerLinkActive=\"active\"\r\n              [ngClass]=\"{ 'hide': ((tab.link === '/send' || tab.link === '/contracts') && variablesService.currentWallet.is_watch_only && variablesService.currentWallet.is_auditable) }\"\r\n              [disabled]=\"(tab.link === '/send' || tab.link === '/contracts' || tab.link === '/staking') && (variablesService.daemon_state !== 2 || !variablesService.currentWallet.loaded)\">\r\n        <i class=\"icon\" [ngClass]=\"tab.icon\"></i>\r\n        <span>{{ tab.title | translate }}</span>\r\n        <span class=\"indicator\" *ngIf=\"tab.indicator\">{{variablesService.currentWallet.new_contracts}}</span>\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n  <div #scrolledContent class=\"tabs-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<app-confirm-modal *ngIf=\"delWalletDialogVisible\" [title]=\" 'WALLET.CONFIRM.TITLE' | translate \"\r\n                   [message]=\" 'WALLET.CONFIRM.MESSAGE' | translate \"\r\n                   (confirmed)=\"confirmed($event)\"></app-confirm-modal>\r\n<app-export-history-modal [currentWalletId]=\"variablesService.currentWallet.wallet_id\"\r\n                          *ngIf=\"exportHistoryDialogVisible\" (closeExportModal)=\"closeExportModal($event)\">\r\n</app-export-history-modal>\r\n"

/***/ }),

/***/ "./src/app/wallet/wallet.component.scss":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 2.8rem 3rem;\n  min-width: 95rem;\n  width: 100%;\n  height: 100%; }\n\n.red-text {\n  color: #ff0000 !important; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  margin-bottom: 2.8rem; }\n\n.header > div {\n    display: flex;\n    align-items: center; }\n\n.header > div :not(:last-child) {\n      margin-right: 3.2rem; }\n\n.header .settings-block {\n    position: relative; }\n\n.header .settings-block button {\n      margin: 0; }\n\n.header .settings-block button:disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.header .settings-block .settings-dropdown {\n      position: absolute;\n      border-radius: 0.6rem;\n      top: 3rem;\n      right: 0;\n      width: 19rem; }\n\n.header .settings-block .settings-dropdown button {\n        height: 4rem;\n        display: flex;\n        padding-left: 1.1rem;\n        align-items: center;\n        width: 100%; }\n\n.header .settings-block .settings-dropdown button:disabled {\n          cursor: url('not-allowed.svg'), not-allowed; }\n\n.header .settings-block .settings-dropdown button:disabled .icon svg path,\n          .header .settings-block .settings-dropdown button:disabled .icon svg .st0 {\n            fill: rgba(255, 255, 255, 0.4); }\n\n.header .settings-block .settings-dropdown button:disabled span {\n            color: rgba(255, 255, 255, 0.4); }\n\n.header .settings-block .settings-dropdown button.dark-line {\n          border-bottom: 1px solid #0c0c3a; }\n\n.header .settings-block .settings-dropdown button span {\n          font-size: 1.4rem;\n          line-height: 1.7rem; }\n\n.header .settings-block .settings-dropdown button .icon {\n          height: 1.8rem;\n          width: 1.8rem;\n          margin-right: 1rem; }\n\n.header .settings-block .settings-dropdown button .icon svg {\n            height: 100%;\n            width: 100%; }\n\n.header .settings-block .settings-dropdown button .icon.resync-wallet {\n            height: 1.7rem;\n            width: 1.7rem; }\n\n.header .settings-block .settings-dropdown button .icon.close-wallet {\n            background: center/contain no-repeat url('close-wallet-dropdown.svg'); }\n\n.header h3 {\n    font-size: 2rem;\n    line-height: 2.4rem;\n    font-weight: 400;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 30rem; }\n\n.header button {\n    font-size: 2rem;\n    line-height: 2.4rem;\n    display: flex;\n    align-items: center;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    font-weight: 400;\n    outline: none;\n    padding: 0; }\n\n.header button .icon {\n      margin-right: 0.8rem;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n.header button .icon.account {\n        height: 1.6rem;\n        background: center/contain no-repeat url('account.svg'); }\n\n.header button .icon.lock {\n        background: center/contain no-repeat url('lock.svg'); }\n\n.header button .icon.details {\n        margin-right: 0; }\n\n.header button .icon.close-wallet {\n        background: center/contain no-repeat url('close-wallet.svg');\n        margin-right: 0; }\n\n.header .alias {\n    display: flex;\n    align-items: center;\n    font-size: 1.3rem; }\n\n.header .alias .icon {\n      cursor: pointer;\n      margin-right: 1.2rem;\n      width: 2.4rem;\n      height: 2.4rem; }\n\n.header .alias .icon.edit {\n        background: center/contain no-repeat url('details.svg'); }\n\n.header .alias .icon.transfer {\n        background: center/contain no-repeat url('send.svg'); }\n\n.address {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  font-size: 1.6rem;\n  line-height: 1.9rem; }\n\n.address .icon {\n    cursor: pointer;\n    margin-left: 1rem; }\n\n.address .icon.copy {\n      transition: all 0.25s ease;\n      width: 2.4rem;\n      height: 2.4rem;\n      background: center/contain no-repeat url('copy.svg'); }\n\n.address .icon.copied {\n      background: center/contain no-repeat url('complete-testwallet.svg'); }\n\n.balance {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  flex: 0 0 auto;\n  margin: 1.6rem 0 2.5rem 0; }\n\n.balance :first-child {\n    font-size: 4rem;\n    font-weight: 500;\n    line-height: 3.8rem;\n    margin-right: 1rem; }\n\n.balance :last-child {\n    font-size: 2rem;\n    font-weight: 400;\n    line-height: 2.4rem; }\n\n.tabs {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto; }\n\n.tabs .tabs-header {\n    display: flex;\n    justify-content: space-between;\n    flex: 0 0 auto; }\n\n.tabs .tabs-header .tab {\n      border-radius: 1rem 1rem 0 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 2rem;\n      line-height: 2.4rem;\n      flex: 1 0 auto;\n      cursor: pointer;\n      padding: 0 1rem;\n      height: 5rem; }\n\n.tabs .tabs-header .tab.hide {\n        display: none; }\n\n.tabs .tabs-header .tab:hover .icon {\n        transition: all 0.25s ease;\n        margin-top: -1rem; }\n\n.tabs .tabs-header .tab .icon {\n        transition: all 0.25s ease;\n        margin-right: 0.5rem;\n        width: 2rem;\n        height: 2.4rem; }\n\n.tabs .tabs-header .tab .icon.send {\n          background: center/contain no-repeat url('send.svg'); }\n\n.tabs .tabs-header .tab .icon.receive {\n          background: center/contain no-repeat url('receive-blue.svg'); }\n\n.tabs .tabs-header .tab .icon.history {\n          background: center/contain no-repeat url('history.svg'); }\n\n.tabs .tabs-header .tab .icon.contracts {\n          background: center/contain no-repeat url('contracts.svg'); }\n\n.tabs .tabs-header .tab .icon.messages {\n          background: center/contain no-repeat url('message.svg'); }\n\n.tabs .tabs-header .tab .icon.staking {\n          background: center/contain no-repeat url('staking.svg'); }\n\n.tabs .tabs-header .tab .indicator {\n        margin-left: 0.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 2rem;\n        font-size: 1.2rem;\n        line-height: 1.4rem;\n        min-width: 2.4rem;\n        height: 1.6rem; }\n\n.tabs .tabs-header .tab:disabled {\n        cursor: url('not-allowed.svg'), not-allowed; }\n\n.tabs .tabs-header .tab:not(:last-child) {\n        margin-right: 0.3rem; }\n\n.tabs .tabs-content {\n    display: flex;\n    padding: 1.5rem;\n    flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L0Q6XFxXb3JrXFx6YW5vX3VpXFxodG1sX3NvdXJjZS9zcmNcXGFwcFxcd2FsbGV0XFx3YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBTHZCO0lBT0ksYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVJ2QjtNQVdNLG9CQUFvQixFQUFBOztBQVgxQjtJQWVJLGtCQUFrQixFQUFBOztBQWZ0QjtNQW9CTSxTQUFTLEVBQUE7O0FBcEJmO1FBa0JRLDJDQUE0RCxFQUFBOztBQWxCcEU7TUF1Qk0sa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixTQUFTO01BQ1QsUUFBUTtNQUNSLFlBQVksRUFBQTs7QUEzQmxCO1FBNkJRLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7O0FBakNuQjtVQW1DVSwyQ0FBNEQsRUFBQTs7QUFuQ3RFOztZQXVDWSw4QkFBOEIsRUFBQTs7QUF2QzFDO1lBMENZLCtCQUErQixFQUFBOztBQTFDM0M7VUE4Q1UsZ0NBQWdDLEVBQUE7O0FBOUMxQztVQWlEVSxpQkFBaUI7VUFDakIsbUJBQW1CLEVBQUE7O0FBbEQ3QjtVQXFEVSxjQUFjO1VBQ2QsYUFBYTtVQUNiLGtCQUFrQixFQUFBOztBQXZENUI7WUF5RFksWUFBWTtZQUNaLFdBQVcsRUFBQTs7QUExRHZCO1lBNkRZLGNBQWM7WUFDZCxhQUFhLEVBQUE7O0FBOUR6QjtZQWlFWSxxRUFBd0YsRUFBQTs7QUFqRXBHO0lBd0VJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBOztBQTlFcEI7SUFpRkksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVSxFQUFBOztBQTFGZDtNQTRGTSxvQkFBb0I7TUFDcEIsYUFBYTtNQUNiLGNBQWMsRUFBQTs7QUE5RnBCO1FBZ0dRLGNBQWM7UUFDZCx1REFBMEUsRUFBQTs7QUFqR2xGO1FBb0dRLG9EQUF1RSxFQUFBOztBQXBHL0U7UUF1R1EsZUFBZSxFQUFBOztBQXZHdkI7UUEwR1EsNERBQStFO1FBQy9FLGVBQWUsRUFBQTs7QUEzR3ZCO0lBZ0hJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7O0FBbEhyQjtNQW9ITSxlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLGFBQWE7TUFDYixjQUFjLEVBQUE7O0FBdkhwQjtRQXlIUSx1REFBMEUsRUFBQTs7QUF6SGxGO1FBNEhRLG9EQUF1RSxFQUFBOztBQUsvRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFMckI7SUFPSSxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBUnJCO01BVU0sMEJBQTBCO01BQzFCLGFBQWE7TUFDYixjQUFjO01BQ2Qsb0RBQXVFLEVBQUE7O0FBYjdFO01BZ0JNLG1FQUFzRixFQUFBOztBQUk1RjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFMM0I7SUFPSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTs7QUFWdEI7SUFhSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYyxFQUFBOztBQUhoQjtJQUtJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYyxFQUFBOztBQVBsQjtNQVNNLDRCQUE0QjtNQUM1QixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxlQUFlO01BQ2YsZUFBZTtNQUNmLFlBQVksRUFBQTs7QUFsQmxCO1FBb0JRLGFBQWEsRUFBQTs7QUFwQnJCO1FBd0JVLDBCQUEwQjtRQUMxQixpQkFBaUIsRUFBQTs7QUF6QjNCO1FBNkJRLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGNBQWMsRUFBQTs7QUFoQ3RCO1VBa0NVLG9EQUF1RSxFQUFBOztBQWxDakY7VUFxQ1UsNERBQStFLEVBQUE7O0FBckN6RjtVQXdDVSx1REFBMEUsRUFBQTs7QUF4Q3BGO1VBMkNVLHlEQUE0RSxFQUFBOztBQTNDdEY7VUE4Q1UsdURBQTBFLEVBQUE7O0FBOUNwRjtVQWlEVSx1REFBMEUsRUFBQTs7QUFqRHBGO1FBcURRLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsY0FBYyxFQUFBOztBQTdEdEI7UUFnRVEsMkNBQTRELEVBQUE7O0FBaEVwRTtRQW1FUSxvQkFBb0IsRUFBQTs7QUFuRTVCO0lBd0VJLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDIuOHJlbSAzcmVtO1xyXG4gIG1pbi13aWR0aDogOTVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5yZWQtdGV4dCB7XHJcbiAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuOHJlbTtcclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMy4ycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2V0dGluZ3MtYmxvY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL25vdC1hbGxvd2VkLnN2ZyksIG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5zZXR0aW5ncy1kcm9wZG93biB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgICB0b3A6IDNyZW07XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB3aWR0aDogMTlyZW07XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjFyZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGN1cnNvcjogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9ub3QtYWxsb3dlZC5zdmcpLCBub3QtYWxsb3dlZDtcclxuXHJcbiAgICAgICAgICAuaWNvbiBzdmcgcGF0aCxcclxuICAgICAgICAgIC5pY29uIHN2ZyAuc3QwIHtcclxuICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZGFyay1saW5lIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGMwYzNhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYucmVzeW5jLXdhbGxldCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS43cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5jbG9zZS13YWxsZXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2Nsb3NlLXdhbGxldC1kcm9wZG93bi5zdmcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xyXG4gICAgICB3aWR0aDogMi40cmVtO1xyXG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgJi5hY2NvdW50IHtcclxuICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2FjY291bnQuc3ZnKTtcclxuICAgICAgfVxyXG4gICAgICAmLmxvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbG9jay5zdmcpO1xyXG4gICAgICB9XHJcbiAgICAgICYuZGV0YWlscyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgICYuY2xvc2Utd2FsbGV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2Nsb3NlLXdhbGxldC5zdmcpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxpYXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIC5pY29uIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuICAgICAgd2lkdGg6IDIuNHJlbTtcclxuICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICYuZWRpdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9kZXRhaWxzLnN2Zyk7XHJcbiAgICAgIH1cclxuICAgICAgJi50cmFuc2ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zZW5kLnN2Zyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmFkZHJlc3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMS45cmVtO1xyXG4gIC5pY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgJi5jb3B5IHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgIHdpZHRoOiAyLjRyZW07XHJcbiAgICAgIGhlaWdodDogMi40cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvcHkuc3ZnKTtcclxuICAgIH1cclxuICAgICYuY29waWVkIHtcclxuICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9jb21wbGV0ZS10ZXN0d2FsbGV0LnN2Zyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5iYWxhbmNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgbWFyZ2luOiAxLjZyZW0gMCAyLjVyZW0gMDtcclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzLjhyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIDpsYXN0LWNoaWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gIH1cclxufVxyXG4udGFicyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIC50YWJzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAudGFiIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICYuaGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgJi5zZW5kIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvc2VuZC5zdmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnJlY2VpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9yZWNlaXZlLWJsdWUuc3ZnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5oaXN0b3J5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaGlzdG9yeS5zdmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNvbnRyYWN0cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdCB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2NvbnRyYWN0cy5zdmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm1lc3NhZ2VzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbWVzc2FnZS5zdmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnN0YWtpbmcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQgdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9zdGFraW5nLnN2Zyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDIuNHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgfVxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBjdXJzb3I6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvbm90LWFsbG93ZWQuc3ZnKSwgbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGFicy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/services/variables.service */ "./src/app/_helpers/services/variables.service.ts");
/* harmony import */ var _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/services/backend.service */ "./src/app/_helpers/services/backend.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/pipes/int-to-money.pipe */ "./src/app/_helpers/pipes/int-to-money.pipe.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WalletComponent = /** @class */ (function () {
    function WalletComponent(route, router, backend, variablesService, ngZone, translate, intToMoneyPipe, store) {
        this.route = route;
        this.router = router;
        this.backend = backend;
        this.variablesService = variablesService;
        this.ngZone = ngZone;
        this.translate = translate;
        this.intToMoneyPipe = intToMoneyPipe;
        this.store = store;
        this.settingsButtonDisabled = true;
        this.copyAnimation = false;
        this.walletLoaded = false;
        this.delWalletDialogVisible = false;
        this.exportHistoryDialogVisible = false;
        this.walletSynchVisible = false;
        this.tabs = [
            {
                title: 'WALLET.TABS.HISTORY',
                icon: 'history',
                link: '/history',
            },
            {
                title: 'WALLET.TABS.SEND',
                icon: 'send',
                link: '/send',
            },
            {
                title: 'WALLET.TABS.RECEIVE',
                icon: 'receive',
                link: '/receive',
            },
            {
                title: 'WALLET.TABS.CONTRACTS',
                icon: 'contracts',
                link: '/contracts',
            },
            {
                title: 'WALLET.TABS.STAKING',
                icon: 'staking',
                link: '/staking',
                indicator: false,
            },
        ];
        if (!this.variablesService.currentWallet && this.variablesService.wallets.length > 0) {
            this.variablesService.setCurrentWallet(0);
        }
        this.walletLoaded = this.variablesService.currentWallet.loaded ? true : false;
    }
    WalletComponent.prototype.onKeyPresed = function () {
        if (!this.openDropdown) {
            this.walletSynchVisible = true;
        }
    };
    WalletComponent.prototype.onKeyUpPresed = function () {
        if (!this.openDropdown) {
            this.walletSynchVisible = false;
        }
    };
    WalletComponent.prototype.onClick = function (targetElement) {
        if (targetElement.dataset.target !== 'wallet-dropdown-button' && this.openDropdown) {
            this.openDropdown = false;
            this.walletSynchVisible = false;
        }
    };
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsButtonInterval = setInterval(function () {
            if (_this.variablesService.daemon_state == 2 || _this.walletLoaded) {
                _this.settingsButtonDisabled = false;
                clearInterval(_this.settingsButtonInterval);
            }
        }, 1000);
        this.walletsSubscription = this.store
            .select('sync')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (value) {
            var data = value.filter(function (item) { return item.wallet_id === _this.variablesService.currentWallet.wallet_id; })[0];
            if (data && !data.sync) {
                var in_progress = void 0;
                var values = _this.store.value.sync;
                if (values && values.length) {
                    in_progress = values.filter(function (item) { return item.sync; });
                    _this.variablesService.sync_started = !!(in_progress && in_progress.length);
                    if (!in_progress) {
                        _this.variablesService.sync_started = false;
                    }
                }
                else {
                    _this.variablesService.sync_started = false;
                }
            }
        });
        this.copyAnimation = false;
        if (this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
            this.variablesService.currentWallet.wakeAlias = false;
        }
        this.aliasSubscription = this.variablesService.getAliasChangedEvent.subscribe(function () {
            if (_this.variablesService.currentWallet.alias.hasOwnProperty('name')) {
                _this.variablesService.currentWallet.wakeAlias = false;
            }
        });
        this.updateWalletStatus();
    };
    WalletComponent.prototype.copyAddress = function () {
        var _this = this;
        this.backend.setClipboard(this.variablesService.currentWallet.address);
        this.copyAnimation = true;
        this.copyAnimationTimeout = window.setTimeout(function () {
            _this.copyAnimation = false;
        }, 2000);
    };
    WalletComponent.prototype.getTooltip = function () {
        var _this = this;
        this.balanceTooltip = document.createElement('div');
        var available = document.createElement('span');
        available.setAttribute('class', 'available');
        available.innerHTML = this.translate.instant('WALLET.AVAILABLE_BALANCE', {
            available: this.intToMoneyPipe.transform(this.variablesService.currentWallet.unlocked_balance),
            currency: this.variablesService.defaultCurrency,
        });
        this.balanceTooltip.appendChild(available);
        var locked = document.createElement('span');
        locked.setAttribute('class', 'locked');
        locked.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE', {
            locked: this.intToMoneyPipe.transform(this.variablesService.currentWallet.balance.minus(this.variablesService.currentWallet.unlocked_balance)),
            currency: this.variablesService.defaultCurrency,
        });
        this.balanceTooltip.appendChild(locked);
        var link = document.createElement('span');
        link.setAttribute('class', 'link');
        link.innerHTML = this.translate.instant('WALLET.LOCKED_BALANCE_LINK');
        link.addEventListener('click', function () {
            _this.openInBrowser(_shared_constants__WEBPACK_IMPORTED_MODULE_6__["LOCKED_BALANCE_HELP_PAGE"]);
        });
        this.balanceTooltip.appendChild(link);
        return this.balanceTooltip;
    };
    WalletComponent.prototype.onHideTooltip = function () {
        this.balanceTooltip = null;
    };
    WalletComponent.prototype.openInBrowser = function (link) {
        this.backend.openUrlInBrowser(link);
    };
    WalletComponent.prototype.togleMenuDropdown = function () {
        if (!this.openDropdown) {
            this.openDropdown = true;
        }
        else {
            this.openDropdown = false;
            this.walletSynchVisible = false;
        }
    };
    WalletComponent.prototype.resyncCurrentWallet = function (id) {
        this.backend.resyncWallet(id);
    };
    WalletComponent.prototype.showConfirmDialog = function (wallet_id) {
        this.delWalletDialogVisible = true;
        this.closeWalletId = wallet_id;
    };
    WalletComponent.prototype.closeExportModal = function (confirmed) {
        if (confirmed) {
            this.exportHistoryDialogVisible = false;
        }
    };
    WalletComponent.prototype.confirmed = function (confirmed) {
        if (confirmed) {
            this.closeWallet(this.closeWalletId);
        }
        this.delWalletDialogVisible = false;
    };
    WalletComponent.prototype.closeWallet = function (wallet_id) {
        var _this = this;
        this.backend.closeWallet(wallet_id, function () {
            for (var i = _this.variablesService.wallets.length - 1; i >= 0; i--) {
                if (_this.variablesService.wallets[i].wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.variablesService.wallets.splice(i, 1);
                }
            }
            _this.ngZone.run(function () {
                if (_this.variablesService.wallets.length) {
                    _this.variablesService.currentWallet = _this.variablesService.wallets[0];
                    _this.router.navigate(['/wallet/']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
            if (_this.variablesService.appPass) {
                _this.backend.storeSecureAppData();
            }
        });
    };
    WalletComponent.prototype.ngOnDestroy = function () {
        this.aliasSubscription.unsubscribe();
        if (this.walletsSubscription) {
            this.walletsSubscription.unsubscribe();
        }
        clearTimeout(this.copyAnimationTimeout);
    };
    WalletComponent.prototype.updateWalletStatus = function () {
        var _this = this;
        this.backend.eventSubscribe('wallet_sync_progress', function (data) {
            var wallet_id = data.wallet_id;
            if (wallet_id === _this.variablesService.currentWallet.wallet_id) {
                _this.ngZone.run(function () {
                    _this.walletLoaded = false;
                });
            }
        });
        this.backend.eventSubscribe('update_wallet_status', function (data) {
            var wallet_state = data.wallet_state;
            var wallet_id = data.wallet_id;
            _this.ngZone.run(function () {
                if (wallet_state === 2 && wallet_id === _this.variablesService.currentWallet.wallet_id) {
                    _this.walletLoaded =
                        (_this.variablesService.getWallet(_this.variablesService.currentWallet.wallet_id) !== null &&
                            _this.variablesService.getWallet(_this.variablesService.currentWallet.wallet_id).loaded)
                            ? true
                            : false;
                }
                else {
                    _this.walletLoaded = false;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown.shift', ['$event.key']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WalletComponent.prototype, "onKeyPresed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup.shift', ['$event.key']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WalletComponent.prototype, "onKeyUpPresed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalletComponent.prototype, "onClick", null);
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _helpers_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"],
            _helpers_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _helpers_pipes_int_to_money_pipe__WEBPACK_IMPORTED_MODULE_5__["IntToMoneyPipe"],
            store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/assets/icons/icons.json":
/*!*************************************!*\
  !*** ./src/assets/icons/icons.json ***!
  \*************************************/
/*! exports provided: logo, contacts, settings, addnew, exit, history, send, receive, contracts, messages, staking, default */
/***/ (function(module) {


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var state = {
    wallets: undefined,
    sync: undefined,
};
var Store = /** @class */ (function () {
    function Store() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](state);
        this.store = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (name) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["pluck"])(name));
    };
    // tslint:disable-next-line:no-shadowed-variable
    Store.prototype.set = function (name, state) {
        var _a;
        this.subject.next(__assign({}, this.value, (_a = {}, _a[name] = state, _a)));
    };
    return Store;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\chinet_ui\html_source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);