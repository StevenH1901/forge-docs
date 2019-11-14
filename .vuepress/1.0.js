module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ['introduction'],
    },
    {
        title: "Accounts",
        collapsable: false,
        children: prefix('accounts', [
            'your-account',
            'billing',
            'circles',
            'ssh',
        ]),
    },
    {
        title: "Servers",
        collapsable: false,
        children: prefix('servers', [
            'management',
            'providers',
        ]),
    },
    {
        title: "Sites",
        collapsable: false,
        children: prefix('sites', [
            'the-basics',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}