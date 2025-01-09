import InfoBlock from "./InfoBlock";

const MainPage = () =>  {

    const contactLinks = ['https://www.linkedin.com/in/thedavidkipnis/', 'https://github.com/thedavidkipnis/']

    return (
      <div className="MainPage">
        <InfoBlock text={'projects'} entries={[]}/>
        <InfoBlock text={'research'} entries={[]}/>
        <InfoBlock text={'contact'} entries={contactLinks}/>
      </div>
    );
  }
  
  export default MainPage;