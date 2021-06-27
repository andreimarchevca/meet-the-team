import React from 'react';
import Card from './components/card/Card';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: null
        };
    }

    componentDidMount() {
        const headers = {"Authorization": "api-key 14:2021-06-23:sandra.aberg@tretton37.com e4921134d8a00bc9c3e079ce75c71955aaabb7f242a8065e6c5e5176b8a6ea13"};
        fetch('https://api.1337co.de/v3/employees', { headers })
            .then(response => response.json())
            .then(data => this.setState({ employees: data }));
    }

    render() {
        const containerStyle = {
            backgroundColor: "#f3f3f3",
            padding: "25px",
            maxWidth: "80%",
            margin: "0 auto"
          };

        const headingStyle = {
            textAlign: "left"
        };

        const resultStyle = {
            display: "flex",
            flexWrap: "wrap"
        };

        const result = this.state.employees ? Object.keys(this.state.employees).map((item, id) => {
            return (
              <Card
                key={id}
                employee={this.state.employees[item]} 
              />
            )
        }) : null;
        
        return (
            <div className="main__container" style={containerStyle}>
                <h3 style={headingStyle}>The fellowship of the tretton37</h3>
                <div className="results__container" style={resultStyle}>{result}</div>
            </div>
        )
      }
}

export default ListComponent;