import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about='AboutUs'/> ,
      <TextForm heading="Enter the text to analyze"/>
      

    </>
  );
}

export default App;
