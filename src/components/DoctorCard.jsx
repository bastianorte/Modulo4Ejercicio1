import doctores from './doctores.json';

const DoctorCard = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            

        {doctores.map((doctor) => (
        <div key={doctor.id} class="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
            <div class="flex flex-col items-center pb-4 pt-6">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={doctor.imagen}  alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-primary">{doctor.nombre}</h5>
                <span class="text-sm text-primary">{doctor.especialidad}</span>
                <span class="text-sm text-primary">{doctor.experiencia} años de experiencia</span>
                <div class="flex mt-4 md:mt-6">

                </div>
            </div>
        </div>
        ))}

        </div>
      </div>
    )
}

export default DoctorCard