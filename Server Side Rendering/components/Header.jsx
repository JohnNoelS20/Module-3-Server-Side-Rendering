import {redirect} from "next/navigation";

const Header = async () => {
    const appName = process.env.APP_NAME;


    async function goBtn(formData) {
        'use server'
        const input = formData.get('input').trim().replace(/[_\s]+/g, '-').toLowerCase();
        console.log('formData', formData);
        console.log('Redirect to render-slug/' + input);
        redirect('/render-slug/' + input)

    }

    async function goOverrideBtn(formData) {
        'use server'

        const input = formData.get('input').trim().replace(/[_\s]+/g, '-').toLowerCase();
        ;
        console.log('formData', formData);
        console.log('Redirect to render-slug/' + input + '/override');
        redirect('/render-slug/' + input + '/override')

    }

    async function goQueryBtn(formData) {
        'use server'

        const input = formData.get('input').trim().replace(/[_\s]+/g, '-').toLowerCase();
        console.log('formData', formData);
        console.log('Redirect to render-query/?query=' + input);

        redirect('/render-query/?query=' + input)
    }

    return (
        <form className="sticky top-0 bg-black p-4 shadow-md z-50 flex items-center gap-2">
            <div className="text-lg font-bold mb-4">Module 03 {appName}</div>
            <div className="flex-1 flex justify-center gap-2">
                <input name={"input"} className={"border border-gray-300 p-2 rounded text-black"}/>


                <button formAction={goBtn} type={"submit"}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go
                </button>
                <button formAction={goOverrideBtn} type={"submit"}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Go
                    Override
                </button>
                <button formAction={goQueryBtn} type={"submit"}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Go Query
                </button>
            </div>

        </form>
    );
};

export default Header;
