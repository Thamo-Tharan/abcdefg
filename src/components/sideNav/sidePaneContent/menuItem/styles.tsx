import styled from 'styled-components'

interface Props {
  hasSubMenu?: boolean,
  hasSelected?:boolean
}

export const RootContainer = styled.div<Props>`
  /* flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    background:#1F5EB7;
    color:white;
  }
  background-color: ${(props: any) =>
    props.hasSubMenu ? '#1F5EB7' : '#FFFFFF'};
  color: ${(props: any) => (props.hasSubMenu ? '#FFFFFF' : '#1F5EB7')};
  background-color: ${(props: any) =>
    props.hasSelected ? '#1F5EB7' : '#FFFFFF'};
  color: ${(props: any) => (props.hasSelected ? '#FFFFFF' : '#1F5EB7')};
`

export const SubmenuContainer = styled(RootContainer)`
  background-color: blue;
`

export const MenuImageWrapper = styled.div`
  /* margin-right: 16px; */
`

export const MenuNameWrapper = styled.div`
  /* display: none; */
  margin-left: 16px;
`
