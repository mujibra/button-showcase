import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ERROR,
  SET_PRODUCTS_DETAIL,
} from "../actionTypes";

const urlServer =
  "https://buttons-p3-challange-1-server.herokuapp.com/products";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch(urlServer, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      return dispatch({ type: SET_PRODUCTS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createProduct(product) {
  return async (dispatch) => {
    try {
      const response = await fetch(urlServer, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      return dispatch({ type: SET_PRODUCTS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchProductsDetail(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlServer}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      return await dispatch({ type: SET_PRODUCTS_DETAIL, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteProduct(id) {
  console.log(id);
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlServer}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      dispatch(fetchProducts());
    } catch (err) {
      console.log(err);
    }
  };
}

export function editProduct(id, product) {
  return async (dispatch) => {
    console.log(id);
    try {
      const response = await fetch(`${urlServer}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data.message;
      }
      return dispatch({ type: SET_PRODUCTS_DETAIL, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}
