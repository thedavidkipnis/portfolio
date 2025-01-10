const TextBlock = (props) => {

    return (
      <div className="TextBlock">
        {props.text.map(section => {
            return (<p>{section}</p>)
        })}
      </div>
    );
  }
  
  export default TextBlock;