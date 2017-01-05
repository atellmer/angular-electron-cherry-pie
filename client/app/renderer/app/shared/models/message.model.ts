import { IUser } from './user.model';


export interface IMessage {
  from: IUser;
  to: IUser;
  value: {
    text: string;
  };
  status: {
    delivered: boolean;
    read: boolean;
    new: boolean;
  };
  timestamp: Date;
}
