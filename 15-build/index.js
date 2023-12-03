import {Task} from './task.js';
import {User} from './user.js';

const InstTask = new Task('Got you!');
const InstUser = new User(InstTask);
InstUser.do();