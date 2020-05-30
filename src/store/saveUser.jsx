const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        payload: {
            user
        },
    }
}
export default saveUser;