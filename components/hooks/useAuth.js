import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import { setIsAuth } from '@/components/features/slide/authSlice';
import { useLoginMutation } from '@/components/features/app/authSlide';
import { useToast } from '@/hooks/use-toast'

export const useAuth = () => {
    const { toast } = useToast()
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
            toast({
                // title: "Agency Invited",
                description: "Logged in successfully",
              });
            router.push('/dashboard');
        } catch (error) {
            // if (error)
            toast({
                // title: "Agency Invited",
                description: "Error logging in",
              });
            console.log(error)
        }

        // dispatch(setCredentials({ ...userData, user: email }));
    }


    return {
        handlelogin,
        isLoading, error, isError, data
    }
}

