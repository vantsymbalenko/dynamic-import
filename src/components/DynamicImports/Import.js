import React from 'react';

export default class Import extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            component : null
        };
    }

    componentDidMount(){
        import(`../../${this.props.path}`)
            .then((component) => {
                this.setState({
                    component : component.default || component
                });
            });
    }

    render(){
        return this.props.children(this.state.component);
    }
}

