import Header from "./components/Header";
import CheckBlacklistForm from "./components/forms/CheckBlacklistForm";

function App() {
  return (
    <div className="flex flex-col gap-4 pt-8 pr-16 pb-8 pl-16">
      <Header />
      <CheckBlacklistForm />
    </div>
  );
}

export default App;
