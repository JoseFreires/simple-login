import * as React from 'react'
import RoutesPage from './routes/route';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <RoutesPage />
    </AuthProvider>
  );
}

export default App;
