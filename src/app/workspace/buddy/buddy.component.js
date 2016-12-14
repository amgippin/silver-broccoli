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
var pokemon_service_1 = require("../../pokemon/pokemon.service");
var BuddyComponent = (function () {
    function BuddyComponent(pokeSrv) {
        this.pokeSrv = pokeSrv;
        this.buddyList = [];
        this.pokedex = this.pokeSrv.getPokedex();
        this.pokemonInventory = this.pokeSrv.getPokemonFreshInventory();
    }
    BuddyComponent.prototype.selectPoke = function (pokemon) {
        pokemon.selected = !pokemon.selected;
        if (pokemon.selected) {
            this.buddyList.push(pokemon);
        }
        else {
            this.removePokemon(pokemon);
        }
    };
    BuddyComponent.prototype.candyInput = function (pokemon) {
        if (pokemon.candyHave < 0) {
            pokemon.candyHave = 0;
        }
        for (var i in pokemon.evol) {
            if (+i === 0) {
                pokemon.evol[i].candyNeed = this.pokedex.get(pokemon.evol[i].id).candy - pokemon.candyHave;
                pokemon.evol[i].catchNeed = Math.ceil(pokemon.evol[i].candyNeed / 3);
                pokemon.evol[i].disNeed = pokemon.evol[i].candyNeed * this.pokedex.get(pokemon.evol[i].id).candyDis;
            }
            else if (+i > 0) {
                pokemon.evol[i].candyNeed = pokemon.evol[i - 1].candyNeed + this.pokedex.get(pokemon.evol[i].id).candy;
                pokemon.evol[i].catchNeed = Math.ceil(pokemon.evol[i].candyNeed / 3);
                pokemon.evol[i].disNeed = pokemon.evol[i].candyNeed * this.pokedex.get(pokemon.evol[i].id).candyDis;
            }
        }
    };
    BuddyComponent.prototype.removePokemon = function (pokemon) {
        for (var i in this.buddyList) {
            if (this.buddyList[+i].id === pokemon.id) {
                this.buddyList.splice(+i, 1);
                pokemon.selected = false;
                return;
            }
        }
    };
    return BuddyComponent;
}());
BuddyComponent = __decorate([
    core_1.Component({
        selector: 'buddy-related',
        templateUrl: 'app/workspace/buddy/buddy.component.html',
        styleUrls: ['app/workspace/buddy/buddy.css', 'app/workspace/shared.css']
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], BuddyComponent);
exports.BuddyComponent = BuddyComponent;
//# sourceMappingURL=buddy.component.js.map