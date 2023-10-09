const userState = {
  id:""
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "Login_Success":
      return { ...state, id: action.payload };
    case "Login_Failed":
      return userState;
    default:
      return userState;
  }
};
