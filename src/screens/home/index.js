import React, { PureComponent } from 'react'
import { Input, Button } from 'semantic-ui-react'
import Styles from './style.module.css'

//Components
import CustomTable from '../../components/semantic-ui-table'

export default class index extends PureComponent {

  state = {
    search: "",
    data: [{
      name: "jason",
      lastName: "parra",
      phone: "+1 (555) 333 4444",
      email: "example1@gmail.com",
      age: "20",
    },
    {
      name: "Juan",
      lastName: "Perez",
      phone: "+1 (888) 500 2220",
      email: "example2@gmail.com",
      age: "35"
    },
    {
      name: "Maria",
      lastName: "Altazar",
      phone: "+1 (809) 333 1234",
      email: "example3@gmail.com",
      age: "35",
    },
    {
      name: "Jorge",
      lastName: "Peralta",
      phone: "+1 (500) 100 9000",
      email: "example4@gmail.com",
      age: "29"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "56"
    },
    {
      name: "Javier",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 9000",
      email: "example5@gmail.com",
      age: "57"
    },
    {
      name: "Orlando",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "58"
    },
    {
      name: "Edison",
      lastName: "Rodriguez",
      phone: "+1 (789) 255 2000",
      email: "example5@gmail.com",
      age: "44"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "59"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "60"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "61"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "62"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "63"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "64"
    },
    {
      name: "Erika",
      lastName: "Gonzales",
      phone: "+1 (300) 100 2000",
      email: "example9@gmail.com",
      age: "65"
    },
    {
      name: "Pablo",
      lastName: "Mirabal",
      phone: "+1 (300) 100 2000",
      email: "example10@gmail.com",
      age: "66"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "66"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "67"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "68"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "69"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "70"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "71"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "72"
    },
    {
      name: "Miguel",
      lastName: "Rodriguez",
      phone: "+1 (300) 100 2000",
      email: "example5@gmail.com",
      age: "73"
    }]
  }

  handleInputs = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  searchOnData = (query, data) => {
    const filtered = data.filter(item => {
      let obj = {};
      for (let key of Object.keys(item)) {
        obj[key] = item[key];
      }
      for (let key of Object.keys(obj)) {
        let value = obj[key];
        let re = new RegExp("W*(" + query + ")W*");
        if (re.test(value.toString().toLowerCase())) {
          return true;
        } else if (re.test(value)) {
          return true;
        }
      }
    })
    return filtered
  }

  render() {
    const { search, data } = this.state

    return (
      <div className={Styles.container} >
        <Input
          placeholder={'Buscar'}
          onChange={this.handleInputs}
          value={search}
          name={'search'}
          icon={'search'}
          style={{ width: '250px' }}
        >
        </Input>
        <CustomTable
          data={search ? this.searchOnData(search, data) : data}
          headers={["Nombre", "Apellido", "Teléfono", "Correo", "Edad"]}
          labels={["name", "lastName", "phone", "email", "age"]}
          defaultPages={10}
          isSearching={search}
        />
      </div >
    )
  }
}
