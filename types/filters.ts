export type FilterTypes = {
  result: ResultFilterTypes | null;
  loading: boolean;
  error: string;
};

export type ResultFilterTypes = {
    schema: {
      attributes: {
        origin: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          enum: any;
        };
      };
    };
  };
