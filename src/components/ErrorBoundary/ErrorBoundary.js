import React, { Component } from 'react';

class ErrorBoundary extends Component{

    state = {
        hasError: false,
        message: ''
    }

    componentDidCatch = (err, info) => {
        this.setState({
            hasError: true,
            message: err
        });
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.message}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;