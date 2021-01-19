import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 10px;
    background: radial-gradient(circle, rgba(92, 39, 251, 1) 0%, rgba(112, 71,247,1) 100%);
    z-index: -5;
    position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    height: 300px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin:0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 20px;

@media(max-width: 100px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`

export const Link = styled.div`
    color: #fff;
    margin-bottom:20 px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
        cursor: pointer;
    }
`

export const Title = styled.div`
    font-size: 24px;
    color: #fff;
    margin-bottom: 10px;
    font-weight: bold;
`
