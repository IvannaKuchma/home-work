import { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('CounterClass змонтовано');
  }

  componentDidUpdate() {
    console.log('CounterClass оновлено');
  }

  render() {
    return (
      <div>
        <p>Лічильник (класовий): {this.state.count}</p>
        <button onClick={this.increment}>Збільшити</button>
      </div>
    );
  }
}

export default CounterClass;
