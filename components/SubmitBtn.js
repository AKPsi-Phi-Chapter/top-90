export default function SubmitBtn({ hgt, wid, func }) {
    let btnStyle = {
        height: hgt,
        width: wid,
        display: 'block',
    }

    return (
        <button 
            className="bg-bgray text-lg text-white font-bold rounded-md"
            style={btnStyle}
            onClick={func}
        >
            SUBMIT
        </button>
    );
}