import React, { Component } from "react";
import Projects from './Projects'
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import pfp from '../../../../../../../Abhishek Mukherjee/Photos/Abhishek Mukherjee.jpg'
import Jokes from "./Jokes";
import Header from "./Header";


class App extends Component {
    state = { displayBio: false }

    togglebio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <div>
                <Header />
                <img src={pfp} alt='profile' className="pfp" />
                <h1> Hi,I am Abhishek Mukherjee</h1>
                {/* <Title /> */}
                {this.state.displayBio ? <Title /> : null

                }
                {this.state.displayBio ? (
                    <div>
                        I live in Mumbai and I'm learning ReactJS which is a JavaScript frontend framework
                        <div>
                            <button onClick={this.togglebio}>Show Less</button>
                        </div>
                    </div>
                ) :
                    (
                        <div>
                            <button onClick={this.togglebio}>Read More</button>
                        </div>
                    )
                }

                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App