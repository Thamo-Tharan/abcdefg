import React from 'react'
import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import { RootContainer } from './styles'
import ContentHeader from './contentHeader/ContentHeader'
import AllAccountsPanel from './allAccountsPanel/AllAccountsPanel'
import AccountActivityPanel from './accountActivityPanel/AccountActivityPanel'

const ActivityContent = () => {
  return (
    <RootContainer>
      <ContentHeader />
      <AllAccountsPanel />
      <AccountActivityPanel />
    </RootContainer>
  )
}

const ActivityPage = () => {
  return (
    <LandingPageLayout>
      <ActivityContent />
    </LandingPageLayout>
  )
}

export default ActivityPage
