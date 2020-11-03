# Black Royal App

## Structure
Every page is represented by a component in the `pages` folder. Each page and component may or may not have its own `scss` file, which is found in the `style` folder.

Generic components, such as the footer or header, are stored in the `component` folder.

The `layout` folder contains the basic template for a page (i.e. a page will use a layout that contains a `header` component and a `footer` component).

## Usage

### prereq
1. Be sure you have access to:
  - Snipcart
  - DatoCMS
  - Netlify

## To set up
1. Run `yarn install`
1. Run `yarn global add gatsby-cli`
1. Ask someone for the `DATO_API_TOKEN` and `SNIPCART_API_TOKEN`. Or you can obtain them from the admin dashboard on the respective sites.
1. Create an `.env` file at the root of this project and add the credentials. Your `.env` file should look as follows:
```
DATO_API_TOKEN=abc1234
SNIPCART_API_TOKEN=abc1234
```

### to run locally
1. Run `gatsby develop` or `yarn develop`
1. Application should be running locally at `http://localhost:8000/`

### to deploy
1. Run `gatsby clean`, so you don't push up any cached keys to master
1. `git add . && git commit -m "Commit message here" && git push`
1. You can view your deploy getting [built at Netlify](https://app.netlify.com/sites/black-royal-art/deploys)