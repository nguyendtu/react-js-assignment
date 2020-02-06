import React, { PureComponent } from 'react';
import { List, Typography } from 'antd';
import Trip from '@/components/Trip';
import styles from './index.less';

export default class ListTrips extends PureComponent {
  render() {
    const { trips, loading } = this.props;
    return (
      <div className={styles.ListTrips}>
        <Typography.Title level={3}>Trips</Typography.Title>
        <List
          loading={loading}
          dataSource={trips}
          renderItem={trip => (
            <List.Item>
              <Trip trip={trip} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
