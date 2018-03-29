const webToken =  {
    setToken: (item) => {
        localStorage.setItem('token',item);
    },
    getToken: () => {
        return localStorage.getItem('token');
    },
    tokenExist: () => {
        const token = localStorage.getItem('token');
        return token ? true : false;
    }
}

export const storage = {
    webToken
}