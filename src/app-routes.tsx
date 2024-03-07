import { HomePage, MoviesPage, SeriesPage, ErrorPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [{
    path: '/series',
    element: SeriesPage,
    title: 'Series',
},
{
    path: '/movies',
    element: MoviesPage,
    title: 'Movies',
},
{
    path: '/home',
    element: HomePage,
    title: 'Titles',
},
{
    path: '*',
    element: ErrorPage,
    title: 'Error',
}];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
