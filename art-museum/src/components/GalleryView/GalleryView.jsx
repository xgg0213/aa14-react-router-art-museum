// function GalleryView() {
//     return <h1>Hello from GalleryView</h1>
// }

// export default GalleryView;

import { useParams, Navigate, Outlet } from "react-router-dom";
import ArtImageTitle from "../ArtImageTitle";

function GalleryView({galleries}) {
    
    const {galleryId} = useParams();
    const gallery = galleries.find((g) => Number(g.gallerynumber) === Number(galleryId))

    // If no gallery is found, redirect to the home page
    if (!gallery) {
        return <Navigate to="/" replace />;
    }

    const arts = gallery.objects;
    
    return (
        <div>
            <h2>{gallery.name}</h2>
            <>
            {arts.map((art) => (
                <ArtImageTitle key={art.id} art={art} />  // Pass each artwork as a prop to ArtImageTile
            ))}
            </>
        </div>
    );
}

export default GalleryView;