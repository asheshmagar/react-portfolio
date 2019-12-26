import React, {Component} from "react"
import PortfolioItem from "./PortfolioItem"
import Footer from "../Common/Footer"
import img1 from '../assets/img/portfolio/background1.jpg'
import img2 from '../assets/img/portfolio/background2.jpg'
import img3 from '../assets/img/portfolio/background3.jpg'
import img4 from '../assets/img/portfolio/background4.jpg'
import img5 from '../assets/img/portfolio/background5.jpg'
import img6 from '../assets/img/portfolio/background6.jpg'

const portfolio=[
    {title:'Threads',subtitle:'Illustration',image:img1},
    {title:'Explore',subtitle:'Graphic Design',image:img2},
    {title:'Finish',subtitle:'Identity',image:img3},
    {title:'Lines',subtitle:'Branding',image:img4},
    {title:'Southwest',subtitle:'Website Design',image:img5},
    {title:'Window',subtitle:'Photography',image:img6},
]
class Portfolio extends Component{
    render(){
        return(
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {portfolio.map((item,index)=>{
                            return <PortfolioItem {...item} key={index} />
                        })}
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Portfolio