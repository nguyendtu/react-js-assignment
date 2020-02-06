import React, { Component } from 'react';
import ListTrips from '@/components/ListTrips';

class TripContainer extends Component {
  render() {
    const { trips, loading } = this.props;
    return <ListTrips trips={trips} loading={loading} />;
  }
}

export default TripContainer;
