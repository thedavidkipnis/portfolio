import { useState } from "react";

const InfoBlock = (props) => {

    const [isExpanded, expandBlock] = useState(false);

    const expandedStyle = {height: '16vh', width: '64vh', borderRadius: '30px'}
    const nonExpanded = {height: '8vh'}

    return (
      <div className="InfoBlock"
      style={isExpanded ? expandedStyle : nonExpanded} 
      onMouseEnter={() => expandBlock(!isExpanded)}
      onMouseLeave={() => expandBlock(!isExpanded)}
      >
        {isExpanded ? '': props.text}

        <ul style={isExpanded ? {} : {display:'none'}}>
          {props.entries.map(item => {
            return <li><a href={item[1]}>{item[0]}</a></li>
          })}
        </ul>
      </div>
    );
  }
  
  export default InfoBlock;