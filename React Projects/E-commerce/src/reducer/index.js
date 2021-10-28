import {combineReducers} from 'redux';
import select_product from './select_product';
import set_product from './Set_Product';


export const allReducers=combineReducers({
    set_product:set_product,
    select_product:select_product
})