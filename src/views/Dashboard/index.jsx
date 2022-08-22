import React, { useState } from 'react'
import EnhancedTable from '../../components/Table'
import { useSelector, useDispatch } from 'react-redux'
import { actionGetUsersList } from "../../action/index"
import Header from "./Header.json"

const Dashboard = () => {
  const { users, total } = useSelector((state) => state.users)
  console.log(users,total,"tot");
  const dispatch = useDispatch()
  const [pageProps, setPageProps] = useState({
    _limit: 5,
    _page: 0
  })

  // List function exection
  const getPost = React.useCallback(async () => {
    const _start = (pageProps._limit * pageProps._page)
    const { _limit } = pageProps
    await dispatch(actionGetUsersList(_start, _limit))
  }, [dispatch, pageProps])

  React.useEffect(() => {
    getPost()
  }, [getPost])


  return (
    <div>
      <EnhancedTable
        data={users}
        columns={Header}
        total={total}
        setPageProps={setPageProps}
      />
    </div>
  )
}

export default Dashboard