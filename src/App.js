import { useEffect } from 'react';
import './App.css';
import TimeAndDateDisplay from './apps/clock/TimeAndDateDisplay';



function App() {


  // Prevent Silk browser from reverting back to Echo Show homescreen
  useEffect(() => {
    const preventNavigation = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', preventNavigation);

    return () => {
      window.removeEventListener('beforeunload', preventNavigation);
    };
  }, []);



  return (
    <div className="App">
      <TimeAndDateDisplay />
    </div>
  );
}

export default App;
