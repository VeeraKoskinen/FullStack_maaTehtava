import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Country from './components/Country';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            filter: ''
        }
    }

    handleFilterChange = (event) => {
        this.setState({filter: event.target.value})
        console.log(this.state.filter)
    }

    checkThisCountry = (country) => {
        let inStudy = country.name.toLowerCase()
        if (inStudy.includes(this.state.filter.toLowerCase())) {
            console.log("true")
            return true 
        } else {
            console.log("false")
            return false 
        }
    }

    makeFilteredList = () => {
        return this.state.countries.filter((country) => this.checkThisCountry(country)) 

    }

    countryListing = () => {
        const list = this.makeFilteredList()
        if (list.length > 10) {
            return (
                <div>
                    too many maches, specify another filter
                </div>    
            )
        } else if (list.length === 1) {
            return (
                <div>
                    <Country maa={list[0]} value={true}/> 
                </div>                
            )
        } else {
            return (
                <div>
                    {this.makeFilteredList()
                        .map((country) => {
                            return (
                                <div  key={country.name} >
                                    <Country maa={country} value={false}/>
                                </div>
                            )
                        })} 
                </div>
            )
        }
    }

    componentWillMount() {
        console.log('will mount')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => { 
                console.log("promise fullfilled")
                this.setState({countries: response.data})
                console.log(this.state.countries)
        })
    }

    render() {
        return (
            <div>
                find countries: <input value={this.state.filter}
                                    onChange={this.handleFilterChange}/>    

                <div>
                    {this.countryListing()}
                </div>                                       
            </div> 
            
        )
    }
}    

export default App

ReactDOM.render(<App />, document.getElementById('root'));

