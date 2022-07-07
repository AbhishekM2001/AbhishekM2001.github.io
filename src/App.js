import React, { Component } from "react";
import Projects from './Projects'
import SocialProfiles from "./SocialProfiles";
import pfp from './assets/profile.png'
import Title from "./Title";

class App extends Component {
    state = { displayBio: false }
    // constructor() {
    //     super();
    //     this.state = { displayBio: false }
    //     this.togglebio = this.togglebio.bind(this)
    // }

    togglebio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
            <div>
                <img src={pfp} alt='profile' className="pfp" />
                <h1> Hi Abhishek here</h1>
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

            </div>
        )
    }
}

export default App