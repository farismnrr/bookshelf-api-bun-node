<<<<<<< HEAD

const Hapi = require("@hapi/hapi");
const routes = require("./routes/routes");
const process = require("process");

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8080,
        host: "0.0.0.0", 
        routes: {
            cors: true,
            validate: {
                failAction: async (request, h, err) => {
                    throw err;
                }
            }
        }
    });

    server.ext("onRequest", (request, h) => {
        request.plugins.startTime = process.hrtime();
        return h.continue;
    });

    server.ext("onPreResponse", (request, h) => {
        const start = request.plugins.startTime;
        const end = process.hrtime(start);
        const responseTimeNs = end[0] * 1e9 + end[1];

        const method = request.method.toUpperCase();
        const paddedMethod = method.length < 6 ? method.padEnd(6, " ") : method;

        let responseTime;
        let unit;

        if (responseTimeNs < 1e3) {
            responseTime = responseTimeNs;
            unit = "ns";
        } else if (responseTimeNs < 1e6) {
            responseTime = responseTimeNs / 1e3;
            unit = "μs";
        } else if (responseTimeNs < 1e9) {
            responseTime = responseTimeNs / 1e6;
            unit = "ms";
        } else if (responseTimeNs < 1e12) {
            responseTime = responseTimeNs / 1e9;
            unit = "s";
        } else {
            responseTime = responseTimeNs / 1e12;
            unit = "Ms";
        }

        const response = request.response;
        const statusCode = response.isBoom
            ? response.output.statusCode
            : response.statusCode;

        console.log(
            `[ NodeJS - Hapi ] Code: ${statusCode} | Time: ${responseTime
                .toFixed()
                .padStart(3, " ")}${unit} | ${paddedMethod}\t${request.path}`
        );

        if (response.isBoom && response.output.statusCode === 404) {
            return h
                .response(
                    `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>404 Not Found</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                        h1 { color: #ff6347; }
                        p { font-size: 22px; }
                    </style>
                </head>
                <body>
                    <h1>404 Halaman tidak ditemukan</h1>
                    <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                </body>
                </html>
            `
                )
                .code(404);
        }

        return h.continue;
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
=======

const Hapi = require("@hapi/hapi");
const routes = require("./routes/routes");
const process = require("process");

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8080,
        host: "0.0.0.0", 
        routes: {
            cors: true,
            validate: {
                failAction: async (request, h, err) => {
                    throw err;
                }
            }
        }
    });

    server.ext("onRequest", (request, h) => {
        request.plugins.startTime = process.hrtime();
        return h.continue;
    });

    server.ext("onPreResponse", (request, h) => {
        const start = request.plugins.startTime;
        const end = process.hrtime(start);
        const responseTimeNs = end[0] * 1e9 + end[1];

        const method = request.method.toUpperCase();
        const paddedMethod = method.length < 6 ? method.padEnd(6, " ") : method;

        let responseTime;
        let unit;

        if (responseTimeNs < 1e3) {
            responseTime = responseTimeNs;
            unit = "ns";
        } else if (responseTimeNs < 1e6) {
            responseTime = responseTimeNs / 1e3;
            unit = "μs";
        } else if (responseTimeNs < 1e9) {
            responseTime = responseTimeNs / 1e6;
            unit = "ms";
        } else if (responseTimeNs < 1e12) {
            responseTime = responseTimeNs / 1e9;
            unit = "s";
        } else {
            responseTime = responseTimeNs / 1e12;
            unit = "Ms";
        }

        const response = request.response;
        const statusCode = response.isBoom
            ? response.output.statusCode
            : response.statusCode;

        console.log(
            `[ NodeJS - Hapi ] Code: ${statusCode} | Time: ${responseTime
                .toFixed()
                .padStart(3, " ")}${unit} | ${paddedMethod}\t${request.path}`
        );

        if (response.isBoom && response.output.statusCode === 404) {
            return h
                .response(
                    `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>404 Not Found</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                        h1 { color: #ff6347; }
                        p { font-size: 22px; }
                    </style>
                </head>
                <body>
                    <h1>404 Halaman tidak ditemukan</h1>
                    <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                </body>
                </html>
            `
                )
                .code(404);
        }

        return h.continue;
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
>>>>>>> f23ce36610417deba3b6ce798299ca0ef3001a18
