import React from 'react';

class Country extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            long: props.value
        }
    }


    longInformation = () => {
        const country = this.props.maa
        return (
            <div>
                <h2>{country.name}     {country.nativeName}</h2>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <img src={country.flag} alt="Flag" height="200" width="300"/>
            </div> 
        )
    }

    shortInformation = () => {
        const country = this.props.maa
        return (
            <div  key={country.name}>
                {country.name}
            </div>
        )
    }


    toggleLongFalse = () => {
        this.setState({long: false})
    }

    toggleLongTrue = () => {
        this.setState({long: true})
    }

    render() {
        if (this.state.long) {
            return (
                <div onClick={this.toggleLongFalse}>
                    {this.longInformation()}
                </div>
            )
        } else {
            return (
                <div onClick={this.toggleLongTrue} >
                    {this.shortInformation()}
                </div>    
            )
        }
    }
}

export default Country