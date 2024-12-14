import FilterOrigin from "./filter-origin"

type FiltersControlsCategoryProps={setFilterOrigin: (origin:string)=> void}

const FiltersControlsCategory = (props:FiltersControlsCategoryProps) => {
  const {setFilterOrigin}=props
  return (
    <div className="sm:w-[20%] w-[93%] sm:my-auto sm:ml-8 sm:mr-4 flex items-center justify-center sm:shadow-2xl border mb-3 rounded-xl m-auto text-center">
        <FilterOrigin setFilterOrigin={setFilterOrigin}/>
    </div>
  )
}

export default FiltersControlsCategory