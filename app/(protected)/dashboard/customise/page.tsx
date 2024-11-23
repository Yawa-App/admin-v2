"use client"
import Tabs from "@/components/customise/tabs";

export default function CustomizePage() {
    return (
        <>
        {/* <Sidebar /> */}
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex items-start justify-start flex-col gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-700">Customise</h2>
                <p className="text-md text-gray-500">Customise categories and skills here</p>
            </div>
        {/* Page Body - Use for side padding on the top and sides */}
            <div className="flex justify-between mb-6 items-center">
                <div className="flex justify-between mb-6 items-center">
                    <Tabs />
                </div>
            </div>
        </div>
        </>
    )
}