# Energy CSR Comparison Table - Data Upload Spike

This app is a small spike into how we can upload a TSV file into Contentful and update the fields of energy supplier entires.

## Scope

- check that we can extract data from a TSV field via a Contentful app
- check that we can update different energy supplier entries via a single Contentful app
- find out the best location for the upload app
- find out how we can validate the changes we make to an entry without publishing it

## Findings

Using a page app is the most appropriate approach, as this means we do not have to create any other content types (eg Energy Supplier Table Data) to upload and store data.

We don't actually need to upload the data to Contentful, we can access the data, parse it and update entries from the app. This spike reads the TSV data into memory and updates Contentful from there.

Calling `entry.update()` will save the changes made to fields in an entry without publishing it.

Calling `entry.update()` will either result in a successful update OR a response containing one or more validation errors.

Each supplier entry will need to be fetched via the `client` and not `sdk.cma`, since you cannot call `update()` on entries returned via the `sdk.cma` object. To facilitate this, I have added the Contentful supplier id to the TSV file. This will mean some back and forth between the Policy and Energy teams to manage this process. An alternative would be to search for the supplier using `sdk.cma.entry.getMany()`, and then using the `client` to retrieve the entry object using the id.

### Other considerations

All the entries will need to be published at the same time, once they are all valid. Otherwise the table will contain inconsistent information. Entries can already be published in bulk via the Contentful UI, it is unclear if this app will be required to facilitate that directly.

The workflow / UX is not well defined for this process, so this app just surfaces successful and erroring updates in the browser console. Consideration will need to be given to display well formed feedback using [forma36 components](https://f36.contentful.com/).

This app has all the code in one component, the real app will need to break this apart into smaller, more testable units.

This spike does not explore how to convert the plain text in the TSV file into well-formed rich text JSON data for upload. The requirements for this aren't defined and some thought will need to be given to whether this is required. Having things like email and telephone `<a>` tags created from flat TSV files will be quite involved, and we should be sure that this is a requirement of the uploading tool before development begins.

## Running the app

1. Clone the repo
2. Create a CMA token in Contentful
3. Add a `.env` file to the root of this app as per the `.env.example` template
4. run `npm install` and then `npm start`
5. log into Contentful
6. Open the `Content Playground` > `master` environment
7. Click `Apps` > `Upload Energy Supplier TSV`
8. Upload one of the two `example-*.tsv` files in this repo
9. See output in the browser console

# Standard Contentful App Docs

This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

## Available Scripts

In the project directory, you can run:

#### `npm start`

Creates or updates your app definition in Contentful, and runs the app in development mode.
Open your app to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

#### `npm run upload`

Uploads the build folder to contentful and creates a bundle that is automatically activated.
The command guides you through the deployment process and asks for all required arguments.
Read [here](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/#deploy-with-contentful) for more information about the deployment process.

#### `npm run upload-ci`

Similar to `npm run upload` it will upload your app to contentful and activate it. The only difference is  
that with this command all required arguments are read from the environment variables, for example when you add
the upload command to your CI pipeline.

For this command to work, the following environment variables must be set:

- `CONTENTFUL_ORG_ID` - The ID of your organization
- `CONTENTFUL_APP_DEF_ID` - The ID of the app to which to add the bundle
- `CONTENTFUL_ACCESS_TOKEN` - A personal [access token](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/personal-access-tokens)

## Libraries to use

To make your app look and feel like Contentful use the following libraries:

- [Forma 36](https://f36.contentful.com/) – Contentful's design system
- [Contentful Field Editors](https://www.contentful.com/developers/docs/extensibility/field-editors/) – Contentful's field editor React components

## Using the `contentful-management` SDK

In the default create contentful app output, a contentful management client is
passed into each location. This can be used to interact with Contentful's
management API. For example

```js
// Use the client
cma.locale.getMany({}).then((locales) => console.log(locales));
```

Visit the [`contentful-management` documentation](https://www.contentful.com/developers/docs/extensibility/app-framework/sdk/#using-the-contentful-management-library)
to find out more.

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further customize your app.
