import React from "react";
import SOCIALPROFILES from "../data/socialProfiles";

const Socialprofile = props => {

    const { link, image } = props.socialprof
    return (
        <div style={{ display: 'inline-block', margin: 20 }}>
            <a href={link}><img src={image} alt='Social Media Icon' style={{ width: 40, height: 40 }} /></a>

        </div >
    )
}


const SocialProfiles = () => {
    return (
        <div>
            <h2>Connect with me here!!</h2>
            {
                SOCIALPROFILES.map(sp => {
                    return (
                        <Socialprofile key={sp.id} socialprof={sp} />
                    )
                })
            }
        </div>
    )
}


export default SocialProfiles