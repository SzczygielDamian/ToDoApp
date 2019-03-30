import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleState = e => {
    const name = e.target.name;
    const type = e.target.type;
    const value = e.target.value;

    if (type === "text" || type === "date") {
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 4) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("za krótka nazwa zadania");
    }
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <form>
        <input
          name="text"
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleState}
        />
        <label htmlFor="important">
          Priorytet
          <input
            name="checked"
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleState}
          />
        </label>

        <label htmlFor="date">
          Termin wykonania zadania:
          <input
            name="date"
            type="date"
            id="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleState}
          />
        </label>
        <button onClick={this.handleClick}>Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
