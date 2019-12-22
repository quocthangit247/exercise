import * as React from 'react';
import * as uuidv4 from 'uuid/v4';
import { Row, Col } from 'reactstrap';

class Sidebar extends React.Component {
  statues = ['CONFIRM', 'PROCESS', 'WAITING', 'PAYMENT', 'SUCCESS'];

  renderItem = (status: string, index: number) => (
    <li key={uuidv4()} className={`sidebar__item ${index === 0 ? 'sidebar__item--active' : ''}`}>
      <a>{status}</a>
    </li>
  );

  render() {
    return (
      <Row className="no-padding no-margin">
        <Col md="8" lg="8" xl="8" />
        <Col md="4" lg="4" xl="4" className="no-padding no-margin">
          <div className="sidebar">
            <ul className="no-padding no-margin">
              {this.statues.map((status, index) => this.renderItem(status, index))}
            </ul>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Sidebar;
