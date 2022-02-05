export interface IImageProps {
    alt: string,
    src: string
}

/**
 * @deprecated use next/image instead
 */
export const Image = ({ alt = "", src = "" }: IImageProps) => {
    return (
        <img src={src} alt={alt} />
    )
}