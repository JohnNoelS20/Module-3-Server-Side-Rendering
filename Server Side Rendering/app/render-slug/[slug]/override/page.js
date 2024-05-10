import React from 'react';
import Image from "next/image";
import {redirect} from "next/navigation";

export async function generateMetadata(
    {params}
) {
    // read route params
    const slug = params.slug

    return {
        title: slug,
    }
}

const Page = ({params}) => {
    const {slug} = params;

    const staticParams = [
        {slug: 'hello'},
        {slug: 'welcome'},
        {slug: 'goodbye'}
    ];

    if (staticParams.find((post) => post.slug === slug)) {
        redirect(`/render-slug/${slug}`)
    }

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

export default Page;