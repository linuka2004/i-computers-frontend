export default function productCard(props){

  console.log (props.name);
  return (
    <div>
        <h1>{props.name}</h1>
        <img src={props.image}/>
        <p>{props.price}</p>
      </div>
  );

}