import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center bg-green-600 text-white p-3 text-xl font-bold mx-20 lg:mx-96 rounded-xl mt-20'>Blog</h2>
            <div className="card w-[90%] bg-base-100 shadow-xl rounded-xl m-auto lg:m-16 p-10 lg:mr-32 text-justify">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold mb-2">How Does It Actually Work?</h2>
                    <p><span className='font-semibold'>Introduction to ReactJS:</span> Let us understand this with a practical example.

                        Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS.
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                        A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab. <br />
                        <span className='font-semibold'>Note:</span>
                        React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.<br />
                        <span className='font-semibold'>How does it work:</span>
                        How does it work: While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Blog;