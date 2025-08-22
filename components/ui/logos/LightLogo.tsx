import Image from "next/image"

const LightLogo = () => {
    return (
        <Image
            src='/logo_Dia.svg'
            alt='Logo Budget tracker'
            width={600}
            height={250}
            priority={true}
        />
    )
}

export default LightLogo