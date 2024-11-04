import FilterOrigin from "./filter-origin"

type FiltersControlsCategoryProps={setFilterOrigin: (origin:string)=> void}

const FiltersControlsCategory = (props:FiltersControlsCategoryProps) => {
  const {setFilterOrigin}=props
  return (
    <div className="sm:w-[200px] sm:my-auto sm:mx-6 px-9 sm:shadow-2xl border rounded-xl m-auto text-center">
        <FilterOrigin setFilterOrigin={setFilterOrigin}/>
    </div>
  )
}

export default FiltersControlsCategory