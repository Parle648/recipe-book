import type { ElementType, ComponentProps, JSX } from "react";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const Loadable =
  <T extends ElementType>(Component: T) =>
  (props: ComponentProps<T>): JSX.Element =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
