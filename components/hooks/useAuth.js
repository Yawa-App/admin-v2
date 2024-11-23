import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import { setIsAuth } from '@/components/features/slide/authSlice';
import { useLoginMutation } from '@/components/features/app/authSlide';



export const useAuth = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const [login, { isLoading, error, isError, data }] = useLoginMutation();

    // Ensure router is available
    if (!router) {
        throw new Error('NextRouter was not mounted.');
    }

    const handlelogin = async (email, password) => {

        try {
            const data = await login({ email, password }).unwrap();
            console.log(data)
            dispatch(setIsAuth(data))
            localStorage.setItem('accessToken', data.token);
            console.log("dashboard")
            router.push('/');
        } catch (error) {
            console.log(error)
        }

        // dispatch(setCredentials({ ...userData, user: email }));
    }



    return {
        handlelogin,
        isLoading, error, isError, data
    }
}

