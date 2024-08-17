interface eachInterface {
  render: (item: any, index: number) => JSX.Element;
  of: any[];
}

/**
 * Component that iterates over an array and renders each item using a provided render function.
 *
 * Props:
 * - render (function): An function which render JSX Element
 * - of (Array): An array which containing data for render function
 *
 * @param {EachProps} props Props containing the render function and array of items to iterate over.
 * @returns {JSX.Element[]} Array of JSX elements rendered by the provided render function.
 */
export const Each = ({ render, of }: eachInterface): JSX.Element[] => {
  return of.map((item, index) => render(item, index));
};