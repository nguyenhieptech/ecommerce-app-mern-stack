import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Card className='text-left'>
        <Card.Body>
          <Container className='text-left'>
            <Row>
              <Col md='4'>
                <h5>
                  {' '}
                  <i class='far fa-credit-card'></i> Safe Payment
                </h5>
                <p>
                  <small>
                    Paying with the world's most popular and secure payment
                    methods include Paypal.
                  </small>
                </p>
              </Col>
              {/* <hr className='clearfix w-100 d-md-none' /> */}
              <Col md='4'>
                <h5>
                  <i class='fas fa-truck'></i> Delivery Policy
                </h5>
                <p>
                  <small>
                    We cover your purchase from click to delivery. Therefore you
                    don't need to worry.
                  </small>
                </p>
              </Col>
              {/* <hr className='clearfix w-100 d-md-none' /> */}
              <Col md='4'>
                <h5>
                  <i class='fas fa-sync'></i> Easy Change
                </h5>
                <p>
                  <small>
                    Try it out for 3 days. If there is any problem, products
                    can be returned within 7 days.
                  </small>
                </p>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer className='text-center'>
          <div className='text-center'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a href className='btn-floating btn-lg btn-fb mx-1'>
                  <i className='fa fa-facebook'> </i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href className='btn-floating btn-lg btn-tw mx-1'>
                  <i className='fa fa-twitter'> </i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href className='btn-floating btn-lg btn-gplus mx-1'>
                  <i className='fa fa-google-plus'> </i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href className='btn-floating btn-lg btn-li mx-1'>
                  <i className='fa fa-linkedin'> </i>
                </a>
              </li>
            </ul>
          </div>
          <Col className='text-center'>Copyright &copy; Hiep Nguyen</Col>
        </Card.Footer>
      </Card>
    </footer>
  );
};

export default Footer;
