import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home'
import Footer from './components/footer'

function App() {
  return (
    <ChakraProvider>
    <div style={{ backgroundImage: `url('/images/background-site.jpg')` }} className="App">
      <Home></Home>
      <Footer></Footer>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
