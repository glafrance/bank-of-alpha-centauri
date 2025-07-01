import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import NotFoundPage from './pages/not-found/not-found';
import CheckingPage from './pages/checking/checking';
import SavingsPage from './pages/savings/savings';
import CreditCardsPage from './pages/credit-cards/credit-cards';
import HomeLoansPage from './pages/home-loans/home-loans';
import AutoLoansPage from './pages/auto-loans/auto-loans';
import InvestingPage from './pages/investing/investing';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checking" element={<CheckingPage />} />
      <Route path="/savings" element={<SavingsPage />} />
      <Route path="/credit-cards" element={<CreditCardsPage />} />
      <Route path="/home-loans" element={<HomeLoansPage />} />
      <Route path="/auto-loans" element={<AutoLoansPage />} />
      <Route path="/investing" element={<InvestingPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
