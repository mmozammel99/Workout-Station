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
            <div className="card w-[90%] bg-base-100 shadow-xl rounded-xl m-auto lg:m-16 p-10 lg:mr-32 text-justify">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold mb-2">What are the differences between props and state ?</h2>
                    <p><span className='font-semibold'>State:</span>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.


                        <br />
                        <span className='font-semibold'>Props:</span>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-[90%] bg-base-100 shadow-xl rounded-xl m-auto lg:m-16 p-10 lg:mr-32 text-justify">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold mb-2">6 use cases of the useEffect ReactJS hook</h2>
                    <p>Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them.
                        <br />
                        According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed. This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.
                        <br />
                        The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body. This behaviour is especially useful for cleaning code that is already running before run it again, which enable us to prevent memory leaks.
                        <br />
                        There is an interesting behaviour with this hook when we use non-primitive JavaScript data types as dependencies (e.g., arrays, objects, functions). With primitive values, such as numbers and strings, we can define a variable from another variable, and they will be the same, But with non-primitive values, such as objects, this behaviour is not the same.So we need to be very careful when using objects as dependencies, because even though they may look like unaltered data, they may not be so. Instead of using objects, we may want to use their properties as dependencies.
                        Now, let's take a look at some use cases for this hook.
                        <ol><li>1.Running once on mount: fetch API data</li>
                            <li>2.Running on state change: validating input field</li>
                            <li>3.Running on state change: live filtering</li>
                            <li>4.Running on state change: trigger animation on new array value</li>
                            <li>5.Running on props change: update paragraph list on fetched API data update</li>
                            <li>6.Running on props change: updating fetched API data to get BTC updated price</li>
                        </ol>
                        <br />
                        <span className='font-semibold'>Running once on mount: fetch API data</span>
                        <br />
                        When we want to perform an action once, especially when the app loads or mounts, we can use useEffect to do it. In this case, we are triggering a fetch() GET request when the app is mounted, using an empty array as useEffect dependency.
                        <br />
                        <span className='font-semibold'>Running on state change: validating input field</span>
                        <br />
                        Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every time the input changes, giving immediate feedback to the user.
                        <br />
                        We could add a setTimeout() function to check the input field after some time, to delay the checking on each user keystroke, and we would need to clear that timer by using the clearTimeout() function in the return statement of the useEffect hook. A similar example of this is implemented in the useEffect animation trigger, further ahead.
                        <br />
                        <span className='font-semibold'>Running on state change: live filtering</span>
                        <br />
                        We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.
                        <br />
                        <span className='font-semibold'>Running on state change: trigger animation on new array value</span>
                        <br />
                        We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and another state to handle the animation trigger.
                        <br />
                        As we are using a timer inside the useEffect, It is a good practice to clear it before it gets set again by using the return statement of the useEffect, which gets executed before the main body of the useEffect hook gets evaluated (except for the first render).
                        <br />
                        <span className='font-semibold'>Running on props change: update paragraph list on fetched API data update</span>
                        <br />
                        In this use case, we want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.
                        <br />
                        <span className='font-semibold'>Running on props change: updating fetched API data to get updated BTC price</span>
                        <br />
                        In this example, useEffect is used to fetch new data from an API every 3 seconds. The child component useEffect receives the time as dependency and every time that dependency changes, a new fetch() is triggered. This way, we can have an updated BTC exchange rate in our app.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;