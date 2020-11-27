import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ContactScreen = () => {
	return (
		<>
			<Jumbotron>
				<div>
					<strong>Check out our location</strong>
				</div>
				<br />
				<p>
					Buy anything you want with our awesome shop. Feel free to reach out to
					us.
				</p>
				<br />
				<p>
					<LinkContainer to='/contact'>
						<Button variant='primary'>
							Send us your email to get to know more!
						</Button>
					</LinkContainer>
				</p>
			</Jumbotron>
			<>{/* <GoogleMapFunctional /> */}</>
			<div className=''>
				<div>
					<h2>Shop information</h2>
					<p>
						Claritas est etiam processus dynamicus, qui sequitur mutationem
						consuetudium lectorum. Mirum est notare quam littera gothica, quam
						nunc putau um parum claram, anteposuerit litterarum formas
						humanitatis per seacula quarta decima et quinta decima.{' '}
					</p>
					<div className='wn__addres__wreapper'>
						<div className='single__address'>
							<i className='fas fa-address-book'></i>
							<span> ADDRESS</span>
							<div className='content'>
								<p>Hanoi, Vietnam</p>
							</div>
						</div>

						<div>
							<i className='fas fa-phone'></i>
							<span> PHONE NUMBER</span>
							<div>
								<p>098-999-6789</p>
							</div>
						</div>

						<div>
							<i className='fas fa-envelope'></i>
							<span> EMAIL ADDRESS</span>
							<div>
								<p>handsomeshop@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactScreen;
