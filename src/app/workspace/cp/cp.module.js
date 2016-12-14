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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var cp_component_1 = require("./cp.component");
var excel_module_1 = require("./excel/excel.module");
var pokemon_module_1 = require("../../pokemon/pokemon.module");
var single_module_1 = require("./single/single.module");
var CpModule = (function () {
    function CpModule() {
    }
    return CpModule;
}());
CpModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, excel_module_1.ExcelModule, forms_1.FormsModule, ng2_bootstrap_1.Ng2BootstrapModule, pokemon_module_1.PokemonModule, single_module_1.SingleModule],
        declarations: [cp_component_1.CpComponent],
        exports: [cp_component_1.CpComponent]
    }),
    __metadata("design:paramtypes", [])
], CpModule);
exports.CpModule = CpModule;
//# sourceMappingURL=cp.module.js.map