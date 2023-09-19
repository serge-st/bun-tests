import { Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Route,
    Routes,
} from "react-router-dom";
import { AboutAsync } from './pages/About/AboutLazy';

  
const routes = [
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/about",
        element: <AboutAsync />,
    },
    {
        path: "*",
        element: <div>not found</div>,
    },
];

const App = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>Test</Link>
            <Link to={'/' + String(Math.random())}>Error</Link>
            <Suspense fallback='Loading...'>
            <Routes>
                {routes.map(({path, element}) => {
                    return <Route key={path} path={path} element={element} />;
                })}
            </Routes>
        </Suspense>
        </div>
    );
};

export default App;