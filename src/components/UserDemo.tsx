// use array of object

type userProp = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: userProp) => {
  return (
    <div className="border m-6 p-4">
      All users:{users?.length}
      {users.map((user) => (
        <p className="space-y-2" key={user?.id}>
          My name is {user?.name}. My contact email {user?.email}. My age {user?.age}
        </p>
      ))}
    </div>
  );
};

export default UserDemo;
