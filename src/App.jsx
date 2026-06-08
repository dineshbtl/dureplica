import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import LiveMonitoring from './pages/LiveMonitoring';
import Nvr from './pages/Nvr';
import Alerts from './pages/Alerts';
import Detections from './pages/Detections';
import ParkingManagement from './pages/ParkingManagement';
import Occupancy from './pages/Occupancy';
import UserManagement from './pages/UserManagement';
import Groups from './pages/Groups';
import EscalationChain from './pages/EscalationChain';
import AlertRules from './pages/AlertRules';
import ManageLocations from './pages/ManageLocations';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics-reports" element={<Analytics />} />
          <Route path="live-cameras" element={<LiveMonitoring />} />
          <Route path="nvr" element={<Nvr />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="detection-analytics" element={<Detections />} />
          <Route path="parking-management" element={<ParkingManagement />} />
          <Route path="occupancy" element={<Occupancy />} />
          
          <Route path="user-management" element={<UserManagement />} />
          <Route path="groups" element={<Groups />} />
          <Route path="escalation-chain" element={<EscalationChain />} />
          <Route path="alert-rules" element={<AlertRules />} />
          <Route path="manage-locations" element={<ManageLocations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
