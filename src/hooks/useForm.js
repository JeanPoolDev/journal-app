import { useEffect, useState } from "react"

export function useForm(initialForm = {}) {

  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    })
  };

  const onResetForm = () => {
    setFormState({})
  }

  return {
    formState,
    ...formState,
    onInputChange,
    onResetForm
  }
}
