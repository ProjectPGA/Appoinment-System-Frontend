// TODO. Just have this in a core module
export const API_PREFIX = 'http://localhost:3000/api';

export const apiPrefix = (url: string): any => API_PREFIX + url;

export const jsonHeaders = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};
export const htmlHeaders = {
    headers: {
        Accept: 'text/html',
    },
};
