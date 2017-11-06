/**
 * @module bem-photoswipe
 */
modules.define(
    'bem-photoswipe',
    ['i-bem-dom', 'bem-photoswipe__item', 'pswp'],
    function bemPhotoswipe(provide, bemDom, BemPhotoswipeItem, Pswp) {

        /**
         * @exports
         * @class gallery
         * @bem
         */
        provide(bemDom.declBlock(this.name, /** @lends bem-photoswipe.prototype */{

            onSetMod: {
                js: {
                    inited() {
                        this._pswp = this.findChildBlock(Pswp);

                        console.log('$$$$$$$$$$$$$$$$$$$', this._pswp)
                    },
                },
            },

            onItemClick(e, data) {
                this._pswp.show(data.items);
            },
        }, /** @lends bem-photoswipe */{
            lazyInit: true,

            onInit() {
                this._events(BemPhotoswipeItem).on('click', this.prototype.onItemClick);
            },
        }));
    }
);
