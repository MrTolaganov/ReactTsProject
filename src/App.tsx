import { ChangeEvent, useState } from "react";
import { IData } from "./interfaces";
import { data } from "./constants";
import styles from "./home.module.css";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      id: new Date().getTime(),
      title,
      description: "description",
    };
    setArr([...arr, newData]);
    setTitle("");
  };

  const deleteHandler = (id: number): void => {
    const newArr = arr.filter((item) => item.id !== id);
    setArr(newArr);
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <input
        placeholder="Enter todo"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr.map((item) => (
          <div key={item.id} className={styles.cardItem}>
            <p>{item.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteHandler(item.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
