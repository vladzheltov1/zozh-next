import { CardHeader } from "@/components/CardHeader"

export const CardLayout = ({ children }) => {
    return (
        <>
            <CardHeader />
            {children}
        </>
    )
}