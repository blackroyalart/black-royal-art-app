# Black Royal App

## Structure
Every page is represented by a component in the `pages` folder. Each page and component may or may not have its own `scss` file, which is found in the `style` folder. Generic components, such as the footer or header, are stored in the `component` folder. The `layout` folder contains the basic template for a page (i.e. a page will use a layout that contains a `header` component and a `footer` component).

## Usage

### prereq
1. Run `yarn install`
1. Run `yarn global add gatsby-cli`
1. Ask someone for the `DATO_API_TOKEN`. Create a `.env` file and run `echo 'DATO_API_TOKEN=abc123' >> .env` 

### to run locally
1. Run `gatsby develop` or `yarn develop`
1. Application should be running locally at `http://localhost:8000/`

### to deploy
1. Run `yarn build` or push your changes to master