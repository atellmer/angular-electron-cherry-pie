import { ActionTypes } from '@/actions/user';
import { IUser } from '@/shared/models/user.model';
import { IDialog } from '@/shared//models/dialog-item.model';


export interface State {
  me: IUser;
  dialogs: Array<IDialog>;
}

const initialState = {
  me: {
    id: '',
    name: {
      first: '',
      last: ''
    },
    avatar: {
      thumbnail: ''
    },
    online: false
  },
  dialogs: []
};

export function reducer(state: State = initialState, action: any): any {
  switch (action.type) {
  case ActionTypes.FETCH_USER:
    return {
      ...state,
      me: action.payload
    };

  case ActionTypes.FETCH_DIALOGS:
    return {
      ...state,
      dialogs: action.payload
    };

  default:
    return state;
  }
}
