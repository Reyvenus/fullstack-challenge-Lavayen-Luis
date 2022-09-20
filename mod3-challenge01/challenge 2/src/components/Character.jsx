
export const Character = ({ name, status, species, image, setImage }) => {

    const showImage = () => {
        setImage(image)
    }

    return (
        <div
            className='color-square'
            onClick={showImage}>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <img src={image} alt="no image" />
        </div>
    )
}
