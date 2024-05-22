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
  baseApiUrl: `https://hoangdat-json-server.vercel.app/`,
  // baseApiUrl: `http://localhost:3000/`
}


export const PROCESS_STATUS = {
  PENDING: 0,
  RUNNING: 1,
  FINISHED: 2,
  STOPPED: 3
}

export const optionCategory = [
  { value: 'Tiên Hiệp', label: 'Tiên Hiệp' },
  { value: 'Kiếm Hiệp', label: 'Kiếm Hiệp' },
  { value: 'Ngôn Tình', label: 'Ngôn Tình' },
  { value: 'Đam Mỹ', label: 'Đam Mỹ' },
  { value: 'Quan Trường', label: 'Quan Trường' },
  { value: 'Khoa Huyễn', label: 'Khoa Huyễn' },
  { value: 'Hệ Thống', label: 'Hệ Thống' },
  { value: 'Huyền Huyễn', label: 'Huyền Huyễn' },
  { value: 'Dị Giới', label: 'Dị Giới' },
  { value: 'Dị Năng', label: 'Dị Năng' },
  { value: 'Quân Sự', label: 'Quân Sự' },
  { value: 'Lịch Sử', label: 'Lịch Sử' },
  { value: 'Xuyên Không', label: 'Xuyên Không' },
  { value: 'Xuyên Nhanh', label: 'Xuyên Nhanh' },
  { value: 'Trọng Sinh', label: 'Trọng Sinh' },
  { value: 'Trinh Thám', label: 'Trinh Thám' },
  { value: 'Thám Hiểm', label: 'Thám Hiểm' },
  { value: 'Linh Dị', label: 'Linh Dị' },
  { value: 'Ngược', label: 'Ngược' },
  { value: 'Sủng', label: 'Sủng' },
  { value: 'Cung Đấu', label: 'Cung Đấu' },
  { value: 'Nữ Cường', label: 'Nữ Cường' },
  { value: 'Gia Đấu', label: 'Gia Đấu' },
  { value: 'Đông Phương', label: 'Đông Phương' },
  { value: 'Đô Thị', label: 'Đô Thị' },
  { value: 'Bách Hợp', label: 'Bách Hợp' },
  { value: 'Hài Hước', label: 'Hài Hước' },
  { value: 'Điền Văn', label: 'Điền Văn' },
  { value: 'Cổ Đại', label: 'Cổ Đại' },
  { value: 'Mạt Thế', label: 'Mạt Thế' },
  { value: 'Truyện Teen', label: 'Truyện Teen' },
  { value: 'Phương Tây', label: 'Phương Tây' },
  { value: 'Nữ Phụ', label: 'Nữ Phụ' },
  { value: 'Light Novel', label: 'Light Novel' },
  { value: 'Việt Nam', label: 'Việt Nam' },
  { value: 'Đoản Văn', label: 'Đoản Văn' },
  { value: 'Khác', label: 'Khác' }
];
