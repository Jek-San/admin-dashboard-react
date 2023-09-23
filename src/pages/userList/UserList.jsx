import "./userList.css"
import { DataGrid } from "@mui/x-data-grid"

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ]

  const rows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/7319347/pexels-photo-7319347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]
  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
