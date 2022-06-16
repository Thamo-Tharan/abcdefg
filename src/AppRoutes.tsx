import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// use lazy for better code splitting, a.k.a. load faster
const LandingPage = lazy(() => import('./pages/landingPage/LandingPage'))
// const NoMatchPage = lazy(() => import('./pages/logOnPage/LogOnPage'))
// const LogOnPage = lazy(() => import('./pages/logOnPage/LogOnPage'))
const HoldingsPage = lazy(() => import('./pages/holdingsPage/HoldingsPage'))
const ProjectedIncomePage = lazy(
  () => import('./pages/projectedIncomePage/ProjectedIncomePage')
)
const BalancesPage = lazy(() => import('./pages/balancesPage/BalancesPage'))
const ActivityPage = lazy(() => import('./pages/activityPage/ActivityPage'))
const LayoutPage = lazy(() => import('./pages/layoutPage/LayoutPage'))
const ContactUsPage = lazy(() => import('./pages/contactUsPage/ContactUsPage'))
// const Page404 = lazy(() => import('../pages/404'))
// const Blank = lazy(() => import('../pages/Blank'))

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ContactUsPage/>}>
        {/* <Route index element={<LandingPage />} /> */}
        <Route path="holdings" element={<HoldingsPage />} />
        <Route path="projectedIncome" element={<ProjectedIncomePage />} />
        <Route path="balances" element={<BalancesPage />} />
        <Route path="activity" element={<ActivityPage />} />
      </Route>
      {/* <Route path="/home" element={<HomePage />}>
        <Route index element={<LandingPage />} />
        <Route path="holdings" element={<HoldingsPage />} />
        <Route path="projectedIncome" element={<ProjectedIncomePage />} />
        <Route path="balances" element={<BalancesPage />} />
        <Route path="activity" element={<ActivityPage />} />
      </Route> */}
      {/* <Route path="logOn" element={<LogOnPage />} />
      <Route path="*" element={<NoMatchPage />} /> */}
    </Routes>
  )
}

export default AppRoutes
