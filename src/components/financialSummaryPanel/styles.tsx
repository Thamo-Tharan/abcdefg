import styled from 'styled-components'

export const StyledPanelWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 12px;
  color: black;
  background-color: #f0f2f5;
`

export const StyledCard = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;
  margin: 8px;
  background: #fafbfc;
  border: 1px solid #d0d7e2;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  background-color: #fafbfc;

  p {
    color: 374253;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
