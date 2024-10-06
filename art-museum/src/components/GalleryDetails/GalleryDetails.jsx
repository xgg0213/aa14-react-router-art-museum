import { useParams } from "react-router-dom";

function GalleryDetails({galleries}) {
    const galleryId = useParams();
    const gallery = galleries.find((g) => {String(g.galleryId) === galleryId})
    return (
        <div>
            <h2>{gallery.name}</h2>
        </div>
    )
};

export default GalleryDetails;