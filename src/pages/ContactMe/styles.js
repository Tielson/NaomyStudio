import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 70vh;
padding-left: 10.0rem;

background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    display: flex;
    flex-direction: row;
    align-items: center;
    
    .box{
        display: flex;
        flex-direction: column;

    }

    .header{

    }

>div{

    h2{
        color: ${({ theme }) => theme.COLORS.PANTONE_2};
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
    }
    h1{
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-bottom: .1rem solid;
        font-size: 4.0rem;
        margin-bottom: 6.0rem;
    }

    p:nth-child(1){
        margin-bottom: 1.6rem;
    }
    
    p{
        max-width: 60.0rem;
       
        line-height: 2em;
        font-family: 'Didact Gothic', sans-serif;
        font-size: 1.6rem;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        gap: 1.5rem;
        display: flex;
        align-items: center;

            a{
                 color: inherit; 
            }

            svg{
                color: ${({ theme }) => theme.COLORS.PANTONE_2};
                font-size: 2.0rem;
            }

    }

}
`