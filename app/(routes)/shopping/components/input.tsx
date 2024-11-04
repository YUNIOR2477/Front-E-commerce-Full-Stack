
import { Input } from "@/components/ui/input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputOrder = (props: { setSearch: any; }) => {
  const {setSearch}=props
  return (
      <form className="w-full"
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <Input
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Codigo del pedido"
          onChange={ev=>setSearch(ev.target.value)}
        ></Input>
      </form>
  );
};

export default InputOrder;
