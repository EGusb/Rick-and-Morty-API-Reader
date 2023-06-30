/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import Card from "./Card";

export default function CardList(props) {
  const { children } = props;

  return (
    <div className={styles.listContainer}>
      {children.map((item) => {
        return <Card key={item.id} id={item.id} imageUrl={item.image} title={item.name} text={item.type} />;
      })}
    </div>
  );
}
