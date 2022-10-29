import styles from "./Hello.module.scss";
import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { increment, decrement } from "./helloSlice";


export function Hello() {
  const state = useAppSelector(state => state.hello);
  const dispatch = useAppDispatch();

  return (
    <section>
      <h1 className={styles.heading}>Hello!</h1>
      <div className={styles.label}>{state.count}</div>
      <button
        className={styles.button}
        onClick={() => {dispatch(increment())}}
      >
        +
      </button>
      <button
        className={styles.button}
        onClick={() => {dispatch(decrement())}}
      >
        -
      </button>
    </section>
  );
}
