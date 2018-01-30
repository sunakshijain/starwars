import React, { Component } from 'react';
import Components from './components'
import { CardBody, CardHeader, Card, Row } from 'reactstrap';

const { PlanetList, Search, Paging } = Components
class Planet extends Component {
    componentWillMount() {

    }

    componentDidMount() {
        const { fetchPlanetsList } = this.props
        fetchPlanetsList()
    }
    handleChange = ({ search }) => {
        const { fetchPlanetsList } = this.props;
        fetchPlanetsList(search)
    }
    onNext = () => {
        this.props.fetchNextPlanetsList()
    }
    onPrev = () => {
        this.props.fetchPrevPlanetsList()
    }
    render() {
        const { planetsData, count, currentPage, showLoading } = this.props.planet;
        const itemsPerPage = 10;
        let pageLength = Math.ceil(count / itemsPerPage);
        return (
            <Card>
                <CardHeader>Planet</CardHeader>
                <Row className="row justify-content-end mt-3 mr-4">
                    <Search handleChange={this.handleChange} />
                </Row>
                <CardBody>
                    <PlanetList list={planetsData} />
                    <Paging currentPage={currentPage} pageLength={pageLength} onNext={this.onNext} onPrev={this.onPrev} showLoading={showLoading} />
                </CardBody>
            </Card>
        )
    }
}

export default Planet

