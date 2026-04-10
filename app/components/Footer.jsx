"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* TOP */}
        <div className="top">
          {/* LEFT */}
          <div className="left">
            <h2>KASHflow</h2>
            <p>
              All your transactions, receipts and expenses in one smart app.
              Control your budget in real-time. Transfer funds to any account
              anywhere in the world. Convert funds to any currency in real-time.
            </p>
          </div>

          {/* RIGHT */}
          <div className="links">
            <div className="col">
              <h4>Support</h4>
              <span>Help</span>
              <span>FAQ</span>
              <span>Contact form</span>
            </div>

            <div className="col">
              <h4>Legal</h4>
              <span>Terms</span>
              <span>Privacy policy</span>
              <span>Cookies Policy</span>
            </div>

            <div className="col">
              <h4>Product</h4>
              <span>About</span>
              <span>Service</span>
              <span>Features</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom">
          <p className="copyright">
            © Copyright 2022 by olamide_ui. All rights reserved
          </p>

          <div className="address">
            <span>3044 Hill Road California</span>
            <span>408 844 2008</span>
            <span>kashflow@support.com</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          background: #0b1170;
          color: #fff;
          padding: 60px 20px 30px;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        /* TOP */
        .top {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-bottom: 50px;
        }

        .left {
          max-width: 500px;
        }

        .left h2 {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .left p {
          font-size: 14px;
          line-height: 1.7; /* FIXED spacing */
          color: #c7ccff;
        }

        /* LINKS */
        .links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .col {
          display: flex;
          flex-direction: column; /* prevents overlap */
        }

        .col h4 {
          font-size: 14px;
          margin-bottom: 12px;
        }

        .col span {
          display: block; /* VERY IMPORTANT */
          font-size: 13px;
          margin-bottom: 10px;
          line-height: 1.6; /* FIXES TEXT STACKING */
          color: #c7ccff;
          cursor: pointer;
        }

        .col span:hover {
          color: #fff;
        }

        /* BOTTOM */
        .bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .copyright {
          font-size: 12px;
          color: #aab0ff;
        }

        .address {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12px;
          color: #aab0ff;
        }

        /* TABLET */
        @media (min-width: 600px) {
          .links {
            grid-template-columns: repeat(3, 1fr);
          }

          .address {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
          }
        }

        /* DESKTOP */
        @media (min-width: 900px) {
          .top {
            flex-direction: row;
            justify-content: space-between;
          }

          .links {
            display: flex;
            gap: 70px;
          }

          .bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .address {
            flex-wrap: nowrap;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
