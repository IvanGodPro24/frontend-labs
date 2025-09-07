import "./App.css";
import Content from "./components/Content/Content";
import GoodsList from "./components/GoodsList/GoodsList";
import Header from "./components/Header/Header";
import Image from "./components/Image/Image";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      <GoodsList />
    </div>
  );
}

export default App;
