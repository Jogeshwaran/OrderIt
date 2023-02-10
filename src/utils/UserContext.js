import {createContext} from 'react';

//default value for the context
const UserContext = createContext({user : {
    name : "Jogesh",
    email  : "jokrish923@gmai.com"
}})



export default UserContext;