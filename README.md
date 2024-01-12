# Shell.css

[Documentation](https://zachhall.org/shell-css)

[npm package](https://www.npmjs.com/package/shell-css)

## Installation

To use in your own project, the quickest way is to install through `npm`:

`npm i shell-css`

### Prerequisites

[Bootstrap](https://getbootstrap.com/)'s grid is recommended, but not required. The documentation site
currently uses Bootstrap 5's **grid** only.

`npm i bootstrap`

~~~html
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap-grid.min.css" />
~~~

## Usage

~~~html
<link rel="stylesheet" href="node_modules/shell-css/dist/shell.css" />
~~~

Icons and images are embedded, fonts are included in the `dist` folder and imported.

The documentation site has examples of possible uses; viewing its source is the easiest way to
get up and running.

## Building from Source

Parcel is used to compile the SCSS. Clone the repository and `npm install`, then `npm run build`.

The `src` folder has styles, icons, etc. while `dist` contains the build output.

### Viewing the documentation site locally

The documentation site is located in `doc` and links a level up to the compiled CSS output in the `dist` folder.

`npm run watch` will start up a server as well as watch the SCSS and let you view all changes to either documentation
or the project's source. You'll need to do this to get everything running, as it builds an un-minified copy of Shell.css
and copies it into the documentation site's directory.

## Resources Used

Thank you to the authors of these resources:

* [HarvettFox96's Generic Mobile System Font](https://notabug.org/HarvettFox96/ttf-genericmobile/)
* [Patternify CSS Pattern Generator](http://www.patternify.com/)
* [Aseprite Pixel Art Tool](https://www.aseprite.org/)
* Windows 3.1 screenshots and careful studying of its appearance

## License

The Windows 3.1 name and trademark are property of Microsoft. This project's source code is provided under the MIT license.

## Contributing

Bug reports, feature requests and PRs are welcome, however I may not merge all PRs into this repo. If you want your PR merged
into the repo it's probably best to report an issue first for tracking and to nail down the requirements. Of course,
being open source, you can always fork or spin the project off into your own new project too!

### A note about artwork

I've made icons for this project in Aseprite by looking at screenshots and doing my best to re-draw everything
from a reference, rather than ripping assets directly off a disk image. Any new icons or art should try to follow this
spirit to avoid issues with copyrights.

## Roadmap

I don't have a timeline for implementing these features, but here are some ideas I've got for improving the project:

* Styles from different eras and operating systems. I'm envisioning a future release where you can wrap your entire
  site in a class like you already can with `.theme-*` and you can switch skins from Windows to Macintosh or Linux.
* Perfect compatibility with CSS resets, like the one that Bootstrap uses when you include the full Bootstrap CSS.
* An optional library of Web Components, either framework-independent or specialized for popular frameworks like
  Svelte, Aurelia, Vue, React, etc.
* A demo site containing a game to showcase more advanced uses of the framework than the documentation site has.