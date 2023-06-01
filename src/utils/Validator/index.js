module.exports = {
    usernameCheck(x) {
        const username = /^[a-z ,.'-]+$/i;
        return x.match(username);
    },
    emailCheck(x) {
        const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return x.match(email);
    }
}