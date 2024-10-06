import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { harvardArt } from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

// src/App.jsx

function Layout() {
    return (
      <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
    )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: 
        <>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
        </>,
      },
      {
        path: 'galleries/:galleryId',
        element: <GalleryView galleries={harvardArt.records}/>,
      },
      { 
        path: "*",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
