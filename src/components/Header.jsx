import { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className="container-header">
      <h3>WAREHOUSE LIST</h3>
      <form>
        <input type="text" placeholder="enter name" />
        <button>🔍</button>
      </form>
    </div>
  );
};

export default Header;
