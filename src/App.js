import { useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo/Todo";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between dark:bg-primary-dark translate duration-150">
      <Header />
      <div className="flex justify-center items-center p-4 w-full mb-auto ">
        <Todo />
      </div>
     
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
