import React from 'react';

export default function FormId ()
{
    const userNameId = React.useId();
    const passwordHintId = React.useId()
    return (
        <div className='flex flex-col p-4'>
            <h1 className='text-3xl my-3'>This is a simple form</h1>
            <form>
                <div className='mx-2'>
                    <label htmlFor={ userNameId }>User Name</label>
                    <input
                        type="text"
                        id={ userNameId }
                        className='border mx-2 rounded border-slate-300' />
                </div>

                <div className='mx-2'>
                    <label htmlFor={ passwordHintId }>password</label>
                    <input
                        type="password"
                        className='border mx-2 rounded border-slate-300'
                        aria-describedby={ passwordHintId } />
                    <p id={ passwordHintId }>Password should be 8 characters long.</p>
                </div>
                <div>
                    <p>userNameId: {userNameId }</p>
                    <p>passwordHintId: { passwordHintId}</p>
                </div>
            </form>
        </div>
    );
}
