import { FC } from 'react';
import { Grid } from '@mui/material';
import User from '../user/user';
import { IUser } from '../../types/user';

interface UsersListProps {
 users: IUser[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <Grid container spacing={4} columns={12}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default UsersList;
