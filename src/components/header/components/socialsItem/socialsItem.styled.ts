import { styled } from 'styled-components';

export const SocialsItemStyled = styled.li`
    
    &:not(&:last-child){
        margin-right: 10px;
    }
    svg {
        display: block;
    }
    a{
        border: 1px solid rgba(162, 171, 197, 0.1);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;
        path{
            transition: all .3s ease;
        }
        &:hover{
            background: rgba(162, 171, 197, 0.1);
            border-color: transparent;
            path{
                fill: white;
                fill-opacity: 1;
            }
        }
    }
    
`
