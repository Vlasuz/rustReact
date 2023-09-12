import { styled } from 'styled-components';

export const ContainerStyled = styled.main`
    
    display: flex;

    width: 100%;
	padding-left: 15px;
	padding-right: 15px;

    .fade-enter {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    .fade-exit {
        opacity: 0;
    }
    .fade-enter-done {
        opacity: 1;
    }

    section {
        transition: all .3s ease;
    }
    
`
