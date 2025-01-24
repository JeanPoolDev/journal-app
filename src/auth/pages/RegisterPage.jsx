import { FormularioRegister } from "../components/FormularioRegister";

export function RegisterPage() {
  return (
    <section
      className="w-full min-h-screen flex flex-col md:h-screen md:flex-row 
      items-center justify-center 
      bg-gray-100">

      <article
        className="w-full md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(http://avatarfiles.alphacoders.com/374/374570.png)' }}
      ></article>

      <article className="w-full md:w-1/2 flex justify-center ">

        {/* Formulario de ingreso */}
        <FormularioRegister />

      </article>
    </section>
  );
};