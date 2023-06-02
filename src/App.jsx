import './App.css';
import Lego from './components/Lego';

function App() {
  return (
    <>
      <Lego color={'red'} width={20} height={40} name={'Red'} />
      <Lego color={'yellow'} width={30} height={30} name={'Yellow'} />
      <Lego color={'blue'} width={20} height={40} name="Blue" />
    </>
  );
}

export default App;
