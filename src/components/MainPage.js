import InfoBlock from "./InfoBlock";

const MainPage = () =>  {

    const projectLinks = ['https://thedavidkipnis.github.io/Tondo/', 'https://thedavidkipnis.github.io/game-of-life/']
    const researchLinks = ['https://ieeexplore.ieee.org/document/10216577']
    const contactLinks = ['https://www.linkedin.com/in/thedavidkipnis/', 'https://github.com/thedavidkipnis/']

    return (
      <div className="MainPage">
        <InfoBlock text={'projects'} entries={projectLinks}/>
        <InfoBlock text={'research'} entries={researchLinks}/>
        <InfoBlock text={'contact'} entries={contactLinks}/>
      </div>
    );
  }
  
  export default MainPage;