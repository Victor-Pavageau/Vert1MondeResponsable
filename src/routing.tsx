import { Route, Routes } from 'react-router-dom';
import App from './App';

function RouteHandler(): JSX.Element {
  return (
    <Routes>
      <Route path={'*'} element={<App />} />
    </Routes>
  );
}

export default RouteHandler;