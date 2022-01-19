<!-- Please update value in the {}  -->

<h1 align="center">Conversional Test</h1>

<div align="center">
   A simple JSON component renderer.
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Notes](#notes)
  - [Built With](#built-with)
- [How To Run the application](#how-to-run-the-application)

<!-- OVERVIEW -->


## Notes

- All of the setup in the index file `./pages/index.js` file is basically to enable fetching the JSON data being received, the actual component where the solution is implemented is the Renderer component in `./components/layout/Renderer.js`.

- I setup routes to serve the given sample JSON files data.json and data2.json in the `./pages/api/data.js` and `./pages/api/data2.js` respectively. This was just my choice as Next.js makes it easy to setup endpoints to serve JSON data, the JSON data could as well be provided to the Renderer component using any desired technique.

- I assumed that the components(if present in a parent) usually would appear in a parent component in the order in which they were listed in the instructional pdf guide I was given.

- Currently in the index file `./pages/index.js`, data2.json `./data/data2.json` is being passed as a prop to the Renderer component and hence it is being rendered. To see how the Renderer component handles other JSON format such as data `./data/data.json`  change the data prop being passed to the Renderer component from data2 to data.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com) for deployment
## How To Run the application

<!-- Example: -->

To clone and run this application locally, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/elminhoemmanuel/conv-renderer.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```