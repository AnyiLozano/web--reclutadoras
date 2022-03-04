import { Suspense } from "react";
import Router from "./routes";

function App() {
  return (
    <Suspense fallback={<p>Cargando!!!</p>}>
      <Router />
    </Suspense>
  );
}

export default App;
