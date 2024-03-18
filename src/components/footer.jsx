
import { Container, InputGroup, Form, Button } from 'react-bootstrap';


function footer() {
  return (

    <div>
        <hr />
        <footer>
            <Container>
                <div className='row  justify-content-between py-5'>
                    <div className='col-md-4'>
                        <h2 style={{margin:'0 0 50px'}}>Funiro.</h2>
                        <p className='text-body-tertiary'>400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='text-body-tertiary' style={{margin:'0 0 50px'}}>Links</h5>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='text-body-tertiary' style={{margin:'0 0 50px'}}>Help</h5>
                        <p>Payment Options</p>
                        <p>Returns</p>
                        <p>Privacy Policies</p>
                    </div>
                    <div  className='col-md-3'>
                        <h5 className='text-body-tertiary' style={{margin:'0 0 50px'}}>Newsletter</h5>
                        <InputGroup className="mb-3 gap-3">
                            <Form.Control className='border-0 border-bottom ' 
                            style={{borderRadius:'0'}}
                            placeholder="Enter Your Email Address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <Button className='border-0 border-bottom' style={{borderRadius:'0'}} variant="outline-secondary" id="button-addon2">
                            SUBSCRIBE
                            </Button>
                        </InputGroup>
                    </div>
                    <hr />
                </div>
            </Container>
        </footer>
    </div>
  )
}

export default footer