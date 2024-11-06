export const authenticate = (email, password) => {
    const user = {
        email: "ejemplo@ejemplo.com",
        password: "123"
    };

    if (email === user.email && password === user.password) {
        return true;
    } else {
        return false;
    }
};