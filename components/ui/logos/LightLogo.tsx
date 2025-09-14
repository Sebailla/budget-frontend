import Image from "next/image"

const LightLogo = () => {
    return (
        <Image
            src='/Logo_Dia.svg'
            alt='Logo Budget tracker'
            width={650}
            height={250}
            priority={true}
        />
    )
}

export default LightLogo