import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import React from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
const cx = classNames.bind(styles);

interface InputProps {
  size: "lg" | "sm";
  type: "text" | "password";
}
const Input = ({ size, type }: InputProps) => {
  return <input className={cx("input", `input-size-${size}`)} type={type} />;
};

export default Input;
