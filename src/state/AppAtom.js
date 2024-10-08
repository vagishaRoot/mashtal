import { atom } from "recoil";

const navigateState = atom({
  key: "navigateState",
  default: "",
});

const loginState = atom({
  key: "loginState",
  default: {},
});

export {navigateState, loginState}