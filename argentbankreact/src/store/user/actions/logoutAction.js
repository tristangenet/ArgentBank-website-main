export const logoutAction = (state) => {
  state.value = "";
  sessionStorage.clear();
};
