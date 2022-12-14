import styled from "styled-components";


export const Container = styled.div`
width: 100%;
margin: auto;
padding: 1rem;
flex-direction: column;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.GRAY_200};




    >div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 20.0rem;
            border-radius: 50% 0%;
            margin: 3.0rem;

      
        }
    }

    >div:nth-child(1){
        text-align: left;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
            >h2{
                color: ${({ theme }) => theme.COLORS.PANTONE_2};
                margin-bottom: 3.0rem;
                font-weight: 500;
                font-size: 1.5rem;
            }
            >h1{ 
                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};  
                margin-bottom: 3.0rem;
                font-weight: 700;
                letter-spacing: 1.6rem;
                border-bottom: .1rem solid;
                font-size: 1.5rem;
            }
            >p{
                color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                font-weight: 400;
                line-height:2;
                font-family: 'Didact Gothic', sans-serif;;
            }
    }

    @media(min-width:25rem){

        >div:nth-child(1){
            
            h1{
                font-size: 2.5rem;
            }
            h2{
                font-size: 1.8rem;
            }
        }
        
    }
    @media(min-width: 50rem){
        padding: 4rem 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;


        >div:nth-child(1){

            h1{
                font-size: 4rem;
            }
            h2{
                font-size: 2rem;
            }
        }

        >div:nth-child(2){

        img{
            width: 40rem;
      
        }
    }

}


`