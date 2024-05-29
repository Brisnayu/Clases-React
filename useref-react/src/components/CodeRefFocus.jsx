import React, { useRef, useEffect } from "react";

const CodeRefFocus = () => {
  const focusInputRef = useRef(null);

  useEffect(() => {
    if (focusInputRef.current) focusInputRef.current.focus();
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="user">
            <input
              type="text"
              name="user"
              id="user"
              ref={focusInputRef}
              placeholder="User"
            />
          </label>
          <label htmlFor="pass">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
            />
          </label>
        </fieldset>
      </form>
    </>
  );
};

export default CodeRefFocus;
