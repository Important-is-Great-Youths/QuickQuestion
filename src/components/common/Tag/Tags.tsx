import classNames from "classnames/bind";
import styles from "./Tags.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

interface TagsProps {
  size?: "sm" | "md";
  isAll?: boolean;
  theme?: "sunny" | "rainy" | "snowy";
}

const tagList: Array<"전체" | "학문" | "연예" | "게임" | "기타"> = [
  "전체",
  "학문",
  "연예",
  "게임",
  "기타",
];

const Tags = ({ size = "md", isAll = true, theme = "sunny" }: TagsProps) => {
  const filteredTagList = isAll ? tagList : tagList.slice(1);
  return (
    <div className={cx("tags", `tags-size-${size}`)}>
      {filteredTagList.map((tag) => (
        <div className={cx("tag", `tag-size-${size}`)}>
          <input
            id={tag}
            type="radio"
            name="Tags"
            value={tag}
            className={cx("radio")}
          />
          <label htmlFor={tag} className={cx("label", `label-size-${size}`)}>
            {tag}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Tags;
