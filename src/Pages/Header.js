import React, { useContext } from 'react';
import { Container,Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';



const Header = () => {


    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        } 
    });




    return (
        <div className='navbar-to'>
            <Navbar collapseOnSelect className=''  expand="lg" bg="light" variant="light">
            <Container>
                {/* <img src={c} className="imageC1" alt="" /> */}
                <Navbar.Brand><Link className='blog-name' to='/'>Buy-Sell Bangladesh</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='blog-container' to='/'>Home</Link>  
                        <Link className='blog-container' to='/blog'>Blog</Link>  
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {/* <Link className='blog-container' to='/addservices'>Sell Here</Link>
                                        <Link className='blog-container' to='/allUsers'>Dash Board</Link> */}
                                        <Link className='blog-container' onClick={handleLogOut}>Log out</Link> 
                                        
                                    </>
                                    :
                                    <>
                                        <Link className='blog-container' to='/login'>Login</Link> 
                                        <Link className='blog-container' to='/register'>Register</Link> 
                                    </>
                            }

                        </>
                        <div>
                            {
                                users.map((user) =><div className='d-flex' key={user._id}>
                                
                                <>
                                { users?.role == 'admin' ? <Link className='blog-container' to='/allUsers'>Dash Board</Link>
                                    :
                                    users?.role == 'admin' && <Link className='blog-container' to='/myOrder'>My Order</Link>
                                }
                                </>
            
                                    </div>)
                            }

                        </div>
                        
                        <div  to="/profile">
                            {user?.photoURL ?
                                
                                <Image
                                                    style={{ height: '35px', width:'35px', marginRight: '10px' }}
                                                    roundedCircle
                                                    src={user?.photoURL}>
                                                </Image>
                                
                               
                                : <FaUser></FaUser>
                            }
                        </div>
                          
                        
                    </Nav><br />
                    <div>
                            {user?.displayName}
                    </div> 
                    
                     
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;