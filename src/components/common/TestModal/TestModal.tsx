import { FormProvider, useForm } from 'react-hook-form'
import Tags from '../Tags/Tags'

const TestModal = () => {
  const methods = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      {/* <Tags isAll /> */}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Tags
          {...methods.register('tags', { required: '분야를 선택해주세요' })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TestModal
