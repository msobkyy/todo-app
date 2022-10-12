import Header from "./components/Header";
import Todo from "./components/Todo/Todo";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex justify-center items-center p-4 w-full mb-auto ">
        <Todo />
      </div>
      <Footer/>
      <Toaster  position="bottom-right" />
    </div>
  );
}

export default App;
