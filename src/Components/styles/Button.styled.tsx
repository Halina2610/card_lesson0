import styled, {css} from "styled-components";
import {colorsTheme} from "./Theme.styled";


type StyleBtnPropsType = {
    btnType?: 'primary' | 'outlined'
}
export const Button = styled.button<StyleBtnPropsType>`
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;


    ${props => props.btnType === 'outlined' && css<StyleBtnPropsType>`
      border: none;
      background-color: ${colorsTheme.colors.ptimary};
      color: ${colorsTheme.colors.secondary};
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      margin: 19px 12px 22px 20px;
  `}

  ${props => props.btnType === 'primary' && css<StyleBtnPropsType>`
    border: 2px solid ${colorsTheme.colors.ptimary};
    color: ${colorsTheme.colors.ptimary};
    background: transparent;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  `}

`