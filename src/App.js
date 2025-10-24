import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome! 🎉
      </h1>
      </main>
      <Footer />
    </div>
  );
}

export default App; 