import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface Props {
  children: any;
}

const Tanstack = (Props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {Props.children}
    </QueryClientProvider>
  );
};

export default Tanstack;
