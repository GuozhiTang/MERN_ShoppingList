import React, { Component, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/ItemActions';
import PropTypes from 'prop-types';

// const ShoppingList = (props) => {

//   /*
//   state = {
//     items: [
//       { id: uuid(), name: 'Eggs' },
//       { id: uuid(), name: 'Milk' },
//       { id: uuid(), name: 'Steak' },
//       { id: uuid(), name: 'Water' }
//     ]
//   }

//   const { items } = this.state;
//   */

//   // // ES6
//   // let itemList = [
//   //   { id: uuid(), name: 'Eggs' },
//   //   { id: uuid(), name: 'Milk' },
//   //   { id: uuid(), name: 'Steak' },
//   //   { id: uuid(), name: 'Water' }
//   // ];
//   componentDidMount() {
//     this.props.getItems;
//   }
  
//   const [items, setItems] = useState(itemList);

//   return (
//     <Container>
//       <Button
//         color="dark"
//         style={{marginBottom: '2rem'}}
//         onClick={() => {
//           const name = prompt('Enter Item');
//           if (name) {
//             setItems(
//               [...items, {id: uuid(), name}]
//             );
//             // this.setState(state => ({
//             //   items: [...state.items, { id: uuid(), name }]
//             // }));
//           }
//         }}
//       >
//         Add Item
//       </Button>

//       <ListGroup>
//         <TransitionGroup className="shopping-list">
//           {items.map(({ id, name }) => (
//             <CSSTransition key={id} timeout={500} classNames="fade">
//               <ListGroupItem>
//                 <Button
//                   className="remove-btn"
//                   color="danger"
//                   size="sm"
//                   onClick={() => {
//                     setItems(
//                       items.filter(item => item.id !== id)
//                     );
//                   }}
//                 >&times;</Button>
//                 {name}
//               </ListGroupItem>
//             </CSSTransition>
//           ))}
//         </TransitionGroup>
//       </ListGroup>
//     </Container>
//   );
// }

class ShoppingList extends Component {
  // https://stackoverflow.com/questions/40904770/reactjs-how-to-define-componentdidmount-inside-es6-const
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    // const { items } = this.state;
    const { items } = this.props.item;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              // setItems(
              //   [...items, {id: uuid(), name}]
              // );
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
  
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      // setItems(
                      //   items.filter(item => item.id !== id)
                      // );
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

// export default ShoppingList;
export default connect(mapStateToProps, { getItems })(ShoppingList);