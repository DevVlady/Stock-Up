import React from 'react';
import Footer from "../components/Footer2/Footer2";

export function FooterContainer() {

    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
            </Footer.Wrapper>
            <Footer.Column>
                    <Footer.Title>Developers</Footer.Title>
                    <Footer.Link href="#">Michael Bartek</Footer.Link>
                    <Footer.Link href="#">Vladimir Dimitrov</Footer.Link>
                    <Footer.Link href="#">Joshua Obando</Footer.Link>
                </Footer.Column>
        </Footer>

        )
}