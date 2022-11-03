import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    static getDerivedStateFromError(error)  {
        return {error: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error) {
            return <h2 style={{color: '#9F0013', display: 'block', paddingTop: 53, paddingLeft: 660, textAlign: 'center'}}>Error 404<br></br>
            Something went wrong</h2>
        } 
        return this.props.children;
    }
}

export default ErrorBoundary;