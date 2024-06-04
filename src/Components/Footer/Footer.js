import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 90%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
  height: 50px;
  border-radius:1rem;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  transform: translate(5.5%);
`;
const Copyright = styled.p`
  font-size: 1rem;
  color: #000;
  text-align: center;
`;

const Footer = () => {
    useEffect(() => {
        const year = new Date().getFullYear();
        document.getElementById('currentYear').textContent = year;
    }, []);

    return (
        <FooterContainer>
            <Copyright>
                &copy; <span id="currentYear"></span> Barun Sanyasi. All rights reserved.
            </Copyright>
        </FooterContainer>
    )
}

export default Footer;