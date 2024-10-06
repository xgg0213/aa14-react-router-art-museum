import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';


function GalleryNavigation({galleries}) {
    // console.log(galleries)
    return (
        <>
            <nav>
            <h1>Galleries</h1>

                <span>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? 'active' : ''} 
                        end // ensures the Home link is only active for the exact `/` route
                    >
                        Home
                    </NavLink>
                    {<span> | </span>}
                </span>
                {galleries.map((gallery) => (
                    <span key={gallery.id}>
                        <NavLink 
                            to={`/galleries/${gallery.id}`} 
                        >
                            {gallery.name}
                        </NavLink>
                        { <span> | </span>}
                    </span>
                ))}

            </nav>
        </>
        
        
    )
}

export default GalleryNavigation;