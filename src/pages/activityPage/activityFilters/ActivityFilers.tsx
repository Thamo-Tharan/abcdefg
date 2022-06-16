import Select from 'react-select'

export const ActionSelector = () => {
  const options = [
    { value: 'dividend', label: 'Dividend' },
    { value: 'wire', label: 'Wire Transfer' },
  ]

  const selectOption = { label: 'Filter by Action', value: 'actionFilter' }

  return (
    <>
      <Select options={options} value={selectOption} />
    </>
  )
}

export const CategorySelector = () => {
  const options = [{ value: 'withdrawal', label: 'Withdrawal' }]

  const selectOption = { label: 'Filter by Category', value: 'categoryFilter' }

  return (
    <>
      <Select options={options} value={selectOption} />
    </>
  )
}

export const SymbolSelector = () => {
  const options = [
    { value: 'AMZN', label: 'AMZN' },
    { value: 'MSFT', label: 'MSFT' },
  ]

  const selectOption = { label: 'Filter by Symbol', value: 'symbolFilter' }

  return (
    <>
      <Select options={options} value={selectOption} />
    </>
  )
}
