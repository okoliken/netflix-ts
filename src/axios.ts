import axios  from 'axios';

import {type ProgressFinisher, useProgress} from '@marcoschulte/vue3-progress';

const progresses = [] as ProgressFinisher[];

axios.interceptors.request.use(config => {
  progresses.push(useProgress().start());
  return config;
});

axios.interceptors.response.use(resp => {
  progresses.pop()?.finish();
  return resp;
}, (error) => {
  progresses.pop()?.finish();
  return Promise.reject(error);
});