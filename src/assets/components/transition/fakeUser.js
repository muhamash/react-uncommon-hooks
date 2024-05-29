import { faker } from '@faker-js/faker';

const THRESHOLD = 10000;

const users = Array.from( Array( THRESHOLD ), () =>
{
    return {
        name: faker.name.fullName(),
        avatar: faker.image.avatar()
    };
} );

export { users as data };
