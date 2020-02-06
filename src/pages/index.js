import React, { Component } from 'react';
import { connect } from 'dva';
import TripContainer from '@/containers/TripContainer';
import styles from './index.less';

@connect(({ trip, loading }) => ({
  trip,
  fetchingTrip: loading.effects['trip/fetch'],
}))
class TripPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'trip/fetch' });
  }

  render() {
    const { trip, fetchingTrip } = this.props;
    return (
      <div className={styles.normal}>
        <TripContainer trips={(trip && trip.list) || []} loading={fetchingTrip} />
      </div>
    );
  }
}

export default TripPage;
