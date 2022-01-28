import { CardHeader } from "@/core/components/Card";

export const CardLayout = ({ children }) => {
    return (
        <>
            <CardHeader />
            {children}
        </>
    )
}