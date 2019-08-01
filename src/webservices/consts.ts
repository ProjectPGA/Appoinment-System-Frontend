export const API_PREFIX = '/api/';

export const apiPrefix = (url: string) => API_PREFIX + url;

export const jsonHeaders = {
    headers: {
        Accept: 'application/json',
    },
};

export const htmlHeaders = {
    headers: {
        Accept: 'text/html',
    },
};
