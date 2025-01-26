import './App.css';
import User from './components/User';
import UserDemo from './components/UserDemo';
import Button from './components/Button';
import Post from './components/Post';
import ButtonStyle from './components/ButtonStyle';
import Counter from './components/Counter';

const userDemo = [
  {
    id: 1,
    name: 'tariqul',
    email: 'tariqul@gmail.com',
    age: 17,
  },
  {
    id: 2,
    name: 'shakibul',
    email: 'shakibul@gamil.com',
    age: 17,
  },
];

function App() {
  return (
    <>
      <h2 className="text-4xl text-red-500 border-b-4 pb-1">User ManageMent</h2>

      {/* use number, string, boolean, array */}
      <User name="Tariqul Islam" email="tariqul.developer@gmail.com" age={17} isRegister={true} status="Active" lang={['Bangla', 'English', 'Hindi']} />

      {/* use array of object */}
      <UserDemo users={userDemo} />

      {/* use children props */}
      <Button>Click Me</Button>

      <Post />

      {/* use css style props */}
      <ButtonStyle btnStyle={{ background: 'red', margin: '1rem' }} />

      <Counter />
    </>
  );
}

export default App;
