const { auth } = require("../config/firebase");


// Create User
const createUser = async (email, password, name) => {

    const user = await auth.createUser({
        email,
        password,
        displayName: name
    });

    return user;

};


// Get User
const getUser = async (uid) => {

    const user = await auth.getUser(uid);

    return user;

};


// Delete User
const deleteUser = async (uid) => {

    await auth.deleteUser(uid);

    return true;

};


module.exports = {

    createUser,
    getUser,
    deleteUser

};