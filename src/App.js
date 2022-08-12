import './App.css';

import {QueryClientProvider,QueryClient} from 'react-query';
import Dashboard from './pages/Dashboard';
function App() {

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </div>
  );
}

export default App;
