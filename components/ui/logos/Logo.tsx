import Image from "next/image"

const LogoSolo = () => {
    return (
        <Image
            src='/Logo_Solo.svg'
            alt='Logo Budget tracker'
            width={64}
            height={64}
            priority={true}
        />
    )
}

export default LogoSolo