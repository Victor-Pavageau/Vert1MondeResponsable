import { Route, Routes } from 'react-router-dom';
import { ActivityWorkshopPage, MainPage } from './pages';

function RouteHandler(): JSX.Element {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/activity-workshop-4'} element={<ActivityWorkshopPage />} />
      <Route path={'*'} element={<MainPage />} />
    </Routes>
  );
}

export default RouteHandler;