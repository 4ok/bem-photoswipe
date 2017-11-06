block('bem-photoswipe')(

    js()(true),

    content()((ctx, json) => ([
        json.content,
        { block: 'pswp' },
    ]))
);
