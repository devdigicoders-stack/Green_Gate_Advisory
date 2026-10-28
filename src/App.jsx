import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import RouteTransitionLoader from './components/common/PageLoader';

export default function App() {
  return (
    <BrowserRouter>
      <RouteTransitionLoader />
      <AppRoutes />
    </BrowserRouter>
  );
}
