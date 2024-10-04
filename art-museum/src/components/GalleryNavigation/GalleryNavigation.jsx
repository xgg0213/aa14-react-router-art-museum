import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';


function GalleryNavigation({galleries}) {
    // console.log(galleries)
    return (
        <nav>
            <h1>Galleries</h1>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? 'active' : ''} 
                        end // ensures the Home link is only active for the exact `/` route
                    >
                        Home
                    </NavLink>
                </li>
                {galleries.map((gallery) => (
                    <li key={gallery.id}>
                        <NavLink 
                            to={`/galleries/${gallery.id}`} 
                        >
                            {gallery.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}

export default GalleryNavigation;