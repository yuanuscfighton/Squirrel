import {DECREMENT, INCREMENT} from "./constants";

const initState = -1;

export default function countReducer(preState = initState, action) {
  const {type, data} = action;

  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}