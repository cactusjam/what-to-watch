import {AuthorizationStatus} from "../../../constants/constants";
import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";

const initialState = {
  id: 1,
  email: ``,
  userAvatar: ``,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER:
      return extend(state, action.payload);
  }

  return state;
};

export {user};
