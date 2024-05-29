import { useForm } from "react-hook-form";
// Importante: si vas a usar esta librería, tienes que instalarla!!!!
// Aquí está el link con la información: https://react-hook-form.com/get-started/

const Form = () => {
  const { handleSubmit, register, formState, watch } = useForm({
    defaultValues: {
      superhero: "",
      superpower: "",
      country: "",
      terms: false,
    },
  });

  console.log(formState);

  const onSubmit = (values) => {
    console.log("Submit de React Hook Form: ", values);
  };

  const country = watch("country");
  console.log("Country value: ", country);

  return (
    <>
      <h1>Hola! Estoy aprendiendo a crear formularios 😊</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="superhero">Nombre del superheroe: </label>
        <input
          {...register("superhero", {
            required: {
              value: true,
              message: "Ey! Te falta poner un nombre de superheroe ❌",
            },
            minLength: {
              value: 2,
              message: "😢 Ouch! Tu nombre debe ser mayor a dos caracteres",
            },
          })}
          type="text"
          id="superhero"
        />

        {formState.errors.superhero ? (
          <p style={{ color: "red" }}>{formState.errors.superhero.message}</p>
        ) : null}

        <br />
        <label htmlFor="superpower">Introduce tu superpoder: </label>
        <input {...register("superpower")} type="text" id="superpower" />

        <br />

        <label htmlFor="country">Selecciona tu país: </label>
        <select {...register("country", { required: true })} name="country" id="country">
          <option value="">-</option>
          <option value="españa">Spain</option>
          <option value="venezuela">Venezuelan</option>
        </select>

        <br />

        {country === "españa" ? (
          <>
            <input type="checkbox" id="terms" {...register("terms", { required: true })} />
            <label htmlFor="terms">Acepto los términos y condiciones</label>
          </>
        ) : null}

        <br />

        <button type="submit" disabled={!formState.isDirty}>
          Enviar!
        </button>
      </form>
    </>
  );
};

export default Form;
