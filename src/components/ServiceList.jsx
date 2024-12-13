import { CiSearch } from "react-icons/ci";
import { LuAmbulance } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi";


const iconos = [
  { id: 1, nombre: 'Consultas', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <CiSearch className="h-6 w-6 text-blue-500" /> },
  { id: 1, nombre: 'Urgencias', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <LuAmbulance className="h-6 w-6 text-blue-500" /> },
  { id: 1, nombre: 'Especialidades', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <GiHealthNormal className="h-6 w-6 text-blue-500" /> }
];

const ServiceList = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        {iconos.map(({ id, nombre, texto, icon }) => (
        <div key={id} class="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
        <div class="flex flex-col items-center pb-4 pt-6">
            {icon}
            <h5 class="mb-1 text-xl font-medium text-primary">{nombre}</h5>
            <span class="text-sm text-primary">{texto}</span>
            <div class="flex mt-4 md:mt-6">

            </div>
        </div>
    </div>
        ))}
      </div>
      </div>      
    );
  };

export default ServiceList