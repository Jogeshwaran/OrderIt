export function filterData(searchTxt,restaurants){
    const data = restaurants.filter((res) => res?.data?.name?.toLowerCase()?.includes(searchTxt))
    return data 
}