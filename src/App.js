import { useHasMounted } from "./hooks";
import './App.css';

export default function App() {
  const { products, loading} = useHasMounted();

  return (
    <div className="text-center w-screen flex justify-center items-center">
      <header className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl">Petición Api con HasMounted</h1><br/>
        <p className="text-xl">Vehiculos</p><br/>
        {loading ? (
          <p className="text-red-500">Un momento<br/>Cargando...<br/><br/></p>
        ) : (
          <ul  className="list-[upper-disc]">{
            products.map(item => (

              <li className="" key={item.id}>{item.image}  </li>
            ))
            }
          </ul>
        )}
      </header>
    </div>
  );
}

