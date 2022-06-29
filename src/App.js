import React, { Component } from "react";
import Projects from './Projects'
import SocialProfiles from "./SocialProfiles";
import pfp from './assets/profile.png'

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
                <p>I aspire to be a software engineer.
                    My first goal towards this would be to get good grades and make a stand out resume.
                </p>
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