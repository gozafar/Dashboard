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

<div className=" ">
           
           
            <div className=" flex justify-center">
            <div className=" flex w-96 border-4 h-96 ">

                    <div className=" border-4 h-16">
                        <h1>Sign Up <span><p>it's quick and easy</p></span></h1>
                    </div>
                </div></div>

                <div className="flex flex-col border-2">

                    <input className="  outline-none border-2 w-16 rounded-lg border-primary pl-1" type="text"
                        placeholder="Enter Your Email" onChange={(event) => setName(event.target.value)} />
                    <input className=" w-16 outline-none border-2 rounded-lg border-primary pl-1" type="text"
                        placeholder="Enter Your Email" onChange={(event) => setSurName(event.target.value)} />


                </div>

            </div>
        // </div>








        #
        "const user = results.map( u => {
                    if(u.email === email)
                    return u
                })
                 if(paswword === user.password){
                     setData(user)
                 }
                // setData(results)
                return 'user not found'
            })"



            if (email === data.email && password === data.password) {
      return history.push("/users");
    } else {
      alert("user not fine");
    }

    // history.push('/users')


     const xyz=data.find((u)=>{
        if (email === u.email && password === u.password) {
            return history.push("/users");
    }
    else{
        alert("user not fine");
    }


    })

@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap");

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
  }

html {
font-size: 62.5%;
}

a {
text-decoration: none;
}

li {
list-style: none;
}

/\*

/_ navbar style start _/

.main-nav {
width: 100%;
height: 10rem;
display: grid;
grid-template-columns: 10rem 1fr 2fr 1fr 10rem;

.logo {
display: grid;
/_ background-color: #3b5998; _/
grid-column: 2/3;
justify-content: start;
align-items: center;
}

.menu-link {
grid-column: 3/4;
}

.menu-link ul {
height: 10rem;
display: flex;
justify-content: space-around;
align-items: center;
}

.social-media {
grid-column: 4/5;
}

.social-media ul {
height: 10rem;
display: grid;
grid-template-columns: 3fr repeat(3, 1fr);
align-items: center;
justify-content: flex-end;
}

.social-media ul li {
text-align: right;
}

.social-media ul li:first-child {
grid-column: 2/3;
}

/_ ----------- Grid part ends ----------------- _/

.logo h2 {
font-size: 2.5rem;
font-weight: 400;
text-transform: uppercase;
background: -webkit-linear-gradient(#eee, rgb(69, 57, 248));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

.logo h2 span {
font-size: 3.5rem;
}

.menu-link ul li {
font-size: 1.8rem;
}

.menu-link ul li a {
text-transform: capitalize;
color: rgba(0, 0, 3, 0.8);
transition: 0.5s;
}
.menu-link ul li:hover > a {
transform-origin: left;
color: rgba(0, 0, 3, 1);
text-decoration: underline;
transition: 0.5s;
}

.social-media ul li {
font-size: 1.8rem;
}

.social-media .hamburger-menu {
display: none;
}

.facebook {
color: #3b5998;
}

.instagram {
color: #c32aa3;
}

.youtube {
color: #ff0000;
}

/_ hero section _/

.hero-section {
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

.hero-section p {
font-size: 3rem;
text-transform: capitalize;
}

.hero-section h1 {
font-size: 5rem;
text-transform: uppercase;
text-align: center;
}

/_ responsive css style _/
@media (max-width: 1080px) {
.main-nav {
height: 8rem;
grid-template-columns: 2rem 3fr 3fr 1fr 2rem;
}

.logo,
.menu-link ul,
.social-media ul {
height: 8rem;
}
}

/_ responsive css style _/
@media (max-width: 998px) {
.main-nav {
height: 7rem;
grid-template-columns: 2rem 2fr 3fr 2rem 2rem;
}

.menu-link {
display: none;
}

.logo,
.social-media ul {
height: 7rem;
}

.mobile-menu-link {
grid-column: 2/4;
position: relative;
z-index: 99;
}

.mobile-menu-link {
background-color: white;
height: 20rem;
display: grid;
grid-column: 2/5;
align-items: center;
padding-left: 3rem;
transition: all 2s linear;
transform-origin: top;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.mobile-menu-link ul {
height: 20rem;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: start;
}

.mobile-menu-link ul li:first-child {
transition-delay: 0.2s;
}

.social-media {
grid-row: 1/2;
grid-column: 3/5;
justify-items: end;
align-items: center;
transition: all 2s linear;
}

.social-media .social-media-desktop {
height: 0;
display: none;
}

.social-media {
height: 7rem;
display: flex;
justify-self: end;
align-items: center;
}

.social-media .hamburger-menu {
display: block;
font-size: 2.5rem;
}
}

@media (max-width: 798px) {
.main-nav {
height: 6rem;
grid-template-columns: 1rem 2fr 1fr 1fr 1rem;
}

.logo,
.social-media ul {
height: 6rem;
}

.social-media {
height: 6rem;
display: flex;
justify-self: end;
align-items: center;
}

.social-media .hamburger-menu {
display: block;
font-size: 2.5rem;
}
}

@media (max-width: 520px) {
.main-nav {
height: 6rem;
grid-template-columns: 1rem 4fr 1fr 1fr 1rem;
}

.logo,
.social-media ul {
height: 6rem;
}

.logo h2 {
font-size: 2rem;
}

.social-media {
height: 6rem;
display: flex;
justify-self: end;
align-items: center;
}

.social-media .hamburger-menu {
display: block;
font-size: 2.5rem;
}

/_ hero section _/

.hero-section h1 {
font-size: 3.8rem;
}
}
