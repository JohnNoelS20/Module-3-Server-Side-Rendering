import React from 'react';
import Image from "next/image";

export async function generateMetadata(
    { params }
){
    // read route params
    const slug = params.slug

    return {
        title: slug,
    }
}

export const dynamicParams = false // true | false,
const Page = ({params}) => {
    const {slug} = params;
    console.log('params', params);
    return (
        <div className="flex flex-col items-center justify-center py-2 mt-10">
            <h1 className="text-6xl font-bold">
                <a className="text-blue-600" href="https://nextjs.org">
                    {slug.toUpperCase()}
                </a>
            </h1>
        </div>
    );
};


export async function generateStaticParams() {
    const posts = [
        {slug: 'hello'},
        {slug: 'welcome'},
        {slug: 'goodbye'}
    ];

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default Page;