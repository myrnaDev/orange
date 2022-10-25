import { Link, animateScroll  as scroll } from "react-scroll";
import './Button.css';

const Button = (props) => {
  return (
    <>
      <Link
        className='orangeBtn'
        to={props.url}
        spy={true}
        smooth='easeInOutQuad'
        offset={-60}
        duration={600}
      >
        <span className={`orangeBtnIcon ${props.iconStyle}`} style={{ backgroundImage:`url(${props.iconBg})` }}></span>
        <span className={`orangeBtnText ${props.textStyle}`}>{props.text}</span>        
      </Link>      
    </>
  );
}

export default Button;