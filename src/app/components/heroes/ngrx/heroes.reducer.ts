import { Action } from "@ngrx/store";
import { Heroe } from "src/app/services/heroes.service";

export function heroesReducer( state : Heroe[], action: Action) {
    switch( action.type ) {
        case "GET_HEROES":
            return state

        default:
            return state;
    }
}