import { type } from "os";
import { Component } from "react";
type CounterProps = {
  name: string;
};
type CounterState = {
  count: number;
};
class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };
  handleClick = () =>
    this.setState({ ...this.state, count: this.state.count + 1 });

  render() {
    const { count } = this.state;
    const { name } = this.props;
    return (
      <>
        <p>
          Hello {name} counter val is {count}
        </p>
        <button onClick={() => this.handleClick()}>Click</button>
      </>
    );
  }
}

export default Counter;
