
const userReducer = (state, action) => {
    const userExample = { user: 'User Example' }
    let updatedState = state;
    if (state === undefined) {
        return userExample;
    }
    switch (action.type) {
        case 'LOCALSTORAGE_USER':
            if (localStorage.getItem('user') !== null) {
                return localStorage.getItem('user');
            }
            return 'User Example';
        case 'SAVE_USER':
            updatedState = action.payload.user;
            localStorage.setItem('user', updatedState);
            return updatedState;
        default:
            return state;
    }
}
export { userReducer }