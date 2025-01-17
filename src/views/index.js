import ErrorResource from './ErrorResource'
import Medicine from './op/Medicine'
import PricePreview from './op/PricePreview'
import Person from './foaf/Person'
import PersonalProfileDocument from './foaf/PersonalProfileDocument'
import PersonPreviewList from './foaf/PersonPreviewList'
import Container from './ldp/Container'
import Dates from './Literal/Dates'
import LoadingResource from './LoadingResource'
import Resource from './rdfsResource/Resource'
import ResourceBrowserList from './rdfsResource/ResourceBrowserList'

export default [
  ...Container,
  ...Dates,
  ...ErrorResource,
  ...LoadingResource,
  ...Medicine,
  ...Person,
  ...PersonPreviewList,
  ...PricePreview,
  ...PersonalProfileDocument,
  ...Resource,
  ...ResourceBrowserList,
]
