import { NavLink } from 'react-router-dom';

function GalleryNavigation({galleries}) {
    // console.log(galleries)
    return (
        <nav>
            <h1>Galleries</h1>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        activeClassName="active" 
                        style={({isActive}) => isActive ? { fontWeight: 'bold' } : {}}
                    >
                        Home
                    </NavLink>
                </li>
                {galleries.map((gallery) => (
                    <li key={gallery.id}>
                        <NavLink 
                            to={`/galleries/${gallery.id}`} 
                            className={({isActive}) => isActive? 'purple' : ''}
                            style={({isActive}) => isActive? { fontWeight: 'bold' } : {}}
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