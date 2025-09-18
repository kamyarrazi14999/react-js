import { Input } from "./input";
import './Form.css';
import { Button } from "./Button";
export const Form= () => {
    return (
        <>
            <h2>فرم ورود</h2>
            <form>
                <Input type="email" label_text="ایمیل را وارد کنید" />
                <Input type="password" label_text="پسورد را وارد کنید" />
                <Button />
            </form>
        </>
    )
};

