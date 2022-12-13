import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
position: fixed;

grid-area: header;


height: 10.5rem;
width: 100%;

border-bottom-width: .1rem;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.PANTONE_2};

background: ${({ theme }) => theme.COLORS.PANTONE_2 };

display: flex;
justify-content: space-between;
padding: 0 8.0rem;

>div{
    display: flex;
    align-items: center;
    a{
        img{
            width: 17.0rem;
            fill: white;
        }
    }
}
>div:nth-child(2){
    gap: 1.0rem;
    >a{
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 700;
        font-size: 1.5rem;
    }
}
    


    -webkit-box-shadow: 0 0 .7rem rgb(0 0 0 / 10%);
    box-shadow: 0 0 .7rem rgb(0 0 0 / 82%) ;

`