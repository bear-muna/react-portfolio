// Validators with regEx
module.exports = {
    usernameCheck(x) {
        const username = /^[a-z ,.'-]+$/i;
        return x.match(username);
    },
    emailCheck(x) {
        // eslint-disable-next-line
        const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return x.match(email);
    }
}