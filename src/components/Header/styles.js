import styled from "styled-components";


export const Container = styled.header`
position: fixed;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

grid-area: header;


height: 5rem;
width: 100%;


border-bottom-width: .1rem;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.PANTONE_2};

background: ${({ theme }) => theme.COLORS.PANTONE_2 };


.box{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
}

.box div{
    display: flex;
    align-items: center;
    a{
        img{
            width: 10rem;
        }
    }
}
.box div:nth-child(2){
    gap: 1.0rem;
    >a{
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 1rem;
    }
}




@media (min-width:44rem) {
    height: 7rem;
    padding: 1rem 4rem;
   
        .box div{
            a{
                img{
                    width: 15rem;
                }
            }
        }
        .box div:nth-child(2){
            
            >a{
                font-size: 1.5rem;
            }
        

}
}

-webkit-box-shadow: 0 0 .7rem rgb(0 0 0 / 10%);
box-shadow: 0 0 .7rem rgb(0 0 0 / 82%) ;

`