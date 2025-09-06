import Image from "next/image"

const LogoSolo = () => {
    return (
        <Image
            src='/logo_Solo.svg'
            alt='Logo Budget tracker'
            width={80}
            height={80}
            priority={true}
        />
    )
}

export default LogoSolo