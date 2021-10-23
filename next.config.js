module.exports = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/card',
                destination: '/hub',
                permanent: true,
            },
        ]
    },
}
