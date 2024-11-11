import React from 'react';
import './App.css';
import './index.css';
import LandingPage from './Pages/LandingPage';
import Projects from './components/Projects/ProjectSection';
import ImageCarousel from './components/Sections/ImageCarousel';
import Footer from './components/Sections/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpages: [
        {
          key: 'landingPage',
          component: <LandingPage />,
        },
        {
          key: 'projects',
          component: <Projects />,
        },
        {
          key: 'imageCarousel',
          component: <ImageCarousel />,
        },
        {
          key: 'footer',
          component: <Footer />,
        },
      ],
    };
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <ReactFullpage
          licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'} // Add the open-source license key here
          navigation
          sectionSelector={SECTION_SEL}
          render={() => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ key, component }) => (
                <div key={key} className={SEL}>
                  {component}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
