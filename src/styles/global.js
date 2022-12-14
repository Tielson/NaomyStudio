import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

body{
    background-color: ${({ theme }) => theme.COLORS.PANTONE_2};
    color:${({ theme }) => theme.COLORS.WHITE} ;
    
    -webkit-font-smoothing: antialiased; 

    font-size: 1.6rem;


}

@media (min-width:20rem) {
    :root{
        font-size: 62,5%;
    }
}

a{
    text-decoration: none;
}

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    
    
    button:hover, a:hover {
        filter: brightness(0.9);
    }

    body, input, button, textarea{
        font-family: 'Oswald', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }


`