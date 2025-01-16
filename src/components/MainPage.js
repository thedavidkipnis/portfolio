import InfoBlock from "./InfoBlock"; 
import TextBlock from "./TextBlock";

const MainPage = () =>  {

    const introText = [['I\'m a fullstack engineer', ''], ['I build web apps and work on UIs', ''], ['I also work on database apps and data pipelines', '']] 
    const projectLinks = [['Tondo', 'https://thedavidkipnis.github.io/Tondo/'], ['Game of Life', 'https://thedavidkipnis.github.io/game-of-life/']]
    const researchLinks = [['Link to my paper!' ,'https://ieeexplore.ieee.org/document/10216577']]
    const contactLinks = [['LinkedIn' ,'https://www.linkedin.com/in/thedavidkipnis/'], ['GitHub', 'https://github.com/thedavidkipnis/']]

    return (
      <div className="MainPage">
        <InfoBlock text={'about me'} entries={introText} linksDisabled={true}/>
        <InfoBlock text={'projects'} entries={projectLinks} linksDisabled={false}/>
        <InfoBlock text={'research'} entries={researchLinks} linksDisabled={false}/>
        <InfoBlock text={'contact'} entries={contactLinks} linksDisabled={false}/>
      </div>
    );
  }
  
  export default MainPage;