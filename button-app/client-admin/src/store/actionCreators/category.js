import { SET_CATEGORY, CREATE_CATEGORY } from "../actionTypes";

const urlServer =
  "https://buttons-p3-challange-1-server.herokuapp.com/products/categories";

export function fetchCategories() {
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
      return dispatch({ type: SET_CATEGORY, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function createCategories(category) {
  return async (dispatch) => {
    try {
      const response = await fetch(urlServer, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(category),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      dispatch(fetchCategories());
      return dispatch({ type: CREATE_CATEGORY, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteCategories(id) {
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
      dispatch(fetchCategories());
    } catch (err) {
      console.log(err);
    }
  };
}
