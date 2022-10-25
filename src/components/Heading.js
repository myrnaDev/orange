import './Heading.css';

const Heading = (props) => {

  return (
    <>
      <div className="parentheadingcard">
        <div className="headingcard">
          <div className={`borderheadingcard ${props.border}`}>
            <h1 className={`${props.bgcolor} ${props.titlecolor}`}>
              <div className={`iconbefore ${props.iconbg}`} style={{ backgroundImage:`url(${props.bg})` }}></div>
              <span className="heading1thin">{props.titlethin}</span> {props.title}
            </h1>
            <h2 className={`${props.bgcolor} ${props.subtitlecolor}`}>
              {props.subtitle}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;