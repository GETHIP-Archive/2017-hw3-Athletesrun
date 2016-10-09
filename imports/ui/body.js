import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
      var tasksArray = Tasks.find({});

      console.log(tasksArray);
      return tasksArray.reverse();
  }
});

Template.body.events({
    'submit .new-task'(event) {

        event.preventDefault();

        console.log(event.target);

        const text = event.target.text.value;

        console.log(text);

        Tasks.insert({
            text: text,
            createdAt: new Date()
        });

        event.target.text.value = '';
    }
});
