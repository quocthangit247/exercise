import * as React from 'react';
import { Table } from 'reactstrap';
import * as dayjs from 'dayjs';

interface IProps {
  data: [];
  isLoading: boolean;
  titles?: string[];
}

class CustomTable extends React.Component<IProps> {
  titles = ['Name', 'Quantity', 'Date Order', 'Order ID', 'Total'];

  renderHeader = (name: string) => <th>{name}</th>;

  renderUser = (name: string, level: number) => {
    return (
      <>
        <div>
          <strong>{name}</strong>
        </div>
        <div className="customer__level">Lv{level}</div>
      </>
    );
  };

  renderBody = (item: any) => (
    <tr>
      <td scope="row">{this.renderUser(item.username, item.level)}</td>
      <td>{item.quantity}</td>
      <td>{dayjs(item.dateOrder).format('DD.MM.YYYY')}</td>
      <td>{item.orderId}</td>
      <td>{item.total}</td>
    </tr>
  );

  renderPagination = () => (
    <div className="pagination">
      <a href="#">First</a>
      <a href="#">01</a>
      <a href="#" className="pagination__active">
        02
      </a>
      <a href="#">03</a>
      <a href="#">04</a>
      <a href="#">...</a>
      <a href="#">12</a>
      <a href="#">Last</a>
    </div>
  );

  render() {
    const { data = [], titles = this.titles } = this.props;
    return (
      <>
        <Table className="customTable" responsive>
          <thead>
            <tr>{titles.map(item => this.renderHeader(item))}</tr>
          </thead>
          <tbody>
            {data.map(item => this.renderBody(item))}
            <tr className="customTable__footer">
              <td>
                <div className="customTable__text">You have: 1200 order</div>
              </td>
              <td className="customTable__pagination" colSpan={4}>
                {this.renderPagination()}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default CustomTable;
