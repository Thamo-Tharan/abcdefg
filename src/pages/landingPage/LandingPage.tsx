// import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import ArticleLayout from '../../components/layouts/article/ArticleLayout'
import AsideLayout from '../../components/layouts/aside/AsideLayout'
import AsideContent from './asideContent/AsideContent'
import { LandingPageLayout } from './styles'

import {
  MainWrapper,
  MainContentWrapper,
} from '../../components/layouts/landingPage/styles'
import ArticleContent from './articleContent/ArticleContent'
import GreetingPanel from '../../components/greetingPanel/GreetingPanel'
import FinancialSummaryPanel from '../../components/financialSummaryPanel/FinancialSummaryPanel'
import { WDPlainCard } from '../../components/wdcard/WDCard'

import { useContext } from 'react'
import { ClientContext } from '../../services/clientContext/ClientContext'

interface FinancialSummaryInterface {
  asOfDT: string
  isTodayGainLossValueDown: boolean
  todayGainLossPct: string
  todayGainLossValue: string
  totalHouseholdValue: string
}

function PageContent({
  asOfDT,
  isTodayGainLossValueDown,
  todayGainLossPct,
  todayGainLossValue,
  totalHouseholdValue,
}: FinancialSummaryInterface) {
  return (
    <LandingPageLayout>
      <GreetingPanel asOfDT={asOfDT} />
      <FinancialSummaryPanel
        totalValue={totalHouseholdValue}
        gainLoss={todayGainLossValue}
        gainLossPct={todayGainLossPct}
        isDown={isTodayGainLossValueDown}
      />
      <MainWrapper>
        <WDPlainCard title="Your Wedbush Accounts"></WDPlainCard>
        <MainContentWrapper>
          <ArticleLayout>
            <ArticleContent />
          </ArticleLayout>
          <AsideLayout>
            <AsideContent />
          </AsideLayout>
        </MainContentWrapper>
      </MainWrapper>
    </LandingPageLayout>
  )
}

const LandingPage = () => {
  const clientCtx = useContext(ClientContext)
  const client = clientCtx?.client
  const asOfDateTime = client?.asOfDateTime ? client?.asOfDateTime : ''
  const householdSummary = clientCtx?.householdSummary

  return (
    <PageContent
      asOfDT={asOfDateTime}
      totalHouseholdValue={householdSummary?.totalHouseholdValue || ''}
      todayGainLossPct={householdSummary?.todayGainLossPct || ''}
      todayGainLossValue={householdSummary?.todayGainLossValue || ''}
      isTodayGainLossValueDown={
        householdSummary?.isTodayGainLossValueDown || false
      }
    />
  )
}

export default LandingPage
