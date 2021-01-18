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
                    <Footer.Link href="https://github.com/Hoybaby">Michael Bartek</Footer.Link>
                    <Footer.Link href="https://github.com/Vlady14">Vladimir Dimitrov</Footer.Link>
                    <Footer.Link href="https://github.com/joshobando">Joshua Obando</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://google.com">LinkedIn</Footer.Link>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
        )
}