import { IUser } from './user.model';
import { IMessage } from './message.model';


export interface IDialog {
  id: string;
  user: IUser;
  message: IMessage;
}
