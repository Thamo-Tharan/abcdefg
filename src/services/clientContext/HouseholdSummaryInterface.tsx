export interface HouseholdSummaryInterface {
  isTodayGainLossValueDown: boolean
  isTotalGainLossValueDown: boolean
  todayGainLossPct: string
  todayGainLossValue: string
  totalGainLossPct: string
  totalGainLossValue: string
  totalHouseholdValue: string
}

export const defaultHouseholdSummary: HouseholdSummaryInterface = {
  isTodayGainLossValueDown: false,
  isTotalGainLossValueDown: false,
  todayGainLossPct: '',
  todayGainLossValue: '',
  totalGainLossPct: '',
  totalGainLossValue: '',
  totalHouseholdValue: '',
}
