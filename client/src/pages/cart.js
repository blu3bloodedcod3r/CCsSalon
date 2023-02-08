// // import { Button, Modal } from 'react-bootstrap'
// import { useState, useContext } from 'react'
// import { cartContext } from '../components/Cart/cartContext'

// function NavbarComponent() {
//     const cart = useContext(cartContext)

//     const [show, setShow] = useState(false)
//     const handleClose = () => setShow (false)
//     const handleShow = () => setShow (true)

//     const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

//     return (
        
//         <>
//         <aside className="main-content">
//         <h3>Shopping Cart</h3>
        
//             {/* <Navbar>
//                 <Navbar.Toggle />
//                 <Navbar.Collapse>
//                     <a className="btn btn-primary" onClick={handleShow}>Cart</a>
//                 </Navbar.Collapse>
//             </Navbar> */}
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Shopping Cart</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {productsCount > 0 ? 
//                         <>
//                             <p>Items in your cart:</p>
//                             {cart.items.map((currentProduct, ikdx) => (
//                                 <h1>{currentProduct.id}</h1>
//                             ))}

//                             <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

//                             <Button variant="success">
//                                 Purchase items!
//                             </Button>
                            
//                         </>
//                     :   
//                         <h1>There are no items in your cart</h1>
//                     }
//                     <h1>This is the modal body</h1>
//                 </Modal.Body>
//             </Modal> 
//             </aside>
//         </>
//     )
// }

// export default NavbarComponent