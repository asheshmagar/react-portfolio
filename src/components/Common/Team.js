import React,{Component} from "react"
import boy from "../assets/img/team/boy.png"
import girl from "../assets/img/team/girl.png"
import TeamItem from "../Common/TeamItem"
import Footer from "./Footer"
const team=[
    {title:'Ashesh Magar',subtitle:'Lead Programmer',image:boy},
    {title:'Menuka Magar',subtitle:'Graphic Designer',image:girl},
    {title:'Ashesh Magar',subtitle:'Manager',image:boy},
]

class Team extends Component{
    render(){
        return(
            <div>
                <section className="bg-light page-section" id="team">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {team.map((item,index)=>{
                            return <TeamItem {...item} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                    </div>
                </section>
            
            </div>
        )
    }
}
export default Team