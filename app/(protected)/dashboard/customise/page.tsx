"use client"
import Tabs from "@/components/customise/tabs";
import { useGetcategoriesQuery } from "@/components/features/app/authSlide";

export default function CustomizePage() {
    const {
        data,
        isLoading,
        isError,
        error,
    } = useGetcategoriesQuery({});

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>;
    }

    return (
        <>
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex items-start justify-start flex-col gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-700">Customise</h2>
                <p className="text-md text-gray-500">Create and customise categories here</p>
            </div>
            {/* Page Body - Use for side padding on the top and sides */}
            <div className="flex justify-start gap-6 mb-6 mt-4 items-start flex-col">
                <div className="flex justify-between mb-6 items-center">
                    <Tabs />
                </div>

                <div className="my-6 h-0.5 w-[100%] bg-slate-400" />

                <div className="grid grid-cols-4 gap-4">
                    {/* Displaying the categories */}
                    {data.data.map((category: { _id: string; name: string; description: string }) => (
                        <div key={category._id} className="border p-4 mb-2 rounded border-slate-400">
                            <h3 className="text-lg font-semibold text-gray-800 capitalize">{category.name}</h3>
                            <p className="text-gray-800 capitalize">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}