import './App.css';
import Uploader from './components/Uploader.js'

function App() {
  return (
    <div>
      <div className='upload-container'>
        <Uploader title='File 1'></Uploader>
        <Uploader title='File 2'></Uploader>
      </div>

      <button> Generate diff</button>
      
    </div>
  );
}

export default App;
