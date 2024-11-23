import { useGetUsersQuery } from "src/features/app/userSlide";


export const useUsers = () => {


    const {
        data,
        // isLoading,
        // isSuccess,
        // isError,
        // error,
      } = useGetUsersQuery();

      const totalUsers = data?.data?.totalUsers || 0;
      const userdata = data?.data?.users || []



  return {
totalUsers,
userdata



  }
}


