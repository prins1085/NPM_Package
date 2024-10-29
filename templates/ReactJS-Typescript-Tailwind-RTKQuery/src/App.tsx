import Spinner from "./components/common/Loader";
import Toaster from "./components/common/shared/Toaster";
import Router from "./Router";

function App() {
  return (
    <>
      <Router />
      <Spinner />
      <Toaster />
    </>
  );
}

export default App;
