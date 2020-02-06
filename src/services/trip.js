import request from '@/utils/request';

export async function fetchListTrips() {
    return request('/api/recruitment/challenge');
};
