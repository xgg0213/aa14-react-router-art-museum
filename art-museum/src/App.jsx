import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { harvardArt } from './data/harvardArt';

// src/App.jsx


const router = createBrowserRouter([
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
