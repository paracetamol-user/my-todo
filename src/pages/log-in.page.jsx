/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div className='h-screen w-screen bg-gray-100 flex justify-center items-center'>
                <div className=' basis-1/3 space-y-10 p-4'>
                    <div className=' text-center space-y-2'>
                        <i class="fa-solid fa-check-double text-6xl text-blue-600"></i>
                        <h1 className=' text-4xl font-bold'>Sign in to your account</h1>
                        <p>
                            Or{' '}
                            <a href="#" className=' font-medium text-blue-600 hover:text-blue-400'> sign up here</a>
                        </p>
                    </div>
                    <div className=' bg-white p-9 rounded-2xl space-y-10 shadow-xl'>
                        <form action="POST" className='space-y-7'>
                            <div className='space-y-1'>
                                <label className='block text-md font-semibold text-gray-600'>Username</label>
                                <input type="text" name="username" className='w-full outline-none border-2 border-gray-300 focus:border-blue-400 rounded-md p-2 shadow-sm' />
                            </div>
                            <div className='space-y-1'>
                                <label className='block text-md font-semibold text-gray-600'>Password</label>
                                <input type="password" name="password" className='w-full outline-none border-2 border-gray-300 focus:border-blue-400 rounded-md p-2 shadow-sm' />
                            </div>
                            <div className='flex flex-col items-center justify-between lg:flex-row'>
                                <div className='flex items-center'>
                                    <input type="checkbox" id='remember-me' name="remember-me" className=' h-4 w-4 checked:text-blue-500 focus:ring-blue-500 focus:ring ring-offset-2 border-gray-300 rounded-md' />
                                    <label htmlFor="remember-me" className='ml-2 block text-md text-gray-900'> Remember me </label>
                                </div>

                                <div className='text-sm'>
                                    <a href="#" className='font-semibold text-blue-600 hover:text-blue-400'>Forgot your password?</a>
                                </div>
                            </div>
                            <input type="submit" value="Sign in" className='w-full outline-none font-medium bg-blue-600 hover:bg-blue-500 py-2 rounded-md text-white cursor-pointer' />
                        </form>
                        <div className=' text-center space-y-3'>
                            <p className=' text-md text-gray-400'>Or continue with</p>
                            <div className=' flex items-center gap-3'>
                                <button className='group border-2 border-gray-300 hover:bg-blue-500 hover:border-transparent rounded-lg p-1 basis-1/3'>
                                    <i className="fa-brands fa-facebook text-2xl text-gray-500 group-hover:text-white"></i>
                                </button>
                                <button className='group border-2 border-gray-300 hover:bg-red-500 hover:border-transparent rounded-lg p-1 basis-1/3'>
                                    <i className="fa-brands fa-google text-2xl text-gray-500 group-hover:text-white"></i>
                                </button>
                                <button className='group border-2 border-gray-300 hover:bg-black hover:border-transparent rounded-lg p-1 basis-1/3'>
                                    <i className="fa-brands fa-github text-2xl text-gray-500 group-hover:text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;