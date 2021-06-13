const loginAction = (email,password)=> async dispatch =>{
    dispatch({
        type:"LOGIN",
        payload: false
    })
}

export default loginAction;