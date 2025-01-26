// build-in type => string, number, boolean, void, null
// user defined type => object, array, enum, union, any, custom type

// use number, string, boolean, array

type userProps = {
  name: string;
  email: string;
  age: number;
  isRegister?: boolean;
  status: 'Active' | 'InActive' | 'Suspended';
  lang: string[];
};

const User = ({ name, email, age, isRegister = false, status, lang }: userProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Age: {age}</p>
      <p>isRegister: {isRegister === true ? 'Yes' : 'No'}</p>
      <p>Status: {status}</p>

      {lang.map((lang, index) => (
        <span className="font-medium text-lg" key={index}>
          {lang}
        </span>
      ))}
    </div>
  );
};

export default User;
