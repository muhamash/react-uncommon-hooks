/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import useGithub from "../../hooks/github/useGithub";

export default function GithubInfo ()
{
    // const {user,loading, error}= useGithub('learn-with-summit')
    const { user } = useGithub( 'muhamash' );
    return (
        <>
            { user ? (
                <div className="flex flex-col justify-center items-center p-4">
                    <img
                        src={ user[ "avatar_url" ] }
                        alt="photo"
                        className="border rounded-full w-32 h-32"
                    />
                    <p className="text-3xl my-3">
                        { user?.name } has <u>{ user[ "public_repos" ] }</u> public
                        repositories that gained <u>{ user.followers }</u>{ " " }
                        followers and
                        <u>{" " }{ user.following } following</u>
                    </p>
                    <h2 className="text-xl">More About the contributor:</h2>
                    <p className="my-2 text-md bg-gray-300 border p-2 rounded-md">
                        { user?.bio }
                    </p>
                    <p className="font-mono my-2 px-5 py-1 text-white rounded-sm shadow-md bg-orange-400 shadow-purple-200">Location: { user.location }</p>
                    <p className="font-thin text-xl bg-black text-white p-3 my-2 rounded-md shadow-lg shadow-slate-400">Github Id: { user.html_url }</p>
                </div>
            ) : (
                <p>No user data</p>
            ) }
        </>
    );
}
