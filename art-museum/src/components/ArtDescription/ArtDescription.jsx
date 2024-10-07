import { useParams, Link } from 'react-router-dom'

function ArtDescription({galleries}) {
    const { galleryId, artId } = useParams();
    const gallery = galleries.find(g => Number(g.gallerynumber) === Number(galleryId));
    const art = gallery.objects.find(a => Number(a.id) === Number(artId));
  
    // if (!art) {
    //   return (
    //     <div>
    //         <Link to="..">
    //             Back to Gallery
    //         </Link>
    //     </div> 
    //   )
    // }
  
    return (

    <div>
      <Link to="..">
            Back to Gallery
      </Link>
      {/* External link to the Harvard Art Museum page for this artwork */}
      <h2>
        <a href={art.url} target="_blank" rel="noopener noreferrer">
          {art.title}
        </a>
      </h2>

      {/* Render artwork details */}
      <p>Description: {art.verificationleveldescription}</p>
      <p>Creditline: {art.creditline}</p>
      <p>Technique: {art.technique}</p>

      {/* Render artwork images */}
      {art.images && art.images.length > 0 ? (
        art.images.map((image) => (
          <img key={image.imageid} src={image.baseimageurl} alt={art.title} />
        ))
      ) : (
        <p>No images available for this artwork.</p>
      )}
    </div>

      
    )
}

export default ArtDescription;