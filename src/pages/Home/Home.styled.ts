import { FlexLayout } from "@components";
import styled from "styled-components";

export const StyledHome = styled(FlexLayout)`

  .title-container, .currently-container {
    flex-grow: 1;
    width: 100%;
  }

  .currently-container {
    display: flex;
    justify-content: center;
    align-items: end;
  }

  .description {
    color:  var(--gray-2);
  }

  .square {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: var(--primary-color);
  }

  .current-project{
    color: var(--white);
    font-weight: 600;
  }
`


export const ColorZone = styled.span`
  color: var(--primary-color);

`