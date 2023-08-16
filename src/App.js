import { ChakraProvider } from '@chakra-ui/provider';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <ChakraProvider>
    <div className="">
      <MainContainer></MainContainer>
    </div>
    </ChakraProvider>
  );
}

export default App;
