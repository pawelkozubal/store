/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https', 
                hostname:"images.pexels.com",
            }, 
            {
            protocol:'https', 
            hostname:'xmsyrhmqbblgkojmcvkx.supabase.co',
            port: '', 
            pathname: '/storage/v1/object/public/main-bucket/**'
            }, 
            {
                protocol:'https', 
                hostname:"img.clerk.com",
            }, 
        ]
    }
};

export default nextConfig;
