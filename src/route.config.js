import Home from './pages/Home';
import Sobre from './pages/Sobre';

const routes = [
    {
        path: "/",
        component: {Home},
        exact: true
    },
    {
        path: "/sobre",
        component: {Sobre},
        exact: true
    },
]

export default routes;