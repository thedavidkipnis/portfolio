import { useState } from "react";

const InfoBlock = (props) => {

    const [isExpanded, expandBlock] = useState(false);

    const expandedStyle = {height: '16vh', width: '32vw', borderRadius: '10px'}
    const nonExpanded = {height: '8vh', width: '16vw'}

    return (
      <div className="InfoBlock"
      style={isExpanded ? expandedStyle : nonExpanded} 
      onMouseEnter={() => expandBlock(!isExpanded)}
      onMouseLeave={() => expandBlock(!isExpanded)}
      >
        <div className="InfoBlockText" style={isExpanded ? {marginLeft: '0px'} : {}}>
          {isExpanded ? null: props.text}
        </div>
        

        <ul style={isExpanded ? {} : {display:'none'}}>
          {props.entries.map(item => {
            return <li><a href={item[1]}>{item[0]}</a></li>
          })}
        </ul>
      </div>
    );
  }
  
  export default InfoBlock;