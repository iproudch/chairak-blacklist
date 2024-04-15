import Header from "./components/Header";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CheckBlacklist from "./components/forms/CheckBlacklist";

function App() {
  return (
    <div className="flex flex-col gap-4 pt-8 pr-16 pb-8 pl-16">
      <Header />
      <CheckBlacklist />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
