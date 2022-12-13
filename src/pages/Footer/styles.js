import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 60vh;

background-color: ${({ theme }) => theme.COLORS.GRAY_400};
.box{

    display: grid;
    grid-template-areas: 
    'c1 c2 c3';
    padding: 5.0rem 20.0rem;

    p{
        text-align: left;
        
        line-height: 2em;
        font-family: 'Didact Gothic', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: .1rem;

        
    }


}

.c1{
    grid-area: c1;
    width: 31.6rem;

    p{color: ${({ theme }) => theme.COLORS.BACKGROUND_800};}

    a{
        svg{
            margin-top: 2.0rem;
            font-size: 2.5rem;
            color: #e6197f;
        }

    }

    img{
        width: 30.0rem;
        margin-bottom: 1rem;
        /* background-color: white; */
    }
}
.c2{
    grid-area: c2;

    p{
        align-items: center;
        display: flex;
        gap: 2.0rem;
        svg{
            
            font-size: 2.0rem;
            color: #ff007f;
        }

        a{
          color: inherit;   
        }

    }

}
.c3{
    grid-area: c3;
}

h3{
    margin-bottom: 4.0rem;

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

`