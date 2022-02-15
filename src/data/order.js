import { useState } from 'react';

const useOrder = () => {
  const [order, setOrder] = useState([]);

  function getOrder() {
    return order;
  }

  function getOrderTotal(items) {
    return order.reduce((b, oitem) => {
      if (items.findIndex((item) => item.id === oitem.id) !== -1) {
        return b + items.find((item) => item.id === oitem.id).price * oitem.qty;
      }
      return b;
    }, 0);
  }

  function addToCart(id, qty) {
    if (qty > 0) {
      const temp = order.find((oitem) => oitem.id === id);
      if (temp) {
        temp.qty = qty;
      } else {
        setOrder(order.concat({ id, qty }));
      }
      return true;
    }
    return false;
  }

  function containsItem(id) {
    if (order.length > 0 && order.findIndex((i) => i.id === id) !== -1) {
      return true;
    }
    return false;
  }
  return { getOrderTotal, addToCart, getOrder, containsItem };
};

export default useOrder;
