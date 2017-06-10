var User = (function () {
    function User(options) {
        this.id = 'EMPTY';
        this.name = {
            first: 'EMPTY',
            last: 'EMPTY'
        };
        this.avatar = {
            thumbnail: ''
        };
        this.online = false;
        if (options) {
            this.id = options.id;
            this.name.first = options.name.first;
            this.name.last = options.name.last;
            this.avatar.thumbnail = options.avatar.thumbnail;
            this.online = options.online;
        }
    }
    return User;
}());
export { User };
//# sourceMappingURL=user.model.js.map