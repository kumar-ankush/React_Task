const initialState={
    // user: [{ email:"ankush-kumar@outlook.com",name:"Ankush" ,password:"1234" },{ email:"asingh470@gmail.com",name:"Jasper" ,password:"1234" }],
    user:[{email:"",password:""}],
    errors: {},
    redirect:false
}
const reducer=(state=initialState,action)=>{
    if(action.type==='Submit'){
        return{
        ...state,
        errors:action.value // This will give the error Object here
        };
    }
    else if(action.type==='Email')
    {
        return {
            ...state,
            email:[action.value]
        }
    }
    else if(action.type==='Password')
    {
        return {
            ...state,
            password:[action.value]
        }
    } else return state;
}
export default reducer;