import { useGetResponderQuery } from "src/features/app/responderSlide";

export const useResponder = () => {


    const {
        data,
        // isLoading,
        // isSuccess,
        // isError,
        // error,
      } = useGetResponderQuery();


    //   const totalCircles = data?.data?.totalCircles || 0;
      const responder = data?.data || []

  return {
    // totalCircles,
    responder
  }
}

