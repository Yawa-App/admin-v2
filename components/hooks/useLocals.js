import { useToast } from "@/hooks/use-toast"
import { useGetAllLocalGovernmentQuery, useCreateLocalGovernmentMutation } from "../features/app/lgaApi"



export const useLocals = () => {
    const { toast } = useToast()
    const [createstate, { isLoading: stateLoading, }] = useCreateLocalGovernmentMutation()
    const { refetch: refetchState } = useGetAllLocalGovernmentQuery()

    const handleInviteLga = async (name, email, state) => {
        const credentials = {
            name, email, state
        }
        console.log(credentials)

        try {

            const response = await createstate(credentials).unwrap()
            console.log(response)
            toast({
                title: "Invite sent!",
                description: "LGA invited successfully",
                style: {
                    background: '#000',
                    color: '#fff',
                }
              })
            refetchState()
        } catch (error) {
            toast.error(error.data)
            console.log(error)

        }

    }





    return {
        handleInviteLga,
        stateLoading

    }
}