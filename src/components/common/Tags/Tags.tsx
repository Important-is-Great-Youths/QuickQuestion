import classNames from 'classnames/bind'
import styles from './Tags.module.scss'
import React from 'react'

const cx = classNames.bind(styles)

interface TagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isAll?: boolean
  onTagChange?: (tag: string) => void
}

type TagKey = '전체' | '학문' | '연예' | '게임' | '기타'
const tagList = {
  전체: '',
  학문: 'beige',
  연예: 'purple',
  게임: 'blue',
  기타: 'green'
}

const Tags = React.forwardRef<HTMLInputElement, TagsProps>(
  ({ isAll = false, onTagChange, ...props }, ref) => {
    const filteredTagList = isAll
      ? Object.keys(tagList)
      : Object.keys(tagList).slice(1)

    return (
      <div className={cx('tags')}>
        {filteredTagList.map((tag, index) => (
          <div key={tag} className={cx('tag')}>
            <input
              id={tag}
              type="radio"
              name="tags"
              value={tagList[tag as TagKey]}
              className={cx('radio')}
              defaultChecked={index === 0}
              ref={ref}
              onChange={() =>
                onTagChange && onTagChange(tagList[tag as TagKey])
              }
              {...props}
            />
            <label htmlFor={tag} className={cx('label')}>
              {tag}
            </label>
          </div>
        ))}
      </div>
    )
  }
)

export default Tags

// 사용 예시
// const methods = useForm()
// const onSubmit = (data) => console.log(data)
// return (
//   <div>
//     {/* <Tags isAll /> */}
//     <form onSubmit={methods.handleSubmit(onSubmit)}>
//       <Tags
//         {...methods.register('tags', { required: '분야를 선택해주세요' })}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// )
