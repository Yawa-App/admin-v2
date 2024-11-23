import { useGetCirclesQuery } from "src/features/app/circleslide";

export const useCircle = () => {


    const {
        data,
        // isLoading,
        // isSuccess,
        // isError,
        // error,
      } = useGetCirclesQuery();


      const totalCircles = data?.data?.totalCircles || 0;
      const circles = data?.data?.circles || []

  return {
    totalCircles,
    circles
  }
}

