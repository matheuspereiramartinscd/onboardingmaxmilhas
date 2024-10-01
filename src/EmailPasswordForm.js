import React from 'react';

const EmailPasswordForm = () => {
    return (
        <form className="flex flex-col mt-9 max-w-full w-[420px]">
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full max-w-[420px]">
                    <label htmlFor="email" className="font-semibold text-white">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="mail@abc.com"
                        className="px-2.5 py-3.5 mt-1 w-full bg-white rounded-md border border-zinc-300"
                    />
                </div>
                <div className="flex flex-col mt-6 w-full">
                    <div className="flex flex-col w-full max-w-[420px]">
                        <label htmlFor="password" className="font-semibold text-white">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*****************"
                            className="px-2.5 pt-5 pb-3.5 mt-1 w-full bg-white rounded-md border border-zinc-300"
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="px-2.5 pt-3.5 pb-3 mt-9 text-white bg-green-300 rounded-md w-[420px]">
                Login
            </button>
        </form>
    );
};

export default EmailPasswordForm;
