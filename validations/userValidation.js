import {object,string,number} from 'yup';


export const userVal = object().shape({
    
    password:string().required(),
    email: string().email().required()
})