import styled from "styled-components";

export const Container = styled.div`
width: 100vw ;
display: grid;
/* margin-top: 5rem; */
padding: 8rem 0 3rem;
`
export const Content = styled.div`
width: 100%;
margin: auto;
display: grid;
align-items: center;
grid-template-columns: 50% 50%;


;

    >div:nth-child(1){
    >img{
        margin-left: 2.0rem;
        border-radius: 50% 0%;
        width: 14rem;
    }
    }
    >div:nth-child(2){



        display:flex;
        align-items: center;
        padding-right: 1rem;
        justify-content: flex-end;

            img{
                width: 10.0rem;
            }
    }





    @media(min-width:25rem){

           >div:nth-child(1){
       >img{
           width: 18rem;
       }
       }
       >div:nth-child(2){
        padding-right: 1.5rem;
               img{
                   width: 18.0rem;
               }
       } 
 }
    @media(min-width:32rem){

           >div:nth-child(1){
       >img{
           width: 25rem;
       }
       }
       >div:nth-child(2){
           img{
               width: 23.0rem;
            }
        } 
    }
    @media(min-width:53rem){
        
        padding-right: 2rem;

           >div:nth-child(1){
       >img{
           width: 47rem;
       }
       }
       >div:nth-child(2){
        padding-right: 1.5rem;
               img{
                   width: 30.0rem;
               }
       } 
 }
    @media(min-width:75rem){
        
        padding-right: 4rem;

           >div:nth-child(1){
       >img{
           width: 60rem;
       }
       }
       >div:nth-child(2){
        padding-right: 1.5rem;
               img{
                   width: 50rem;
               }
       } 
 }
 
`