import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
function TaskApp() {
    let [jobs, setJob] = useState(['Rửa bát', 'quét nhà']);
    return (
        <div className='container'>
            <form>
                <div className="row">
                    <div className="col-4 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Job name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary mt-2">
                            <FaPlus className='me-2' />
                            Add
                        </button>
                    </div>
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Job</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, index) => (
                            <tr key={job}>
                                <th scope="row">{index + 1}</th>
                                <td>{job}</td>
                                <td>Follow</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
<style>

</style>
export default TaskApp
