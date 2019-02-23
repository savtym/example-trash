import React, { Component } from 'react';
import Styles from './Main.module.scss';

import {
	Button,
	TextField,
	TypesButton,
	Select,
	Headline,
} from '../../common';

import { options as selectOptions } from './data';


class Main extends Component {

	state = {
		selected: '2',
	};

	onChangeSelectedName = ({ target }) => {
		// target is html tag <select />
		// target.value - selected option
		// setState: https://reactjs.org/docs/react-component.html#setstate
		this.setState({
			selected: target.value,
		});
	};

	render() {
		const { selected } = this.state;

		const user = selectOptions.find((option) => option.value === selected);

		return (
			<div className={Styles.wrapper}>
				<span>Hello World!</span>

				<Button type={TypesButton.error}>
					<TextField/>
				</Button>

				<Button type={TypesButton.success}>
					<span className={Styles.error}>Error</span>
				</Button>

                <Headline>
                    <span>
                        children
                    </span>
                </Headline>

				<TextField/>

				<Select
					onChange={this.onChangeSelectedName}
					options={selectOptions}
					defaultValue={selected}
				/>

				<h2 className={Styles.title}>Hi, {user.label}!</h2>

			</div>
		);
	}
}


export default Main;
