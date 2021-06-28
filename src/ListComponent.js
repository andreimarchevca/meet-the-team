import React from 'react';
import Card from './components/card/Card';
import './ListComponent.css';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            filteredItems: [],
            filtered: false,
        };
    }

    componentDidMount() {
        const headers = {"Authorization": "api-key 14:2021-06-23:sandra.aberg@tretton37.com e4921134d8a00bc9c3e079ce75c71955aaabb7f242a8065e6c5e5176b8a6ea13"};
        fetch('https://api.1337co.de/v3/employees', { headers })
            .then(response => response.json())
            .then(data => this.setState({ employees: data }));
    }

    render() {
        const result = this.state.employees ? Object.keys(this.state.employees).map((item, id) => {
            return (
              <Card
                key={id}
                employee={this.state.employees[item]} 
              />
            )
        }) : null;

        const sortArray = type => {
            const types = {
              name: 'name',
              office: 'office'
            };
            const sortProperty = types[type];
            const sorted = this.state.employees.sort((a, b) => (a[sortProperty] > b[sortProperty]) ? 1 : -1);
            this.setState({ employees: sorted });
        };

        const filterByOffice = type => {
            if (type === 'All offices') {
                const allItems = this.state.employees;
                this.setState({ filtered: false, employees: allItems });
            } else {
                const filteredByOffice = this.state.employees.filter(function (el) {
                    return el.office === type;
                  });
                this.setState({ filtered: true, filteredItems: filteredByOffice });
            }
        };

        const filterByName = value => {
            const filteredByName = this.state.employees.filter(function (el) {
                if (!value) return true;
                if (el.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return true;
                }
                return false;
              });
            this.setState({ filtered: true, filteredItems: filteredByName });
        };

        const filteredResults = this.state.filteredItems ? Object.keys(this.state.filteredItems).map((item, id) => {
            return (
              <Card
                key={id}
                employee={this.state.filteredItems[item]} 
              />
            )
        }) : null;
        
        return (
            <div className="main__container">
                <h3 className="main__heading">The fellowship of the tretton37</h3>
                <div className="filter__section">
                    <div className="form__group textfield">
                        <input type="text" id="name" className="form__field" placeholder="Type in someone's name" onChange={(e) => filterByName(e.target.value)}></input>
                        <label for="name" className="form__label">Name</label>  
                    </div>
                    <div className="form__group select">
                        <label for="filterOnlyFrom">Filter by office</label>
                        <select id="filterOnlyFrom" className="form__select" onChange={(e) => filterByOffice(e.target.value)}>
                            <option value="All offices">All offices</option>
                            <option value="Borlänge">Borlänge</option>
                            <option value="Helsingborg">Helsingborg</option>
                            <option value="Ljubljana">Ljubljana</option>
                            <option value="Lund">Lund</option>
                            <option value="Stockholm">Stockholm</option>
                        </select>                        
                    </div>
                    <div className="form__group select">
                        <label for="sortBySelect">Sort by</label>
                        <select id="sortBySelect" className="form__select" onChange={(e) => sortArray(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="office">Office</option>
                        </select>                        
                    </div>
                </div>
                
                <div className="results__container">
                    {this.state.filtered ? filteredResults : result}
                </div>
            </div>
        )
      }
}

export default ListComponent;