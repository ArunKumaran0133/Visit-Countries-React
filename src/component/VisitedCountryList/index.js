import {
  ItemContainer,
  CountryImage,
  ButtonContainer,
  Name,
  CustomButton,
} from './styledComponents'

const VisitedCountryList = props => {
  const {countryDetail, onRemoveCountry} = props
  const {id, imageUrl, name} = countryDetail
  const onRemove = () => {
    onRemoveCountry(id)
  }

  return (
    <ItemContainer>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <ButtonContainer>
        <Name>{name}</Name>
        <CustomButton type="button" onClick={onRemove}>
          Remove
        </CustomButton>
      </ButtonContainer>
    </ItemContainer>
  )
}

export default VisitedCountryList
