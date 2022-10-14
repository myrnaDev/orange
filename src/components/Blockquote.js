import './Blockquote.css';

const COLOR = ['borderaqua', 'borderorange'];

const STYLES = ['quotehacemos', 'quoteequip', 'quotesubir'];

const Blockquote = ({ children, blockColor, blockStyle }) => {
  const checkBlockColor = COLOR.includes(blockColor) ? blockColor : COLOR[0];

  const checkBlockStyle = STYLES.includes(blockStyle) ? blockStyle : STYLES[0];

  return (
    <>
      <blockquote className={`quote ${checkBlockColor} ${checkBlockStyle}`}>
        {children}
      </blockquote>      
    </>
  );
}

export default Blockquote;