import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }
  componentDidCatch(){
    this.setState({error: true})
  }
  render() {
    if(!this.state.error){
        return (
            <div>{this.props.children}</div>
          )
    }else {
        return <h1>error</h1>
    }
  }
}
