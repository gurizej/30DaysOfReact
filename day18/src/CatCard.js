import React from 'react';
import headerStyles from './styles/main.css'

class CatCard extends React.Component {
    constructor(props) {
        super(props)
        this.state.catData = props.catData
        this.state.origin = props.origin
    }
    state = {
        catData: [],
        origin: "ALL",
    }
    getImageUrl() {
        try {
            return this.state.catData.image.url 
        } catch(error) {
            return ""
        }
    }
    render() {
        if(this.state.origin == "ALL"){
            return (
                <div className='catCard'>
                    <div className='catCardImagePart'>
                        <img src={this.getImageUrl()}  />
                    </div>
                    <div className='catCardInfoPart'>
                        <h1>{this.state.catData.name}</h1>
                        <p><b>{this.state.catData.origin}</b></p>
                        <p>Temperament: {this.state.catData.temperament}</p>
                        <p>Life Span: {this.state.catData.life_span} years</p>
                        <p>Weight: {this.state.catData.weight.metric} kg</p>
                        <p>Description: </p>
                        <p>{this.state.catData.description}</p>
                    </div>
                </div>
            )
        } else {
            if(this.state.origin == this.state.catData.origin) {
                return (
                    <div className='catCard'>
                        <div className='catCardImagePart'>
                            <img src={this.getImageUrl()}  />
                        </div>
                        <div className='catCardInfoPart'>
                            <h1>{this.state.catData.name}</h1>
                            <p><b>{this.state.catData.origin}</b></p>
                            <p>Temperament: {this.state.catData.temperament}</p>
                            <p>Life Span: {this.state.catData.life_span} years</p>
                            <p>Weight: {this.state.catData.weight.metric} kg</p>
                            <p>Description: </p>
                            <p>{this.state.catData.description}</p>
                        </div>
                    </div>
                )
            }else {
                return null
            }
        }
    }
}

export default CatCard