module.exports = {
    reactStrictMode: true,
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
