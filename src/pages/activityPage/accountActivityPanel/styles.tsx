import styled from 'styled-components'

export const RootContainer = styled.div`
  margin: -8px 0px 8px 0px;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: orange; */
`

export const StyledPanelHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  /* background: #fcfdff; */
  /* color: #192638; */
  color: #ffffff;
  background: #1f5eb7;

  /* padding: 32px 32px 0px 32px; */
  padding: 8px 24px;
  margin-top: 16px;
  border-radius: 8px 8px 0px 0px;
`

export const StyledPanelHeadTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: left;
`

export const StyledPanelHeadTotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: right;
`

export const StyledPanelMonthSelect = styled.div`
  width: 100%;
  padding: 24px 32px 24px 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* text-align: right; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #fcfdff;
`

export const StyledSelectWrapper = styled.div`
  width: 100%;
  padding: 8px 24px 8px 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* text-align: right; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #f0f2f5;

  > * {
    margin-right: 16px;
  }
`

export const StyledTableContainer = styled.div`
  width: 100%;
  padding: 24px;
  background: #fcfdff;

  border: 1px solid #d0d7e2;
  box-sizing: border-box;

  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 0px 0px 8px 8px;
`
