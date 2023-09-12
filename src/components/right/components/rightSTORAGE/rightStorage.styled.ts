import { styled } from 'styled-components';

export const RightStorageStyle = styled.div`
    
     .postamat__block {
        height: calc(100vh - 385px);
     }
     .zone__button{
         /* display: none; */
         margin-top: 20px;
         height: 60px;
         background: rgba(85, 98, 221, 0.8);
         border-radius: 8px;
         border: none;
         width: 100%;
         cursor: pointer;
         padding: 0 20px;
         display: flex;
         align-items: center;
         span{
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #FFFFFF;
            margin-left: 10px;
         }
      }
      .zone__empty{
         display: flex;
         align-items: center;
         justify-content: center;
         border: 1px dashed rgba(162, 171, 197, 0.15);
         border-radius: 10px;
         height: 60px;
         margin-top: 20px;
         p{
            font-weight: 500;
            font-size: 14px;
            line-height: 13px;
            color: rgba(136, 144, 168, 0.5);
         }
      }
      .zone__count{
         margin-left: auto;
         width: 30px;
         height: 30px;
         background: rgba(217, 217, 217, 0.3);
         border-radius: 6px;
         display: flex;
         align-items: center;
         justify-content: center;
         font-weight: 500;
         font-size: 14px;
         line-height: 13px;
         color: #FFFFFF;
      }
    
`
