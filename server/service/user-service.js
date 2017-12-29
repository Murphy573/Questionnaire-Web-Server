
let users = [
    {
        userName: 'admin',
        password: '123456'
    }
];
module.exports = {
    register (user) {
        users.push(user);
        return true
    },
    validateUserDuplicated(name) {
        return !!this.getUser(name)
    },
    getUser(userName) {
        return users.find(user => user.userName === userName)
    },
    login(user) {
        let _user = this.getUser(user.userName);
        if(!_user){
            return '用户不存在，请注册!'
        }

        if(user.password !== _user.password){
            return '用户名或密码错误';
        }

        return 'true';
    }

};