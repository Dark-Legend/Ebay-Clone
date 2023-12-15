/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [{
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com'
        },{
            protocol: 'https',
            hostname: 'imgs.search.brave.com'
        }]
    },
    env: {
        RAZORPAY_KEY: 'rzp_test_ZhyblY69VKPo3c',
        RAZORPAY_SECRET: 'N2lxP1DXidHDEoSMOsO5hYBZ'
    },
    sentry: {
    disableClientWebpackPlugin: true,
    disableServerWebpackPlugin: true,
  },
}

module.exports = nextConfig
