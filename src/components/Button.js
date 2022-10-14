import './Button.css';

const Button = (props) => {
  return (
    <>
      <a href={props.url} className="orangeBtn">
        <span className={`orangeBtnIcon ${props.iconStyle}`} style={{ backgroundImage:`url(${props.iconBg})` }}></span>
        <span className={`orangeBtnText ${props.textStyle}`}>{props.text}</span>        
      </a>      
    </>
  );
}

export default Button;