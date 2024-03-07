import './App.css';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <div className="app">
      <Sidebar />
      <MainContent />
    </div>
    </>
  );
}

export default App;
