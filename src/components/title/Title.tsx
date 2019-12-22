import * as React from 'react';
import { Container } from 'reactstrap';

interface IProps {
  titleName: string;
  information: string;
}

class Title extends React.Component<IProps, null> {
  render() {
    const { information = '', titleName = '' } = this.props;
    return (
      <>
        <div className="title">
          <h1 className="title__name">{titleName}</h1>
          <h6 className="title__desc">{information}</h6>
        </div>
        <div className="back-button">
          <Container>
            <span> &lt; back </span>
          </Container>
        </div>
      </>
    );
  }
}

export default Title;
