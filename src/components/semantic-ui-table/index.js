import React, { PureComponent } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";

import Styles from "./style.module.css";

class CustomTable extends PureComponent {
	state = {
		page: 0,
		pageSelection: null,
		searchQuery: "",
		header: "",
	};

	componentDidMount = () => {
		const { defaultPages } = this.props;
		this.setState({
			pageSelection: [0, defaultPages],
		});
	};

	componentDidUpdate = () => {
		const { searchQuery, defaultPages } = this.props;
		if (searchQuery) {
			if (this.state.searchQuery !== this.props.searchQuery)
				this.setState({ searchQuery, pageSelection: [0, defaultPages], page: 0 });
		}
	};

	dynamicsort = (property, order) => {
		var sort_order = 1;
		if (order === "desc") {
			sort_order = -1;
		}
		return function (a, b) {
			if (a[property] < b[property]) {
				return -1 * sort_order;
			} else if (a[property] > b[property]) {
				return 1 * sort_order;
			} else {
				return 0 * sort_order;
			}
		};
	};

	handleSort = (header) => {
		const { defaultPages, headers } = this.props;
		let obj = {};

		headers.forEach((item) => {
			obj = {
				...obj,
				[item]: item !== header ? "" : this.state[item] === "asc" ? "desc" : "asc",
			};
		});

		this.setState({ header, pageSelection: [0, defaultPages], page: 0, ...obj });
	};

	getSort = (header, data) => {
		const { labels, headers } = this.props;

		const headerIndex = headers.indexOf(header);
		const label = labels[headerIndex];

		return data.sort(this.dynamicsort(label, this.state[header] === "asc" ? "desc" : "asc"));
	};

	searchOnData = (query, data) => {
		return data.filter((item) => {
			let obj = {};
			for (let key of Object.keys(item)) {
				obj[key] = item[key];
			}
			for (let key of Object.keys(obj)) {
				try {
					let value = obj[key];
					let re = new RegExp("W*(" + query + ")W*");
					if (re.test(value.toString().toLowerCase())) {
						return true;
					} else if (re.test(value)) {
						return true;
					}
				} catch (e) {
					return false;
				}
			}
			return false;
		});
	};

	renderHeaders = () => {
		const { headers } = this.props;
		return (
			<Table.Header>
				<Table.Row>
					{(headers || []).map((item, index) => (
						<Table.HeaderCell key={index} onClick={() => this.handleSort(item)}>
							<div className={Styles.header}>
								<div>{item}</div>
								<div className={Styles.icon}>
									<Icon name={this.state[item] === "asc" ? "caret up" : "caret down"}></Icon>
								</div>
							</div>
						</Table.HeaderCell>
					))}
				</Table.Row>
			</Table.Header>
		);
	};

	handleFooter = (i) => {
		const { defaultPages, data, searchQuery } = this.props;
		const pagesQ = Math.ceil(
			(searchQuery ? this.searchOnData(searchQuery, data) : data).length / defaultPages
		);

		if (i >= 0 && i < pagesQ)
			this.setState({
				pageSelection:
					i === 0 ? [0, defaultPages] : [i * defaultPages, i * defaultPages + defaultPages],
				page: i,
			});
	};

	getData = () => {
		const { data, searchQuery } = this.props;
		const { pageSelection, header } = this.state;

		let _data = data || [];

		if (searchQuery) _data = this.searchOnData(searchQuery, _data);

		if (header) _data = this.getSort(header, _data);

		if (pageSelection) _data = _data.slice(...pageSelection);

		return _data;
	};

	renderData = () => {
		const { labels } = this.props;
		const data = this.getData();

		return (
			<Table.Body>
				{(data || []).map((item, index) => (
					<Table.Row key={index}>
						{(labels || []).map((label, index) => (
							<Table.Cell key={index}>
								<div className={Styles.cell}>{item[label] || ""}</div>
							</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		);
	};

	renderFotter = () => {
		const { defaultPages, labels, data, searchQuery } = this.props;
		const { page } = this.state;
		const pagesQ = Math.ceil(
			(searchQuery ? this.searchOnData(searchQuery, data) : data).length / (defaultPages || 10)
		);

		let pages = [];

		for (let i = 1; i <= pagesQ; i++) {
			pages = [...pages, i];
		}

		return (
			<Table.Footer>
				<Table.Row>
					<Table.HeaderCell colSpan={labels.length}>
						<Menu floated="right" pagination>
							<Menu.Item as="a" icon onClick={() => this.handleFooter(page - 1)}>
								<Icon name="chevron left" />
							</Menu.Item>
							{pages.map((item, index) => {
								return (
									<Menu.Item
										key={index}
										style={item - 1 === page ? { backgroundColor: "#E5E5E5" } : {}}
										as="a"
										onClick={() => this.handleFooter(item - 1)}
									>
										{item}
									</Menu.Item>
								);
							})}
							<Menu.Item as="a" icon onClick={() => this.handleFooter(page + 1)}>
								<Icon name="chevron right" />
							</Menu.Item>
						</Menu>
					</Table.HeaderCell>
				</Table.Row>
			</Table.Footer>
		);
	};

	render() {
		return (
			<Table celled>
				{this.renderHeaders()}
				{this.renderData()}
				{this.renderFotter()}
			</Table>
		);
	}
}

export default CustomTable;
