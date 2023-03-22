import {useState} from "react";


function OptionButton({ label, color, onClick}) {
    const [style, setStyle] = useState(
        {
                backgroundColor: color,
                color: "white",
                fontFamily: "Arial",
                fontSize: "16px",
                borderRadius: "10px",
                padding: "5px",
                opacity : "0.6",
                margin:"10px",
                cursor: "pointer"

      }
    )
    function highlight(){
        setStyle({...style,
        opacity: "1"
        })
    }

    function unhighlight(){
        setStyle({...style,
        opacity: "0.6"})
    }
  return (
    <div >
      <div style={style}
       onMouseLeave={unhighlight} onMouseOver={highlight}
           onClick={onClick}
      >
      {label}
      </div>
    </div>
  );
}

export default OptionButton;
