// FormProvider 사용 예시입니다. Tags 컴포넌트 사용시 참고해주세요.
import { FormProvider, useForm } from 'react-hook-form'
import Tags from '../Tags/Tags'

const TestModal = () => {
  const methods = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Tags />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  )
}

export default TestModal
