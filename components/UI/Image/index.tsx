export interface IImageProps {
    alt: string,
    src: string
}

export const Image = ({ alt = "", src = "" }: IImageProps) => {
    return (
        <img src={src} alt={alt} />
    )
}