export const loginAction = (state, action) => {
  state.value = action.payload;
  const propertiesToAdd = [
    "email",
    "firstName",
    "lastName",
    "userName",
    "token",
  ];
  propertiesToAdd.forEach((property) => {
    sessionStorage.setItem(property, action.payload[property]);
  });
};
