require(['mod1'], function(m1) {
    console.log(m1.name)
    m1.show()
})
require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.min',
        'jq_cookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.0/jquery.cookie.min',
    },
    shim: {
        'jq_cookie': {
            deps: ['jquery'],
            exports: 'jq_cookie'

        }
    }

})