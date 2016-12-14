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
var CpComponent = (function () {
    function CpComponent() {
        this.radioModel = 'cp';
    }
    return CpComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CpComponent.prototype, "pokemonInventory", void 0);
CpComponent = __decorate([
    core_1.Component({
        selector: 'cp-related',
        templateUrl: 'app/workspace/cp/cp.component.html'
    }),
    __metadata("design:paramtypes", [])
], CpComponent);
exports.CpComponent = CpComponent;
//# sourceMappingURL=cp.component.js.map