import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 70.0rem;
display: flex;
flex-direction: row;
align-items: center;
margin: auto;
justify-content: space-evenly;
background-color: ${({ theme }) => theme.COLORS.GRAY_200};




    >div:nth-child(2){
        img{
            width: 30.0rem;
            border-radius: 50% 0%;
            margin: 3.0rem;
        }
    }

    >div:nth-child(1){
        height: 40.0rem;
        text-align: left;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
            >h2{
                color: ${({ theme }) => theme.COLORS.PANTONE_2};
                margin-bottom: 3.0rem;
                font-weight: 500;
                font-size: 2.5rem;
            }
            >h1{ 
                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};  
                margin-bottom: 3.0rem;
                font-weight: 700;
                letter-spacing: 1.6rem;
                border-bottom: .1rem solid;
                font-size: 4.0rem;
            }
            >p{
                color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                font-weight: 400;
                line-height:2;
                font-family: 'Didact Gothic', sans-serif;;
            }
    }


`