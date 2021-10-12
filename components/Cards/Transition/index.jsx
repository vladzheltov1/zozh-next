import transitionStyle from "./style.module.scss";
import { CSSTransition } from "react-transition-group";

export const Transition = () => {
    return (
        <CSSTransition timeout={1000} className={{
            enter: transitionStyle.transition_active,
            enterDone: transitionStyle.transition_enter_active
        }}>
            <div className={transitionStyle.transition_wrapper, "active"}>
                Переход
            </div>
        </CSSTransition>
    )
}