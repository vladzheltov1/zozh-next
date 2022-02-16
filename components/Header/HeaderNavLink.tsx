import { IconProps } from "@rsuite/icons/lib/Icon";
import Link from "next/link";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";
import { Icon } from "../UI";

export interface IHeaderNavLinkProps {
    title: string,
    href: string,
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGElement>>
}

export const HeaderNavLink: FC<IHeaderNavLinkProps> = (props) => {
    const { title, href, icon } = props;
    return (
        <Link href={href}>
            <a>
                <Icon icon={icon} /> {title}
            </a>
        </Link>
    )
}