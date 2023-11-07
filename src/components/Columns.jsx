

//  {"id":1,
// "first_name":"Fonz",
// "last_name":"Vial"
// ,"email":"fvial0@about.com"
// ,"gender":"Male",
// "phonenum":"8326566998",
// "citizenship":"Latin American Indian"}




export const ColumnsVal = [

    {
        accessorKey: 'id',
        header: 'Id',
    },
    {
        header:'Name',
        accessorFn: row=>`${row.first_name}${row.last_name}`

    },

    // {
    //     accessorKey: 'first_name',
    //     header: 'First Name',
    // },
    // {
    //     accessorKey: 'last_name',
    //     header: 'Last Name',
    // },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'gender',
        header: 'Gender',
    },
    {
        accessorKey: 'phonenum',
        header: 'Mobile no',
    },
    {
        accessorKey: 'citizenship',
        header: 'Citizenship',
    },

]

