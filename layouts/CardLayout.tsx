import { Wrapper } from "@/components/UI";
import { CardHeader } from "@/core/components/Card";

export const CardLayout = ({ children }) => {
    return (
        <>
            <CardHeader />
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}