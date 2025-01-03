import { useRef, useEffect } from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <div className="contract-table">
      <table>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="secondary-color" ref={spanEle}><strong>{value.seller}</strong></span></td>
            <td><span className="secondary-color"><strong>{value.name}</strong></span></td>
            <td><span className="secondary-color"><strong>{value.description}</strong></span></td>
            <td><span className="secondary-color"><strong>{value.price}</strong></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contract;
