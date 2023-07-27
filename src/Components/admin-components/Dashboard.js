import React from 'react';

import './Dashboard.css';

import { Link } from 'react-router-dom';


const Dashboard = () => {

    return (

        <div className="container">

            <h2>Main Dashboard</h2>

        <div className="dashboard">

            <div>

                <Link to="/managenewspaper" className='link'>

                    <div className="card" id="manage-newspaper">

                        <img src="https://media.istockphoto.com/id/1368872054/vector/online-news-search-and-reading-news-updates-news-websites-information-on-newspapers-public.jpg?s=1024x1024&w=is&k=20&c=AGKGlAYstwOyPvu29qI1Ji3ULSudJD76QiC8hgv2CtA=" alt="Manage Newspaper" />

                        <h3>Newspapers</h3>

                    </div>

                </Link>

            </div>

            <div>
 
                <Link to="/manageadvertiser" className='link'>

                    <div className="card" id="manage-advertiser">

                        <img src="https://media.istockphoto.com/id/1191487541/vector/personal-info-data-icon-identification-card-icon-personal-info-data-icon-user-or-profile.jpg?s=1024x1024&w=is&k=20&c=gZsqsiLPg-rYzM2RHYYRB3VbXlK8lIM0zBiAdJIWaqQ=" alt="Manage Advertiser" />

                        <h3>manage advertiser</h3>

                    </div>

                </Link> 

            </div>

            <div>

                <Link to="/manageadvertisements" className='link'>

                    <div className="card" id="manage-advertisements">

                        <img src="https://media.istockphoto.com/id/1309704728/vector/3d-isometric-flat-vector-conceptual-illustration-of-offline-advertising.jpg?s=1024x1024&w=is&k=20&c=l7RCCW5H1GwsmL1cNGXX--gYlw3O1PJilrvoDx4xAtg=" alt="Manage Advertisements" />

                        <h3>Manage Advertisements</h3>

                    </div>

                </Link> 

            </div >

            <div>

                <Link to="/booking" className='link'>

                    <div className="card" id="booking">

                        <img src="https://media.istockphoto.com/id/1223444600/vector/hand-holding-smartphone-showing-book-now-message.jpg?s=1024x1024&w=is&k=20&c=ewUAArtA_MTZD7RNhdvY5hgalwaJqZqmbIDBM1iEfek=" alt="Booking" />

                        <h3>Booking Request</h3>

                    </div>

                </Link> 

            </div >
            <div>

                <Link to="/payments" className='link'>

                    <div className="card" id="payment">

                        <img src="https://media.istockphoto.com/id/1191967417/vector/pay-by-credit-card-via-electronic-wallet-wirelessly-on-phone-new-mobile-banking-app-and-e.jpg?s=1024x1024&w=is&k=20&c=oGRqkoc0Uke3XkIDUR3q6IcHarg5gxOeQ_3jSaclqR8=" alt="Payment" />

                        <h3>Payment</h3>

                    </div>

                </Link> 

            </div >

        </div >

        </div>

    );

};




export default Dashboard;