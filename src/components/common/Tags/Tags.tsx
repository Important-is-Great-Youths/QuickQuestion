import classNames from "classnames/bind";
import styles from "./Tags.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

interface TagsProps {
  isAll?: boolean
  theme?: 'sunny' | 'rainy' | 'snowy'
}

const tagList: Array<'전체' | '학문' | '연예' | '게임' | '기타'> = [
  '전체',
  '학문',
  '연예',
  '게임',
  '기타'
]

const Tags = ({ isAll = true, theme = 'sunny' }: TagsProps) => {
  const filteredTagList = isAll ? tagList : tagList.slice(1)
  return (
    <div className={cx('tags')}>
      {filteredTagList.map((tag) => (
        <div className={cx('tag')}>
          <input
            id={tag}
            type="radio"
            name="Tags"
            value={tag}
            className={cx('radio')}
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
