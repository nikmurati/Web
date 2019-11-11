import React, {Component} from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component{
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free coctails",
                info: 'Here in our resort you can taste deepest coctails ever by the fresh fruits!'
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: 'You can join us on hiking and visiting our mountains during a day and having fun!'
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free taxi",
                info: 'Everywhere you need to go inside here, you can call the taxi driver to send you there!'
            },
            {
                icon:<FaBeer/>,
                title: "Strongest beer",
                info: 'Taste the original beer, anytime you want just call the services, and tell them that you want beer!'
            }
        ]
    }
    render(){
        return(
                <section className="services">
                <Title title = "services"/>
                <div className = "services-center">
                {this.state.services.map((item,index)=>{//too access all elements in array
                    return <article key = {index} className = "service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                })}
                </div>
                </section>
            
        )
    }
}

export default Services