import { Route, Routes } from 'react-router-dom';
import App from './App';
import { ActivityWorkshop4 } from './components';

function RouteHandler(): JSX.Element {
  return (
    <Routes>
      <Route path={'/activity-workshop-4'} element={<ActivityWorkshop4 />} />
      <Route path={'*'} element={<App />} />
    </Routes>
  );
}

export default RouteHandler;