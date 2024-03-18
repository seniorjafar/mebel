import { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


import background1 from '../../image/background-1.png';
import grid from '../../image/grid1.png';

import card1 from '../../image/card1.png';
import card2 from '../../image/card2.png';
import card3 from '../../image/card3.png';

import rectangle1 from '../../image/Rectangle25.png';
import rectangle2 from '../../image/Rectangle43.png';
import rectangle3 from '../../image/Rectangle45.png';



function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('your-api-url') // API manzilingizni qo'ying
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  const divStyle = {
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
  };
  const carouselImg = {
    backgroundImage: `url(${grid})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
  };
  useEffect(() => {
  fetch('http://localhost:3000/product') 
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.log(error));
}, []);


  return (
    <div>
      <section style={divStyle}>
        <Container>
          <div className='w-100% my-background'>
            <div className='row justify-content-end'>
              <div className='col-md-6' style={{ backgroundColor: '#FFF3E3', padding: '40px', margin: '153px 53px 100px 0' }}>
                <h3>New Arrival</h3>
                <h1 className='w-75 fs-1 fw-bold' style={{ color: '#B88E2F' }}>Discover Our New Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <Button className='btn py-2 px-3 text-light border-0' style={{ backgroundColor: '#B88E2F', borderRadius: '0' }}>BUY Now</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className='text-center mt-5'>
            <h1>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='mt-5 d-flex justify-content-between'>
              <Card style={{ width: '18rem', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Img variant="top" src={card1} />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title>Dining</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Img variant="top" src={card2} />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title>Living</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Img variant="top" src={card3} />
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title>Bedroom</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
      <section>
         <Container>
          <h1 className='fw-bold text-center mb-4'>Our Products</h1>
          <div className='d-flex justify-content-between flex-wrap gap-4 mb-4'>
            {products.map(product => (
              <Card key={product.id} style={{ width: '18rem', border: 'none' }}>
                <Card.Img variant="top" src={product.imageSrc} />
                <Card.Body className='bg-secondary bg-opacity-25'>
                  <Card.Title className='fs-3 fw-bold'>{product.title}</Card.Title>
                  <Card.Text className='text-body-secondary'>
                    {product.description}
                  </Card.Text>
                  <Card.Link className='fs-4 fw-semibold' href="#">{product.price}</Card.Link>
                  <Card.Link href="#" className='text-body-tertiary'><del>{product.discountPrice}</del></Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className='text-center'>
            <Button className='btn py-2 px-5 bg-light  fw-bold ' style={{ backgroundColor: '#B88E2F',border:'1px solid #B88E2F', borderRadius: '0', color:'#B88E2F' }}>BUY Now</Button>
          </div>
        </Container>
      </section>
      <section className='mt-5' style={{backgroundColor:'#FCF8F3', padding:'44px 0 44px 100px'}}>
            <Container>
  <div className='row'>
    {/* Left section */}
    <div className='col-md-5'>
      <h1>50+ Beautiful rooms inspiration</h1>
      <p>Our designer already made a lot of beautiful prototype rooms that inspire you</p>
      <Button className='btn py-2 px-3 text-light border-0' style={{ backgroundColor: '#B88E2F', borderRadius: '0' }}>
        Explore More
      </Button>
    </div>
    {/* Middle section */}
    <div className='col-md-3'>
      <div style={carouselImg}>
        <div className='w-100 my-background' style={{ width: '300px', height: '500px' }}>
          
        </div>
      </div>
    </div>
    {/* Right section */}
    <div className='col-md-3'>
                  <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '400px'}}
              src={rectangle1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '400px'}}
              src={rectangle2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '400px'}}
              src={rectangle3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>
  </div>
</Container>

      </section>
    </div>
  );
}

export default Home;