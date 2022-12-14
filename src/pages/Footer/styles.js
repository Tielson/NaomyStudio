import styled from "styled-components";

export const Container = styled.div`

background-color: ${({ theme }) => theme.COLORS.GRAY_400};
.box{
    padding: 2rem;
    gap: 3rem;

    >div{
        margin-bottom: 5rem;
    }

    p{
        text-align: left;
        
        line-height: 2em;
        font-family: 'Didact Gothic', sans-serif;
        font-size: 1.7rem;
        font-weight: 400;
        letter-spacing: .1rem;

        
    }


}

.c1{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    p{  
        width: 100%;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};}

    a{
        width: 100%;
        svg{
            margin-top: 1rem;
            font-size: 3rem;
            color: #e6197f;
        }

    }

    img{
        width: 20rem;
        height: 10rem;
        margin-bottom: 2rem;
    }
}
.c2{

    p{
        align-items: center;
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        svg{
            
            font-size: 1.5rem;
            color: #ff007f;
        }
       

        a{
          color: inherit;  
           
        }

    }
    p:nth-child(4){
        line-height: 1.5rem;
        svg{

            font-size: 2rem;
        }
        }

}

.c3{
    height: 15rem;
}

h3{
    margin-bottom: 1.0rem;

}

h4{
    display: flex;
    justify-content: center;
    gap: 1.0rem;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                font-weight: 400;
                line-height:2;
                font-family: 'Didact Gothic', sans-serif;

    a{
          color: inherit;   
        }
}

@media (min-width: 50rem) {
    .box{
        display: grid;
        grid-template-areas: 
        'c1 c2 c3';
        padding: 2rem;

    }
    .c1{
        grid-area: c1;
        width: 20em; 
    }
    .c2{
        grid-area: c2;

        p:nth-child(4){
            line-height: 4rem;
            
        }
        
        p{
            svg{
                font-size: 2rem;
                color: #ff007f;
            
            }
            font-size: 1.5rem;
            line-height: 3;
        }
    }
    .c3{
        grid-area: c3;
    }
}

@media (min-width: 40rem ) {
    padding: 4rem;
}

`