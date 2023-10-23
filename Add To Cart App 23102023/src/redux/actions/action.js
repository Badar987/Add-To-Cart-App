//Add Itms
export const ADD = (item) => {
    return{
        type: "ADD_Cart",
        payload: item
    }
}

//Remoe items

export const DEL = (id) => {
  return {
    type: "RMV_Cart",
    payload: id,
  };
};

//Remove Indvidual Items

export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};