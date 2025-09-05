import { Button } from "../button/button";
export const Header = ({ptn_login_text , ptn_register_text}) => {
    return(
        <>
            <header >
                <Button text= {ptn_login_text} />
                <Button text= {ptn_register_text} myclass = {'btn-1'} bg={ 'blue'} />
            </header>
        </>


    )
}
