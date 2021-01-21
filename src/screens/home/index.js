import React, { PureComponent } from "react";

//Components
import CustomTable from "../../components/semantic-ui-table";
import { Input } from "semantic-ui-react";

//Styles
import Styles from "./style.module.css";

//Data
import { data } from "../../constant";

export default class index extends PureComponent {
	state = {
		search: "",
	};

	handleInputs = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { search } = this.state;

		return (
			<div className={Styles.container}>
				<Input
					placeholder={"Buscar"}
					onChange={this.handleInputs}
					value={search}
					name={"search"}
					icon={"search"}
					style={{ width: "250px" }}
				></Input>
				<CustomTable
					data={data}
					headers={["Nombre", "Apellido", "Teléfono", "Correo", "Edad"]}
					labels={["name", "lastName", "phone", "email", "age"]}
					pageRows={10} //Optional
					searchQuery={search} //Optional
					footerPages={10} //Optional
				/>
				<CustomTable
					data={[
						{
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
							age: "35",
						},
					]}
					headers={["Nombre", "Apellido", "Teléfono", "Correo", "Edad"]}
					labels={["name", "lastName", "phone", "email", "age"]}
					searchQuery={search} //Optional
					pageRows={10} //Optional, 10 by default
					footerPages={10} //Optional, 10 by default
				/>
			</div>
		);
	}
}
