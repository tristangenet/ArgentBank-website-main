export const updateUserNameAction = (state, action) => {
  state.value = { ...state.value, userName: action.payload };
  sessionStorage.removeItem("userName");
  sessionStorage.setItem("userName", action.payload);
};
