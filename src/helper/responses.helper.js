<<<<<<< HEAD
const getSuccessResponse = (h, message, code) => {
    const response = h.response({
        status: "success",
        message: message
    });
    response.code(code);
    return response;
};

const getSuccessResponseData = (h, message, data, code) => {
    const response = h.response({
        status: "success",
        message: message,
        data: data
    });
    response.code(code);
    return response;
};

const getSuccessResponseNoMessage = (h, data, code) => {
    const response = h.response({
        status: "success",
        data: data
    });
    response.code(code);
    return response;
};

const getErrorResponse = (h, message, code) => {
    const response = h.response({
        status: "fail",
        message: message
    });
    response.code(code);
    return response;
};

module.exports = {
    getSuccessResponse,
    getSuccessResponseData,
    getSuccessResponseNoMessage,
    getErrorResponse
};
=======
const getSuccessResponse = (h, message, code) => {
    const response = h.response({
        status: "success",
        message: message
    });
    response.code(code);
    return response;
};

const getSuccessResponseData = (h, message, data, code) => {
    const response = h.response({
        status: "success",
        message: message,
        data: data
    });
    response.code(code);
    return response;
};

const getSuccessResponseNoMessage = (h, data, code) => {
    const response = h.response({
        status: "success",
        data: data
    });
    response.code(code);
    return response;
};

const getErrorResponse = (h, message, code) => {
    const response = h.response({
        status: "fail",
        message: message
    });
    response.code(code);
    return response;
};

module.exports = {
    getSuccessResponse,
    getSuccessResponseData,
    getSuccessResponseNoMessage,
    getErrorResponse
};
>>>>>>> f23ce36610417deba3b6ce798299ca0ef3001a18
