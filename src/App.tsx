import Header from "./components/Header";
import CheckBlacklist from "./components/forms/CheckBlacklist";

function App() {
  console.log("check pipeline deployed");
  return (
    <div className="flex flex-col gap-4 pt-8 pr-16 pb-8 pl-16">
      <Header />
      <CheckBlacklist />
    </div>
  );
}

export default App;
