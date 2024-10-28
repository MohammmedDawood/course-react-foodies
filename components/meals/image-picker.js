"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();

  function handlePickImage() {
    imageInputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/png, image/jpeg'
          ref={imageInputRef}
        />
        <button
          className={classes.button}
          type='button'
          onClick={() => handlePickImage()}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
