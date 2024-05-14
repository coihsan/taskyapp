/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/site',
    images:{
        domains:[
            'uploadthing.com',
            'utfs.io',
            'subdomain',
        ]
    },
    reactStrictMode: false,
};

export default nextConfig;
