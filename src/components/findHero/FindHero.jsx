import { Component } from 'react';

import './findHero.sass';

class FindHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    
    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term); 
    }

    render() {
        return (
            <div className="find">
                <input onChange={this.onSearch} value={this.state.term} type="text" className="find__input" placeholder='Search hero' />
            </div>
        )
    }
}

export default FindHero;