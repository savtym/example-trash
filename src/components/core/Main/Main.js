import React, { Component } from 'react';
import Styles from './Main.module.scss';

import {
	Button,
	TextField,
	TypesButton,
	Select,
} from 'components/common';

const options = [
	{value: '1', label: 'Tymofii'},
	{value: '2', label: 'Mariia'},
	{value: '3', label: 'Oleksi'},

];


class Main extends Component {
	render() {
		return (
			<div className={Styles.wrapper}>
				<span>Hello World!</span>

				<Button type={TypesButton.error}>
					<TextField/>
				</Button>

				<Button type={TypesButton.success}>
					<span className={Styles.error}>Error</span>
				</Button>

				<TextField/>

				<Select options={options} defaultValue={2} />

				<h2 className={Styles.title}>Hi!</h2>
			</div>
		);
	}
}


export default Main;
