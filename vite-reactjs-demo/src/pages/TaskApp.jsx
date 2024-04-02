import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import localStorage from "../util/localStorage";
import validation from "../util/validation";
import Status from "../components/hook/Status";
import DateFormat from "../components/hook/DateFormat";

function TaskApp() {
    // localStorage.removeLocalStorage("fvn_job_list");

  let [items, setItems] = useState(() => {
    if (localStorage.getLocalStorage("fvn_job_list")) {
      return localStorage.getLocalStorage("fvn_job_list");
    }
    return [];
  });
  let [itemDetail, setItemDetail] = useState({
    name: "",
    create_at: "",
    update_at: "",
    status: "",
  });
  //useEffect
  useEffect(() => {
    localStorage.setLocalStorage("fvn_job_list", items);
  }, [items]);

  let checkError = () => {
    let isCheck = "";
    // Kiểm tra số ký tự tối thiểu
    isCheck = validation.checkLengthString(itemDetail.name, 3);
    if (isCheck) {
      toast.error(isCheck, {
        position: "top-center",
      });
      return true;
    }
    // Kiểm tra đã tồn tại hay chưa
    isCheck = validation.isExists(itemDetail, items, {
      compare: "name",
      primary: "id",
    });
    if (isCheck) {
      toast.error(isCheck, {
        position: "top-center",
      });
      return true;
    }
    return false;
  };
  let getItem = (e, item) => {
    e.preventDefault();
    setItemDetail(item);
  };
  let close = (e) => {
    e.preventDefault();
    setItemDetail({
      name: "",
      create_at: "",
      update_at: "",
      status: "",
    });
  };

  let submit = (e) => {
    e.preventDefault();
    let isError = checkError();
    if (isError) return;
    if (itemDetail.id) {
      // Update
      let newItems = items.map((item) => {
        if (itemDetail.id == item.id) {
          return {
            ...itemDetail,
            update_at: (new Date()).getTime(),
          };
        }
        return item;
      });
      setItems(newItems);
      toast.success("Update success !", {
        position: "top-center",
      });
    } else {
      // Create
      setItems([
        {
          ...itemDetail,
          id: (new Date()).getTime(),
          create_at: (new Date()).getTime(),
          update_at: (new Date()).getTime(),
          status: "new",
        },
        ...items,
      ]);
      toast.success("Create success !", {
        position: "top-center",
      });
    }
    close(e);
  };

  let destroy = async (e, itemDelete) => {
    e.preventDefault();
    if (itemDelete.status != "new") return;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    let result = await swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: `"${itemDelete.name}" has been deleted.`,
        icon: "success",
      });
      let newItems = items.filter((item) => {
        return itemDelete.id != item.id;
      });
      setItems(newItems);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: `"${itemDelete.name}" is safe :)`,
        icon: "error",
      });
    }
  };

  let finish = (e, itemFinish) => {
    e.preventDefault();
    let newItems = items.map((item) => {
      if (itemFinish.id == item.id) {
        return {
          ...itemFinish,
          status: "done",
          update_at: (new Date()).getTime(),
        };
      }
      return item;
    });
    setItems(newItems);
    toast.success("Finish job !", {
      position: "top-center",
    });
  };

  return (
    <div className="container">
      <ToastContainer />
      <h3 className="bg-info text-center text-white py-3">
        <HiOutlineClipboardDocumentList
          className="me-2"
          style={{ color: "#ffffff" }}
        />
        Task List
      </h3>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col-4 mb-3">
            <input
              onInput={(e) =>
                setItemDetail({ ...itemDetail, name: e.target.value })
              }
              value={itemDetail.name}
              type="text"
              className="form-control"
              placeholder="Job name"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary me-2">
              <FaPlus className="me-2" />
              {itemDetail?.id ? "Update" : "Create"}
            </button>
            {itemDetail?.id && (
              <a onClick={close} className="btn btn-danger">
                Close
              </a>
            )}
          </div>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">UUID</th>
            <th scope="col">JOB</th>
            <th scope="col" width="15%">
              CREATE AT
            </th>
            <th scope="col" width="15%">
              UPDATE AT
            </th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {items.map((job) => (
            <tr key={job?.id}>
              <th scope="row">{job?.id}</th>
              <td>{job?.name}</td>
              <td>
                <DateFormat date={job?.create_at} />
              </td>
              <td>
                <DateFormat date={job?.update_at} />
              </td>
              <td>
                <Status status={job?.status} />
              </td>
              <td>
                {job.status == "new" && (
                  <a
                    onClick={(e) => finish(e, job)}
                    href="#"
                    className="btn btn-primary me-2"
                  >
                    Finish
                  </a>
                )}
                <a
                  onClick={(e) => getItem(e, job)}
                  href="#"
                  className="btn btn-warning me-2"
                >
                  Update
                </a>
                {job.status == "new" && (
                  <a
                    onClick={(e) => destroy(e, job)}
                    href="#"
                    className="btn btn-danger"
                  >
                    Delete
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
<style></style>;
export default TaskApp;
