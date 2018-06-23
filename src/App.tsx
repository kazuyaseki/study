import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public state = {
    name: '',
    value: 0
  };

  public handleChange = (e: any, value: string) => {
    this.setState({ value });
  };

  public handleChangeName = (e: any) => {
    this.setState({ name: e.target.value });
  };

  public render() {
    return (
      <div className="App">
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="トピック" />
          <Tab label="日報" />
          <Tab label="パイル" />
        </Tabs>
        <ul className="activities">
          <li>
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChangeName}
              margin="normal"
            />
          </li>
        </ul>>
      </div>
    );
  }
}

export default App;
