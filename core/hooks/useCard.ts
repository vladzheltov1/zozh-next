import { useActions } from "@/core/redux/hooks/redux";
import { useRouter } from "next/router";

export const useCard = () => {
    const { resetCard } = useActions();
    const router = useRouter();

    const backToHub = () => {
        router.push("/hub").then(() => {
            router.reload();
            resetCard();
        });
    }

    return { backToHub };
}