import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
    </NextUIProvider>
    
  );
}

export default App;
