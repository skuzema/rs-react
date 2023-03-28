import React from 'react';
import PageHeader from '../../forms/appPageHeader/PageHeader';

import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div>
      <PageHeader page_name="About Us" />
      <div className="container">
        <div className="row mt-40">
          <div className="col-md-4 col-sm-6">
            <div className="box1">
              <img src="https://i.imgur.com/Ur43esv.jpg" alt="" />
              <h3 className="title">William</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsPage;
