import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;

`
export const Content = styled.div`
display: grid;
align-items: center;
grid-template-columns: 34% 66%;

/* background-color: ${({theme}) => theme.COLORS.GRAY_200}; */

;

    >div:nth-child(1){
    >img{
        margin-left: 20px;
        padding-top: 70px;
        border-radius: 50% 0%;
        width: 70.0rem;
    }
    }
    >div:nth-child(2){



        display:flex;
        align-items: center;
        padding: 3rem;
        justify-content: flex-end;

            img{
                width: 100.0rem;
            }
    }
 
`