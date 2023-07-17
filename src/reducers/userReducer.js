const userReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_USER_TO_STATE":
        return action.payload;
  
      case "LOGOUT_USER":
        return {};
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  