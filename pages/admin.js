import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"

export default function Admin() {

    const fetcher = () => axios('/api/orders').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/orders', fetcher)

    console.log(data)
    return (
        <AdminLayout page={'Admin'}>
            <h1 className="text-4xl font-black">Administrator Panel</h1>
            <p className="text-2xl my-10">Manage your orders</p>
        </AdminLayout>
    )
}