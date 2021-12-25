import React from "react"
import Header from "./Header"

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg: "https://i.imgflip.com/5z1n9l.jpg",
            allMemeImgs:[]   
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
          const {memes}  = response.data
          this.setState({allMemeImgs:memes})
        })
        
    }
    handleChange(event){
            const {name,value}  = event.target
             this.setState({[name]:value})}
             
    handleSubmit(event){
        event.preventDefault()
        const randomNum = Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randImg = this.state.allMemeImgs[randomNum].url
        this.setState({randomImg:randImg})
    }
    
    render(){
        return (<div>
       <form className = "meme-form" onSubmit = {this.handleSubmit}> 
       <input 
       name = "topText" 
       type = "text"
       placeholder="Top Text" 
       value = {this.state.topText}
       onChange = {this.handleChange}/>
       <input 
       name = "bottomText"
       type = "text"
       placeholder="Bottom Text" 
       value = {this.state.bottomText}
       onChange = {this.handleChange}/>
        <button >Gen</button>
        </form>
        <div className = "meme" >
        <img src= {this.state.randomImg} alt = "Generated Meme"/>
        <h2 className="top">{this.state.topText}</h2>
        <h2 className = "bottom">{this.state.bottomText}</h2>
        </div>
        </div>
        )
    }
}

export default MemeGenerator