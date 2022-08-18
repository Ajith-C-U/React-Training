import React from 'react'
import EnhancedTable from '../../components/Table'
import { useSelector, useDispatch } from 'react-redux'
import { actionGetUsersList } from "../../action/index"
import Header from "./Header.json"

const Dashboard = () => {
  const { users } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [headers, setHeaders] = React.useState([]);
  const [data, setData] = React.useState([]);

  const header = Header.every(header => header.id)

  console.log(header, "////////");

  // List function exection
  const getPost = React.useCallback(async () => {
    const res = await dispatch(actionGetUsersList())
    console.log(res, "success");
    setData(res);
    setHeaders(Object.keys(res[0]));
  }, [dispatch])

  React.useEffect(() => {
    getPost()
  }, [getPost])
  console.log(users, "dash");
  return (
    <div>
      <EnhancedTable
        data={users}
        columns={Header}
      />
    </div>
  )
}

export default Dashboard