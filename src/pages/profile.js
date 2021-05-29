import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';
import Header from '../components/Header';

const Profile = () => {
    const history = useHistory();
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        async function checkUserExists() {
            const user = await getUserByUsername(username);
            if (user.length > 0) {
                setUser(user);
                setUserExists(true);
            } else {
                history.push(ROUTES.NOT_FOUND);
            }
        }
        checkUserExists();
    }, [username, history]);

    return userExists ? (
      <div className="bg-gray-background">
        <Header />
            <div className="mx-auto max-w-screen-lg"></div>
      </div>
    ) : null;
}

export default Profile;
