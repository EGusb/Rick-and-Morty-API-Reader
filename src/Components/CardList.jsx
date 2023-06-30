/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import Card from "./Card";

export default function CardList({ children }) {
  return (
    <div className={styles.listContainer}>
      {children.map(({ id, imageUrl, title, text }) => {
        return <Card key={id} id={id} imageUrl={imageUrl} title={title} text={text} />;
      })}
    </div>
  );
}
