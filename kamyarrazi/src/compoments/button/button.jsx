import './button.css'
export const Button = ({text='مقدار پیش فرض', bg ,myclass}) => {
    return (
        <>
            <button className={`btn ${ myclass}`} style={{backgroundColor:bg}}>{text} </button>
        </>
    );
    


};




    




