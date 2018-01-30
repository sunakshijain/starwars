import Planet from './planet.jsx'
import { connect } from 'react-redux'
import { fetchPlanetsList, fetchNextPlanetsList, fetchPrevPlanetsList } from './action'
const mapStateToProps = ({ login, planet }) => {
  return {
    login,
    planet
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPlanetsList: (searchTerm) => { dispatch(fetchPlanetsList(searchTerm)) },
    fetchNextPlanetsList: () => { dispatch(fetchNextPlanetsList()) },
    fetchPrevPlanetsList: () => { dispatch(fetchPrevPlanetsList()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planet)

