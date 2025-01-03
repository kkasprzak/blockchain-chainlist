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
    <code>
      {`contract ChainList {
  address seller = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value.seller}</strong>
      </span>

      {`;
  string name = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value.name}</strong>
      </span>

      {`;
  string description = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value.description}</strong>
      </span>

      {`;
  string price = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value.price}</strong>
      </span>

      {`;

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }
}`}
    </code>
  );
}

export default Contract;
