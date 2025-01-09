import { useState } from "react";

const InfoBlock = (props) => {

    const [isExpanded, expandBlock] = useState(false);

    const expandedStyle = {height: '8vh', width: '32vh'}
    const nonExpanded = {height: '4vh'}

    return (
      <div className="InfoBlock" 
      style={isExpanded ? expandedStyle : nonExpanded}
      onClick={() => expandBlock(!isExpanded)}>
        {props.text}
      </div>
    );
  }
  
  export default InfoBlock;