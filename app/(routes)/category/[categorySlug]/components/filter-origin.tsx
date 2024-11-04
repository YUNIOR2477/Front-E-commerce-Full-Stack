import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";
import React from "react";

type FilterOriginProps = {
  setFilterOrigin: (origin: string) => void;
};

const FilterOrigin = (props: FilterOriginProps) => {
  const { setFilterOrigin } = props;
  const { result, loading }: FilterTypes = useGetProductField();
  return (
    <div className="my-5 ">
      <p className="mb-3 font-bold">Origen</p>
      {loading && result === null && <p>Cargando Origen...</p>}
      <RadioGroup
        onValueChange={(value) => setFilterOrigin(value)}
        className="w-[19%] sm:w-auto m-auto"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="" />
          <Label>Todos</Label>
        </div>
        {result !== null &&
          result.schema.attributes.origin.enum.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FilterOrigin;
