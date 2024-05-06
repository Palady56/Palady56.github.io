import Form from "../Components/form";
import FormField from "../Components/formField";
import ded from '../Images/ded.jpeg'


export default function Contact() {


    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center p-10 gap-10 mt-10 bg-neutral-800" 
        // style={{backgroundImage: `url(${ded})`}}
        >
            <h1 className="flex justify-center items-center text-white">Форма отправки данных</h1>
            <Form buttonText='Отправить'>
                <FormField type='text' id='firstName' name='firstName' label='Имя:'/> 
                <FormField type='email' id='email' name='email' label='Почта:'/> 
                <FormField type='password' id='password' name='password' label='Пароль:'/>
                <FormField type='checkbox' id='access' name='access' label='Соглашение:'/>
            </Form>
        </div>
    )
}