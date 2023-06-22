import Abonents from '../../components/Abonents/Abonents'
import React, { Component } from 'react';

export default class AbonentsTable extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(json => {
                this.users = json;
                console.log(this.users);
                this.setState(this.state.apiResponse = this.users);

            })
            .catch(function () {
                this.dataError = true;
            })
    }
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <Abonents rows={this.state.apiResponse} />
        )
    }
}