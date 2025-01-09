import { useState } from "react";

const InfoBlock = (props) => {

    const [isExpanded, expandBlock] = useState(false);

    const expandedStyle = {height: '8vh', width: '32vh', borderRadius: '10px'}
    const nonExpanded = {height: '4vh'}

    return (
      <div className="InfoBlock"
      style={isExpanded ? expandedStyle : nonExpanded}
      onClick={() => expandBlock(!isExpanded)}>
        {isExpanded ? '': props.text}

        <ul style={isExpanded ? {} : {display:'none'}}>
          {props.entries.map(item => {
            return <li><a href={item}>{item}</a></li>
          })}
        </ul>
      </div>
    );
  }
  
  export default InfoBlock;