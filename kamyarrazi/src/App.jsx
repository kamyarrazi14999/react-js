import "./App.css";
import { Form } from "./components/form/Form";
import { Input } from "./components/form/Input";

function App() {
  return (
    <>
      <Form title="فرم ورود" btn_text={"ورود به حساب"}>
        <Input type={"email"} label_text={"ایمیل وارد کنید"} />
        <Input type={"password"} label_text={"رمز وارد کنید"} />
      </Form>

      <Form title="فرم ثبت نام" btn_text={"ثبت نام"}>
        <Input type={"email"} label_text={"ایمیل وارد کنید"} />
        <Input type={"password"} label_text={"رمز وارد کنید"} />
        <Input type={"text"} label_text={'نام و نام خانوادگی'} />
        <p> برای ثبت نام داشتن حداقل 18 سال الزامیست</p>
      </Form>
    </>
  );
}

export default App;
