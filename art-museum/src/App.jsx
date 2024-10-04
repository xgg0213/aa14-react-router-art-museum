import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { harvardArt } from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';

// src/App.jsx


const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
    </>
  },
  {
    path: '/galleries',
    element: <GalleryNavigation galleries={harvardArt.records}/>
  },
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
