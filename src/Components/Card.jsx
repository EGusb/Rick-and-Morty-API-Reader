/* eslint-disable react/prop-types */

export default function Card(props) {
  const { id, imageUrl, firstLine, secondLine } = props;
  return (
    <div id={id}>
      <img src={imageUrl} />
      <h5>{firstLine}</h5>
      <h5>{secondLine}</h5>
    </div>
  );
}
