#!/bin/sh
echo "$VERSION" > /sysinfo/version_$COMPONENT
echo "window.andresConfig = { MATOMO_URL: '${VUE_APP_MATOMO_URL}', MATOMO_SITE_ID: '${VUE_APP_MATOMO_SITE_ID}' } " >> /usr/share/nginx/html/js/config.js
nginx -g "daemon off;"