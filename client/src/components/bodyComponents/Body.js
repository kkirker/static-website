import React, { Component } from 'react'
import styled from '@emotion/styled'
// import API from '../utils/API'

class Body extends Component {

    constructor(props) {

        //API call gets full test and updates it to state of parent component
        // API.getTest("1").then((results) => {
        //     this.setState({ questions: results.data.questions });
        // });

        super(props);
    
        this.state = {
            loaded : true
        };
      }

    render() {
        return(
            <div>
                body here
            </div>
        );
    }
}

export default Body;
