import {ItemContainer, Name, CustomButton, Para} from './styledComponents'

const CountryList = props => {
  const {itemDetails, onToggleCountry} = props
  const {id, name, isVisited} = itemDetails

  const buttonType = isVisited ? 'text' : 'button'
  const onToggle = () => {
    onToggleCountry(id)
  }

  return (
    <ItemContainer>
      <Name>{name}</Name>
      {isVisited ? (
        <Para>Visited</Para>
      ) : (
        <CustomButton type={buttonType} onClick={onToggle}>
          Visit
        </CustomButton>
      )}
    </ItemContainer>
  )
}

export default CountryList
