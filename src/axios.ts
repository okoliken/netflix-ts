import axios  from 'axios';

import {type ProgressFinisher, useProgress} from '@marcoschulte/vue3-progress';


export const api =  axios.create({
  baseURL:'https://api.themoviedb.org/3/'
})

const progresses = [] as ProgressFinisher[];

api.interceptors.request.use(config => {
  progresses.push(useProgress().start());
  return config;
});

api.interceptors.response.use(resp => {
  progresses.pop()?.finish();
  return resp;
}, (error) => {
  progresses.pop()?.finish();
  return Promise.reject(error);
});