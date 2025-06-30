import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
