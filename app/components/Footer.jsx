"use client";

import React from "react";

const styles = {
  footer: {
    width: "100%",
    background: "#0b1170",
    color: "#fff",
    padding: "60px 20px 30px",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  top: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    marginBottom: 50,
  },
  left: {
    maxWidth: 500,
  },
  leftH2: {
    fontSize: 24,
    marginBottom: 15,
    margin: 0,
  },
  leftP: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#c7ccff",
    marginTop: 10,
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    minWidth: 100,
  },
  colH4: {
    fontSize: 14,
    marginBottom: 12,
    margin: 0,
  },
  colSpan: {
    display: "block",
    fontSize: 13,
    marginBottom: 10,
    lineHeight: 1.6,
    color: "#c7ccff",
    cursor: "pointer",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  copyright: {
    fontSize: 12,
    color: "#aab0ff",
    margin: 0,
  },
  address: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 12,
    color: "#aab0ff",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* TOP */}
        <div style={styles.top}>
          {/* LEFT */}
          <div style={styles.left}>
            <h2 style={styles.leftH2}>KASHflow</h2>
            <p style={styles.leftP}>
              All your transactions, receipts and expenses in one smart app.
              Control your budget in real-time. Transfer funds to any account
              anywhere in the world. Convert funds to any currency in real-time.
            </p>
          </div>

          {/* RIGHT */}
          <div style={styles.links}>
            <div style={styles.col}>
              <h4 style={styles.colH4}>Support</h4>
              <span style={styles.colSpan}>Help</span>
              <span style={styles.colSpan}>FAQ</span>
              <span style={styles.colSpan}>Contact form</span>
            </div>

            <div style={styles.col}>
              <h4 style={styles.colH4}>Legal</h4>
              <span style={styles.colSpan}>Terms</span>
              <span style={styles.colSpan}>Privacy policy</span>
              <span style={styles.colSpan}>Cookies Policy</span>
            </div>

            <div style={styles.col}>
              <h4 style={styles.colH4}>Product</h4>
              <span style={styles.colSpan}>About</span>
              <span style={styles.colSpan}>Service</span>
              <span style={styles.colSpan}>Features</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © Copyright {new Date().getFullYear()} by olamide_ui. All rights reserved
          </p>

          <div style={styles.address}>
            <span>3044 Hill Road California</span>
            <span>408 844 2008</span>
            <span>kashflow@support.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
