import React from 'react';
import {Cards, Chart, CountryPicker} from "./compponents";
import './App.css';
import {fetchData} from "./api";


class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
    }


    render() {

        const { data, country } = this.state;

        return (
            <div className={'container'}>
                <h1>Covid-19 Global and in countries</h1>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
