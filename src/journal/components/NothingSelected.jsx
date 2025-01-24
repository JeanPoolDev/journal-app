import { Star } from "../../icons/iconos";

export function NothingSelected() {
  return (
    <section className="w-full bg-green-900 rounded-lg 
      shadow-lg flex flex-col justify-center items-center
      h-[calc(100vh-110px)] gap-4"
    >
      <Star />
      <p className="text-white font-semibold text-xl">
        Selecciona un tarea o agrega una nueva
      </p>
    </section>
  );
};