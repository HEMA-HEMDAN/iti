import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className='flex flex-col gap-2 justify-center items-center h-screen' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" {...register('name')} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" {...register('email')} />
    
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send</button>
    </form>
  )
}

export default Form

