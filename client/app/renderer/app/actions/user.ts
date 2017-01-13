import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { IUser } from '../shared/models/user.model';
import { IDialog } from '../shared/models/dialog-item.model';


export const ActionTypes = {
  FETCH_USER: '[User] Fetch user',
  FETCH_DIALOGS: '[User] Fetch dialogs'
};

@Injectable()
export class UserActions {

  fetchUser(payload: IUser): Action {
    return {
      type: ActionTypes.FETCH_USER,
      payload
    };
  }

  fetchDialogs(payload: Array<IDialog>): Action {
    return {
      type: ActionTypes.FETCH_DIALOGS,
      payload
    };
  }
}
