import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsReposotory from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IAppointmentsRepository>(
    'AppointmentsReposotory',
    AppointmentsReposotory,
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

// container.registerSingleton<IUserTokensRepository>(
//     'UsersRepository',
//     UserTokensRepository,
// );
