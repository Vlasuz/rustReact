import { styled } from 'styled-components';

export const RightZoneStyle = styled.ul`
    
    .zone__item{
        position: relative;
        padding: 0;
        min-width: 60px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 3px;
        background: rgba(162, 171, 197, 0.06);
		border-radius: 8px;
		padding: 20px 15px 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		transition: all .3s ease;
		cursor: pointer;
		&:active{
			transform: scale(.9);
		}
		&:hover{
			background: rgba(162, 171, 197, 0.15);
			.item__buy{
				opacity: 1;
			}
		}
		.item__buy{
			position: absolute;
			background: rgba(162, 171, 197, 0.1);
			backdrop-filter: blur(7.5px);
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			transition: all .3s ease;
			opacity: 0;
			z-index: 2;
			margin-bottom: 20px;
		}
		.item__count{
			background: rgba(119, 119, 139, 0.1);
			backdrop-filter: blur(2px);
			border-radius: 5px;
			font-weight: 700;
			font-size: 12px;
			line-height: 15px;
			width: 25px;
			height: 25px;
			position: absolute;
			top: 0;
			right: 0;
			color: rgba(255, 255, 255, 0.5);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.item__cool{
			width: 10px;
			height: 10px;
			top: 8px;
			left: 8px;
			position: absolute;
			border-radius: 50%;
		}
		.item__price{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 20px;
			span{
				font-weight: 700;
				font-size: 12px;
				line-height: 11px;
				color: #FFFFFF;
				margin-left: 6px;
			}
		}
		.item__photo{
			max-width: 100px;
			height: 70px;
			text-align: center;
			width: 100%;
			opacity: 1;
			transition: all .3s ease;
			img{
				width: 100%;
				height: 100%;
				object-fit: contain;
				display: block;
			}
		}
        .item__photo{
            max-width: 36px;
            width: 36px;
            height: 36px;
        }
        .item__price{
            display: none;
        }
        .item__count{
            display: none;
        }
	}
    
`
