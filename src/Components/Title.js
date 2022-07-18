import React, { Component } from "react";

const TITLES = [
    'a Software Engineer',
    'an Avid reader',
    'an Adventure seeker',
    'an Enthusiastic Learner'
]

class Title extends Component {
    state = { titleindex: 0, fadeIn: true }

    componentDidMount() {
        // console.log('Title mounted')
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: false })
        }, 2000);
        this.animateTitles()
    }

    componentWillUnmount() {
        // console.log('Title unmounted')
        clearInterval(this.titleinterval)
        clearTimeout(this.timeout)
    }

    animateTitles = () => {
        this.titleinterval = setInterval(() => {
            // const titleindex = (this.state.titleindex + 1) % TITLES.length //another method to update the state
            this.setState({ titleindex: (this.state.titleindex + 1) % TITLES.length, fadeIn: true })
            this.timeout = setTimeout(() => {
                this.setState({ fadeIn: false })
            }, 2000);
        }, 4000)
    }
    render() {
        const title = TITLES[this.state.titleindex]
        return (
            <p className={this.state.fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title