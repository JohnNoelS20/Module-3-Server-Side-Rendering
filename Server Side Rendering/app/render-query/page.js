import React from 'react';
import Image from "next/image";
import {redirect} from "next/navigation";

export async function generateMetadata(
    {params, searchParams}
) {
    // read route params
    const query = searchParams.query

    return {
        title: query,
    }
}

const Page = ({params, searchParams}) => {
    const {query} = searchParams;

    if (!query) {
        redirect(`/`)
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center py-2 mt-10">
            <h1 className="text-6xl font-bold">
                <a className="text-blue-600" href="https://nextjs.org">
                    {query}
                </a>
            </h1>
        </div>
    );
};


export default Page;