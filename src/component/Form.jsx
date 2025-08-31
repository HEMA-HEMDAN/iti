import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className='flex flex-col gap-2 justify-center items-center h-screen' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name {errors.name && <span className='text-red-500'>{errors.name.message}</span>} </label>
      <input type="text" id="name" name="name" {...register('name', { required: 'Name is required' } ,{ minLength: { value: 3, message: 'Name must be at least 3 characters' }})} />
      <label htmlFor="password">Password {errors.password && <span className='text-red-500'>{errors.password.message}</span>}</label>
      <input type="password" id="password" name="password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />

      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
    </form>
  )
}

export default Form

