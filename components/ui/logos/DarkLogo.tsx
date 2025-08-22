import Image from "next/image"

const DarkLogo = () => {
    return (
        <Image
            src='/logo_Noche.svg'
            alt='Logo Budget tracker'
            width={600}
            height={250}
            priority={true}
        />
    )
}

export default DarkLogo