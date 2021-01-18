import React from 'react';
import Footer from "../components/Footer2/Footer2";

export function FooterContainer() {

    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Stocks Report</Footer.Link>
                    <Footer.Link href="#">Investment Calculator</Footer.Link>
                    <Footer.Link href="#">Business Transactions</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Developers</Footer.Title>
                    <Footer.Link href="#">Michael Bartek</Footer.Link>
                    <Footer.Link href="#">Vladimir Dimitrov</Footer.Link>
                    <Footer.Link href="#">Joshua Obando</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">LinkedIn</Footer.Link>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>

        )
}