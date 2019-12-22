import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import ApiService from '../../config/apiService';
import { getData } from './HomepageActions';
const uuidv4 = require('uuid/v4');

interface IDispatchToProps {
  getData: () => void;
}

interface IStateToProps {
  data: [];
}

interface IProps extends IDispatchToProps, IStateToProps {}

interface IState {
  buttons: number[];
  limit: number;
  bars: number[];
  values: number[];
  selected: number;
}

class Homepage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      bars: [],
      buttons: [],
      limit: 0,
      values: [],
      selected: 0,
    };
  }

  async componentDidMount() {
    this.props.getData();
  }

  public render() {
    const { data } = this.props;
    // comment neeeeee
    console.log('>>>>>>>>>>>>data', data);
    return <section className="homepage"></section>;
  }
}

const mapStateToProps = state => ({
  data: state.HomepageReducer.data,
});

const mapDispatchToProps = {
  push,
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
