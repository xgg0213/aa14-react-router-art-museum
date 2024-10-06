import { Link } from 'react-router-dom';


function ArtImageTitle({art}) {
    const placeholderImage = "path-to-placeholder-image.jpg";
    return (
        <div>
            <Link to={`art/${art.id}`}>
                <img src={art.primaryimageurl? art.primaryimageurl: placeholderImage} alt={art.title} />
            </Link>
            <p>{art.title}</p>  {/* Display the title of the artwork */}
        </div>
    )
}

export default ArtImageTitle;