'use client'

export function Header ({ title }: { title: string }) {
    return (
        <>
            <h2 className='text-gray-800 font-bold text-2xl'>{title}</h2>
        </>
    )
}
export function SubHeader ({ text }: { text: string }) {
    return (
        <>
            <h3 className='text-gray-800 text-lg font-bold mb-2'>{text}</h3>
        </>
    )
}