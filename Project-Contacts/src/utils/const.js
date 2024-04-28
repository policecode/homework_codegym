export const API_METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch"
};

export const API_CODE = {
  Succeed: 200,
  DeleteSucceed: 202,
  BadRequestError: 400,
  NotFoundError: 404,
  UnauthorizedError: 401,
  Forbidden: 403,
  InternalServerError: 500,
  ApiGatewayTimeoutError: 504,
};

export const PAGING = {
  PerPage: 20
}

export const URL_API = {
  // baseApiUrl: `${process.env.baseAPIUrl}`,
  baseApiUrl: `http://localhost:3000/`
}


export const PROCESS_STATUS = {
  PENDING: 0,
  RUNNING: 1,
  FINISHED: 2,
  STOPPED: 3
}