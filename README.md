# JavaScript 3D Confidence Ellipsoid Chart

![JavaScript 3D Confidence Ellipsoid Chart](confidenceEllipsoid3d.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.


## Description

Example showcasing the 3D variant of a common statistical data visualization method: confidence ellipses.

Confidence ellipses are used especially with statistic chart applications. A common usage, for example, is the 95% confidence ellipse, which visualizes the area that contains 95% of samples, which makes it easier for the user to understand which points are _outliers_.

The same can be done in more complex 3D scatter data set visualizations, in which case the ellipse becomes an *ellipsoid*.

Programmatically, this can be implemented by drawing the ellipsoid as a *sphere* with different sizes along the X, Y and Z axes.

```ts
const ellipsoidSeries = chart3D.addPointSeries()
    // Specify ellipsoid center coordinate.
    .add({ x: 0, y: 0, z: 0 })
    .setPointStyle(new PointStyle3D.Triangulated({
        // Specify ellipsoid dimensions.
        size: { x: 1, y: 2, z: 1.5 }
    }))
```

## API Links

* [3D chart]
* [3D axis]
* [Legend Box]
* [Point series 3D]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

© Arction Ltd 2009-2020. All rights reserved.


[3D chart]: https://www.arction.com/lightningchart-js-api-documentation/v3.3.0/classes/chart3d.html
[3D axis]: https://www.arction.com/lightningchart-js-api-documentation/v3.3.0/
[Legend Box]: https://www.arction.com/lightningchart-js-api-documentation/v3.3.0/classes/chartxy.html#addlegendbox
[Point series 3D]: https://www.arction.com/lightningchart-js-api-documentation/v3.3.0/classes/pointseries3d.html

