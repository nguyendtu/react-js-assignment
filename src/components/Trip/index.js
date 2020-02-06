import React, { PureComponent } from 'react';
import { Statistic } from 'antd';
import { dateTimeFormat } from '@/utils/utils';
import styles from './index.less';

export default class Trip extends PureComponent {
  render() {
    const { trip } = this.props;
    return (
      <div className={styles.Trip}>
        <Statistic title="Trip ID" value={trip && trip.trip_id || '--'} />

        <div className="box">
          <div className="duration-distance">
            <Statistic title="Duration" value={trip && trip.duration || '--'} />
            <Statistic title="Distance" value={trip && trip.distance || '--'} />
          </div>
          <div className="timeline">
            <Statistic title="Start time" value={trip && dateTimeFormat(trip.start_time) || '--'} />
            <Statistic title="End time" value={trip && dateTimeFormat(trip.end_time) || '--'} />
          </div>
        </div>
      </div>
    );
  }
}
