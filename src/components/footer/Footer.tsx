import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
  renderInfo = () => (
    <div className="footer__top">
      <span className="footer__item">
        <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
        {' 384 Hoàng Diệu, Phường 6, Quận 4, Hồ Chí Minh'}
      </span>
      |
      <span className="footer__item">
        <FontAwesomeIcon icon={faPhoneAlt} color="white" />
        {' 028 3826 8160'}
      </span>
      |
      <span className="footer__item">
        <FontAwesomeIcon icon={faEnvelope} color="white" />
        {' phuong@fossil.com'}
      </span>
    </div>
  );

  renderCompany = () => <div className="footer__bottom">&copy; Công Ty TNHH Fossil Việt Nam</div>;

  render() {
    return (
      <footer className="footer">
        {this.renderInfo()}
        {this.renderCompany()}
      </footer>
    );
  }
}

export default Footer;
