import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

// Define and export the custom hoo
function useAuthStatus (auth) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLoggedIn(true)
                console.log(setIsLoggedIn);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return isLoggedIn;
};

export default useAuthStatus;
