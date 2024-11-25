import { useDispatch } from 'react-redux';

import { useRouter } from 'next/navigation';
import { setIsAuth } from '@/components/features/slide/authSlice';
import { useLoginMutation, useCreatePasswordMutation, useCreateCategoriesMutation  } from '@/components/features/app/authSlide';
import { useToast } from '@/hooks/use-toast'

export const useAuth = () => {
    const { toast } = useToast()
    const dispatch = useDispatch();
    const router = useRouter();
    const [login, { isLoading, error, isError, data }] = useLoginMutation();
    const [createPassword] = useCreatePasswordMutation();
    const [createCategory] = useCreateCategoriesMutation();

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
                style: {
                    background: '#000',
                    color: '#fff'
                }
              });
            router.push('/dashboard');
        } catch (error) {
            // if (error)
            toast({
                title: `${error.status}`,
                description: `${error.data.message}`,
                style: {
                    background: '#000',
                    color: '#fff'
                }
              });
            console.log(error)
        }

        // dispatch(setCredentials({ ...userData, user: email }));
    }

    const handleCreatePassword = async (email, password) => {
        try {
            const data = await createPassword({ email, password }).unwrap();
            console.log(data)
            toast({
                // title: "Agency Invited",
                description: "Password created successfully",
                style: {
                    background: '#000',
                    color: '#fff',
                }
              });
            router.push('/auth/login');
        } catch (error) {
            // if (error)
            toast({
                title: `${error.status}`,
                description: `${error.data}`,
                style: {
                    background: '#000',
                    color: '#fff',
                }
              });
            console.log(error)
        }
    }

    const handleCreateCategory = async (name, description) => {
        try {

           const data = await createCategory({name, description}).unwrap();
           console.log(data)
           toast({
               description: "Report category created successfully",
               style: {
                   background: '#000',
                   color: '#fff',
               }
           })
        } catch (error) {
            toast({
                title: `${error.status}`,
                description: `${error.data}`,
                style: {
                    background: '#000',
                    color: '#fff',
                }
              });
            console.log(error)
        }
    }

    return {
        handlelogin,
        handleCreatePassword,
        handleCreateCategory,
        isLoading, error, isError, data
    }
}

