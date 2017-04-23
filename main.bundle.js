webpackJsonp([2,4],{

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(327);
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(684),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/app/app.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(519);
var platform_browser_dynamic_1 = __webpack_require__(485);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(518);
var _1 = __webpack_require__(517);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = __webpack_require__(105);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(303);
var http_1 = __webpack_require__(481);
var clarity_angular_1 = __webpack_require__(520);
var app_component_1 = __webpack_require__(333);
var app_routing_1 = __webpack_require__(516);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                clarity_angular_1.ClarityModule.forRoot(),
                app_routing_1.ROUTING
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/app/app.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(327);
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/app/app.routing.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(333));
__export(__webpack_require__(515));
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/app/index.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/environments/environment.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(534);
__webpack_require__(527);
__webpack_require__(523);
__webpack_require__(529);
__webpack_require__(528);
__webpack_require__(526);
__webpack_require__(525);
__webpack_require__(533);
__webpack_require__(522);
__webpack_require__(521);
__webpack_require__(531);
__webpack_require__(524);
__webpack_require__(532);
__webpack_require__(530);
__webpack_require__(535);
__webpack_require__(700);
//# sourceMappingURL=/Users/druk/Sites/vsphere-automation-sdks/src/src/src/polyfills.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(83)();
// imports


// module
exports.push([module.i, ".clr-icon.clr-clarity-logo {\n  background-image: url(/vsphere-automation-sdk/images/vmw_oss.svg); }\n\n.hero {\n  background-color: #ddd;\n  text-align: center;\n  padding-bottom: 3em;\n  padding-top: 3em;\n  width: 100%; }\n  .hero .btn-custom {\n    display: inline-block;\n    text-align: center;\n    margin: auto; }\n\n.hero-image img {\n  max-width: 468px; }\n\n.icon {\n  display: inline-block;\n  height: 32px;\n  vertical-align: middle;\n  width: 32px; }\n  .icon.icon-github {\n    background: url(/vsphere-automation-sdk/images/github_icon.svg) no-repeat left 1px; }\n\n.nav-list li > a {\n  margin-bottom: 1em; }\n\n.section {\n  padding: .5em 0; }\n\n.contributor {\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin-bottom: 1.5em;\n  margin-right: 2.5em;\n  max-width: 104px;\n  text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n    <header class=\"header header-6\">\n        <div class=\"branding\">\n            <a href=\"https://vmware.github.io/\" class=\"nav-link\">\n                <span class=\"clr-icon clr-clarity-logo\"></span>\n                <span class=\"title\">VMware&reg; Open Source Program Office</span>\n            </a>\n        </div>\n    </header>\n    <div class=\"hero\">\n        <div class=\"hero-image\"><img src=\"images/vsphere_automation_sdks.png\" alt=\"\"></div>\n        <h3>Software Development Kits for accessing vSphere’s Automation endpoint APIs</h3>\n        <h4>\n            <i class=\"icon icon-github\"></i> Fork vSphere Automation SDKs in:\n            <br>\n            <a href=\"https://github.com/vmware/vsphere-automation-sdk-rest\" class=\"btn btn-primary\">REST</a> <a href=\"https://github.com/vmware/vsphere-automation-sdk-python\" class=\"btn btn-primary\">Python</a> <a href=\"https://github.com/vmware/vsphere-automation-sdk-java/\" class=\"btn btn-primary\">Java</a> <a href=\"https://github.com/vmware/vsphere-automation-sdk-perl/\" class=\"btn btn-primary\">Perl</a>\n        </h4>\n    </div>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n            <div id=\"section1\" class=\"section\">\n            <h2>Overview</h2>\n\n            <p>The vSphere Automation SDKs bundle client libraries, documentation and sample code for accessing the vSphere Automation endpoint and providing the ability to manage and configure the services provided by this API in a variety of different languages, the services currently include:</p>\n\n            <br>\n\n            <ul>\n                <li>vCenter Server Appliance (VCSA) features</li>\n                <li>Virtual Machine Management</li>\n                <li>Content Library</li>\n                <li>Tagging</li>\n            </ul>\n            </div>\n\n            <div id=\"section2\" class=\"section\">\n            <h2>Getting the SDKs</h2>\n\n            <p>The vSphere Automation SDK’s are available from VMware’s GitHub source repositories. Simply chose the SDK for your preferred language, clone the repo and follow the instructions in the README.md in the root folder of the repo to be up and running in minutes!</p>\n\n            <p>For more information refer to the vSphere Automation SDK Overview.</p>\n\n            <h2>Support</h2>\n\n            <p>The vSphere Automation SDK’s are released as open source software and, presently, provides community support through our GitHub project pages. If you encounter an issue or have a question, feel free to reach out via Github issues.</p>\n            </div>\n\n            <div id=\"section3\" class=\"section\">\n            <h2>Contributors</h2>\n\n            <p>\n                <a title=\"Alan Renouf\" href=\"https://github.com/alanrenouf\"><img class=\"contributor\" alt=\"Alan Renouf\" src=\"https://avatars1.githubusercontent.com/u/4140758?v=3\"></a>\n                <a title=\"Tianhao He\" href=\"https://github.com/tianhao64\"><img class=\"contributor\" alt=\"Tianhao He\" src=\"https://avatars1.githubusercontent.com/u/5871885?v=3\"></a>\n            </p>\n            </div>\n\n            <div id=\"section4\" class=\"section\">\n            <h2>Contributing</h2>\n\n            <p>You are invited to contribute new features, fixes, or updates, large or small; we are always thrilled to receive <a href=\"https://help.github.com/articles/creating-a-pull-request\">pull requests</a>, and do our best to process them as fast as we can. If you wish to contribute code, you should sign <a href=\"https://vmware.github.io/admiral/assets/files/vmware_cla.pdf\" target=\"_blank\">Contributor License Agreement</a> and return a copy to <a href=\"mailto:osscontributions@vmware.com\">osscontributions@vmware.com</a> before we can merge your contribution. For any questions about the CLA process, please refer to our <a href=\"https://cla.vmware.com/faq\">FAQ</a>.</p>\n            <p>Before you start to code, we recommend discussing your plans through a GitHub issue or discuss it first with the official project maintainers via <a href=\"https://vmwarecode.slack.com/messages/vsphere-sdks\">Slack</a>, especially for more ambitious contributions. This gives other contributors a chance to point you in the right direction, give you feedback on your design, and help you find out if someone else is working on the same thing. Join Slack via <a href=\"https://code.vmware.com/web/code/join\">https://code.vmware.com/web/code/join</a>.</p>\n            </div>\n\n            <div id=\"section5\" class=\"section\">\n            <h2>Licenses</h2>\n\n            <p>VMware’s Automation SDKs are licensed under the MIT License as documented in the LICENSE file found in the root of each SDK distribution.</p>\n            </div>\n\n        </div>\n        <nav class=\"sidenav\" [clr-nav-level]=\"1\">\n            <section class=\"sidenav-content\">\n                <section class=\"nav-group\">\n                    <ul class=\"nav-list\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#section1\">Overview</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#section2\">Getting the SDKs</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#section3\">Support</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#section4\">Contributors</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#section5\">Contributing</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#section6\">Licenses</a>\n                        </li>\n                    </ul>\n                </section>\n            </section>\n        </nav>\n    </div>\n</clr-main-container>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[702]);
//# sourceMappingURL=main.bundle.js.map