import toDo from './todos.js';
import taskList from './taskList.js';
import {ScreenController} from './UIController.js';
import css from './styles.css';
import {populateStorage} from './appController.js';

import {isDate} from 'date-fns';

populateStorage();