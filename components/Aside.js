import Link from "next/link";

const Aside = () => {

  return (
    <div className="aside">
      <div className="aside-box">
        <h2 className="aside-name">OXO</h2>
      </div>
      <div className="aside-title">
        <div className="aside-titles">
          <span className="aside-span"></span>
          <h3 className="aside-full">Roden Ferdinand</h3>
        </div>
        <ul className="aside-list">
            <li className="aside-item">
                <p className="aside-fulls">Main</p>
            </li>
            <li className="aside-item">
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                <Link href="#">
                    <a className="aside-link">Dashboard</a>
                </Link>
            </li>
            <li className="aside-item">
                <Link href="#">
                    <a className="aside-link">Home</a>
                </Link>
            </li>
            <li className="aside-item">
                <Link href="#">
                    <a className="aside-link"></a>
                </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
