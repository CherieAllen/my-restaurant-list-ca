import { initializeApp } from "firebase/app";
import { Button, Form, Input } from "antd";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAxoGD5BbJFR6tiv4bXVU8VHVhZ20gx2BU",
  authDomain: "my-first-firestore-ca.firebaseapp.com",
  projectId: "my-first-firestore-ca",
  storageBucket: "my-first-firestore-ca.appspot.com",
  messagingSenderId: "784135143504",
  appId: "1:784135143504:web:e5db75f07921f8ff73d155",
};


export default function Login({setUser}) {
    const handleLogin =({email, password})=> {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth,email,password)
            .then(res => setUser(res.user))
            .catch(console.error)
    }
    const handleGoogleLogin =() => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(res => setUser(res.user))
        .catch(console.error)

    }
  return (
    <section style={{ padding: "2em" }}>
      <Form 
      onFinish={handleLogin}
      labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmltype="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}  type="primary" htmltype="submit">
            Google
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
