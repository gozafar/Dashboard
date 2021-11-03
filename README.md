# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)












"# Dashboard" 





























{
                this.data ?
                    < div >
                        <table>
                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Name </th>
                                    <th>Last </th>
                                    <th>Address </th>
                                    <th>Mobile</th>
                                    <th>Name </th>
                                    <th>Address </th>
                                    <th>khan </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map((items, i) => {
                                        console.log(items)
                                        return (


                                            <div className="flex flex-row space-x-5">
                                                {/* <h1 className="">{items.id}</h1> */}
                                                {/* <h1 className="">{i}</h1> */}

                                                {/* <h2 className="">{items.name}</h2>
                                                <h2 className="">{items.email}</h2>
                                                <h2 className="">{items.mobile}</h2>
                                                <h2 className="">{items.gender}</h2>
                                                <h2 className="">{items.addedby}</h2>
                                                <h2 className="">{items.dob}</h2>
                                                <h2 className="">{items.doj}</h2>
                                                <h2 className="">{items.department}</h2>
                                                <h2 className="">{items.position}</h2>
                                                <h2 className="">{items.workType}</h2>
                                                <h2 className="">{items.salary}</h2>
                                                <h2 className="">{items.accountNo}</h2>
                                                <h2 className="">{items.iFSCCode}</h2>
                                                <h2 className="">{items.aadharNo}</h2>
                                                <h2 className="">{items.pANNo}</h2>
                                                <h2 className="">{items.referredBy}</h2>
                                                <h2 className="">{items.address}</h2>
                                                <h2 className="">{items.city}</h2>
                                                <h2 className="">{items.state}</h2> */}
                                                <tr>
                                                    <td>{items.id}</td>
                                                    <td>{items.name}</td>
                                                    <td>{items.email}</td>
                                                    <td>{items.mobile}</td>
                                                    <td>{items.gender}</td>
                                                    <td>{items.addedby}</td>
                                                    <td>{items.dob}</td>
                                                    <td>{items.doj}</td>
                                                    <td>{items.department}</td>
                                                </tr>

                                            </div>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    : <p>lodding here</p>
            }
