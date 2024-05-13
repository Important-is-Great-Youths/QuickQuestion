import classNames from "classnames/bind";
import styles from "./Tags.module.scss";
import { useFormContext } from 'react-hook-form'

const cx = classNames.bind(styles)

interface TagsProps {
  isAll?: boolean
}

const tagList: Array<'전체' | '학문' | '연예' | '게임' | '기타'> = [
  '전체',
  '학문',
  '연예',
  '게임',
  '기타'
]

const Tags = ({ isAll = true }: TagsProps) => {
  const { register } = useFormContext()
  const filteredTagList = isAll ? tagList : tagList.slice(1)

  return (
    <div className={cx('tags')}>
      {filteredTagList.map((tag) => (
        <div key={tag} className={cx('tag')}>
          <input
            id={tag}
            type="radio"
            value={tag}
            className={cx('radio')}
            {...register('tags', { required: '분야를 선택해주세요' })}
          />
          <label htmlFor={tag} className={cx('label')}>
            {tag}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Tags;
