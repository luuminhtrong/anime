import { useState } from "react";

import { useDispatch } from "react-redux";

import { Paginator } from "primereact/paginator";
import { getData } from "../redux/seasonSlice";

const Pagination = (props) => {
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);
  const { year, season } = props;

  const dispatch = useDispatch();

  const onBasicPageChange = (event) => {
    dispatch(getData({ year: year, seasonal: season, page: event.page + 1 }));
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };

  return (
    <div className="paginator-demo">
      <div className="card">
        <Paginator
          first={basicFirst}
          rows={basicRows}
          totalRecords={30}
          //   rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onBasicPageChange}
        ></Paginator>
      </div>
    </div>
  );
};

export default Pagination;
