
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOrders, getCart } from '../store/';
import {
  Segment,
  Button,
  Modal,
  Header,
} from 'semantic-ui-react';

/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchInitialData(this.props.id);
  }

  render() {
    return (
      <div className="centered">
        <h3>Welcome, {this.props.email}</h3>
        <div className="ui raised very padded text container segment">
          <h3 className="ui fluid top attached header">User Detail</h3>
          <Segment attached>
            <Segment>
              <p>Email: {this.props.email}</p>
            </Segment>
          </Segment>
          <h3 className="ui attached header">Orders</h3>
          <Segment attached>
            {this.props.orders &&
              this.props.orders.map(order => (
                <Segment key={order.id}>
                  <p>Order Date: {order.createdAt.slice(0, 10)}</p>
                  <p>Total: ${Number(order.subtotal) + Number(order.tax)}</p>
                  <p>Status: {order.status}</p>
                  <Modal trigger={<Button>Show Order</Button>}>
                    <Modal.Header>Order #{order.id}</Modal.Header>
                    <Modal.Content image>
                      <Modal.Description>
                        <Header>Order Date</Header>
                        <p>{order.createdAt.slice(0, 10)}</p>
                        <Header>Order Items</Header>
                        {order.orderItems &&
                          order.orderItems.map(items => (
                            <Segment key={items.id}>
                              <p>Product {items.product.name}</p>
                              <p>Qty: {items.quantity}</p>
                            </Segment>
                          ))}
                        <Header>Total</Header>
                        <p>${Number(order.subtotal) + Number(order.tax)}</p>
                        <Header>Status</Header>
                        <p>{order.status}</p>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Segment>
              ))}
          </Segment>
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id,
    orders: state.userOrders
  };
};

const mapDispatch = dispatch => ({
  fetchInitialData: id => {
    dispatch(fetchOrders(id));
  }
});

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
