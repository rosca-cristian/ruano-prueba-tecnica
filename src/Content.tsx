import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import routes from './app-routes';
import { Footer, Header } from './components';


export default function Content() {
  const path = useLocation().pathname;
  const title = routes.find(route => route.path === path)?.title;
  ;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <div className="header item">
        <Header title={title ? title : 'Titles'} />
      </div>
      <div className="content item">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
          <Route
            path='*'
            element={<Navigate to='/home' />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}