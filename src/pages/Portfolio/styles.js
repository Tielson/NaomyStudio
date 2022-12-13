import styled from "styled-components";

export const Container = styled.div`
height: 88vh;


.box{
    max-width: 77vw;
    margin: auto;
    
        >h2{
        font-weight:500;
        color: ${({theme}) => theme.COLORS.PANTONE_3};
        margin: 3.0rem 0 3.0rem 2.0rem ;
        
        }
        >h1{
        font-weight:700;
        color: ${({theme}) => theme.COLORS.PANTONE_4};
        margin: 3.0rem 0 3.0rem 2.0rem ;
        }
    
        >div.e1{
            display: flex;
            align-items: center;
        }
        
        >div .e2{
            display: flex;
            overflow-x: auto;
            scroll-behavior: smooth;
            padding: 1.0rem;
        
            ::-webkit-scrollbar-track {
            background-color: transparent;
        }
            ::-webkit-scrollbar {
            background: transparent;
            width: .1rem;   
            height: 1.5rem;
        }
            ::-webkit-scrollbar-thumb {
            border-radius: 1rem;
            background: ${({theme}) => theme.COLORS.PANTONE_1};
            }
        
        
        
        
            list-style: none;
            gap: 2rem;
            img{
                width: 40rem;
                border-radius: 50% 1%;
            }
            }
}



`