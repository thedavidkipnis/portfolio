import InfoBlock from "./InfoBlock";

const MainPage = () =>  {
    return (
      <div className="MainPage">
        <InfoBlock text={'projects'} link={'https://github.com/thedavidkipnis'}/>
        <InfoBlock text={'research'} link={'https://ieeexplore.ieee.org/document/10216577'}/>
        <InfoBlock text={'contact'} link={'https://www.linkedin.com/in/thedavidkipnis/'}/>
      </div>
    );
  }
  
  export default MainPage;