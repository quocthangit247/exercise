import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Sidebar from '../sidebar/Sidebar';
import Title from '../title/Title';
import { getData } from './OrderActions';
import CustomTable from '../customTable/CustomTable';

interface IDispatchToProps {
  getData: () => void;
}

interface IStateToProps {
  data: [];
  isLoading: boolean;
}

interface IProps extends IDispatchToProps, IStateToProps {}

interface IState {}

class Order extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.props.getData();
  }

  public render() {
    const { data, isLoading } = this.props;
    return (
      <section className="order">
        <Title titleName="List of order" information={'Orders information & payment'} />
        <Row className="no-padding no-margin">
          <Col md="4" lg="4" xl="4" className="order__left no-padding no-margin">
            <Sidebar />
          </Col>
          <Col md="8" lg="8" xl="8" className="order__right no-padding no-margin">
            <div className="order__text">
              You have <span className="order__text order__text--highlight">{data.length}</span> orders, waiting for you confirm
            </div>
            <CustomTable data={data} isLoading={isLoading} />
          </Col>
        </Row>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  data: state.HomepageReducer.data,
  isLoading: state.HomepageReducer.isLoading,
});

const mapDispatchToProps = {
  push,
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
