/**
 * @module bem-photoswipe__item
 */
modules.define(
    'bem-photoswipe__item',
    ['i-bem-dom'],
    function gallery(provide, bemDom) {

        /**
         * @exports
         * @class gallery__item
         * @bem
         */
        provide(bemDom.declElem('bem-photoswipe', 'item', /** @lends bem-photoswipe__item.prototype */{

            onClick() {
                this._emit('click', this.params)
            }
        }, /** @lends bem-photoswipe__item */{
            lazyInit: true,

            onInit() {
                this._domEvents().on('click', this.prototype.onClick);
            },
        }));
    }
);
