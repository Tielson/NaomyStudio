import styled from "styled-components";

export const Container = styled.div`
/* height: 88vh; */
padding: 2rem;


.box{
    max-width: 77vw;
    margin: auto;
    
        >h2{
        font-weight:500;
        color: ${({theme}) => theme.COLORS.PANTONE_3};
        margin: 1rem 0 1rem 2.0rem ;
        font-size: 2rem;
        }
        >h1{
        font-weight:700;
        color: ${({theme}) => theme.COLORS.PANTONE_4};
        margin: 1.0rem 0 3.0rem 2.0rem ;
        font-size: 3rem;
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
            width: 5rem;   
            height: 1rem;
        }
            ::-webkit-scrollbar-thumb {
            border-radius: 1rem;
            background: ${({theme}) => theme.COLORS.PANTONE_1};
            }
        
            list-style: none;
            gap: 2rem;
            img{
                width: 21rem;
                border-radius: 50% 1%;
            }
            }
        
        
        
}

@media(min-width:25rem){
   .box{

       >div .e2{
           img{
               width: 30rem;
            }
        }
    }

}
@media(min-width: 40rem){
   .box{
    padding: 5rem 0 5rem;
       >div .e2{
           img{
               width: 40rem;
            }
        }
    }

}



`