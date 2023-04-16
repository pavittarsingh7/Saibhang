import Logo from "../logo.svg";
export default function Sidebar() {
  return (
    <div className="vh-100 rounded-end shadow-lg" style={{ background: "#282c34", color: "white" }}>
      <div>
        <img src={Logo} alt="logo" width={"120px"} /> <span>company name</span>
        <button className="btn btn-light ms-1">tgle</button>
      </div>
      <div className="ms-2">
        <ul class="nav d-grid gap-1">
          <li class="nav-item rounded-start bg-secondary-subtle">
            <a class="nav-link" aria-current="page" href="/dashboard">
              <button className="btn btn-sm btn-outline-primary">icon</button> Dashbaord default
            </a>
          </li>
          <li class="nav-item rounded-start">
            <a class="nav-link active" href="/dashboard">
              Link
            </a>
          </li>
          <li class="nav-item rounded-start">
            <a class="nav-link" href="/">
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
