var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
      complete:{
          type: Boolean,
          default: false
        },
        completeAt:{
            type: Number,
            default: null
          }
        });


module.exports = {Todo};




        //
        // var otherTodo = new Todo({
        //   text: 'My Other Todo',
        //   complete: true,
        //   completeAt: 3
        // });
        //
        // otherTodo.save().then((doc) => {
        //   console.log(JSON.stringify(doc, undefined, 2));
        // }, (e) => {
        //   console.log('Unable to save otherTodo', e);
        // });
