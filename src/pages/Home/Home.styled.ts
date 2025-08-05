import { FlexLayout } from "@components";
import styled from "styled-components";
import { breakpoint } from "@utils";

export const StyledHome = styled(FlexLayout)`
  padding: 0rem 2rem;
  
  .home-container {
    padding: 2rem 0;
    min-height: calc(100vh - 120px);
  }

  .title-currently-container{
    gap: 2rem;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .section-title-container{
    width: 100%;
  }

  .title-container, .currently-container {
    flex-grow: 1;
    width: 100%;
  }

  .currently-container {
    display: flex;
    justify-content: center;
    align-items: end;
    .currently-card{
      width: 100%;
    }
  }

  .description {
    color: var(--gray-2);
  }

  .square {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: var(--primary-color);
    margin-right: 0.5rem;
  }

  .current-project{
    color: var(--white);
    font-weight: 600;
  }
  

  .quote-card span{
    padding: 10px 5px; 
    font-size: 1.2rem;
  }

  .sign-card span{
    padding: 10px 0px;
  }
  
  .projects-container{
    flex-direction: column
  }

  .featured {
    width: 100%;
  }

  .view-all-link{
    white-space: nowrap;
  }

  @media only screen and (min-width: ${breakpoint.medium}px) {
    padding: 0rem 4rem;
    
    .home-container {
      min-height: calc(100vh - 140px);
    }

    .title-currently-container{
      flex-direction: row;
    }


    .projects-container{
      flex-direction: row;
    }
    
    .featured {
      width: 33%;
    }
  }
`


export const ColorZone = styled.span`
  color: var(--primary-color);
`

export const Line = styled.span<{ percentage?: number, mobilePercentage?: number }>`
  display: block;
  border-bottom: 2px solid var(--primary-color);
  width: ${({ mobilePercentage }) => mobilePercentage || 100}%;
  height: 1px;
  margin: 0.5rem 0; 

  @media only screen and (min-width: ${breakpoint.medium}px) {
     width: ${({ percentage }) => percentage || 100}%;
  }

`