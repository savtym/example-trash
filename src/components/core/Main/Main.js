import React, {Component} from 'react';
import Styles from './Main.module.scss';

import {
  Button,
  TextField,
  TypesButton,
  Select,
  Headline,
  Checkbox,
  Mark,
} from 'components/common';


import { options as selectOptions } from './data';


class Main extends Component {

  state = {
    selected: '2',
    checkedNames: [],
    markInputValue: null,
  };

  onChangeSelectedName = ({target}) => {
    // target is html tag <select />
    // target.value - selected option
    // setState: https://reactjs.org/docs/react-component.html#setstate
    this.setState({
      selected: target.value,
    });
  };

  onChangeCheckbox = ({target}) => {
    const {checked, value} = target;
    const {checkedNames} = this.state;

    this.setState({
      checkedNames: checked
        ? [
          ...checkedNames,
          selectOptions.find((option) => option.value === value),
        ]
        : checkedNames.filter((option) => option.value !== value)
    });
  };

  onMarkChange = ({target}) => {
    this.setState({
      markInputValue: target.value,
    });
  };

  render() {
    const {
      selected,
      checked,
      checkedNames,
      markInputValue
    } = this.state;

    const user = selectOptions.find((option) => option.value === selected);
    const names = checkedNames.map(({label}) => label).join(' ,');

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

        <Mark value={markInputValue} onChange={this.onMarkChange}>
        </Mark>

        <div className={Styles.input_field}>
          Title: <span className={Styles.title}>{markInputValue}</span>
        </div>

        <TextField/>

        <Select
          onChange={this.onChangeSelectedName}
          options={selectOptions}
          defaultValue={selected}
        />

        <h2 className={Styles.title}>Hi, {user.label}!</h2>

        {selectOptions.map(({label, value}) => (
          <Checkbox
            key={label}
            name={label}
            value={value}
            checked={checked}
            onChange={this.onChangeCheckbox}
          />
        ))}

        <h2 className={Styles.title}>
          You selected: {names ? names : 'nothing'}!
        </h2>
      </div>
    );
  }
}


export default Main;