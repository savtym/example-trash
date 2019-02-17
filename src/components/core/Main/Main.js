import React, { Component } from 'react';
import Styles from './Main.module.scss';

import {
	Button,
	TextField,
	TypesButton,
} from 'components/common';


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

				<h2 className={Styles.title}>Hi!</h2>
			</div>
		);
	}
}


export default Main;
