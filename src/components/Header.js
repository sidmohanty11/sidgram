import React, {useContext} from 'react';
import { FirebaseContext } from '../context/firebase';
import { UserContext } from "../context/user";
const Header = () => {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);
    return (
        <div>
            
        </div>
    )
}

export default Header;
