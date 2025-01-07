
const InfoBlock = (props) => {
    return (
      <div className="InfoBlock">
        <a href={props.link}>{props.text}</a>
      </div>
    );
  }
  
  export default InfoBlock;