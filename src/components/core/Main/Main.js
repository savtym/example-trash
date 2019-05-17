import React, { Component } from 'react';
import Styles from './Main.module.scss';

import {
  Button,
  TextField,
  TypesButton,
  Select,
  Headline,
  Checkbox,
  Input,
  Textarea,
  RadioButton,
  Clock,
} from 'components/common';


import {options as selectOptions} from './data';

class Main extends Component {

  state = {
    selected: '2',
    checkedNames: [],
    markInputValue: null,
    description: "",
    checkedRadio: 'Tymofii',
  };

  onChangeSelectedName = ({ target }) => {
    // target is html tag <select />
    // target.value - selected option
    // setState: https://reactjs.org/docs/react-component.html#setstate
    this.setState({
      selected: target.value,
    });
  };

  onChangeCheckbox = ({ target }) => {
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

  onInputChange = ({ target }) => {
    this.setState({
      InputValue: target.value,
    });
  };

  onTextareaChange = ({ target }) => {
    this.setState({
      description: target.value,
    });
  };

  onRadioChange = ({ target }) => {
    this.setState({
      checkedRadio: target.value,
    });
  };

  render() {
    const {
      selected,
      checked,
      checkedNames,
      InputValue,
      description,
      checkedRadio,
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

        <Textarea
          onChange={this.onTextareaChange}
          value={description}
        />

        <div>
          Textarea:
          <span className={Styles.text}>
						{description}
					</span>
        </div>

        <Headline>
					<span>
						children
					</span>
        </Headline>

        <Clock/>

        <Input
          value={InputValue}
          onChange={this.onInputChange}
        />

        <div className={Styles.input_field}>
          Title: <span className={Styles.title}>{InputValue}</span>
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

        <form className={Styles.form}>
          <span className={Styles.description}>Please, select one option</span>

          {selectOptions.map(({ label, value }) => (
            <RadioButton
              key={value}
              label={label}
              onChange={this.onRadioChange}
              isChecked={checkedRadio === label}
            />
          ))}

          <h2 className={Styles.title}>
            You selected: {checkedRadio}!
          </h2>
        </form>
      </div>
    );
  }
}


export default Main;
