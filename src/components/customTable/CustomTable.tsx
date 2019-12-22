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
        <span>Lv{level}</span>
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

  render() {
    const { data = [], titles = this.titles } = this.props;
    return (
      <Table className="customTable" responsive>
        <thead>
          <tr>{titles.map(item => this.renderHeader(item))}</tr>
        </thead>
        <tbody>{data.map(item => this.renderBody(item))}</tbody>
        <div>You have .............</div>
      </Table>
    );
  }
}

export default CustomTable;
