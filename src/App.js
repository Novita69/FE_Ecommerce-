import AuthPages from "./pages/Auth";
import PageDashboard from "./pages/Dashboard/index";
import AddProduct from "./pages/Dashboard/create";
import Update from "./pages/Dashboard/update";

function App() {
  return (
    <div className="App">
      {/* <PageDashboard /> */}
      <AuthPages/>
      {/* <AddProduct /> */}
      {/* <Update /> */}
    </div>
  );
}

export default App;
