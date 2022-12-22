export const putTokenAtLocalStorage = (token) => localStorage.setItem('token', token);

export const getTokenFromLocalStorage = () => localStorage.getItem('token');
