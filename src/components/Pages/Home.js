import React, {Component}   from "react"
import Header from '../Common/Header'
import image from "../assets/img/background2.jpg"

import Services from "../Common/Services"

import Portfolio from "../Common/Portfolio"
import Timeline from "../Common/Timeline"
import Team from "../Common/Team"
import Footer from "../Common/Footer"
class Home extends Component {
    render (){
        return(
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It is Nice to Meet You."
                    buttonText="Tell me more. "
                    link="/services"
                    showButton={true}   
                    image={image}
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />
                <Footer />
            </div>
        )
    }
}
 export default Home;