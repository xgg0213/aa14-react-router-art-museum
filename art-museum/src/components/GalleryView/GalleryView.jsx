// function GalleryView() {
//     return <h1>Hello from GalleryView</h1>
// }

// export default GalleryView;

import { useParams, Navigate } from "react-router-dom";

function GalleryView({galleries}) {
    
    const {galleryId} = useParams();
    const gallery = galleries.find((g) => Number(g.gallerynumber) === Number(galleryId))

    // If no gallery is found, redirect to the home page
    if (!gallery) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <h2>{gallery.name}</h2>
        </div>
    );
}

export default GalleryView;