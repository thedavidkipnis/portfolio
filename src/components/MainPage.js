import InfoBlock from "./InfoBlock";

const MainPage = () =>  {

    const projectLinks = [['Tondo', 'https://thedavidkipnis.github.io/Tondo/'], ['Game of Life', 'https://thedavidkipnis.github.io/game-of-life/']]
    const researchLinks = [['Link to my paper!' ,'https://ieeexplore.ieee.org/document/10216577']]
    const contactLinks = [['LinkedIn' ,'https://www.linkedin.com/in/thedavidkipnis/'], ['GitHub', 'https://github.com/thedavidkipnis/']]

    return (
      <div className="MainPage">
        <InfoBlock text={'projects'} entries={projectLinks}/>
        <InfoBlock text={'research'} entries={researchLinks}/>
        <InfoBlock text={'contact'} entries={contactLinks}/>
      </div>
    );
  }
  
  export default MainPage;