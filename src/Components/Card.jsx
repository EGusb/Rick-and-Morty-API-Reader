/* eslint-disable react/prop-types */

export default function Card(props) {
  const { id, imageUrl, title, text } = props;
  return (
    <div id={id}>
      {imageUrl && <img src={imageUrl} />}
      {title && <h4>{title}</h4>}
      {text && <p>{text}</p>}
    </div>
  );
}
