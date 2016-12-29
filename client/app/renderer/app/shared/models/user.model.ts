export interface IUser {
  id: string;
  name: {
    first: string;
    last: string;
  };
  avatar: {
    thumbnail: string;
  };
  online: boolean;
}

export class User implements IUser {
  public id: string = 'EMPTY';
  public name: { first: string; last: string } = {
    first: 'EMPTY',
    last: 'EMPTY'
  };
  public avatar: { thumbnail: string } = {
    thumbnail: 'EMPTY'
  };
  public online: boolean = false;

  constructor(options?: IUser) {
    if (options) {
      this.id = options.id;
      this.name.first = options.name.first;
      this.name.last = options.name.last;
      this.avatar.thumbnail = options.avatar.thumbnail;
      this.online = options.online;
    }
  }
}
