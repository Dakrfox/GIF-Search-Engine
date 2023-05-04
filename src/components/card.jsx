import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "@styles/card.module.scss";
import { addingGIF } from "../slices/counterSlice.js";

export default function Card({ item }) {
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(addingGIF({ ...item }));
    }
  };
  return (
    <div
      className={styles.card}
      onClick={() => dispatch(addingGIF({ ...item }))}
      onKeyDown={handleKeyPress}
    >
      <div className={styles.gif}>
        <Image
          className={styles["gif-image"]}
          src={item?.link}
          width={250}
          height={250}
          alt={item?.name}
        />
      </div>

      <div className={styles.keywords}>
        <p>
          <span>Keywords:</span> {item?.keywords.join(" -  ")}
        </p>
      </div>
    </div>
  );
}
