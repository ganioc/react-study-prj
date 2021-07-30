import { async } from "q";
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getProducts as getProductsFromAPI } from "./ProductsData";

import { IProductsGetAllAction, IProductsLoadingAction, IProductsState, ProductsActionTypes } from "./ProductsTypes";

// Action creator
const loading: ActionCreator<IProductsLoadingAction> = () => {
    return {
        type: ProductsActionTypes.LOADING
    }
}

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loading());
        const products = await getProductsFromAPI();
        return dispatch({
            products,
            type: ProductsActionTypes.GETALL
        })
    }
};

