import { initializeApp } from "firebase/app";
import { Button, Form, Input} from 'antd'


const firebaseConfig = {
  apiKey: "AIzaSyAxoGD5BbJFR6tiv4bXVU8VHVhZ20gx2BU",
  authDomain: "my-first-firestore-ca.firebaseapp.com",
  projectId: "my-first-firestore-ca",
  storageBucket: "my-first-firestore-ca.appspot.com",
  messagingSenderId: "784135143504",
  appId: "1:784135143504:web:e5db75f07921f8ff73d155"
};


const app = initializeApp(firebaseConfig);

export default function Login () {
    return (
        <section style={{padding: '2em'}}> 
        <Form
            labelCol={{span: 8}}
            wrapperCol={{span :16}}
        >
           <Form.Item label ="Email" name="email">
        <Input />
        </Form.Item> 
           <Form.Item label ="Password" name="password">
        <Input.Password />
        </Form.Item> 
        <Form.Item wrapperCol={{span: 16, offset: 8}}>
            <Button type="primary" htmltype='submit'>Login</Button>
        </Form.Item>
        </Form>
        </section>
    )
}