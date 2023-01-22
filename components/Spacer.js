export default function Spacer({ hgt, wid }) {
    let spacerStyle = {
        height: hgt,
        width: wid,
        display: 'block',
    }

  return ( 
    <div 
        style={spacerStyle}
    ></div>
  );
}