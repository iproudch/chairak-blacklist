import Header from "./components/Header";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CheckBlacklist from "./components/forms/CheckBlacklist";

function App() {
  return (
    <div className="flex flex-col gap-2 p-4 sm:gap-4 sm:p-4 md:p-8 lg:pt-8 lg:pr-72 lg:pb-8 lg:pl-16">
      <Header />
      <CheckBlacklist />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
