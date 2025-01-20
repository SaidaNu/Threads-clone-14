import Header from "./components/Header";
import Flow from "./components/Flow";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="flow__section">
          <Flow />
        </section>
      </main>
    </>
  );
}

export default App;
