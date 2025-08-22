import Image from "next/image"

const Logo = () => {
    return (
        <Image
            src='/logo_Solo.svg'
            alt='Logo Budget tracker'
            width={600}
            height={250}
            priority={true}
        />
    )
}

export default Logo