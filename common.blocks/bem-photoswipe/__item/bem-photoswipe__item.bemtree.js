block('bem-photoswipe').elem('item')(

    def()((ctx, json) => {
        /* eslint-disable global-require */
        const fs = require('fs');
        const imageSize = require('image-size');
        /* eslint-enable global-require */

        if (!json.imagesDir) {
            throw new Error('option "imagesDir" isn\'t defined');
        }

        const addTrailingSlash = (str) => {

            if (!str) {
                return '/';
            }

            return str.replace(/\/+$/, '') + '/';
        };

        const imagesBaseUrl = addTrailingSlash(json.imagesBaseUrl);
        const imagesDir = addTrailingSlash(json.imagesDir);
        const imagesNames = fs.readdirSync(imagesDir);

        imagesNames.sort((a, b) => {

            if (a === b) {
                return 0;
            }

            return a > b ? 1 : -1;
        });

        json.js = {
            items: imagesNames.map((imageName) => {
                const size = imageSize(imagesDir + imageName);

                return {
                    src: imagesBaseUrl + imageName,
                    w: size.width,
                    h: size.height,
                };
            }),
        };

        return json;
    })
);
